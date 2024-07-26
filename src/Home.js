import { useContext} from "react";
import Tabfun from "./Tabfun.js";
import Welcome from "./Welcome";
import { globalContext } from "./App.js";
//export const UserContext = createContext(); //create context
function Home(){
    const {globalisLogin} = useContext(globalContext);
    return(
        //<UserContext.Provider value={{isLogin,setIsLogin}}>
        <div>
            {
                globalisLogin ?
                // <div>Logged In </div> : <div>Not Logged In</div>
                <div> <Welcome />
                {/* // <h1>Welcome  to SVES Commerce </h1>
                //     <Link to="/products">View Products</Link> */}
                     {/* <Navigation /> */}
                    </div> : <Tabfun /> 
                
            }
        </div>
        //</UserContext.Provider>
    );
}
export default Home;