import React from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
export default function Card(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItems
  const handleCart = () => {
    
  }

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "410px" }}>
        <img className="card-img-top "src={props.imgSrc} alt="Card imagecap" style={{height: "200px", objectFit: "fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">This is Some Important Text.</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              {priceOptions.map((data) => {
                return <option key={data} value={data} > {data}</option>
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
          <hr />
          <button className={`btn btn-success justify-center ms-2`} onClick={handleCart} >Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
