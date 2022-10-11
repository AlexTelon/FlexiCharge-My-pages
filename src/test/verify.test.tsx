import { checkVerifyValidation } from "../components/pageValidation/verifyValidation";

let initialFormValues = {
    username: "",
    verifyCode: "",
};


describe("testing username and verify empty string", () =>{
    const forgotPasswordErrors = checkVerifyValidation(initialFormValues)
    test("username test", () => {
        expect(forgotPasswordErrors.username).toEqual("This field is required.");
    });

    test("verify test", () => {
        expect(forgotPasswordErrors.verifyCode).toEqual("Code is a 6 digit number that was sent to your email.");
    });
    
})

describe("testing username and verify code valid string", () =>{
    initialFormValues.username = "flexi@char.ge"
    initialFormValues.verifyCode = "23563"

    const forgotPasswordErrors = checkVerifyValidation(initialFormValues)

    test("username test", () => {
        expect(forgotPasswordErrors.username).toEqual("");
    });
    
    test("verify test", () => {
        expect(forgotPasswordErrors.verifyCode).toEqual("");
    });
    
})

describe("testing username not valid string", () =>{
    initialFormValues.username = "flexicharge"

    const forgotPasswordErrors = checkVerifyValidation(initialFormValues)
    test("username test", () => {
        expect(forgotPasswordErrors.username).toEqual("Email is not valid.");
     });
    
})