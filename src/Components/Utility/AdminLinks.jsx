import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const AdminMenu = [
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
export const UserMenu = [
  { name: "ادارة الطلبات", link: "/user/all-orders", icon: FiMessageSquare },
  { name: "المنتجات المفضلة", link: "/user/wishlist", icon: FiMessageSquare },
  { name: "العنواوين الشخصية", link: "/user/addresses", icon: FiMessageSquare },
  { name: "الملف الشخصي", link: "/user/profile", icon: FiMessageSquare },
];
