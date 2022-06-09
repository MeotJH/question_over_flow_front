import React, {useState} from "react";
import google from "img/btn_google_signin_light_normal_web.png"
import { Modal, ModalHeader,ModalBody,ModalFooter,Button  } from 'reactstrap';
import axios from "axios";

const ModalProp = ({isOpen, controlModal,ModalTitle}) => {

    const goGoogleLogin = () => {
        window.location.assign("http://localhost:81/oauth2/authorization/google");
    }

    
    return(
        <Modal
            toggle={function noRefCheck(){}}
            isOpen={isOpen}
        >
            <ModalHeader toggle={() => controlModal(isOpen)}>
            {ModalTitle}
            </ModalHeader>
            <ModalBody>
            소셜 계정으로 로그인
            <img src={ google } alt="Google Login" onClick={goGoogleLogin}/>
            </ModalBody>
            <ModalFooter>
            <Button
                color="primary"
                onClick={function noRefCheck(){}}
            >
                Do Something
            </Button>
            {' '}
            <Button onClick={() => controlModal(isOpen)}>
                Cancel
            </Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalProp;