import { render, screen } from '@testing-library/react';
import FizzBuzzEntry from './FizzBuzzEntry';

const fizzBuzzIntegerLookup = 'An Arbitrary Integer';
const genericFizzBuzzObject = {
    Name: "Some Name",
    Gender: "Some Gender",
    "Marital Status": "Some Marital Status",
    "Date of Birth": "Some Date of Birth",
};

test("Entry displays generic fizzbuzz object", () => {
    const ourObject = { [fizzBuzzIntegerLookup]: "0", ...genericFizzBuzzObject };
    render(<FizzBuzzEntry index='0' fizzBuzzObject={ourObject} />);
    expect(screen.getByText('FizzBuzz? = fizzbuzz')).toBeInTheDocument();
    expect(screen.getByText('Name has value Some Name')).toBeInTheDocument();
    expect(screen.getByText('Gender has value Some Gender')).toBeInTheDocument();
    expect(screen.getByText('Marital Status has value Some Marital Status')).toBeInTheDocument();
    expect(screen.getByText('Date of Birth has value Some Date of Birth')).toBeInTheDocument();
});

test("Entry is under-defined", () => {
    const underdefinedObject = { Attribute: "Some Attribute" };
    render(<FizzBuzzEntry index='0' fizzBuzzObject={
        { [fizzBuzzIntegerLookup]: '5', ...underdefinedObject }
    } />);
    expect(screen.getByText('FizzBuzz? = buzz')).toBeInTheDocument();
    expect(screen.getByText('Attribute has value Some Attribute')).toBeInTheDocument();
});