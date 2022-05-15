import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import List from './Component/List';

function App(props) {
  return (
    <>
      {props.children}
    </>
  )
}

export default App;
