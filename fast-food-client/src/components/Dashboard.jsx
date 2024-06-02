import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllFoods from './AllFoods';
import { count } from 'firebase/firestore';

const Dashboard = () => {
    const loadData = useLoaderData();
    console.log(loadData);
    const [foods,setFoods]=useState(loadData);
    // const {foodName,quantity,supplier,taste,category,details,price,photo} = loadData;
    return (
        <div>
            {/* {photo} */}
            {/* <p>Food NAme:{foodName}</p> */}
            <div className="pb-10 bg-emerald-950">
                <div className="text-3xl text-center py-6">
                Food delivery from Jashore’s <br /> best restaurants.
                </div>
                <div className=" pb-6 text-xl text-center">Total Restaruant in Jashoe: {count}</div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:mx-10">
                    {
                        foods.map(food => <AllFoods  key={food._id} food={food}></AllFoods>)
                    }
                </div>
            </div>    
        </div>
    );
};

export default Dashboard;