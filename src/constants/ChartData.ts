import { Colors } from "../theme";

export const chartData : IChartData[] = [ 
    {
        key : 'Normal Data',
        color : Colors.normal_data
    },
    {
        key : 'El Nino',
        color : Colors.el_nino
    },
    {
        key : 'La Nina',
        color : Colors.la_nina
    },
    {
        key : 'Forecast',
        color : Colors.forecast
    },
    {
        key : 'Actual Year',
        color : Colors.actual_year
    },
    {
        key : '2050 Projection',
        color : Colors.projection_5050
    }
]

export interface IChartData {
    key : string;
    color : string;
}