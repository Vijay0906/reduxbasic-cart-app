import React from "react";
import { connect } from "react-redux";

const TotalCount = ({products}) => {
    const ProductCount = products.length
    return (
    <div className='cartcount'>
        Total Products
        <span className='count'>{ProductCount}</span>
    </div>
    )
}

const mapStateToProps = (state) => ({
    products: state

})

export default connect(mapStateToProps)(TotalCount)
