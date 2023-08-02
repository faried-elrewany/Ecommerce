import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const menus = [
  {
    name: "ادارة الطلبات",
    link: "/admin/all-orders",
    icon: MdOutlineDashboard,
  },
  {
    name: "ادارة المنتجات",
    link: "/admin/all-products",
    icon: AiOutlineUser,
  },
  { name: "اضف ماركة", link: "/admin/add-brand", icon: FiMessageSquare },
  { name: "اضف تصنيف", link: "/admin/add-category", icon: TbReportAnalytics },
  { name: "اضف تصنيف فرعي", link: "/admin/add-sub-category", icon: FiFolder },
  { name: "اضف منتج", link: "/admin/add-product", icon: FiShoppingCart },
];
