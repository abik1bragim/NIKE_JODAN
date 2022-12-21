import './App.css';
import Advertising from './components/Advertising';
import Gifts from './components/Gifts';
import Main from './components/Main';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Advertising />
      <Main />
      <Gifts />
      <Main2 />
      <Main3 />

    </div>
  );
}

export default App;
