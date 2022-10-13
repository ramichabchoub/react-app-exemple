import React, { useEffect } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const CategoryContainer = ({ data ,loading}) => {

    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    return (
        <Container >
            <div className="admin-content-text mt-2 ">All Categories</div>
            <Row className='my-2 d-flex justify-content-between'>

                {
                    loading === false ? (
                        data ? (
                            data.map((item, index) => {
                                // return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5) + 1]} />)
                                // number between 0 and 5 in colors array
                                return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[Math.random() * 6 | 0]} />)
                            })
                        ) : <h4>No Data</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }

            </Row>
        </Container>
    )
}

export default CategoryContainer
