import {createRouter, createWebHashHistory} from "vue-router";
import Question from "@/components/Question.vue";
import Main from "@/components/Main.vue";

const routes = [
    {path: '/', component: Main},
    {path: '/game', component: Question},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

