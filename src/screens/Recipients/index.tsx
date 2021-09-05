import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import { ActivityIndicator, FAB , Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { IState } from '../../reducers/rootReducer';
import { asyncActions } from '../../reducers/RecipientReducer';
import { getRecipientStatus } from '../../selectors/RecipientSelector';
import { IRecipient } from '../../models/RecipientModel';
import RecipientCard from './components/RecipientCard';
import { Colors, Fonts } from '../../theme';

type IProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const Recipient : React.FC<IProps> = (props) =>{
    const scrollY = useRef(new Animated.Value(0)).current;
    const [searchQuery, setSearchQuery] = React.useState('');

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
            <View style={styles.header}>
                <Searchbar 
                    value={searchQuery} 
                    onChangeText={(e) => setSearchQuery(e) }
                    placeholder="Search"
                    iconColor={Colors.primary}
                    inputStyle={{
                        fontFamily : Fonts.REGULAR
                    }}
                    style={styles.shadow}
                    onSubmitEditing={(e) => {
                        console.log(e.nativeEvent.text)
                    }}
                />
            </View>
            <Animated.FlatList
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                        nativeEvent : {contentOffset : { y : scrollY}}
                }],{ useNativeDriver : true })}
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
             <FAB
                style={styles.fab}
                small={false}
                icon="contacts"
                uppercase={false}
                onPress={() => console.log('Pressed')}
                label={ scrollY === new Animated.Value(0) ? 'Add Recipient' : ''}
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
    },
    fab : {
        position: 'absolute',
        margin: 16,
        right: 10,
        bottom: 10,
        backgroundColor : Colors.primary,
        fontFamily : Fonts.SEMI_BOLD
    },
    header : {
        padding : 10
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width : 0,
            height : 10
        },
        shadowOpacity : 1,
        shadowRadius : 20,
        elevation: 8,
    },

})