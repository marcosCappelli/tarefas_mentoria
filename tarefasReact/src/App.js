
import './App.css';
import AnotherComponent from './components/AnotherComponent';
import Container from './components/Container';
import FirstComponent from './components/FirstComponent';
import Fragment from './components/Fragment';
import Hooks from './components/Hooks';
import Images from './components/images';
import List from './components/List';
import RenderCond from './components/RenderCond';



function App() {
  return (
    <div className="App">
     <h2>Testando React</h2>
     <FirstComponent />
     <AnotherComponent />
     <Images />
     <Hooks />
     <List />
     <RenderCond x = {3} y = {10}/>
     <Fragment />
     <Container>
       <h1>Esse é filho do container!!!!!!!!!!!!!</h1>
     </Container>
    </div>
  );
}

export default App;
