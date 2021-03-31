import {createStore,applyMiddleware, compose} from'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import {ActionType} from './action-types'


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, {},composeEnhancers(applyMiddleware(thunk)))
//export const store = createStore(reducers, {},applyMiddleware(thunk))

store.dispatch({ 
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {id:null,type:'text'}
})
store.dispatch({ 
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {id:null,type:'code'}
})
