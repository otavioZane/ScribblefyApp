import React, {useEffect} from 'react';
import {Container, InputLabel, InputText} from './styles';
import {View, FlatList, Text, StyleSheet, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = ({navigation}) => {
  const [places, setPlaces] = React.useState([]);
  const [nome, setNome] = React.useState('');
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');

  const handleRegisterPlace = async () => {
    // var data = JSON.stringify({
    //   nome: nome,
    //   latitude: latitude,
    //   longitude: longitude,
    // });
    // fetch('http://localhost:50629/api/localizacao', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: data,
    // }).then((response) => {
    //   if (response.status == 201) {
    //     Alert.alert('Sucesso', 'Cadastrado Com Sucesso!');
    //   } else {
    //     let error = new Error(response.statusText);
    //     Alert.alert('Erro', 'Houve um erro ao processar a requisição.');
    //     error.response = response;
    //     throw error;
    //   }
    // });

    try {
      var place = await AsyncStorage.getItem('places');
      var parsed = JSON.parse(place);
      parsed.push({nome, latitude, longitude});
      place = JSON.stringify(parsed);
      AsyncStorage.setItem('places', place);
      Alert.alert('Cadastrado com Sucesso');
    } catch (e) {
      var data = JSON.stringify([{nome, latitude, longitude}]);
      AsyncStorage.setItem('places', data);
    }
  };

  useEffect(async () => {
    // async function fetchData() {
    //   let url = 'http://localhost:50629/api/localizacao/lista';

    //   fetch(url, {
    //     method: 'GET',
    //   })
    //     .then((response) => response.json())
    //     .then((place) => {
    //       alert(place);
    //       if (place.length > 0) {
    //         setPlaces(place);
    //       } else {
    //         Alert.alert(
    //           'Nenhum local encontrado',
    //           'O que acha de cadastrar um endereço?',
    //         );
    //       }
    //     });
    // }
    // fetchData();

    try {
      var place = await AsyncStorage.getItem('places');
      var parsed = JSON.parse(place);
      setPlaces(parsed);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const styles = StyleSheet.create({
    MainContainer: {
      // Setting up View inside content in Vertically center.
      justifyContent: 'center',
      flex: 1,
      width: '100%',
      margin: 10,
    },

    item: {
      padding: 26,
      fontSize: 18,
      backgroundColor: '#fff',
      margin: 6,
      borderColor: '#ccc',
      borderRadius: 20,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <Container>
      <View style={styles.MainContainer}>
        <InputLabel>Nome</InputLabel>
        <InputText
          onChangeText={(text) => setNome(text)}
          placeholder="Nome..."
        />
        <InputLabel>Latitude</InputLabel>
        <InputText
          onChangeText={(text) => setLatitude(text)}
          placeholder="Latitude..."
        />
        <InputLabel>Longitude</InputLabel>
        <InputText
          onChangeText={(text) => setLongitude(text)}
          placeholder="Longitude..."
        />
        <Button
          onPress={() => handleRegisterPlace()}
          title="Cadastrar"
          textColor="#fff"
          backgroundColor="#000"
        />
        <FlatList
          data={places}
          renderItem={({item}) => (
            <View style={styles.item}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  {item.nome}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 10}}>
                  {item.latitude}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 10}}>
                  {item.longitude}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default Storage;
