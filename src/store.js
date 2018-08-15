import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import fetchUsers from '../src/state/fetchUsers'


const reducer = combineReducers({
    fetchUsers
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk)
    )
)


