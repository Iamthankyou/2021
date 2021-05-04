import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {path: '/', alia},
        {
        name:'teams',
        path: '/teams',
        components:{
            default: TeamsList,
            footer: TeamsFooter
        }, 
        meta:{needsAuth: true},
        alias:"/", 
        children:[
            {name: 'team-members', path: ':teamId', component:TeamMembers, props: true},// our-domain.com/team => TeamsList
        ]}, // our-domain.com/team => TeamsList
        
        {path: '/users',
        components:{
            default:UsersList,
            footer: UsersFooter
        },
        beforeEnter(to, from, next){
            next();
        }
        },
        
        {path: '/:notFound(.*)', component:NotFound}
    ],

    linkActiveClass: 'active',

    scrollBehavior(to, from, savedPosition){
        console.log(to,from,savedPosition);
        if (savedPosition){
            return savedPosition;
        }

        return {left:0, top:0};
    }
});

router.beforeEach((to, from, next)=>{
    // if (to.name === 'team-members'){
    //     next();
    // }
    // else{
    //     next({
    //         name: 'team-members',
    //         params: {teamId: 't2'}
    //     });  
    // }

    if (to.meta.needsAuth){
        console.log('Needs auth');
        next();
    }
    else{
        next();
    }
});

// router.afterEach((to, from)=>{
//     // sending analytics data


// });

const app = createApp(App)

app.use(router);

app.mount('#app');
