
const EMAIL_CHANGE = 'auth/EMAIL_CHANGE'
const PASSWORD_CHANGE = 'auth/PASSWORD_CHANGE'
const SET_USER = 'auth/SET_USER'

export const onEmailChangeAction = (value) => (
    {
        type: EMAIL_CHANGE,
        value
    }
)
export const onPasswordChangeAction = (value) => (
    {
        type: PASSWORD_CHANGE,
        value
    }
)
export const onLogInClickAction =() =>  (dispatch, getState) => (
    {
        type: SET_USER
    }
)




const initialState = {
    email: '',
    password: '',
    user: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGE:
            return {
                ...state,
                email: action.value
            }
        case PASSWORD_CHANGE:
            return {
                ...state,
                password: action.value
            }
        case SET_USER:
            return {
                ...state,

            }
        default:
            return state
    }
}