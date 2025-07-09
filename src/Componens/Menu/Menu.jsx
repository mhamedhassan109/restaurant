import "./Menu.css"
import MenuItem from "./MenuItem"
import {Col, Row} from "react-bootstrap"

function Menu({filtertionMenu,handlerADDItem}) {
  return (
    <div className="Menu">
        <Row>
        {filtertionMenu.length > 0 ? (

            filtertionMenu.map((item)=>{
                return(
                    <>
                    <Col sm="12" lg="6" key={item.id}>
                     <MenuItem  item={item} handlerADDItem={handlerADDItem}/>
                     </Col>
                    </>
                )
            })

        ) : <h2>no item</h2> }
       </Row>
    </div>
  )
}

export default Menu