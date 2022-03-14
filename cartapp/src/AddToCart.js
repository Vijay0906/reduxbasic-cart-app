import React from "react";
import { connect } from "react-redux";
import { AddProduct } from "./actions";
import { RemoveProduct } from "./actions";
import { useState } from "react";

const AddToCart = ({ products, AddProduct, RemoveProduct }) => {
    const [name, setName] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if (name !== "") {
            await AddProduct({ name: name });
            setName("");
        }
        setName("");
    }
    return (
        <div className='addtocart'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                {/* <div className='btn'> */}
                <button type="submit" className='add'>ADD Product</button>
                {/* </div> */}
            </form>
            {products.map(product => {
                return (
                    <div key = {product.name} className='productname'>
                        <span className='pname'>{product.name}</span>
                        <span className='premove' onClick={()=>RemoveProduct(product.name)}>x</span>
                    </div>
                )
            })}

        </div>
    );
}

const mapStateToProps = (state) => ({
    products: state
})

export default connect(mapStateToProps, { AddProduct, RemoveProduct })(AddToCart);
