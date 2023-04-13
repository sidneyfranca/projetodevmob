import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text, useState,
  Image,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const App = () => {
  return (


    <SafeAreaView style={{ flex: 1 }}>
       <ScrollView>
      <View style={styles.geral}>
        <View style={styles.caixa}>
          <View>
          <Ionicons name="person-outline" size={50} color="black" />
          </View>

          <View style={styles.corpo}>
            <Text style={styles.texto}> Nome de Usuário </Text>
          </View>

        </View>
        <View style={styles.container}>
       
          <TouchableOpacity
          
            style={styles.botao}
            activeOpacity={0.5}>
             <MaterialCommunityIcons name="calendar-check-outline" size={60} color="black" style={styles.icon} />

            <Text style={styles.textoBotao}>
              MARCAR CONSULTA
            </Text>

          </TouchableOpacity>
        </View>
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.5}>
            <Image
              source={require('./assets/minhasConsultas.png')}
              style={styles.imagemBotao}
            />

            <Text style={styles.textoBotao}>
              MINHAS CONSULTAS
            </Text>

          </TouchableOpacity>
        </View>
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.5}>
            <Image
              source={require('./assets/minhaSaude.png')}
              style={styles.imagemBotao}
            />

            <Text style={styles.textoBotao}>
              MINHA SAÚDE
            </Text>

          </TouchableOpacity>
        </View>
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.5}>
            <MaterialCommunityIcons name="hospital-box-outline" size={50} color="black" style={styles.icon} />

            <Text style={styles.textoBotao}>
              MINHAS GUIAS MÉDICAS
            </Text>

          </TouchableOpacity>
        </View>
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.5}>
            <Image
              source={require('./assets/minhaSolicitacoes.png')}
              style={styles.imagemBotao}
            />

            <Text style={styles.textoBotao}>
              MINHAS SOLICITAÇÕES
            </Text>

          </TouchableOpacity>
        </View>
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.botao}
            activeOpacity={0.5}>
            <Image
              source={require('./assets/prefeituras.png')}
              style={styles.imagemBotao}
            />

            <Text style={styles.textoBotao}>
              PREFEITURAS  PARCEIRAS
            </Text>

          </TouchableOpacity>
          
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 80,
    borderRadius: 5,
    margin: 5,
  },
  imagemBotao: {
    
    margin: 10,
    height: 40,
    width: 60,
    resizeMode: 'stretch',
  },
  textoBotao: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    textAlign: "center",

  },

  corpo: {
    textAlign: 'justify',
    margin: 10,
    justifyContent: "flex-start",
    marginTop: 15,
  },

  geral: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },

  texto: {

    textAlign: 'justify',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",



  },
  caixa: {

    backgroundColor: '#87CEFA',
    marginTop: 60,
    flexDirection: 'row',
    padding: 40,
    margin: 20,
    borderRadius: 10,
  },
  img: {
    borderRadius: 100,
    borderColor: 'gray',
    borderWidth: 1,
    width: 60,
    height: 60,
  },
  icon:{
    justifyContent:'space-around',

  },

});

export default App;

