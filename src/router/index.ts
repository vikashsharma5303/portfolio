import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectView from "../views/ProjectView.vue";
import SkillView from "../views/SkillView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    },
    {
        path: "/project",
        name: "project",
        component: ProjectView
    },
    {
        path: "/skills",
        name: "skills",
        component: SkillView
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
    routes,
});

export default router;
