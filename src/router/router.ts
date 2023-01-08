import {createRouter, createWebHashHistory} from "vue-router";
import Question from "@/components/game/Question.vue";
import Main from "@/components/Main.vue";
import CreateGame from "@/components/created-game/CreateGame.vue"

const routes = [
    {path: '/', component: Main},
    {path: '/game', component: Question},
    {path: '/new_game', component: CreateGame},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

