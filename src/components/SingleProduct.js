
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'
import './style.css'
const SingleProduct = ({ prod }) => {
    return (
        <div className="products">
            <Card>
                <Card.Body>
                    <Card.Img variant="top" src={prod.image} alt={prod.name} />
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span> {prod.price.split(".")[0]} </span>

                        {
                            prod.fastDelivery ?
                                (<div>Fast Delivery</div>) :
                                (<div>4 days Delivery</div>)
                        }
                        <Rating rating={prod.ratings} />

                    </Card.Subtitle>
                    <Button style={{padding:"5px"}} variant="danger">Remove from cart</Button>
                    <Button style={{padding:"5px"}} disabled={!prod.inStock}>
                        {!prod.inStock ? "Out Of Stock" : "Add to Cart"}
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct
