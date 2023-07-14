import AdminAddBrand from "./AdminAddBrand";
import AdminAllOrders from "./AdminAllOrders";
import AdminAllProducts from "./AdminAllProducts";
import AddNewProduct from "./AddNewProduct";
import AddSubCategory from "./AddSubCategory";
import AddCategory from "./AddCategory";
import { Bars3Icon } from "@heroicons/react/24/outline";

<Bars3Icon className="h-6 w-6 text-gray-500" />;

//  ناقص صفحة كمان
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function SideBar({ items }) {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button onClick={openDrawerRight} color="red">
          <Bars3Icon className="h-6 w-6 text-white" />
        </Button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="red">
            صفحة الادمن
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon color="red" strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <List>
          {items.map(({ name, href }) => (
            <ListItem key={name}>
              <a href={href}>{name}</a>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
