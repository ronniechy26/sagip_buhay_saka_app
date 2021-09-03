import { IState } from '../reducers/RootReducer';
import { MONTHS } from "../constants";
import { IDashboardRainfall } from "../models/DashboardModel";

export const getDashboardStatus = ( state: IState): any => state.DashboardReducer.status;

export const ModifyData = (param :  Array<IDashboardRainfall>  = []) =>{
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
            normal : normal ? convertStringToInt( 
                normal [ monthText ]
            ) : 0,
            el_nino: el_nino ? convertStringToInt( 
                el_nino[ monthText ] 
            ): 0,
            la_nina: la_nina ? convertStringToInt(
                la_nina[ monthText ]
            ) : 0,
            actual_year: actual_year ? convertStringToInt(
                actual_year[ monthText ]
            ) : 0,
            projection_2050: projection ? convertStringToInt(
                projection[ monthText ]
            ) : 0,
            forecast: forecast ? convertStringToInt(
                forecast[ monthText ]
            ) : 0,
        }
    })

    return data;
}

const convertStringToInt = (number : string) : number => {
    return parseInt(number);
}   