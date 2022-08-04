import React, {  useEffect,  } from 'react'
import { Col, Row } from 'react-bootstrap'
import {   useSelector } from 'react-redux'
import { useDispatch } from "react-redux/es/exports";
import {  GetProduct } from '../action/PostSlice';
import MenusProduct from '../components/MenusProduct'
import NavbarComponent from '../components/NavbarComponent'



function Dashboard() {
  const dataProduct = useSelector((state)=>state.posts.productsData)
  const dataToken = sessionStorage.getItem("AccessToken")
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(GetProduct(dataToken))
    window.localStorage.removeItem("detailObject")
  },[])

  return (
    <>
    
   <NavbarComponent />
      <Row>
      <Col>
      <h2>Catalogs</h2>
      <hr/>
      <Row className='p-3'>
          { dataProduct && dataProduct.map((item)=>{
              return(
                  
                  <MenusProduct 
                  listMenu={item}
                  key={item.id}
                  />
                  

              )
          })}
      </Row>
      </Col>
    </Row>
    </>
  )
}

export default Dashboard