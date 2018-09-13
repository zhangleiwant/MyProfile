/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    PanResponder,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};


        this.pan = PanResponder.create({
            //设置成为响应者
            onstartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onModeShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => true,

            //开始手势操作  ，准备工作
            onPanResponderGrant: (evt, gestureState) => {
                this.state.eventName = '触摸开始';
                this.forceUpdate();
            },
            //手势移动操作，可以获取到移动位置信息
            onPanResponderMove: (evt, gestureState) => {
                var _pos = 'x:' + gestureState.moveX + 'y:' + gestureState.moveY;
                this.setState({eventName: '移动', pos: _pos})

                console.log('onPanResponderMove evt changedTouches:'+evt.nativeEvent.changedTouches.length)
                console.log('onPanResponderMove evt identifier:'+evt.nativeEvent.identifier)
                console.log('onPanResponderMove evt locationX:'+evt.nativeEvent.locationX)
                console.log('onPanResponderMove evt pageX:'+evt.nativeEvent.pageX)
                console.log('onPanResponderMove evt target:'+evt.nativeEvent.target)
                console.log('onPanResponderMove evt timestamp:'+evt.nativeEvent.timestamp)
                console.log('onPanResponderMove evt touches:'+evt.nativeEvent.touches.length)
                console.log('onPanResponderMove gestureState stateID:'+gestureState.stateID)
                // console.log('onPanResponderMove gestureState x0:'+gestureState.x0)
                // console.log('onPanResponderMove gestureState x1:'+gestureState.x1)//undefined
                // console.log('onPanResponderMove gestureState moveX:'+gestureState.moveX)
                // console.log('onPanResponderMove gestureState y0:'+gestureState.y0)
                // console.log('onPanResponderMove gestureState moveY:'+gestureState.moveY)
                // console.log('onPanResponderMove gestureState dx:'+gestureState.dx)
                // console.log('onPanResponderMove gestureState dy:'+gestureState.dy)
                console.log('onPanResponderMove gestureState vx:'+gestureState.vx)
                // console.log('onPanResponderMove gestureState vy:'+gestureState.vy)
                // console.log('onPanResponderMove gestureState numberActiveYouches:'+gestureState.numberActiveTouches)

            },
            //手势响应即将结束操作，用户手指离开屏幕
            onPanResponderRelease: (evt, gestureState) => {
                this.setState({eventName: '抬手'})


            },

            //手势响应真正结束了，已经失去响应焦点
            onPanResponderTerminate: (evt, gestureState) => {
                this.setState({eventName: '另一个组件已经成为新的响应器'})
            }


        })
    }

    render() {
        return (
            <View style={styles.container} {...this.pan.panHandlers}>
                <Text style={styles.welcome}>
                    eventName:{this.state.eventName}{this.state.pos}
                </Text>
                <Text style={styles.welcome}>
                    e1{this.state.pos}
                </Text>
                <Text style={styles.welcome1}>
                    e2{this.state.pos}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        flexWrap:'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf:'center',
        margin: 10,
    },
    welcome1: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf:'flex-end',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
