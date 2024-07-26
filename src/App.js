import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Tabfun from "./Tabfun";
import Products from "./products";
import ReviewInput from "./review2";
import Welcome from "./Welcome";
import Home from "./Home";
import Profile from "./profile";
import { useState,createContext } from "react";
export const globalContext = createContext(); //create context
function App(){
    const [globalCount,setGlobalCount] = useState(0);
    const [globalUserObject,setGlobalUserObject]=useState({});
    const [globalisLogin,setGlobalIsLogin] = useState(false);

    return (
        <globalContext.Provider value={{globalCount,setGlobalCount,globalUserObject,setGlobalUserObject,globalisLogin,setGlobalIsLogin}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/home' element={<Welcome/>}/>
            <Route path="/products" element ={<Products />} />
            <Route path="/review" element={<ReviewInput />} />
            <Route path="/profile" element={<Profile />}/>

        </Routes>
        </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;