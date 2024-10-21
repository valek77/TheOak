import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';





async function getUUID(){
    let uuid =  await AsyncStorage.getItem("uuid");

    if(!uuid){
        uuid = Crypto.randomUUID();
        AsyncStorage.setItem("uuid",uuid);
    }

    
    console.log(uuid);
    return uuid;

}

export default {getUUID}