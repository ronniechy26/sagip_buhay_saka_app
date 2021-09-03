import { IState } from '../reducers/RootReducer';
import { MONTHS } from "../constants";
import { IDashboardRainfall } from "../models/DashboardModel";

export const getDashboardStatus = ( state: IState): any => state.DashboardReducer.status;

export const modifyData = (param :  Array<IDashboardRainfall>  = []) =>{
    const normal = param.find(x => x.data_input === 'Normal Data');
    const el_nino = param.find(x => x.data_input === 'El Nino');
    const la_nina = param.find(x => x.data_input === 'La Nina');
    const actual_year = param.find(x => x.data_input === 'Actual Year');
    const projection = param.find(x => x.data_input === '2050 Projection');
    const forecast = param.find(x => x.data_input === 'Forecast');

    const data = MONTHS.map((item, index) =>{
        const monthText = item.text;

        return{
            id: index,
            month: item.text,
            normal : normal ? parseInt( 
                normal [ monthText ]
            ) : 0,
            el_nino: el_nino ? parseInt( 
                el_nino[ monthText ] 
            ): 0,
            la_nina: la_nina ? parseInt(
                la_nina[ monthText ]
            ) : 0,
            actual_year: actual_year ? parseInt(
                actual_year[ monthText ]
            ) : 0,
            projection_2050: projection ? parseInt(
                projection[ monthText ]
            ) : 0,
            forecast: forecast ? parseInt(
                forecast[ monthText ]
            ) : 0,
        }
    })

    return data;
}

export const getDashboardData = (
    param :  Array<IDashboardRainfall> = [], 
    key : string
)  =>{
    const dataObject = param.find(x => x.data_input === key);
    const dataArray = MONTHS.map((item, index) =>{
        return{
            x : item.text.substring(0,3).toLocaleUpperCase(),
            y : dataObject ? parseInt(dataObject[item.text]) : 0
        }
    });
    return dataArray;
}