import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "./views/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: MainLayout,
      redirect: "/dashboard", // 自动重定向到 /dashboard
      children: [
        {
          path: "dashboard", // 子路径无需再加 /
          name: "KnowledgeGrid",
          component: () => import("./views/KnowledgeList.vue"),
        },
        {
          path: "/homedocuments", // 子路径无需再加 /
          name: "HomeDocuments",
          component: () => import("./views/HomeDocuments.vue"),
        },
      ],
    },
    {
      path: "/directory",
      name: "Directory",
      component: () => import("./views/Directory.vue"),
      children: [
        {
          path: "",
          name: "DirectoryList",
          component: () => import("./views/DirectoryList.vue"),
        },
        {
          path: "/directory/:id",
          name: "Document content",
          component: () => import("./views/DocumentContent.vue"),
        },
      ],
    },
  ],
});

export default router;
