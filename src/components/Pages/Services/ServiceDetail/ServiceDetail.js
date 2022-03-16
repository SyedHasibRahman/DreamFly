// import React, { useEffect, useState } from 'react';
// import { Card, } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
// import { useForm } from "react-hook-form";
// import './Details.css'

// const ServiceDetail = () => {
//     const { id } = useParams();
//     const { AllContexts } = useAuth()
//     const { user } = AllContexts
//     const [orders, setOrders] = useState([])
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const onSubmit = data => {
//       delete data._id;
//         fetch('https://pure-oasis-89379.herokuapp.com/order', {
//             method: "POST",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(result => {
//                 if (result.insertedId) {
//                     alert('added successfully')
//                     reset();
//                 }
//             })
//     };

//     useEffect(() => {
//         fetch('https://pure-oasis-89379.herokuapp.com/travels')
//             .then(res => res.json())
//             .then(data => {
//                 const orders = data?.find(order => order?._id === id)
//                 setOrders(orders)
//                 console.log(orders)
//                 reset(orders)
//             })

//     }, [id])


//     return (
//         <div className="my-4 container">
//             <div className="row">


//                 {/* {orders.name ? ( */}
//                 <div className="col">


//                     <Card className="m-2 body-detail" style={{ width: '21rem' }}>
//                         <Card.Img variant="top" className="img-fluid" src={orders?.img} />
//                         <Card.Body className="text-white">
//                             <Card.Title> {orders?.name}</Card.Title>
//                             <Card.Title>${orders?.price}</Card.Title>
//                             <Card.Text>{orders?.detail}</Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>

//                 {/* ) : (
//                 <h1>No Result Found</h1>
//                 ) */}


//                 {/* } */}
//                 <div className="add-service col">
//                     <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

//                         <input defaultValue={user.displayName} {...register("name")} />

//                         <input defaultValue={user.email} {...register("email", { required: true })} />
//                         {errors.email && <span className="error">This field is required</span>}
//                         <input placeholder="Address" defaultValue="" {...register("address")} />
//                         <input placeholder="City" defaultValue="" {...register("city")} />
//                         <input placeholder="phone number" defaultValue="" {...register("phone")} />

//                         <input type="submit" />
//                     </form>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default ServiceDetail;