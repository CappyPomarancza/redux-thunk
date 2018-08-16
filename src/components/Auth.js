import React from 'react'
import {
    onEmailChangeAction,
    onPasswordChangeAction,
    onLogInClickAction,
    logOutAction
} from '../state/auth'
import { connect } from 'react-redux'
import LogInByEmailAndPassword from './LogInByEmailAndPassword';

const Auth = (props) => (
    props._user ?
        <div>
            <button
                onClick={props._onLogOutClick}
            >LOG OUT!</button>

            {props.children}
        </div>
        :
        <div>
            <LogInByEmailAndPassword
                emailValue={props._emailValue}
                onEmailChange={props._onEmailChange}
                onPasswordChange={props._onPasswordChange}
                onLogInClick={props._onLogInClick}
            />
        </div>
)

const mapStateToProps = state => ({
    _user: state.auth.user,
    _emailValue: state.auth.email,
    _passwordValue: state.auth.password
})
const mapDispatchToProps = dispatch => ({
    _onEmailChange: event => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChange: event => dispatch(onPasswordChangeAction(event.target.value)),
    _onLogInClick: () => dispatch(onLogInClickAction()),
    _onLogOutClick: () => dispatch(logOutAction())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Auth) 