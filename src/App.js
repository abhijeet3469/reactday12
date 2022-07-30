import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Redux from './Components/Redux'
import {Provider} from 'react-redux'
import store from './Store';

store.subscribe(()=>{console.log(store.getState())})

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Redux/>
    </Provider>
    </div>
  );
}

export default App;
