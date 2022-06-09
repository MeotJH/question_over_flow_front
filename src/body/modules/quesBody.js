const JWT_SETTER = 'quesBody/JWT_SETTER';

export const jwtSetter = () => ({ type: JWT_SETTER })

const initialState = {
    token : null
};

function setter( state = initialState , action) {
    switch (action.type){
        case JWT_SETTER:
        return {
            token : state.token+1
        };
        default:
            return state;
    }
}

export default setter;