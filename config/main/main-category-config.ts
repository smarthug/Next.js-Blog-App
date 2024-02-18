import {
  CategoryHealthIcon,
  CategoryHomeIcon,
  CategoryMarketingIcon,
  CategoryScienceIcon,
  CategoryTechnologyIcon,
} from "@/icons/categories";
import { CategoryType } from "@/types";

const mainCategoryConfig: CategoryType[] = [
  {
    id: "",
    title: "Home",
    slug: "/",
    icon: CategoryHomeIcon,
  },
  {
    id: "market",
    title: "Market",
    slug: "market",
    icon: CategoryScienceIcon,
  },
  {
    id: "policy",
    title: "Policy",
    slug: "policy",
    icon: CategoryScienceIcon,
  },
  {
    id: "tech",
    title: "Tech",
    slug: "tech",
    icon: CategoryScienceIcon,
  },
  {
    id: "opinion",
    title: "Opinion",
    slug: "opinion",
    icon: CategoryScienceIcon,
  },
  {
    id: "dao",
    title: "Dao",
    slug: "dao",
    icon: CategoryScienceIcon,
  },

  
];

export default mainCategoryConfig;
