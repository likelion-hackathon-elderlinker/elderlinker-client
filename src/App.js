import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";
import GlobalStyle from "./assets/GlobalStyle";
import Routes from "./routes";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <div className="App">{Routes()}</div>
        </Provider>
    );
}

export default App;
