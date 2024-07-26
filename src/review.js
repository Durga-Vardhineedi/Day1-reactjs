import { useState } from "react";
function Product3(){
    const [review, setReview]=useState('');
    const [reviews, setReviews]=useState([]);
    const addReview = () => {
        console.log("Adding Review.....");
        setReviews([...reviews,review]);
        setReview(' ');
    }
    const handleReviewChange=(event)=>{
        console.log("Review changed");
        console.log(event.target.value);
        setReview(event.target.value);
    }

    return(
        <div className="card" style={{marginLeft:'20px',marginRight:'20px'}}>
            <h3 style={{ marginLeft: "10px" }}>Product Specifications</h3>
            <p style={{ marginLeft: "10px" }}>product description product description product description product description product description product description product description product description product description product description product description product description product description product description </p>                                        
        <div>
            <h4 style={{marginLeft:'10px'}}>Reviews</h4>
            <input style={{marginRight:'15px',marginLeft:'10px'}} type="text" placeholder="Enter a review" onChange={handleReviewChange} ></input>
            <button className="btn btn-dark" onClick={addReview}>Add review</button>
            <h5 style={{marginLeft:'10px',marginTop:'20px'}}>Reviews</h5>
            <div style={{marginLeft:'10px',marginTop:'5px'}}>
                {reviews.map((r,index)=>(<p key={index}>Reviewer name<br></br>{r}</p>))}
            </div>

        </div>
        </div>
    );
}
export default Product3;