import {  useState } from "react";

export default function MyComponent() {
       const [name,setName] = useState('Guest');
       const [quantity,setQuantity] = useState(1);
       const [comment,setComment] = useState('');
       const [payment, setPayment] = useState('');
       const [shipping, setShipping] = useState('Delivery'); 
       function hanldeShippin(e){
        setShipping(e.target.value);
       }


  function handlePayment (e){
    setPayment(e.target.value);
  }

     function handleComment(e) {
        setComment(e.target.value);
     }
    
       function handleChange (e) {
        setName(e.target.value);
       }
       function handleQuantity(e){
        setQuantity(e.target.value)
       }
    return (
        <>
             <div>
                <input value={name}  onChange={handleChange}/>
                <p> Name: {name} </p>

                <input value={quantity} onChange={handleQuantity} type="number" />
                <p> Quantity : {quantity} </p>

                <textarea  onChange={handleComment}  ></textarea>

                <p>Comment :  {comment} </p>

                <select value={payment} onChange={handlePayment} >
                    <option value=""  >Select an option</option>
                    <option value="Visa"> Visa</option>
                    <option value="MasterCard"> MasterCard</option>
                    <option value="GiftCard"> GiftCard</option>
                </select>
                <p>Payment : {payment} </p>

                <label htmlFor="">
                    <input type='radio'  value='PICK UP' checked={shipping ==="Pick up"}  onChange={hanldeShippin}/>
              
                      Pick up
                </label> <br />
                <label htmlFor="">
                    <input type='radio'  value='DELIVERY' checked={shipping ==="Delivery"}  onChange={hanldeShippin}/>

                      Delivery
                </label>
                <p> Shipping: {shipping} </p>
             </div>
        </>
    )
}