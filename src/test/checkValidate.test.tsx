import {checkValidate} from "../components/pageValidation/checkValidate"

let initialFormValues = {
    username: "",
    password: "",
    verifyCode: "",
};


describe("Testing empty string", () =>{

    const checkErrors = checkValidate(initialFormValues)

    test("username test", () => {
        expect(checkErrors.username).toEqual("This field is required.");
    });
    
    test("password test", () => {
        expect(checkErrors.password).toEqual("This field is required.");
     });

    test("verify test", () => {
        expect(checkErrors.verifyCode).toEqual("Code is a 6 digit number that was sent to your email.");
    });
    
})

describe("Testing valid string", () =>{

    initialFormValues.username = "flexi@char.ge"
    initialFormValues.password="notEmpty"
    initialFormValues.verifyCode = "23563"

    const checkErrors = checkValidate(initialFormValues)
    
    test("username test", () => {
        expect(checkErrors.username).toEqual("");
     });
    
    test("password test", () => {
        expect(checkErrors.password).toEqual("");
     });
    
    test("verify test", () => {
        expect(checkErrors.verifyCode).toEqual("");
    });
})

describe("Testing not valid string", () =>{

    initialFormValues.username = "flexicharge"

    const checkErrors = checkValidate(initialFormValues)

    test("username test", () => {
        expect(checkErrors.username).toEqual("Email is not valid.");
    });
    
})