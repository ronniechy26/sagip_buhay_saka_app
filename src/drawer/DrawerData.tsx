import { ComponentType } from 'react';
import Dashboard from "../screens/Dashboard";
import Recipient from '../screens/Recipients';
import Advisories from '../screens/Advisories';
import Feedback from '../screens/Feedback';
import Configuration from '../screens/Configuration';
import Users from '../screens/Users';

const data : IData[] = [
    {
        name  : 'Dashboard',
        component: Dashboard,
        iconName : 'home'
    },
    {
        name  : 'Recipient',
        component: Recipient,
        iconName : 'address-card'
    },
    {
        name  : 'Advisory',
        component: Advisories,
        iconName : 'cloud-sun-rain'
    },
    {
        name  : 'Feedbacks',
        component: Feedback,
        iconName : 'comments'
    },
    {
        name  : 'Configuration',
        component: Configuration,
        iconName : 'cogs'
    },
    {
        name  : 'Users',
        component: Users,
        iconName : 'users'
    },
]

export default data;

export type IData = {
    name : string
    component: ComponentType<any>,
    iconName : string
}