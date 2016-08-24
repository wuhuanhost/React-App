import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import inputApp from './reducers/reducers'
import DevTools from './containers/DevTools'
// import app from '../test';

// 把多个 store 增强器从右到左来组合起来，依次执行
const enhancer = compose(
    DevTools.instrument()
)

let store = createStore(inputApp, enhancer)

render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>,
    document.querySelector("#app")
);
