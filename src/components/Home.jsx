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


   const [amount,setAmount]=useState('')
   const [gst,setgst]=useState('')
   const [cesstype,setcesstype]=useState('')
   const [cessamount,setcessamount]=useState('')
   const [effectfrom,seteffctfrom]=useState('')
   const [effectto,seteffecto]=useState('') 
   const [msg,setmsg]=useState('')




  const handleSubmit=(e)=>{
     e.preventDefault();
     
     amount,
     gst,
     cesstype,
     cessamount,
     effectfrom,
     effectto,
     effectto,
     msg,
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
              data.map((item,index)=>{
                if(index<1)

                return(
                  <>
                    <div  className="bill-form">
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
              <button>Set Defualt
                <AiFillEdit/>
              </button>
              <button >Edit
              <AiFillEdit/>
              </button>
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
           <p>logitche ddsvjhds  dsdsv</p>


           
     <form className='form' onSubmit={handleSubmit}>
      <div>
      <label htmlFor="Amount">Amount</label>
      <br />
      <input type="text" placeholder='Enter Amount'  />
    </div>
    <div>
      <label htmlFor="text">Gst</label>
      <br />
      <input type="text" placeholder='Enter Amount'  />
    </div>

      {/* input-select */}
    <div>
      <label htmlFor="text">Cess Type</label>
      <br />
      <input type='text'  placeholder='select' />
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
      <input type="text" placeholder='Enter Amount'/>
    </div>

    <div className="effect">
        <input type="text" placeholder='Enter Amount' />
        <input type="text" placeholder='Enter Amount' />
    </div>

    <br />

    <input type="text" placeholder='Enter Note' className='Note' />
 
     <label>Mark As Defualt</label>
     <input type="checkbox"/>

     <div className="button">
         <button>Cancel</button>
         <button>Create</button>
     </div>

     </form>
           
      
            
          </div> 
           )}
       


        </div>

    
  
  )
}

export default Home
