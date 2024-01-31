
import './TodoApp.css' ;
import Login from "./Login";
import HeaderComponent from "./Header";
import LogoutComponent from "./Logout";
import FooterComponent from "./Footer";
import TodoComponent from "./TodoList";
import ErrorComponent from "./Error";
import WelcomeComponent from "./Welcome";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function Todo()
{
    return (
      <>
      
    <BrowserRouter>
    <HeaderComponent />
      <Routes>
      <Route path='/todos' element={ <TodoComponent /> }></Route>
        <Route path='/' element = { <StartingPage />  }></Route>
        <Route path='/login' element = { <Login />  }></Route>
         <Route path='/welcome/:username' element = {  <WelcomeComponent /> }></Route>
         <Route path='/logout' element={ <LogoutComponent /> }></Route>
        
         <Route path='*' element={ <ErrorComponent /> }></Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
     
      </>
    )
}
function StartingPage()
{
  return(
    <>
    <div>Todo Management</div>
    </>
  )
}

