import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import ContactManager from "@/views/ContactManager";
import AddContact from "@/views/AddContact";
import ViewContact from "@/views/ViewContact";
import EditContact from "@/views/EditContact";
import PageNotFound from "@/views/PageNotFound";

const routes = [
  {
    path: "/",
    name: "HomeView",
    redirect: "/contacts",
    component: HomeView,
  },
  {
    path: "/contacts",
    name: "ContactManager",
    component: ContactManager,
  },
  {
    path: "/contacts/add",
    name: "AddContact",
    component: AddContact,
  },
  {
    path: "/contacts/edit/:contactid",
    name: "EditContact",
    component: EditContact,
  },
  {
    path: "/contacts/edit/:contactid",
    name: "EditContact",
    component: EditContact,
  },
  {
    path: "/contacts/view/:contactid",
    name: "ViewContact",
    component: ViewContact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
