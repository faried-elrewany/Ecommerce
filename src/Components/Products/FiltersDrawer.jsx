import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PriceFilter, AvailabilityFilter } from "./FiltersComponents.jsx";
import { HiMenuAlt3 } from "react-icons/hi";
import SidebarSearchHook from "../../hook/search/sidebar-search-hook";

export default function FiltersDrawer() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => {
    setOpen((prev) => !prev);
    document.body.classList.add("no-scroll");
  };
  const closeDrawer = () => {
    setOpen((prev) => !prev);

    document.body.classList.remove("no-scroll");
  };
  // search functionality
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] =
    SidebarSearchHook();
  let localFrom = localStorage.getItem("priceFrom");
  let localTo = localStorage.getItem("priceTo");
  return (
    <React.Fragment>
      <Button
        onClick={openDrawer}
        color="red"
        className="flex items-center gap-3"
      >
        الفلاتر
        <HiMenuAlt3 />
      </Button>

      <Drawer
        open={open}
        color="red"
        onClose={closeDrawer}
        className="p-4"
        overlay={false}
        placement="right"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="red">
            الفلاتر
          </Typography>
          <IconButton variant="text" color="red" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>

        <div className="space-y-2">
          {/* filters starts  here */}
          <AvailabilityFilter
            title={"بحث بالتصنيف"}
            options={category}
            click={clickCategory}
          />
          <AvailabilityFilter
            title={"بحث بالماركات"}
            options={brand}
            click={clickBrand}
          />
          <PriceFilter priceFrom={priceFrom} priceTo={priceTo} />
        </div>
      </Drawer>
    </React.Fragment>
  );
}
