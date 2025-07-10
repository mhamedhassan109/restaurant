import { Col, Row } from "react-bootstrap"
import "./FilterForm.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


function FilterForm({setsearchValue,buttoncatogry,catogryOption,setcatogryOption,setselectValue}) {
  return (
    <div className="FilterForm">

    <Row className="d-flex justify-content-between align-items-center">
        <Col sm="12" lg="3">
        <div className="Filtersearch">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" /> <input type="search"  placeholder=" search item" onChange={(e)=>setsearchValue(e.target.value)}/>
        </div>
        </Col>

        <Col sm="12" lg="7"> 
        <div className="FilterCatogry">
            {buttoncatogry.map((btn)=>{
                return(
                    <button style={{backgroundColor:catogryOption === btn ? "#ff4135" : "transparent" , color:catogryOption === btn ? "white" : "black"}} onClick={()=>setcatogryOption(btn)}>{btn}</button>
                )
            })}
            
        </div>
        </Col>

        
        <Col sm="12" lg="2">
         <div className="sortItem">
            <select onChange={(e)=>setselectValue(e.target.value)}>
                <option>default</option>
                <option value="Low">Price: Low to High</option>
                <option value="High">Price: High to Low</option>
                <option value="Name">Name: A to Z </option>
            </select>
         </div>
         </Col>
    </Row>



       
       
        
       
    </div>
  )
}

export default FilterForm