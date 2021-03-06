import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import BaseCard from './components/UI/BaseCard.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);
app.component('base-card', BaseCard);
app.component('course-goals', CourseGoals);
app.component('active-goals', ActiveGoals);
app.component('manage-goals', ManageGoals);

app.mount('#app');
