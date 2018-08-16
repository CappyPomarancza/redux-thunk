import React from 'react'
import {
    onEmailChangeAction,
    onPasswordChangeAction,
    onLogInClickAction
} from '../state/auth'
import {connect} from 'react-redux'

const Auth = (props) => (
    <div>
        <div>
            <input
                type='email'
                onChange={props._onEmailChange}
            />
        </div>
        <div>
            <input
                type='password'
                onChange={props._onPasswordChange}
            />
        </div>
        <div>
            <button
                onClick={props._onLogInClick}
            >
                LOGIN!
            </button>
        </div>
    </div>
)

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
    _onEmailChange: event => dispatch(onEmailChangeAction(event.target.value)),
    _onPasswordChange: event => dispatch(onPasswordChangeAction(event.target.value)),
    _onLogInClick: () => dispatch(onLogInClickAction())
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Auth) 