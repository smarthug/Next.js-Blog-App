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
    id: "opinion",
    title: "Opinion",
    slug: "opinion",
    icon: CategoryScienceIcon,
  },
  // {
  //   id: "4db30a13-2797-4c7d-a0ce-e0c127287a39",
  //   title: "Science",
  //   slug: "science",
  //   icon: CategoryScienceIcon,
  // },
  // {
  //   id: "c13ae4a7-476c-4608-9b7a-9ec9488c42e4",
  //   title: "Health",
  //   slug: "health",
  //   icon: CategoryHealthIcon,
  // },
  // {
  //   id: "7b8781b0-b4fa-40e4-ac23-5310640eecd7",
  //   title: "Marketing",
  //   slug: "marketing",
  //   icon: CategoryMarketingIcon,
  // },
  // {
  //   id: "962f860d-ab0d-4650-ae93-8171c8b47169",
  //   title: "Technology",
  //   slug: "technology",
  //   icon: CategoryTechnologyIcon,
  // },
  {
    id: "dao",
    title: "Dao",
    slug: "dao",
    icon: CategoryScienceIcon,
  },
  {
    id: "technology",
    title: "Technology",
    slug: "technology",
    icon: CategoryScienceIcon,
  },
  {
    id: "research",
    title: "Research",
    slug: "research",
    icon: CategoryScienceIcon,
  },
  
];

export default mainCategoryConfig;
