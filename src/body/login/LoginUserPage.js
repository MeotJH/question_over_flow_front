import React, { useState } from "react"
import ButtonProp from 'body/reuseable/ButtonProp';
import { deleteToken } from "body/common/jwt";

const LoginPage = ({flag,setFlag}) => {

    const logout = () => {
        deleteToken();
        setFlag(!flag);
    }
    
    return(
        <>
            <ButtonProp 
                selectedColor="dark" 
                btnText="Logout"
                onClick={() => logout()}
            />
        </>
    )
}

export default LoginPage;