import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, FlatList, Dimensions, Animated } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { IState } from '../../reducers/rootReducer';
import { asyncActions } from '../../reducers/RecipientReducer';
import { getRecipientStatus } from '../../selectors/RecipientSelector';
import { IRecipient } from '../../models/RecipientModel';
import RecipientCard from './components/RecipientCard';
import { Colors } from '../../theme';

const { width, height } = Dimensions.get('screen');
const SPACING = 20;

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Recipient : React.FC<IProps> = (props) =>{
    const scrollY = useRef(new Animated.Value(0)).current;
    const loading_fetch = (props.status['RECIPIENT_FETCH_LIST'] ? props.status['RECIPIENT_FETCH_LIST'].fetching : false);

    useEffect(() => {
        props.fetch_recipients();
    }, [])

    if(loading_fetch ){
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
    return(
        <View style={styles.container}>
            <Animated.FlatList
                onScroll={Animated.event([
                    {
                        nativeEvent : {contentOffset : { y : scrollY}}
                    }
                ], { useNativeDriver : true })}
                contentContainerStyle={{padding : 10}}
                data={props.list as IRecipient[] ?? []}
                keyExtractor={(item) => item.id }
                renderItem={( { item, index }) =>{
                    return(
                        <RecipientCard 
                            item={item}
                            index={index}
                            scrollY={scrollY}
                        />
                    )
                }}
            />
        </View>
    )
}

const mapStateToProps = (state: IState) => ({
    list : state.RecipientReducer.list_recipient,
    status : getRecipientStatus(state)
});
  
const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
    {
        fetch_recipients : asyncActions.fetch_recipients
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Recipient);

const styles = StyleSheet.create({
    container : {
        flex : 1,
    }

})