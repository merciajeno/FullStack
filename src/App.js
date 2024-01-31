
import './App.css';
import { Component } from 'react';
// import Something from './components/FirstClass'
// import FourthClass from './components/FourthClass';
// import Learn from './components/LearnJavaScript';
// import Counter from './components/counter/Counter';
import Todo from './components/Todo/TodoApp';
function App() {
  return (
    <div className="App">
     
     <Todo />
    </div>
  );
}

class ThirdComponent extends Component{
  render(){
    return(
      <div>Third component</div>
    )
  }
}




export default App;

