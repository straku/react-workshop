import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger({ duration: true })

import reducer from './reducers'

export default createStore(reducer, applyMiddleware(thunk, logger))
