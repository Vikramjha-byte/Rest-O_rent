import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import { ConfigureStore } from "./redux/configureStore";
import { Provider } from "react-redux";
const store = ConfigureStore();
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <MainComponent />
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
