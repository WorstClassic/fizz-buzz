import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenericForm from './GenericForm';

const startingString = "It starts this way";
const endingString = "It ends this way";
const manipulationInstructions = "[Home]" +
    "[ArrowRight][ArrowRight][ArrowRight]" +
    "end" +
    "[Delete][Delete][Delete][Delete][Delete]";

const singletonEntry = [{ name: "Input", initValue: startingString }];
const collisionEntry = singletonEntry.concat(singletonEntry, singletonEntry);

const passedNoOpJSON = { "Input": startingString, "Input5": startingString, "Input56": startingString };

const arbitraryCall = jest.fn();

beforeEach(() => {
    arbitraryCall.mockClear();
});

test("displays a singleton entry", () => {
    render(<GenericForm formSource={singletonEntry} submitAction={arbitraryCall} />);
    expect(screen.getByText("Input:")).toBeInTheDocument();
    expect(screen.getByTestId("Input")).toHaveDisplayValue(startingString);
});

test("Updates an entry", async () => {
    const user = userEvent.setup();
    render(<GenericForm formSource={singletonEntry} submitAction={arbitraryCall} />);
    expect(screen.getByText("Input:")).toBeInTheDocument();
    const inputField = await screen.findByTestId("Input");
    expect(inputField).toHaveDisplayValue(startingString);
    await user.click(inputField);
    await user.keyboard(manipulationInstructions);
    await waitFor(() => expect(inputField).toHaveDisplayValue(endingString));
});

test("Correctly handles malformed passed names", () => {
    render(<GenericForm formSource={collisionEntry} submitAction={arbitraryCall} />);
    expect(screen.getByText("Input:")).toBeInTheDocument();
    expect(screen.getByTestId("Input")).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input5:")).toBeInTheDocument();
    expect(screen.getByTestId("Input5")).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input56:")).toBeInTheDocument();
    expect(screen.getByTestId("Input56")).toHaveDisplayValue(startingString);
});
test("Correctly handles multiple input fields", async () => {
    const user = userEvent.setup();
    render(<GenericForm formSource={collisionEntry} submitAction={arbitraryCall} />);
    expect(screen.getByText("Input:")).toBeInTheDocument();
    const input1 = await screen.findByTestId("Input");
    expect(input1).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input5:")).toBeInTheDocument();
    const input2 = await screen.findByTestId("Input5");
    expect(input2).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input56:")).toBeInTheDocument();
    const input3 = await screen.findByTestId("Input56");
    expect(input3).toHaveDisplayValue(startingString);

    await user.click(input1);
    await user.keyboard("[ControlLeft>]a[/ControlLeft][Delete]");
    await user.click(input2);
    await user.keyboard(manipulationInstructions);
    await user.click(input3);
    const append = " until it stops being useful."
    await user.keyboard(append);

    await waitFor(() => expect(input1).toHaveDisplayValue(""));
    await waitFor(() => expect(input2).toHaveDisplayValue(endingString));
    await waitFor(() => expect(input3).toHaveDisplayValue(startingString.concat(append)));
});
test("Correctly handles invalid passed Entry", () => {
    const malformedEntry = { "name ": "This should not find a value for name" };
    render(<GenericForm
        formSource={singletonEntry.concat(
            malformedEntry, singletonEntry, malformedEntry, singletonEntry)}
        submitAction={arbitraryCall}
    />);
    expect(screen.getByText("Input:")).toBeInTheDocument();
    expect(screen.getByTestId("Input")).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input5:")).toBeInTheDocument();
    expect(screen.getByTestId("Input5")).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input56:")).toBeInTheDocument();
    expect(screen.getByTestId("Input56")).toHaveDisplayValue(startingString);
    expect(screen.queryByTestId("This should not find a value for name")).not.toBeInTheDocument();
});
test("correctly alters submit button text", () => {
    const alternateText = "Something Different";
    render(<GenericForm 
        formSource={singletonEntry} 
        submitText={alternateText} 
        submitAction={arbitraryCall} />);
    expect(screen.getByText(alternateText)).toBeInTheDocument();
});
test("correctly calls submitAction on Click", async () => {
    const user = userEvent.setup();
    render(
        <GenericForm
            formSource={collisionEntry}
            submitText="Unique"
            submitAction={arbitraryCall}
        />);
    const submitButton = screen.getByText("Unique");

    expect(screen.getByText("Input:")).toBeInTheDocument();
    const input1 = await screen.findByTestId("Input");
    expect(input1).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input5:")).toBeInTheDocument();
    const input2 = await screen.findByTestId("Input5");
    expect(input2).toHaveDisplayValue(startingString);

    await user.click(submitButton);

    await waitFor(() => expect(arbitraryCall).toBeCalledTimes(1));
    expect(arbitraryCall).lastCalledWith(passedNoOpJSON);
});

test("correctly calls submitAction on Click And Takes Updates", async () => {
    const user = userEvent.setup();
    render(
        <GenericForm
            formSource={collisionEntry}
            submitText="Unique"
            submitAction={arbitraryCall}
        />);
    const submitButton = screen.getByText("Unique");

    expect(screen.getByText("Input:")).toBeInTheDocument();
    const input1 = await screen.findByTestId("Input");
    expect(input1).toHaveDisplayValue(startingString);
    expect(screen.getByText("Input5:")).toBeInTheDocument();
    const input2 = await screen.findByTestId("Input5");
    expect(input2).toHaveDisplayValue(startingString);

    await user.click(submitButton);

    await waitFor(() => expect(arbitraryCall).toBeCalledTimes(1));
    expect(arbitraryCall).lastCalledWith(passedNoOpJSON);

    await user.click(input2);
    await user.keyboard(manipulationInstructions);
    await user.click(submitButton);

    await waitFor(() => expect(arbitraryCall).toBeCalledTimes(2));
    expect(arbitraryCall).lastCalledWith({ "Input": startingString, "Input5": endingString, "Input56": startingString });
});