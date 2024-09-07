import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import{useForm, Controller} from 'react-hook-form';
import {ref, push, onValue} from 'firebase/database'
import { database } from "../Firebase";

export default function Entrada (){
    const [message, setMessage ]=useState('');
    const [messages, setMessages ]=useState<any[]>([]);
    useEffect(()=>{
        const messageRef =ref(database,'messages/')
        onValue(messageRef,(snapshot)=>{
            const data=snapshot.val();
            const messagesArray=data? Object.values(data):[];
            setMessages(messagesArray)
        } );
    },[]);

    const handle = () =>{
        const messagesRef =ref(database,'messages/')
        push(messagesRef,{text:message,timestamp:Date.now()})
        setMessage('');
    };
    return(
        <View>
           <FlatList
            data={messages}
            renderItem={({item})=><Text>{item.Text}</Text>}
            keyExtractor={(item,index)=>index.toString()}
           />  
           <TextInput
            placeholder="Envio de mensaje a Facebook"
            value={message}
            onChangeText={setMessage}
           />
           <Button title="Envio" onPress={handle}/>
        </View>

    )


}