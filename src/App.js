import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

// redux

import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./redux/reducers";
import { Provider } from "react-redux";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Main />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
