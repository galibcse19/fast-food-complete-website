import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const loadData=useLoaderData();
    const {foodName,quantity,supplier,taste,category,details,price,photo} = loadData;
    return (
        <div>
            <div className=" w-1/2   shadow-xl bg-green-400 text-white ">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl w-3/4 h-1/3" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title text-2xl">Food Name: {foodName}</h2>
                    <p></p>
                    <p></p>
                    <table className="w-full border-solid">
                         
                            <tr><li>Restaurant Name: {supplier}</li></tr>
                            <tr><td><li>Quantity: {quantity}</li></td></tr>
                            <tr><td><li>Category: {category}</li></td></tr>
                            <tr><td><li>Taste: {taste}</li></td></tr>
                            <tr><td><li>Details: {details}</li></td></tr>
                            <tr><td className="text-lg bg-emerald-950 text-white"><li>Price: ${price} BDT</li></td></tr>
                    </table>
                </div>
                 <button className="btn btn-outline bg-emerald-950 w-full my-6">Add To Card</button>
            </div>
        </div>
    );
};

export default Order;