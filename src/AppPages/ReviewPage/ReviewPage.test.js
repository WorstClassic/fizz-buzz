import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ReviewPage from './ReviewPage';

const STACK_PTR = "stack_ptr";
describe("Gin up a minimum session storage", () => {
    beforeEach(() => {
        sessionStorage.clear();
        sessionStorage.setItem(STACK_PTR, "1");
        sessionStorage.setItem("0", '{' +
            '"Name": "Some Name",' +
            '"Gender": "Some Gender",' +
            '"Marital Status": "Some Marital Status",' +
            '"Date of Birth": "Some Date of Birth",' +
            '"An Arbitrary Integer": "0"' +
            '}');
    });
    afterAll(() => {
        sessionStorage.clear();
    });
    test("It renders with no problems", () => {
        render(<ReviewPage />,{ wrapper: MemoryRouter });
        expect(screen.getByText('More Entries!')).toBeInTheDocument();
        expect(screen.getByText(/fizzbuzz$/)).toBeInTheDocument();
    });
});

describe("Is robust to missing data", ()=>{
    afterAll(()=>{
        sessionStorage.clear();
    })
    test("session storage is empty", ()=>{
        sessionStorage.clear();
        render(<ReviewPage />,{ wrapper: MemoryRouter });
        expect(screen.getByText('More Entries!')).toBeInTheDocument();
    })
});