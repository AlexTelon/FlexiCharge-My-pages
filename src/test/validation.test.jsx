import { render, fireEvent, screen } from "@testing-library/react";
import ValidationForm from "../components/validation";

const values = {
	newPassword: "Hejhej123!",
};

test("Test validation for password", () => {
	render(<ValidationForm />);

	ValidationForm().validate(values.newPassword)

	expect(ValidationForm().msg).toBe("")
});
