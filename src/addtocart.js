import{useEffect, useState,useContext} from "react";
import { globalContext } from "./App";
function Addtocart(){
    const [count, setCount]=useState(0)
    const {globalCount,setGlobalCount} = useContext(globalContext)
    const btnincrementCount =()=> {
        setCount(count+1);
        setGlobalCount(globalCount+1);
    }
    const btndecrementCount =()=> {
        setCount(count-1);
        setGlobalCount(globalCount-1);
    }
   
    return(
        <div>
            {count===0?
            <button type="button" class="btn btn-success" onClick={btnincrementCount}>Add to Cart</button>:
            <div style={{display:'flex',flexWrap:'wrap', marginTop:'10px',marginLeft:'20px'}}>
            <button type="button" className="btn btn-outline-dark" onClick={btndecrementCount} >-</button>
            <h1 style={{margin:'0 10px'}}>{count}</h1>
            <button type="button" className="btn btn-outline-dark" onClick={btnincrementCount} >+</button>
            </div>
            }
        </div>
    )
}
export default Addtocart;