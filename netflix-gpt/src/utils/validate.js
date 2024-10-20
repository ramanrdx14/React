const checkValidData = (Email,Password)=>{
    const isEmailValid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(Password);
    if(isEmailValid == true && isPasswordValid){
        return null;
    }

    if(!isEmailValid){
        return "Email is Not valid";
    }

    if(!isPasswordValid){
        return "Password is Not valid";
    }
}
export default checkValidData;