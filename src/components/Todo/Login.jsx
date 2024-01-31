import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login()
{
    const[userName,setUserName] = useState('')
    const[password,setPassword] = useState('')
    const[success,showSuccess] = useState(false)
    const[error,showError] = useState(false)
    const navigate = useNavigate()

     function changeUserName(event)
     {
        
        setUserName(event.target.value)
     }

     function changePassword(event)
     {
       
        setPassword(event.target.value)
     }

    

     function handleSubmission()
     {
        if(userName==="Mercia" && password==="dummy")
        {
            showError(false)
            showSuccess(true)
            navigate(`/welcome/${userName}`)
        }
        else{
            showError(true)
            showSuccess(false)
        }
     }
    return(

       <div className="Login">
        <div className="LoginForm">
            {/* true&& something == something */}
            {success && <div>Successfully verified</div>} 
           
            {error &&  <div>Authentication failed .Please enter the credentials</div> }
          <div>
            <label >UserName:</label>
            <input type="text" name="username" value={userName} onChange={changeUserName}/>
          </div>

          <div>
            <label htmlFor="">Password:</label>
            <input type="password" name="password" value={password} onChange={changePassword}/>
          </div>

          <div>
            <button onClick={handleSubmission}>Login</button>
          </div>
        </div>
       </div>
    )
}

export default Login





