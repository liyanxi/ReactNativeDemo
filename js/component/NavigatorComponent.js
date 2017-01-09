/**
 * 导航器封装
 * Created by liyanxi on 2016/12/8.
 */

import React, {Component, PropTypes} from 'react';
import {Navigator} from 'react-native';

import FirstPageComponent from './navigator/FirstPageComponent';

export default class NavigatorComponent extends React.Component {

    static defaultProps = {
        defaultName: 'FirstPageComponent',
        defaultComponent: FirstPageComponent //默认当前加载组件
    };

    render() {
        return (
            <Navigator
                initialRoute={{name: this.props.defaultName, component: this.props.defaultComponent}} //参数可自定义
                renderScene={ (route, navigator) => {
                    let IntentComponent = route.component;//需要展示的组件，即initialRoute中的component
                    return <IntentComponent {...route.params} navigator={navigator}/>
                }}
                configureScene={(route)=> {
                    return Navigator.SceneConfigs.VerticalUpSwipeJump;//页面跳转动画
                }}
            />
        );
    }
}