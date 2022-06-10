import React from "react"
import ButtonProp from 'body/reuseable/ButtonProp';

const LoginUserPage = ({flag, deleteJwt}) => {

    console.info(flag, deleteJwt);

    const logout = () => {
        deleteJwt();
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

export default LoginUserPage;