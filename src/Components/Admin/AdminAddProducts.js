import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
const AdminAddProducts = () => {

    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "First Option", id: 1 },
        { name: "Second Option", id: 2 },
    ];

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> Add new product</div>
                <Col sm="8">
                    <div className="text-form pb-2"> Image of product</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Name of product"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="Description of product"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Price of product"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Discount of product"
                    />
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Category</option>
                        <option value="val">First Option</option>
                        <option value="val2">Second Option</option>
                        <option value="val2">Third Option</option>
                        <option value="val2">Fourth Option</option>
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="Second Option"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Brand</option>
                        <option value="val2">First Option</option>
                        <option value="val2">Second Option</option>
                        <option value="val2">Third Option</option>
                    </select>
                    <div className="text-form mt-3 "> Available colors for product</div>
                    <div className="mt-1 d-flex">
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        <div
                            className="color ms-2 border mt-1 "
                            style={{ backgroundColor: "white" }}></div>
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "black" }}></div>
                        <img src={add} alt="" width="30px" height="35px" className="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">Save</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddProducts
