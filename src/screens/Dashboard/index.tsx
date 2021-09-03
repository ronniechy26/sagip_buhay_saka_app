import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';

import Rainfall from './components/rainfall/Rainfall';
import { IState } from '../../reducers/rootReducer';
import { asyncActions } from '../../reducers/DashboardReducer';
import { getDashboardStatus } from '../../selectors/DashboardSelectors';
import { IDashboardRainfall } from '../../models/DashboardModel';
import { Colors } from '../../theme';

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Dashboard : React.FC<IProps> = (props) => {
    const loading_rainfall = (props.status['GET_RAINFALL'] ? props.status['GET_RAINFALL'].fetching : false);

    useEffect(() => {
        props.get_dashboard_rainfall(
            parseInt(props.user?.id ?? '1')
        );
    }, [
        props.get_dashboard_rainfall, 
        props.user
    ])

    return (
        <View style={styles.containter}> 
            <ScrollView>
                <Rainfall 
                    data={props.rainfall as IDashboardRainfall[]}
                    status={props.status}
                />
            </ScrollView>
            {/* <Spinner
                visible={loading_rainfall}
                color={Colors.primary}
            /> */}
        </View>
    )
}


const mapStateToProps = (state: IState) => ({
    user : state.UserReducer.data,
    rainfall : state.DashboardReducer.rainfall,
    status : getDashboardStatus(state),
});
  
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
    {
        get_dashboard_rainfall : asyncActions.get_dashboard_rainfall,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const styles= StyleSheet.create({
    containter : {
        flex : 1
    }
});
