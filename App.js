import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './componentes/Contador';
import Hello from './componentes/Hello';
import Mensagem from './componentes/Mensagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Mensagem></Mensagem>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
