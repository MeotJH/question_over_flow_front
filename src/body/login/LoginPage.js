import React, { useState, useEffect } from "react"
import ModalProp from 'body/reuseable/ModalProp'
import ButtonProp from 'body/reuseable/ButtonProp';

const LoginPage = ({isOpen}) => {

    const [openFlag, setOpenFlag] = useState(false);
    const controlModal = (openFlag) =>{
        setOpenFlag(!openFlag);
    }
    
    return(
        <>
            <ButtonProp 
                selectedColor="dark" 
                btnText="Login"
                onClick={() => controlModal(openFlag)}
            />
            <ModalProp isOpen={openFlag} controlModal={controlModal} ModalTitle="Login"/>
        </>
    )
}

export default LoginPage;