import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from "react-router-dom";
import { ButtonContainer } from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                const {identifier,company,id,info,price,title,img,inCart} =
                value.detailProduct;
                return(
                    <div className="container py-5">
                        {/*title*/}
                        <div className="row">
                            <div className="col-12 mx-ato text-center
                            text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        {/*titleend*/}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 ms-auto col-md-6 my-3 ">
                            <img src={img} className="img-fluid" alt="product"></img>
                            </div>
                            <div className="col-10 ms-auto col-md-6 my-3 text-capitaliza">
                            <h2>Model: {title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by:<span className="text-uppercase">{company}</span>
                            </h4>
                            <h4 className="text-blue">
                                <strong>
                                    <span>
                                        price: <span>$</span>
                                        {price}
                                    </span>
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3
                            mb-0">
                                Produto:
                            </p>
                            <p className="text-muted lead">{info}</p>
                            {/* Botões */}
                            <Link to="/">
                                <ButtonContainer>
                                    Página Inicial
                                </ButtonContainer>
                            </Link>
                            <ButtonContainer 
                                cart
                                disabled={inCart?true:false}
                                onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                                >
                                    {inCart? "Carrinho" : "Adicione ao carrinho"}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                )
                }}



            </ProductConsumer>
        );
    }
}