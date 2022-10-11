
export const isEmpty = (initialValues: Object) => {
    var missingValues = [];
    for (const [key, value] of Object.entries(initialValues)) {
        if (value.length < 1) {
        missingValues.push("missing");
        }
    }
    return missingValues.length ? true : false;
};

export const checkValidate= (fieldValues:any) =>{
  
    let temp = {
        username: "",
        password: "",
        verifyCode: "",
    };
      
    if ("username" in fieldValues) {
        temp.username = fieldValues.username ? "" : "This field is required.";
        if (fieldValues.username) {
          temp.username = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(fieldValues.username)
            ? ""
            : "Email is not valid.";
        }
    }

    if ("password" in fieldValues)
        temp.password = fieldValues.password ? "" : "This field is required.";

    if ("verifyCode" in fieldValues) {
        temp.verifyCode = fieldValues.verifyCode
            ? ""
            : "Code is a 6 digit number that was sent to your email.";
    }
  
    return temp
    
}