import { BiAccessibility } from "react-icons/bi";
export const AdminMenu = [
  {
    name: "ادارة الطلبات",
    link: "/admin/all-orders",
    icon: BiAccessibility,
  },
  {
    name: "ادارة المنتجات",
    link: "/admin/all-products",
    icon: BiAccessibility,
  },
  { name: "اضف ماركة", link: "/admin/add-brand", icon: BiAccessibility },
  { name: "اضف تصنيف", link: "/admin/add-category", icon: BiAccessibility },
  {
    name: "اضف تصنيف فرعي",
    link: "/admin/add-sub-category",
    icon: BiAccessibility,
  },
  { name: "اضف منتج", link: "/admin/add-product", icon: BiAccessibility },
  { name: "اضف منتج", link: "/admin/add-coupon", icon: BiAccessibility },
];
export const UserMenu = [
  { name: "ادارة الطلبات", link: "/user/all-orders", icon: BiAccessibility },
  { name: "المنتجات المفضلة", link: "/user/wishlist", icon: BiAccessibility },
  { name: "العنواوين الشخصية", link: "/user/addresses", icon: BiAccessibility },
  { name: "الملف الشخصي", link: "/user/profile", icon: BiAccessibility },
];
