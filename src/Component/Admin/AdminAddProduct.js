import React, { useState, useEffect } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import image from "../../images/Assets/avatar.png";
import { ToastContainer, toast } from "react-toastify";
import add from "../../images/Assets/add.png";
import { AddProductsHook } from "../hooks/ProductHook/AddProductHook";
import MultiImageInput from "react-multiple-image-input";
import { CompactPicker } from "react-color";

export const AdminAddProducts = () => {
  const [
    onChangeDesName,
    onChangeQty,
    HandleShowColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    allcategory,
    priceAftr,
    images,
    setImages,
    handelChangeComplete,
    removeColor,
    onSeletCategory,
    handelSubmit,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ] = AddProductsHook();


  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> Add New Product</div>
        <Col sm="8">
          <div className="text-form pb-2"> Product Images</div>

          <MultiImageInput
        allowCrop={false}
            images={images}
            setImages={setImages}
            theme={"light"}
            max={4}
          />

          <input
            value={prodName}
            onChange={onChangeProdName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Name"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product Describtion"
            value={prodDescription}
            onChange={onChangeDesName}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price Before Discount"
            value={priceBefore}
            onChange={onChangePriceBefor}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price After Discount"
            value={priceAftr}
            onChange={onChangePriceAfter}
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Available Qty"
            value={qty}
            onChange={onChangeQty}
          />
          <select
            name="cat"
            onChange={onSeletCategory}
            className="select input-form-area mt-3 px-2 "
          >
            <option value="0">Category</option>
            {allcategory ?
              allcategory?.map((item, index) => {
                  return (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>

          {/* <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    /> */}
          {/* <select
                        name="brand"
                        onChange={onSeletBrand}
                        className="select input-form-area mt-3 px-2 ">
                        <option value="0">اختر ماركة</option>
                        {
                            brand.data ? (brand.data.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            })) : null

                        }
                    </select> */}
          <div className="text-form mt-3 "> Available Colors</div>
          <div className="mt-1 d-flex">
          {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => removeColor(color)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color }}></div>
                                    )
                                })

                            ) : null
                        }

            <img
              onClick={HandleShowColor}
              src={add}
              alt=""
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {showColor === true ? (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            ) : null}
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">
            Save
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminAddProducts;
