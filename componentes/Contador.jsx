import react, {useState} from "react";
import { View,Text,Button } from "react-native";

const Contador = () => {
 const [count , setCount ] = useState(0);       //setCount -> Função

 const incrementar = () => {
    setCount(count + 1);
 }

 const decrementar = () => {
    setCount(count - 1);
 }

 return(
    <View>
        <Text>Contador: {count}</Text>
        <Button title="Incrementar" onPress={() => incrementar()}/>
        <Button title="Decrementar" onPress={() => decrementar()}/>
    </View>
 )
}
export default Contador;

