import React, { useState, useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import image from '../../images/Assets/avatar.png'
import { ToastContainer, toast } from 'react-toastify';
import AddCategoryHook from '../hooks/category/AddCategoryHook';
export const AdminAddCategory = () => {

    const [img,name,loading,isPress,handelSubmit,onImageChange,onChangeName] =AddCategoryHook();

    

    return (
        <div>
            <Row className="justify-content-center ">
                <div className="admin-content-text pb-10 text-center display-5">Add Category</div>
                <Col sm="8">
                    <div className="text-form pb-3">Add Image </div>
                    <div>
                        <div>
                        <label for="upload-photo">
                            <img
                                src={image}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        </div>
                        <div className='pt-3'>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    </div>
                    <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder=" Category Name"
                    />
                     <button onClick={handelSubmit} className="btn btn-dark d-inline mt-3 " style={{width:"70%"}}>Save </button>
                </Col>
            </Row>
            

            {
                isPress ? loading ? <Spinner animation="border" variant="dark" /> : <h4>Done </h4> : null
            }
            <ToastContainer />
        </div>
    )
}

export default AdminAddCategory;

