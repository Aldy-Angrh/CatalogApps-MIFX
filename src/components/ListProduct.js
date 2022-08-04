import React, { Component } from 'react'
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Category } from '../Dummy/ListProduct'

export class ListProduct extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           list: Category,
        }
      }
      render() {
        const {list} =  this.state
    return (
      <Col md={3} mt='2' className='p-2'>
        <h4>Category Product</h4>
        <hr/>
      {list && list.map((item)=>{
        return(
            <ListGroup>
                <ListGroupItem>{item.name}</ListGroupItem>
            </ListGroup>
        )
      })}
      </Col>
    )
  }
}

export default ListProduct