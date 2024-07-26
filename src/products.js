import axios from "axios";
import Navigation from "./Navigation";
import { useEffect, useState,useContext } from "react";
import Addtocart from "./addtocart";
function Fetching() {
    const [data, setData] = useState([]);
    const [count, setCount]=useState(0)
    
    const btnincrementCount =()=> {
        setCount(count+1);
    }
    const btndecrementCount =()=> {
        setCount(count-1);
    }
    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/products'); // Using axios to fetch data
            console.log(res);
            console.log(res.data);
            const resData = await res.data;
            setData(resData);
        }
        fetchMyData();
    }, []);

    return (
        <div>
            <Navigation />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '20px' }}>
            {data.map((dataItem, index) => (
                <div key={index} className="card" style={{ width: '250px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', overflow: 'hidden' }}>
                        <img src={dataItem.image} alt="" style={{ maxWidth: '100%', maxHeight: '100%',marginLeft:'5px',marginRight:'5px',marginTop:'5px' }} />
                    </div>
                    <div className="card-body" style={{ padding: '16px' }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>{dataItem.title}</h3>
                        <h3 style={{ fontSize: '18px', color: '#007BFF', marginBottom: '8px' }}>${dataItem.price}</h3>
                        <h3 style={{ fontSize: '14px', color: '#FFC107', marginBottom: '8px' }}>Rating: {dataItem.rating.rate}</h3>
                        
                    </div> 
                    <Addtocart/>
                    
            </div>
            ))}
        </div>
        </div>
    );
}

export default Fetching;





    