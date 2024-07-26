import { globalContext } from "./app";
import { useContext, useEffect } from "react";
import Navigation from "./Navigation";
function Profile(){
    const{globalUserObject,setGlobalUserObject}=useContext(globalContext);
    const{globalisLogin,setGlobalIsLogin} = useContext(globalContext);
    const logoutAction =()=>{
        setGlobalIsLogin(false);
    }
    // useEffect(()=>{
    //     const name = localStorage.getItem("name");
    //     console.log(name);
    //     })//retrieving the data
    //we use local storage to store a value and retrieve it any where in the components.we store in the form of key value pairs.
    return(
        <div>
            <Navigation />
            <div className="card" style={{marginLeft:"20px",marginTop:"20px", height:"400px",width:"350px"}}>
                <h2>Profile</h2>
                <p>Your details</p> 
                <p>CollegeId : {globalUserObject.collegeIdValue}</p>
                <p>Password : {globalUserObject.passwordValue}</p>
                <p>Email Address : {globalUserObject.emailValue}</p>
                <p>Branch : {globalUserObject.branchValue}</p>
                <p>Year : {globalUserObject.yearValue}</p>
                <p>Gender : {globalUserObject.genderValue}</p>
                <button type="button" className="btn btn-danger" onClick={logoutAction}>Logout</button>
            </div>
        </div>
    );
}
export default Profile;