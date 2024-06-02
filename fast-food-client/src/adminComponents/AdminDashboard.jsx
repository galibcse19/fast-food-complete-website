import React from 'react';
import Swal from 'sweetalert2';

const AdminDashboard = () => {
    const handelAddFood=event=>{
        event.preventDefault();
        const form= event.target;
        const foodName=form.foodName.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const price=form.price.value;
        const photo=form.photo.value;

        const newFood={foodName,quantity,supplier,taste,category,details,price,photo};
        console.log(newFood);
        fetch('http://localhost:5000/foodData',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully added your Food.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })
            }
        })

    }
    return (
        <div className='bg-green-400 text-white mx-10 '>
            <div className='text-center text-4xl py-10 '>ADMIN DASHBOARD</div>
             <hr />
             <div className="lg:mx-28 lg:py-20 ">
                <p className="text-4xl mb-4 pb-4">Add a Food</p>
                <div className="">
                     <form onSubmit={handelAddFood}>
                            <div className="lg:flex mb-4 ">
                                <div className="lg:w-1/2 lg:mr-4 sm:w-full">
                                    <label className="label">
                                        <span className="">Food Name</span>
                                    </label>
                                    <input type="text" name="foodName" placeholder="Enter Food Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="lg:w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className=" ">Quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="lg:flex mb-4 sm:w-full">
                                <div className="lg:w-1/2 lg:mr-4">
                                    <label className="label">
                                        <span className="">Restaurant Name:</span>
                                    </label>
                                    <input type="text" name="supplier" placeholder="Restaurant Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="lg:w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className=" ">Taste</span>
                                    </label>
                                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="lg:flex mb-4">
                                <div className="lg:w-1/2  sm:w-full lg:mr-4">
                                    <label className="label">
                                        <span className="">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
                               </div>  
                               <div className="lg:w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className=" ">Details</span>
                                    </label>
                                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                             <div className="lg:flex mb-4">
                                <div className="lg:w-1/2  sm:w-full lg:mr-4">
                                    <label className="label">
                                        <span className="">Price</span>
                                    </label>
                                    <input type="Number" name="price" placeholder="Price" className="input input-bordered w-full" required />
                               </div>  
                               <div className="lg:w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className=" ">Photo URL</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                               </div>
                            </div>
                             
                            <div className="mt-6">
                                <input className="btn btn-block hover:bg-white hover:text-black " type="submit" value="ADD FOOD" />
                            </div>
                    </form>    
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;