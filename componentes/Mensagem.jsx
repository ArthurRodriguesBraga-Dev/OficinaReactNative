import React, {useState, useEffect} from "react";
import { View, Text } from 'react-native'

const Mensagem = () => {
    const [mensagem, setMensagem] = useState('Olá');

    useEffect(()=>{
        const time = setTimeout(()=>{setMensagem('Bem, vindo')}, 3000)
    }, [])

    return(
        <View>
            <Text>{mensagem}</Text>
        </View>
    )
}

export default Mensagem;