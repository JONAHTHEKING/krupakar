import React from "react";
import { connect } from "react-redux";
import { setfilter, resetfilter } from "../Action";

const Filter = ({setfilter, resetfilter,}) => {

    const prod = ["ALL", "electronics", "jewelery", "men's clothing", "women's clothing"];
    const [filter, setFilter] = React.useState("ALL")

    return (
        <div name="filter">
 <center>
        {prod.map((item, index) => (
            <div style={{display: "inline"}}
        key ={index}>
            <button className="btn btn-outline-primary m-5" onClick={()=> setfilter(item)} name="filter">
                
                {item}
            </button>
          
        </div>
        
        ))}
    
     </center>
        </div>
    )
}

const mapStateToProps = (state) => ({
    filter_name: state.filterreducer.filter_name
})
export default connect(mapStateToProps,{setfilter, resetfilter})(Filter)
