import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import fetchUsers, { fetchUsersAction } from '../src/state/fetchUsers'
import auth from './state/auth'
import {initAuthStateListening} from '../src/state/auth'


const reducer = combineReducers({
    fetchUsers : fetchUsers,
    auth: auth
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)
store.dispatch(initAuthStateListening())

