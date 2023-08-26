import React, { useState } from "react";
import { CompactPicker } from "react-color";
import regeneratorRuntime from "@babel/runtime/regenerator";
import { Button } from "@material-tailwind/react";
import Multiselect from "multiselect-react-dropdown";
import MultiImageInput from "react-multiple-image-input";
import { Input } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { Textarea } from "@material-tailwind/react";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import AdminAddProductsHook from "../../hook/products/add-products-hook";
import add from "../../images/add.png";

const AddNewProduct = () => {
  const [
    onChangeDesName,
    onChangeQty,
    onChangeColor,
    onChangePriceAfter,
    onChangePriceBefor,
    onChangeProdName,
    showColor,
    category,
    brand,
    priceAftr,
    images,
    setImages,
    onSelect,
    onRemove,
    options,
    handelChangeComplete,
    removeColor,
    onSeletCategory,
    handelSubmit,
    onSeletBrand,
    colors,
    priceBefore,
    qty,
    prodDescription,
    prodName,
  ] = AdminAddProductsHook();
  // const [images, setImages] = useState({});
  return (
    <>
      <div className=" overflow-x-hidden bg-gray-200 flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col w-3/4  gap-4 p-8  ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف منتج جديدة
          </h2>
          <div className="flex flex-col   justify-center">
            <div>
              <MultiImageInput
                images={images}
                setImages={setImages}
                theme={"light"}
                allowCrop={false}
                cropConfig={{ minWidth: 100 }}
              />
            </div>
          </div>

          <Input
            color="red"
            label="اسم المنتج"
            value={prodName}
            onChange={onChangeProdName}
          />
          <Textarea
            label="تفاصيل المنتج"
            value={prodDescription}
            onChange={onChangeDesName}
          />
          <Input
            color="red"
            label=" السعر قبل الخصم"
            value={priceBefore}
            onChange={onChangePriceBefor}
            type="number"
          />
          <Input
            color="red"
            label="السعر بعد الخصم "
            value={priceAftr}
            onChange={onChangePriceAfter}
            type="number"
          />
          <Input
            color="red"
            label="الكمية المتاحة"
            value={qty}
            onChange={onChangeQty}
            type="number"
          />

          <select
            className=" rounded  border bg-white border-gray-400 shadow-sm pl-3 pr-10 py-2 text-sm focus:outline-none focus:border-red-700 focus:shadow-outline-indigo"
            name="التصنيف الرئيسي"
            onChange={onSeletCategory}
          >
            <option value="0" className="text-gray-700 !bg-white px-2">
              اختر تصنيف رئيسي
            </option>
            {category.data
              ? category.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
          <select
            className=" rounded  border bg-white border-gray-400 shadow-sm pl-3 pr-10 py-2 text-sm focus:outline-none focus:border-red-700 focus:shadow-outline-indigo"
            name="الماركة"
            onChange={onSeletBrand}
          >
            <option value="0" className="text-gray-700  px-2">
              اختر ماركة
            </option>
            {brand.data
              ? brand.data.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>

          <Multiselect
            className="mt-2 text-start text-black !rounded-md border border-gray-400 "
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <div className="mt-2 flex gap-2 items-center relative">
            <div className="  "> الالوان المتاحه للمنتج</div>
            <img
              loading="lazy"
              onClick={onChangeColor}
              src={add}
              alt="add-color-image"
              width="30px"
              height="35px"
              style={{ cursor: "pointer" }}
            />
            {colors.length >= 1
              ? colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => removeColor(color)}
                      className="color ms-2 border  mt-1"
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })
              : null}

            {showColor === true ? (
              <div className="absolute -top-[300%]">
                <CompactPicker onChangeComplete={handelChangeComplete} />
              </div>
            ) : null}
          </div>

          <Button color="red" variant="gradient" onClick={handelSubmit}>
            حفظ التعديلات
          </Button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddNewProduct;
