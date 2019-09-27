import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductList extends Component{
    
    render(){
       
        return(
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="" title="Produtos"></Title>
                   
                   
                    <div className="row" >
                        <ProductConsumer>
                            {(hello)=>{
                                return hello.products.map(product=>{
                                    return <Product key={product.id} product={product} 
                                    />
                                })
                            }}
                        </ProductConsumer>
                        
                    </div>
                </div>
            </div>
        </React.Fragment> 
        )
    }
}

   /*
        <div>
            <h3>Lista de produtos:</h3>
            
             <Product></Product>
        </div>    
  */