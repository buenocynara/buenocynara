import React from "react";
import Main from "./components/Main";

import "./App.css";

// redux

import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./redux/reducers";
import { Provider } from "react-redux";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
      <Provider store={store}>
        <Main />
      </Provider>
  );
}

export default App;
