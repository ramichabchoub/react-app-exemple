import React, { useState, useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import AddCategoryHook from '../../hook/category/add-category-hook'
import { ToastContainer, toast } from 'react-toastify';
const AdminAddCategory = () => {

    const [img, name, loading, isPress, handelSubmit, onImageChange, removeSelectedImg, onChangeName] = AddCategoryHook();

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add new category</div>
                <Col sm="8">
                    <div className="text-form pb-2">Image of category</div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <button className="btn btn-primary mt-2" onClick={removeSelectedImg}>Remove picture</button>
                    <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Name of category"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">Save</button>
                </Col>
            </Row>

            {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>Success</h4> : null
            }
            <ToastContainer />
        </div>
    )
}

export default AdminAddCategory
