import React, { useState, useEffect } from 'react'
import { json, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import filter_name from '../Reducer/filterreducer'

const Card = ({filter_name}) => {

  const [data, setData] = useState([])
  const [clonedata, setcloneData] = React.useState([])
   
  useEffect(() => {
fetch("https://fakestoreapi.com/products") 

.then(
 response => response.json()
).then(response => {setData(response);
setcloneData(response);
  })


    },[])
    
    useEffect(() => {

        if(filter_name != "ALL"){
    
            let specific = clonedata.filter(item => item.category===filter_name )
            setData(specific);
        }
        else{
            setData(clonedata)
        }
        
    },[filter_name])
    console.log(data)
   
  return (
    
   <center>
    {data.length > 0 ? 
     <div >
    
     <div className='container'>
        <div className='row' >
          {data.map((item) => (
           <div className='col-md-3' style={{padding: "10px"}}>
             <div className='card' style={{width:"18rem", height:"29rem",padding: "5px"}}>
             <img src={item.image} className='card-img-top' style={{width:"10rem", height:"16rem", padding:"5px"}} />
             <div className='card-body'>
              <h5 className='card-title' >Brand, {item.title}</h5>
              <h5 className='card-price' >${item.price}</h5>
              {/* <h5 className='card-rating'>{item.rating}</h5> */}
              <button className='btn btn-primary'>Add To Cart</button>
              </div>
             </div>
                </div>
             
         ))}
       </div>
       
       
     </div>
 <div>
  
 </div>
 
     </div>

    :
     <div className='spinner-border text-primary'>
      </div>}
   </center>
  
  )
  }

  const mapStateToProps = state => ({

    filter_name: state.filterreducer.filter_name
  })

export default connect(mapStateToProps,)(Card)
