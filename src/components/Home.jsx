import React, { useEffect, useState } from 'react'

import "../Styles/Home.css"

import axios from 'axios';

import Close from "../assets/close.png"

import {AiFillDelete,AiFillEdit} from "react-icons/ai"





const Home = () => {

  

  const [data,setData]=useState([])

  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showThirdButton, setShowThirdButton] = useState(false);



  const handleFirstButtonClick = () => {
    setShowSecondButton(true);
  };

  const handleSecondButtonClick = () => {
    setShowThirdButton(true);
  };

  const handleThirdButtonClick = () => {
    setShowSecondButton(false);
    setShowThirdButton(false);
  };


  const [formData, setFormData]=useState({
    Amount:"",
    Gst:"",
    cessType:"",
    cessAmount:"",
    effectFrom:"",
    effectto:"",
    message:"",

  })

  const handleInputChange = (event) => {
    const { name,value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }





  const handleSubmit=(e)=>{
     e.preventDefault();
     
     console.log(formData)

    
  }
  




  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(responce =>{
      setData(responce.data)
    })
    .catch(error =>{
      console.log(error)
    })
  },[])


  console.log(data)


  return (
     <div className='container'>
        <div className="heading">
          <p>Overview</p>
          <p>Price list</p>
          <p>Bundled item</p>
        </div>




        <div className="bill-section">
          <p>Price List</p>
          <br />
            {
               data.map((item,inedex)=>{
                 if(inedex<1)

                 return(
                  <>
                <div className="bill-form">
                <input type="text" className='tab' placeholder='Price Id'  />
                <input type="text" className='tab' placeholder='selling'  />
                <input type="text" className='tab' placeholder='GST' />
                <input type="text" className='tab'  placeholder='Cess Type' />
                <input type="text" className='tab' placeholder='Cess'  />
                <input type="text" className='tab' placeholder='Effect'  />
                <input type="text" className='tab' placeholder='Effect' />
                <input type="text" className='tab'  placeholder='Price list Note'/>
                <input type="text" className='last-tab'  />
   
                <input type="text" className='tab' placeholder={item.price} />
                <input type="text" className='tab' placeholder='Price ()'  />
                <input type="text" className='tab' placeholder='Rate' />
                <input type="text" className='tab'  />
                <input type="text" className='tab' placeholder='Amount'  />
                <input type="text" className='tab' placeholder='Form' />
                <input type="text" className='tab'  placeholder='To' />
                <input type="text" className='tab'  />
                <input type="text" className='last-tab'   />
   
   
                <input type="text" className='tab' placeholder={item.price}  />
                <input type="text" className='tab' placeholder={item.count} />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='last-tab' placeholder='...' />
   
                <input type="text" className='tab' placeholder={item.price} />
                <input type="text" className='tab' placeholder={item.count} />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='tab'  />
                <input type="text" className='last-tab' placeholder='...' onClick={handleFirstButtonClick}/>

              
   
                </div>

                  </>
                 )
               })
            }
        </div>

             {  showSecondButton && (

              <div className="edit"> 
          <button onClick={handleFirstButtonClick}>Set Defualt<AiFillEdit/> </button>
          <button  onClick={handleFirstButtonClick} >Edit<AiFillEdit/></button>
          <button onClick={handleSecondButtonClick}>DElete <AiFillDelete/> </button> 
            </div>
          )}

        
       {
        showThirdButton && (
          <div className="price-list">
          <div className="close-icon">
            <h2>Add New Price List</h2>
              <img src={Close} alt="" onClick={handleThirdButtonClick} />
          </div>

           <span>item Name</span>
           <br />
           <p>logitche ddsvjhds  dsdsv</p>
  
     <form className='form' onSubmit={handleSubmit}>
      <div>
      <label htmlFor="Amount">Amount</label>
      <br />
      <input type="text" placeholder='Enter Amount'  name="Amount"  value={formData.Amount} onChange={handleInputChange}  />
    </div>
    <div>
      <label htmlFor="text">Gst</label>
      <br />
      <input type="text" placeholder='Enter Amount'  name="Gst" value={formData.Gst} onChange={handleInputChange}  />
    </div>

      {/* input-select */}
    <div>
      <label htmlFor="text">Cess Type</label>
      <br />
      <input type='text'  placeholder='select' value={formData.cessType}  name="cessType" onChange={handleInputChange} />
      <select className="my-select"  >
        <option value=""></option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      
    </div>

    <div>
      <label htmlFor="email">cess Amount</label>
      <br />
      <input type="text" placeholder='Enter Amount'  name="cessAmount" value={formData.cessAmount} onChange={handleInputChange}/>
    </div>

    <div className="effect">
        <input type="text" placeholder='Enter Amount'  name="effectFrom" value={formData.effectFrom} onChange={handleInputChange} />
        <input type="text" placeholder='Enter Amount' name="effectto" value={formData.effectto} onChange={handleInputChange}/>
    </div>

    <br />

    <input type="text" placeholder='Enter Note' className='Note' name="message" value={formData.message} onChange={handleInputChange} />
 
     <label>Mark As Defualt</label>
     <input type="checkbox"/>

     <div className="button">
         <button>Cancel</button>
         <button className='submit' type='submit'>Create</button>
     </div>

     </form>
           
      
            
          </div> 
           )}
       


        </div>

    
  
  )
}

export default Home
