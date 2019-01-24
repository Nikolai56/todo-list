import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const persistConfig = {
    // blacklist: ['todos', 'idCounter'],
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* eslint-disable no-underscore-dangle */
const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

let persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
