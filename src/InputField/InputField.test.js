import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from './InputField';

test('loads field fully-defined', () => {
    const nameString = "NotDefault";
    const titleString = "We filled all of the fields";
    const valueString = "This won't change";
    render(<InputField
        name={nameString}
        title={titleString}
        value={valueString}
        changeCall={() => { }}
    />);
    const rootDiv = screen.getByText(titleString);
    const inputElement = screen.getByTestId(nameString);
    expect(rootDiv).toBeInTheDocument();
    expect(inputElement).toHaveDisplayValue(valueString);
});

test('loads defaults correctly', () => {
    const nameString = "NotDefault";
    const valueString = "This won't change";
    render(<InputField
        name={nameString}
        value={valueString}
        changeCall={() => { }}
    />);
    const titleDiv = screen.getByTestId(`title-${nameString}`);
    expect(titleDiv).toBeInTheDocument();
    expect(titleDiv).toHaveTextContent('');
});

test('correctly updates using hook and calls', async () => {
    const user = userEvent.setup();
    const startingString = "It starts this way";
    const manipulationInstructions = "!!!";
    const arbitraryCall = jest.fn();

    render(<InputField
        name={"Name"}
        value={startingString}
        changeCall={arbitraryCall}
    />);
    const input = await screen.findByTestId("Name");
    expect(input).toHaveDisplayValue(startingString);
    await user.click(input);
    await user.keyboard(manipulationInstructions);
    await waitFor(() => expect(arbitraryCall).toBeCalledTimes(3));
    jest.clearAllMocks();
});