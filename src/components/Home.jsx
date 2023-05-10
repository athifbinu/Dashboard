import React, { useEffect, useState } from 'react'

import "../Styles/Home.css"

import axios from 'axios';


const Home = () => {

  

  const [data,setData]=useState([])


  const [open,setOpen]=useState()

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
                  <input type="text" className='last-tab' placeholder='...'   />

                
     
                  </div>
                  </>
                )
              })
            }
        </div>

        <div className="price-list">
            <h2>Add New Price List</h2>
            <div className="form">
             <span>item Name</span>
             <p>quod eius expeat in ipsa</p>

             <span>Amount</span>
             <input type="text" placeholder='Enter Amount' />

             <span>Amount</span>
             <input type="text" placeholder='Enter Amount' />

             <span>Amount</span>
             <input type="text" placeholder='Enter Amount' />
             
            </div>
        </div>

    
     </div>
  )
}

export default Home
