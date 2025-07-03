import React, {useState} from 'react';

function Components() {

    const [name,setName]= useState("Guest");
    const [quantity,setQuantity]= useState(1);
    const [comment,setComment]= useState();
    const [payment, setPayment]= useState("Visa");
    const [shipping, setShipping]= useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p><hr />

            <input value={quantity} onChange={handleQuantityChange} type='Number'></input>
            <p>Quantity: {quantity}</p><hr />

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'></textarea>
            <p>Comment: {comment}</p><hr />

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment method: {payment}</p><hr />

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label><br />
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    );
}

export default Components;