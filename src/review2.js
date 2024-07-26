import I from "./addtocart";
import P from "./review";
function Productname(){
    return(
        <div>
            <div>
            <h1  style={{marginLeft:'20px'}}>Product Name</h1>
        </div>
        <div>
            <I />
        </div>
        <div>
            <P />
        </div>
        </div>
    );
}
export default Productname;
