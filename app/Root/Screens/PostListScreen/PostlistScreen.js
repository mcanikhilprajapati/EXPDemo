import React, {Component} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './PostlistScreenStyle'
import {getPostList} from "../../../store/postlist";
import connect from "react-redux/es/connect/connect";
import _ from "lodash";
import plusButton from '../../../assets/plus.png';
import CustomRow from './itemView';
let _this = null;
class PostlistScreen extends Component {
    constructor(props) {
        super(props);

    }



    componentDidMount() {
        _this = this;
        this.props.getPostList()
    }

    static  navigationOptions = (navigation) => ({
        title: 'Post List',
        headerLeft: null,
        headerStyle: {
            color: 'black',
            textAlign: 'center',
            fontWeight: '500',

        },
        headerRight: <TouchableOpacity style={styles.image}
                                       onPress={() => {
                                           _this.props.navigation.navigate('AddPostScreen')
                                       }}>

            <Image source={plusButton}/>
        </TouchableOpacity>
    })

    // static navigationOptions = {
    //     title: 'REGISTRATION', // to add letter spacing on Android
    //     header: navigation => ({
    //         style: {
    //             backgroundColor: 'rgb(47, 54, 61)',
    //             shadowOpacity: 0
    //         },
    //         titleStyle: {
    //             color: '#fefefe',
    //             fontWeight: '300',
    //             justifyContent: 'space-between',
    //             textAlign: 'center'
    //         },
    //         tintColor: '#fefefe'
    //     })
    // }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.progressContainer}>
                    {this.props.isLoading &&

                    <ActivityIndicator size="large" style={styles.progressView}/>

                    }
                </View>
                <ScrollView>
                    {_.map(this.props.data, (item, index) => {
                        return (
                            <CustomRow
                                navigation={this.props.navigation}
                                item={item}
                            />
                        );
                    })}
                </ScrollView>

            </View>

        );
    }


}

const mapActionCreators = {
    getPostList
};

const mapStateToProps = state => {
    return {
        isLoading: state.postlist.loading,
        data: state.postlist.data,
        message: state.postlist.message
    };
};
export default connect(mapStateToProps, mapActionCreators)(PostlistScreen);
