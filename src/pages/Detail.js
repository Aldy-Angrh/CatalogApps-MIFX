import React, { Component } from "react";
import "../assets/css/Detail.css";
import ReactStars  from 'react-rating-stars-component'
import NavbarComponent from "../components/NavbarComponent";
import { Button } from "react-bootstrap";
import { FaCartArrowDown } from "react-icons/fa";
import Swal from "sweetalert2";

const data = window.localStorage.getItem("detailObject");
export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: JSON.parse(data),
      index: 0,
    };
  }
  myRef = React.createRef();
  handleThumb = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    console.log("THUMB", images)
    for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace("active", ""  );        
    }
    images[index].className = "active"
  };
  handleButton =()=>{
    Swal.fire("future features", "under construction" , "info");
  }
  render() {
    const { product, index } = this.state;
    return (
      <>
      
      <NavbarComponent />
      <div className="container">
        <div className="details">
          <div className="big-img">
            <img src={product.images[index]} alt="" />
            <div className="preview">
              <text>{`${index+1}/ ${product.images.length}`}</text>
            </div>
          </div>
          <div className="box">
            <div className="row">
              <text className="text-name">{product.name}</text>
              <ReactStars 
              count={5}
              size={24}
              value={product.rating}
              isHalf={true}
            activeColor='#FFEA11'
              />
              <text className="text-price">{product.price}</text >
          <p>{product.description}</p>
          <div className="detail-button">
          <Button className="btnCart" onClick={()=>this.handleButton()}><FaCartArrowDown /> Add to Cart</Button>
            <Button className="btn" onClick={()=>this.handleButton()}>Buy</Button>
          </div>
            </div>
          </div>
        </div>
        <div className="thumb active" ref={this.myRef}>
          {product.images.map((img, index) => (
              <img
              src={img}
              alt=""
              key={index}
              onClick={() => this.handleThumb(index)}
              />
              ))}
        </div>
      </div>
      </>
    );
  }
}
