import { useState } from "react";
import PropTypes from "prop-types";
import { HiArrowDown } from "react-icons/hi";

export function AvailabilityFilter({ title, options, click }) {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = (prev) => setOpen(!prev);

  return (
    <details className="border rounded border-gray-300  " open={isOpen}>
      <summary
        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
        onClick={toggleOpen}
      >
        <span className="text-sm font-medium">{title}</span>
        <span
          className={`transition group-open:-rotate-180 h-4 w-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <HiArrowDown />
        </span>
      </summary>

      <div className="border-t border-gray-200 bg-white">
        {/* here is the categories api  */}
        <ul className="border-t border-gray-200 p-4 space-y- overflow-y-scroll h-[200px] ">
          <li>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name={"الكل"}
                value={"0"}
                className="h-5 w-5 rounded border-gray-300"
                onChange={click}
              />
              <span className="text-sm font-medium text-gray-700">الكل</span>
            </label>
          </li>
          {options.map(({ name, _id }) => (
            <li key={_id}>
              <label for={_id} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name={name}
                  id={_id}
                  value={_id}
                  className="h-5 w-5 rounded border-gray-300"
                  // checked={selected.includes(_id)}
                  onChange={click}
                />
                <span className="text-sm font-medium text-gray-700">
                  {name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

AvailabilityFilter.propTypes = {
  inStock: PropTypes.number.isRequired,
  preOrder: PropTypes.number.isRequired,
  outOfStock: PropTypes.number.isRequired,
};
// _________________________________________________________________________
export function PriceFilter({ priceFrom, priceTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <details
      className={` rounded border border-gray-300 ${isOpen ? "open" : ""}`}
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
        onClick={handleToggle}
      >
        <span className="text-sm font-medium">Price</span>
        <span
          className={`transition group-open:-rotate-180 h-4 w-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <HiArrowDown />
        </span>
      </summary>
      {isOpen && (
        <>
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between gap-4">
              <label className="flex items-center gap-2">
                <span className="text-sm text-gray-600">$</span>
                <input
                  placeholder="السعر من"
                  type="number"
                  value={localFrom}
                  onChange={priceFrom}
                  className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
              <label className="flex items-center gap-2">
                <span className="text-sm text-gray-600">$</span>
                <input
                  placeholder="السعر الي"
                  type="number"
                  onChange={priceTo}
                  value={localTo}
                  className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </label>
            </div>
          </div>
        </>
      )}
    </details>
  );
}
// _____________________________________________________________________________________

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { HiSortDescending } from "react-icons/hi";

export function FilterMenu({ title, onClick }) {
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
  };
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button className="flex gap-3 items-center" color="red">
          ترتيب حسب
          <HiSortDescending />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => clickMe("")}>بدون ترتيب</MenuItem>
        <MenuItem onClick={() => clickMe("الاكثر مبيعا")}>
          الاكثر مبيعا
        </MenuItem>
        <MenuItem onClick={() => clickMe("الاعلي تقييما")}>
          الاعلي مبيعا
        </MenuItem>
        <MenuItem onClick={() => clickMe("السعر من الاقل للاعلي")}>
          السعر من الاقل للاعلي
        </MenuItem>
        <MenuItem onClick={() => clickMe("السعر من الاعلي للاقل")}>
          السعر من الاعلي للاقل
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
