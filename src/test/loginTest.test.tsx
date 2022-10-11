import { checkLogin } from "../components/pageValidation/loginValidation";

let initialFormValues = {
    username: "",
    password: "",
};


describe("testing username and password empty string", () =>{
    const loginErrors = checkLogin(initialFormValues)
    test("username test", () => {
        expect(loginErrors.username).toEqual("This field is required.");
     });
    
    test("password test", () => {
        expect(loginErrors.password).toEqual("This field is required.");
     });
    
})

describe("testing username and password valid string", () =>{
    initialFormValues.username="Hej32@his.com"
    initialFormValues.password="notEmpty"
    const loginErrors = checkLogin(initialFormValues)
    test("username test", () => {
        expect(loginErrors.username).toEqual("");
     });
    
    test("password test", () => {
        expect(loginErrors.password).toEqual("");
     });
    
})
