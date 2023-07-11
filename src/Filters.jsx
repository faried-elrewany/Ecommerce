import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PriceFilter, AvailabilityFilter } from "./FiltersComponents.jsx";
export default function Filter() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button onClick={openDrawer} color="red">
        Open Drawer
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="red">
            Filters
          </Typography>
          <IconButton variant="text" color="red" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>

        <div class="space-y-2">
          {/* filters starts  here */}
          <AvailabilityFilter inStock={5} outOfStock={15} preOrder={18} />
          <AvailabilityFilter inStock={5} outOfStock={15} preOrder={18} />
          <PriceFilter />
          {/* filters ends  here */}
        </div>
      </Drawer>
    </React.Fragment>
  );
}
