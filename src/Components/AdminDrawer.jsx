import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
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
  console.log(items[0].href);
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button onClick={openDrawerRight} color="red" size="small">
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
            <Link to={href} onClick={() => console.log("clicked")}>
              <ListItem key={name}>{name}</ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
