import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap'

const CategoryHeader = () => {
    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All Categories</div>
            <div className="cat-text-header">electronics</div>
            <div className="cat-text-header">clothes</div>
            <div className="cat-text-header">shoes</div>
            <div className="cat-text-header">accessories</div>
            <div className="cat-text-header">accessories</div>
            <div className="cat-text-header">accessories</div>
            <div className="cat-text-header">accessories</div>
            <div className="cat-text-header">accessories</div>
            <div className="cat-text-header">More</div>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader
