export * from './actionContants';
export * from './ChartData';

type IMonths = {
    text : "january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december";
    value : number
}

export const MONTHS : IMonths[] =[
    { text: 'january', value: 1 }, 
    { text: 'february', value: 2 }, 
    { text: 'march', value: 3 }, 
    { text: 'april', value: 4 }, 
    { text: 'may', value: 5 }, 
    { text: 'june', value: 6 }, 
    { text: 'july', value: 7 }, 
    { text: 'august', value: 8 }, 
    { text: 'september', value: 9 }, 
    { text: 'october', value: 10 }, 
    { text: 'november', value: 11 }, 
    { text: 'december', value: 12 }, 
]