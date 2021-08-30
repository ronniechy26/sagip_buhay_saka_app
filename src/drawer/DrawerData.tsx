const data : IData[] = [
    {
        name  : 'Dashboard',
        // component: JSX.Element,
        iconName : 'home'
    },
    {
        name  : 'Recipient',
        // component: JSX.Element,
        iconName : 'address-card'
    },
    {
        name  : 'Advisory',
        // component: JSX.Element,
        iconName : 'cloud-sun-rain'
    },
    {
        name  : 'Feedbacks',
        // component: JSX.Element,
        iconName : 'comments'
    },
    {
        name  : 'Configuration',
        // component: JSX.Element,
        iconName : 'cogs'
    },
    {
        name  : 'Users',
        // component: JSX.Element,
        iconName : 'users'
    },
]

export default data;

export type IData = {
    name : string
    // component: JSX.Element,
    iconName : string
}