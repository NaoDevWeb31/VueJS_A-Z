import Accueil from "./components/Accueil";
import Articles from "./components/Articles";
import Page2 from "./components/Page2";
import Post from "./components/Post";

export default [
  { path: "/", component: Accueil },
  { path: "/blogposts", component: Articles },
  { path: "/page2", component: Page2 },
  { path: "/blogposts/:id", component: Post },
];
