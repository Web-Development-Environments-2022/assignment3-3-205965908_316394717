import About from "./pages/AboutPage";
import MyRecipes from "./pages/MyRecipesPage";
import FamilyRecipes from "./pages/FamilyRecipesPage";
import Favorite from "./pages/FavoritesPage";
import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("./pages/CartPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/myRecipes",
    name: "myRecipes",
    component: MyRecipes,
  },
  {
    path: "/familyRecipes",
    name: "familyRecipes",
    component: FamilyRecipes,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorite,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
