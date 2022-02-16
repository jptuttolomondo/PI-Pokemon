import { AppRouter } from './router/router'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import './App.css';


function App() {
  return (      
     <Provider store={store}>

    <div className="App">
      <h1>Pokemons -Juan Pablo Tuttolomondo</h1>
 
    </div>
    <AppRouter/>

    </Provider>
  );
}

export default App;


