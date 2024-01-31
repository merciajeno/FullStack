import { useState } from "react"
import {PropTypes} from 'prop-types'
import './counter.css'

export default function Counter()
{
    const [count,setCount] = useState(0)

    function incrementCounterParentFunction(by)
    {
        setCount(count+by)
    }

    function decrementCounterParentFunction(by)
    {
        setCount(count-by)
    }
    
    function reset()
    {
        setCount(0)
    }
    return(
        <div className="parent">
        <span className="totalCount">{count}</span>
         <CounterFunction by={1} incrementMethod={incrementCounterParentFunction}  decrementMethod={decrementCounterParentFunction}/>
         <CounterFunction by={2} incrementMethod={incrementCounterParentFunction}  decrementMethod={decrementCounterParentFunction}/>
          <CounterFunction by={5} incrementMethod={incrementCounterParentFunction}  decrementMethod={decrementCounterParentFunction}/>
          <button  className = "Reset" onClick={reset}>Reset</button>
        </div>
    )
}


 function CounterFunction({by,incrementMethod,decrementMethod})
{

   
  

    return(
       
        <div className="Counter">
            
            <div>
            <button onClick={()=>incrementMethod(by)} className="buttonStyle">+{by}</button>
            <button onClick={()=>decrementMethod(by)} className="buttonStyle">-{by}</button>
            </div>
        
        </div>
      
        
    )
}

CounterFunction.propTypes= {
     by:PropTypes.number
}



