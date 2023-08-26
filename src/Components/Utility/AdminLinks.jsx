import {
  BiAccessibility,
  BiLogoProductHunt,
  BiSolidCoupon,
  BiCategory,
} from "react-icons/bi";
import { GrUnorderedList } from "react-icons/gr";
import { MdAddCard } from "react-icons/md";
import { AiOutlineProfile, AiTwotoneHeart } from "react-icons/ai";
import { PiAddressBookBold } from "react-icons/pi";
export const AdminMenu = [
  {
    name: "ادارة الطلبات",
    link: "/admin/all-orders",
    icon: GrUnorderedList,
  },
  {
    name: "ادارة المنتجات",
    link: "/admin/all-products",
    icon: BiAccessibility,
  },
  { name: "اضف ماركة", link: "/admin/add-brand", icon: MdAddCard },
  { name: "اضف تصنيف", link: "/admin/add-category", icon: BiCategory },
  {
    name: "اضف تصنيف فرعي",
    link: "/admin/add-sub-category",
    icon: BiAccessibility,
  },
  { name: "اضف منتج", link: "/admin/add-product", icon: BiLogoProductHunt },
  { name: "اضف كوبون", link: "/admin/add-coupon", icon: BiSolidCoupon },
];
export const UserMenu = [
  { name: "ادارة الطلبات", link: "/user/all-orders", icon: GrUnorderedList },
  { name: "المنتجات المفضلة", link: "/user/wishlist", icon: AiTwotoneHeart },
  { name: "العنواوين الشخصية", link: "/user/addresses", icon: PiAddressBookBold },
  { name: "الملف الشخصي", link: "/user/profile", icon: AiOutlineProfile },
];
