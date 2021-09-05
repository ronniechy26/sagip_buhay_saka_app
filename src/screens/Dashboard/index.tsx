import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import Rainfall from './components/rainfall/Rainfall';
import Mintemp from './components/min_temp/Mintemp';
import Meantemp from './components/mean_temp/Meantemp';
import Maxtemp from './components/max_temp/Maxtemp';
import { IState } from '../../reducers/rootReducer';
import { asyncActions } from '../../reducers/DashboardReducer';
import { getDashboardStatus } from '../../selectors/DashboardSelectors';
import { IDashboardRainfall } from '../../models/DashboardModel';
import { Colors } from '../../theme';
import { ActivityIndicator } from 'react-native-paper';

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Dashboard : React.FC<IProps> = (props) => {
    const loading_rainfall = (props.status['GET_RAINFALL'] ? props.status['GET_RAINFALL'].fetching : false);
    const loading_mintemp = (props.status['GET_MIN_TEMP'] ? props.status['GET_MIN_TEMP'].fetching : false);
    const loading_meantemp = (props.status['GET_MEAN_TEMP'] ? props.status['GET_MEAN_TEMP'].fetching : false);
    const loading_maxtemp = (props.status['GET_MAX_TEMP'] ? props.status['GET_MAX_TEMP'].fetching : false);

    useEffect(() => {
        props.get_dashboard_rainfall(
            parseInt(props.user?.id ?? '1')
        );
        props.get_dashboard_mean_temp(
            parseInt(props.user?.id ?? '1')
        );
        props.get_dashboard_min_temp(
            parseInt(props.user?.id ?? '1')
        );
        props.get_dashboard_max_temp(
            parseInt(props.user?.id ?? '1')
        );
    }, [
        props.get_dashboard_rainfall, 
        props.get_dashboard_min_temp,
        props.get_dashboard_mean_temp,
        props.get_dashboard_max_temp,
        props.user
    ])

    if(loading_mintemp || loading_rainfall || loading_meantemp || loading_maxtemp){
        return(
            <ActivityIndicator
                color={Colors.primary}
                size="large"
                style={{
                    flex : 1,
                    justifyContent : 'center',
                    alignItems : 'center'
                }}
          />
        )
    }

    return (
        <View style={styles.containter}> 
            <ScrollView>
                <Rainfall 
                    data={props.rainfall as IDashboardRainfall[]}
                    status={props.status}
                />
                <Mintemp 
                    data={props.min_temp as IDashboardRainfall[]}
                    status={props.status}
                />
                <Meantemp 
                    data={props.mean_temp as IDashboardRainfall[]}
                    status={props.status}
                />
                <Maxtemp 
                    data={props.max_temp as IDashboardRainfall[]}
                    status={props.status}
                />
            </ScrollView>
        </View>
    )
}


const mapStateToProps = (state: IState) => ({
    user : state.UserReducer.data,
    rainfall : state.DashboardReducer.rainfall,
    min_temp : state.DashboardReducer.min_temp,
    mean_temp : state.DashboardReducer.mean_temp,
    max_temp : state.DashboardReducer.max_temp,
    status : getDashboardStatus(state),
});
  
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
    {
        get_dashboard_rainfall : asyncActions.get_dashboard_rainfall,
        get_dashboard_min_temp : asyncActions.get_dashboard_min_temp,
        get_dashboard_mean_temp : asyncActions.get_dashboard_mean_temp,
        get_dashboard_max_temp : asyncActions.get_dashboard_max_temp,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const styles= StyleSheet.create({
    containter : {
        flex : 1
    }
});
