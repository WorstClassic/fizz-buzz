import { render, screen } from '@testing-library/react';
import FizzBuzzEntryList from './FizzBuzzEntryList';

describe("Tests where we gin up session storage", () => {
    const sessionStorageKeys = ["0", "1", "2"];
    beforeEach(() => {
        sessionStorage.clear();
        sessionStorage.setItem("0", '{' +
            '"Name": "Some Name",' +
            '"Gender": "Some Gender",' +
            '"Marital Status": "Some Marital Status",' +
            '"Date of Birth": "Some Date of Birth",' +
            '"An Arbitrary Integer": "0"' +
            '}');
        sessionStorage.setItem("1", '{' +
            '"Name": "My Name",' +
            '"Gender": "My Gender",' +
            '"Marital Status": "My Marital Status",' +
            '"Date of Birth": "My Date of Birth",' +
            '"An Arbitrary Integer": "3"' +
            '}');
        sessionStorage.setItem("2", '{' +
            '"Name": "Text input",' +
            '"Gender": "Dropdown input?",' +
            '"Marital Status": "Radial input?",' +
            '"Date of Birth": "I think most browsers support a date input now.",' +
            '"An Arbitrary Integer": "5"' +
            '}');
    });
    afterAll(() => {
        sessionStorage.clear();
    });
    test("Displays entries", () => {
        render(<FizzBuzzEntryList sessionStorageKeys={sessionStorageKeys} />);
        const entriesRootNodeArray = screen.getAllByTestId(/^entry-\d$/);
        expect(entriesRootNodeArray).toHaveLength(3);
    });
    test("Ignores entries that do not parse", () => {
        sessionStorage.setItem("1", "}][[]]{");
        render(<FizzBuzzEntryList sessionStorageKeys={sessionStorageKeys} />);
        const entriesRootNodeArray = screen.getAllByTestId(/^entry-\d$/);
        expect(entriesRootNodeArray).toHaveLength(2);
    });
    test("unexpected exception thrown by JSON.parse", () => {
        jest.spyOn(JSON, 'parse').mockImplementationOnce(
            () => {
                throw new Error('For Testing');
            });
        render(<FizzBuzzEntryList sessionStorageKeys={sessionStorageKeys} />);
        const entriesRootNodeArray = screen.getAllByTestId(/^entry-\d$/);
        expect(entriesRootNodeArray).toHaveLength(2);
        jest.clearAllMocks();
    })
});