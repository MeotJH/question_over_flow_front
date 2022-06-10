import React, { useCallback } from 'react';
import QuesBody from "body/QuesBody";
import { useDispatch, useSelector } from 'react-redux';
import { setJwt, deleteJwt, hasJwt } from 'body/modules/quesBody';

const QuesBodyContainer = () => {
    const token = useSelector(state => state.quesBody.token);
    const flag = useSelector(state => state.quesBody.flag);

    const dispatch = useDispatch();
    const cntSetJwt = useCallback(token => dispatch(setJwt(token), [dispatch]));
    const cntHasJwt = useCallback(token => dispatch(hasJwt(token), [dispatch]))


    return <QuesBody token={token} flag={flag} setJwt={cntSetJwt} hasJwt={cntHasJwt} deleteJwt={deleteJwt}/>;
}

export default QuesBodyContainer;
