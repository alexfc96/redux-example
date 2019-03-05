import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import OtroCounter from './components/OtroCounter';

import counter from './reducers/counter';

const store = createStore(counter);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
          <OtroCounter />
        </div>
      </Provider>
    );
  }
}

export default App;
