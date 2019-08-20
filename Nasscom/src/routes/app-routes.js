import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Login from '../components/Login/Login';

const Rootstack = createStackNavigator({
    Login: {
        screen: Login
    }
})
const App = createAppContainer(Rootstack);
export default App;