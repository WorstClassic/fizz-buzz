import { render, screen, waitFor } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { RemoteDataService } from '../../RemoteDataService/RemoteDataService';
import InputPage from './InputPage';
import { createMemoryHistory } from 'history';

const DEFAULT_SUBMIT = "Click and Be Judged!";
// const wrapInBrowserRouter = (children) => {
//     const history = createMemoryHistory();
//     return render((<BrowserRouter  >{children}</BrowserRouter>));
// };

test("renders without issues", () => {
    render(<InputPage />, { wrapper: MemoryRouter })
    expect(screen.getByText(DEFAULT_SUBMIT)).toBeInTheDocument();
});
describe("mocks simpler input params", () => {
    beforeEach(() => {
        jest.spyOn(RemoteDataService, "getInputParams").mockImplementation(() => {
            return [
                {
                    name: 'Name',
                    initValue: 'The Author'
                },
                {
                    name: 'Marital Status',
                    initValue: 'married'
                },
                {
                    name: 'An Arbitrary Integer',
                    initValue: '0'
                }
            ];
        });
    })
    afterEach(() => {
        jest.clearAllMocks();
    });
    test("renders with passed-in defaults", async () => {
        render(<InputPage />, { wrapper: MemoryRouter });
        expect(screen.getByText(DEFAULT_SUBMIT)).toBeInTheDocument();
        const fizzbuzzInput = await screen.findByDisplayValue('0');
        const marriedInput = await screen.findByDisplayValue('married');
        const nameInput = await screen.findByDisplayValue('The Author');
        expect(fizzbuzzInput).toBeInTheDocument();
        expect(marriedInput).toBeInTheDocument();
        expect(nameInput).toBeInTheDocument();
    });
    test("submits passed-in defaults", async () => {
        const user = userEvent.setup();
        const history = createMemoryHistory();
        render(<Router location={history.location} navigator={history} >
            <InputPage />
        </Router>);
        const submitButton = screen.getByText(DEFAULT_SUBMIT);
        expect(submitButton).toBeInTheDocument();
        user.click(submitButton);
        await waitFor(() => { expect(history.location.pathname).toBe("/review/fizzbuzz") });
    });
});