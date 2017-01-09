/**
 * Navigator 导航器 测试目的页
 * Created by liyanxi on 2016/12/9.
 */

import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);

        //事件绑定this
        this._pressButton = this._pressButton.bind(this);
    }

    _pressButton() {
        //跳转下一页
        const {navigator}= this.props;
        if (navigator) {
            navigator.pop();//入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
        }
    }

    render() {
        return (
            <View style={styles.parent}>
                <TouchableOpacity onPress={this._pressButton} style={styles.container}>
                    <Text style={styles.text}>React Native点击我返回上一页</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'gray'
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