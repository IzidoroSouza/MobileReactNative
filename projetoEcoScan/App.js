import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.containerGlobal}>
      <View style={styles.logo}>
  <View style={styles.logoText}>
    <Text>Eco</Text>
    <Text>Scan</Text>
  </View>
  <TouchableOpacity style={styles.botaoInfos}>
    <Text>?</Text>
  </TouchableOpacity>
</View>
      <View style={styles.containerCentral}>
      <Text>Scanner </Text>
      <Text>Reciclavel</Text>
      <TouchableOpacity style={styles.botaoScanner}>
        <Text>SCANEAR</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerGlobal: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',//verticalmente
  justifyContent:'center',
  backgroundColor:'grey',

  },
  botaoScanner:{
  color:'white',
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'green',
  width:155,
  height:30,
  borderRadius:10,
  },
  containerCentral:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  logo: {
  width: '100%',
  height: 80,
  justifyContent: 'center',
  position: 'relative',
  marginTop: 10,
},

  logoText: {
  position: 'absolute',
  left: '50%',
  transform: [{ translateX: -50 }],
  alignItems: 'center',
},

  botaoInfos: {
  position: 'absolute',
  right: 20,
  top: 15,
  backgroundColor: 'green',
  width: 50,
  height: 50,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
},

});
