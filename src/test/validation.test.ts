import { render, fireEvent, screen } from "@testing-library/react";
import { ValidationForm } from "../components/validation";

const values = {
	firstName: "Åsa"
}

test("Test firstname", () => {
	ValidationForm().validate(values.firstName)
	expect(ValidationForm().msg).toBe("")
});