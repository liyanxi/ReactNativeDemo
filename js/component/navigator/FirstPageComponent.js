/**
 * Navigator 导航器 测试第一屏(主页)
 * Created by liyanxi on 2016/12/9.
 */

import React, {Component} from 'react';
import {View,TouchableOpacity, Text, StyleSheet} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);

        //事件绑定this
        this._pressButton=this._pressButton.bind(this);
    }

    _pressButton() {
        //跳转下一页
        const navigator= this.props.navigator;
        navigator.push({
            name: 'SecondPageComponent',
            component: SecondPageComponent //入栈把当前的页面加入栈，这里就进入SecondPageComponent页面
        });
    }

    render() {
        return (
            <View style={styles.parent}>
                <TouchableOpacity onPress={this._pressButton} style={styles.container}>
                    <Text style={styles.text}>React Native点击我跳转下一页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
        backgroundColor: 'green'
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize:20,
        color: 'white',
    }
});