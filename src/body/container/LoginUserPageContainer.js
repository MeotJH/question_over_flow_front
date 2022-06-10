import React, { useCallback } from 'react';
import LoginUserPage from 'body/login/LoginUserPage'
import { useDispatch, useSelector } from 'react-redux';
import { deleteJwt } from 'body/modules/quesBody';

const LoginUserPageContainer = () => {

    const flag = useSelector(state => state.quesBody.flag );

    const dispatch = useDispatch();
    const cntDeleteJwt = useCallback( () => dispatch(deleteJwt(), [dispatch]));

    return <LoginUserPage flag={flag} deleteJwt={cntDeleteJwt}/>;

}

export default LoginUserPageContainer;
