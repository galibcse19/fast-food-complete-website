import React from 'react';
import { Link } from 'react-router-dom';

const AllFoods = ({food}) => {
    const {_id,foodName,quantity,supplier,photo,price}=food;
    return (
        <div>
        <div className="">
            <div className="card lg:w-80 bg-emerald-800 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl w-56 h-48" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Food Name: {foodName}</h2>
                    <p>Restaurant: {supplier}</p>
                    <p>Quantity:  {quantity}</p>
                    <p>Price: $ {price}</p>
                    <div className="card-actions">
                    {/* <Link><button className="btn btn-outline text-white w-40 hover:bg-white">ORDER NOW</button></Link> */}
                    <Link to={`/foodData/${_id}`}><button className="btn btn-outline text-white w-40 hover:bg-white">ORDER NOW</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AllFoods;