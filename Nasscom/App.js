/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import store from './src/store/store';
import {Provider} from 'mobx-react';
import MyApp from './src/routes/app-routes';

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <MyApp/>
            </Provider>
        );
    }
}