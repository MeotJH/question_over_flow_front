const SET_JWT = 'quesBody/SET_JWT';
const DELETE_JWT = 'quesBody/DELETE_JWT';
const HAS_JWT = 'quesBody/HAS_JWT';

export const setJwt = token => ({ type: SET_JWT, token });
export const deleteJwt = token => ({ type: DELETE_JWT, token });
export const hasJwt = token => ({ type: HAS_JWT, token });

const initialState = {
    token : null,
    flag : false,
};

function setter( state = initialState , action ) {
    switch (action.type){
        case SET_JWT:
        return {
            ...state,
            token : action.token,
        }
        case DELETE_JWT:
            console.info(action,'action');
        return {
            ...state,
            token : null,
            flag: false
        }
        case HAS_JWT:
        return{
            ...state,
            flag : action.token == null ? false : true 
        };
        default:
            return state;
    }
}

export default setter;