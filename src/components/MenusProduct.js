import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const MenusProduct = ({listMenu, key}) => {
    const history = useHistory();
   const handelDetail =(value)=>{
        window.localStorage.setItem("detailObject", JSON.stringify(value))
        history.push('/detail')
    }
  return (
   <Col md={2} xs={6} className="mb-4">
   <Card className='shadow'  onClick={()=>handelDetail(listMenu)} >
      <Card.Img variant="top" src={listMenu.image !==null ?  listMenu.image : "https://jamkrindosyariah.co.id/wp-content/themes/consultix/images/no-image-found-360x260.png"} />
      <Card.Body>
        <Card.Title>{listMenu.name}</Card.Title>
        <Card.Text>
          {listMenu.price}
        </Card.Text>
      </Card.Body>
    </Card>
   </Col>
  )
}

export default MenusProduct