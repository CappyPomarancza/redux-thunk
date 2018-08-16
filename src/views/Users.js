import React from 'react'
import { connect } from 'react-redux'

const Users = (props) => (
    <div>
        {
            props._isUsersAreLoading ?
                'LOADING USERS...' :
            
               props._users ? props._users.results.map(user => (
                    <div>
                        {user.name.first}
                        <div>
                        <img src={user.picture.thumbnail} />
                        </div>
                    </div>
                ))
                :
                'NO USERS!'
        }


    </div>
)



const mapStateToProps = state => ({
    _users: state.fetchUsers.users,
    _isUsersAreLoading: state.fetchUsers.isUsersAreLoading
})
const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Users) 