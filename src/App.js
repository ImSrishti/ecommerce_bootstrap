
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter ,Route} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div>
    <Route path='/' exact ><Home/></Route>
    <Route path='/cart'  ><Cart/></Route>

    </div>
    </BrowserRouter>
  );
}

export default App;
