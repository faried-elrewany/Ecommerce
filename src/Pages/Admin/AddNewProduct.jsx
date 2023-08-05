import React, { useState } from "react";
import SelectOptions from "../../Components/Utility/SelectOptions.jsx";
import { Button } from "@material-tailwind/react";
import Multiselect from "multiselect-react-dropdown";

import { InputComponent, TextArea } from "./Input.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import avatar from "../../images/avatar.png";
import AdminAddProductsHook from "../../hook/products/add-products-hook";
// import { ImageInput } from "react-multi-image-input";
// import MultiImageInput from "react-multiple-image-input";

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
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col w-3/4  gap-4 p-8  ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف منتج جديدة
          </h2>
          <div className="flex flex-col   justify-center">
            <div>
              {/* <MultiImageInput images={images} setImages={setImages} /> */}

              {/* <input
                type="file"
                name="photo"
                // onChange={onImageChange}
                id="upload-photo"
              /> */}
            </div>
          </div>
          <InputComponent label={"اسم المنتج"} width={"w-full"} />
          <TextArea label="تفاصيل المنتج" width={"w-full"} />
          <InputComponent label={"السعر قبل الخصم"} width={"w-full"} />
          <InputComponent label={"سعر المنتج "} width={"w-full"} />
          <SelectOptions />

          <Multiselect
            className="mt-2 text-start !rounded-md bg-red-100"
            placeholder="التصنيف الفرعي"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: "red" }}
          />
          <SelectOptions />
          {/* <ButtonAction title="حفظ التعديلات" /> */}
          <a className="">
            <Button color="red" variant="gradient">
              حفظ التعديلات
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
