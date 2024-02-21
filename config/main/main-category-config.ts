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
    id: "b6e4eba7-346d-4dc9-941a-6832b5bea2fa",
    title: "Market",
    slug: "market",
    icon: CategoryScienceIcon,
  },
  {
    id: "5b1d1967-af40-43ec-8bfd-1b5656da8c42",
    title: "Policy",
    slug: "policy",
    icon: CategoryScienceIcon,
  },
  {
    id: "963a93ff-4245-4091-95ef-819e77bc70b3",
    title: "Tech",
    slug: "tech",
    icon: CategoryScienceIcon,
  },
  {
    id: "acda9426-1e27-401c-bfa8-01caa32a21f8",
    title: "Opinion",
    slug: "opinion",
    icon: CategoryScienceIcon,
  },
  {
    id: "c93c6c92-4c24-44a6-9388-1e83a33bc867",
    title: "Dao",
    slug: "dao",
    icon: CategoryScienceIcon,
  },

  
];

export default mainCategoryConfig;
