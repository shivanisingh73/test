import React, {Component} from 'react';
import {View,Text,Button} from 'react-native';
import md5 from 'md5';

export default class Login extends Component{

    componentWillMount()
    {   
        let timestamp= Date.now();
        console.warn('timestamp',timestamp);
        let k1=''; 
        let k2=''; //k1,k2 and api is disclosed
        hex_md5v = md5(k1+k2+timestamp);
        console.warn('hash',hex_md5v);
        this.state.body[0].hash=hex_md5v
        this.state.body[0].timestamp = timestamp
        this.setState({body:this.state.body})
        console.warn("state value",this.state.body)
    }

    state={
        body:[
            {
                "email": "shivanis0703@gmail.com",
                "hash": "" ,
                "timestamp": ""
            }
        ],
      data:[]
    }

    async getotp(){
        console.warn('inside getotp', this.state.body)
        await fetch('api',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.body[0])
        })
        .then(response=> response.json())
        .then((responsejson)=>{
            this.setState(
                {data:responsejson}
            )
            console.warn('data',responsejson)
        })
    }
    render(){
        return(
            <View>
                <Button
                title='get otp'
                onPress={()=> this.getotp()}
                />
            </View>

        );
    }
}