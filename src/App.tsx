import React from 'react';
import { Provider } from 'react-redux';
import store from './1store/store';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
