
import { Provider } from 'react-redux';
import './App.css';

import HomeContainer from './redux/HomeContainer';
import store from './redux/store';
import { BrowserRouter as Router,Route} from "react-router-dom";



function App() {
  return (
    <Router>
    <Provider store={store}>
    <div className="App">
    <HomeContainer/>
  
    </div>
    </Provider>
    </Router>
  );
}

export default App;
