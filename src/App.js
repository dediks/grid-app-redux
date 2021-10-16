import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import store from './app/store';
import Grid from './components/Grid';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
