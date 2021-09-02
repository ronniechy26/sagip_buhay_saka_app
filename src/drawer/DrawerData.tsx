import React, { ComponentType } from 'react';
import Dashboard from "../screens/Dashboard";

const data : IData[] = [
    {
        name  : 'Dashboard',
        component: Dashboard,
        iconName : 'home'
    },
    {
        name  : 'Recipient',
        component: Dashboard,
        iconName : 'address-card'
    },
    {
        name  : 'Advisory',
        component: Dashboard,
        iconName : 'cloud-sun-rain'
    },
    {
        name  : 'Feedbacks',
        component: Dashboard,
        iconName : 'comments'
    },
    {
        name  : 'Configuration',
        component: Dashboard,
        iconName : 'cogs'
    },
    {
        name  : 'Users',
        component: Dashboard,
        iconName : 'users'
    },
]

export default data;

export type IData = {
    name : string
    component: ComponentType<any>,
    iconName : string
}