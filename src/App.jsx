import React, {StrictMode} from 'react';
import {Provider} from "react-redux";
import PropType from 'prop-types';
import {AppRouter} from "./routers/AppRouter";

const App = ({store}) => (
  <StrictMode>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  </StrictMode>
)

App.propTypes = {
  store: PropType.any.isRequired
}

export default App;
