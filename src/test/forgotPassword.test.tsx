import { checkForgotPassword } from "../components/pageValidation/forgotPasswordValidation";

let initialFormValues = {
    username: "",
};


describe("testing username empty string", () =>{
    const usernameErrors = checkForgotPassword(initialFormValues)
    test("username test", () => {
        expect(usernameErrors.username).toEqual("This field is required.");
     });
    
})

describe("testing username valid string", () =>{
    initialFormValues.username = "flexi@char.ge"
    const usernameErrors = checkForgotPassword(initialFormValues)
    test("username test", () => {
        expect(usernameErrors.username).toEqual("");
     });
    
})

describe("testing username not valid string", () =>{
    initialFormValues.username = "flexicharge"
    const usernameErrors = checkForgotPassword(initialFormValues)
    test("username test", () => {
        expect(usernameErrors.username).toEqual("Email is not valid.");
     });
    
})