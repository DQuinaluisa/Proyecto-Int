
import React, { Component } from 'react';
import { Image, StyleSheet, KeyboardAvoidingView, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Item, Input, Left, Body, Right, Title } from 'native-base';

const url = "http://172.16.11.34:5000/getRecicladoras";


export default class Detalle extends Component {
  state = {
    refreshing: false,
    recicladoras : []
  };

  getData = ()=> {
     fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          recicladoras: JSON.stringify(responseJson)
        });
        console.log(this.state.recicladoras)
      })
      .catch((error) => {
        console.error(error);
      });

  }

  componentDidMount() {
    this.getData();
  };
  


  render() {
    this.state.recicladoras   
    if (this.state.isLoading) {
      return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <ActivityIndicator size="large" />

        </View>

      );

    }
    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.recicladoras}
          renderItem={({ item }) =>
        <Content>
          <KeyboardAvoidingView behavior="padding">
            <Card>
              <CardItem style={styles.card}>
                <Left>
                  <Body>
                    <Item >
                      <Text style= {styles.titulo}>
                        {item.nombre}
                    </Text>
                    </Item>
                  </Body>
                </Left>
              </CardItem>
              <CardItem style={styles.card}>
                <Body>
                  <Item >
                    <Text style= {styles.titulo}>
                      {item.contacto}
                </Text>
                  </Item>
                </Body>
              </CardItem>
              <CardItem style={styles.card}>
                <Left>
                  <Item >
                    <Text style={styles.titulo}>
                      {item.descripcion}
                </Text>
                  </Item>
                </Left>
                <Right>
                  <Item >
                    <Text style={styles.titulo}>
                      Horario
                </Text>
                  </Item>
                </Right>
              </CardItem>
              <CardItem style={styles.card}>
                <Body>
                  <Item >
                    <Text>
                    {item.direccion}
                </Text>
                  </Item>
                </Body>
              </CardItem>
             
            </Card>
          </KeyboardAvoidingView>
        </Content>
        }
        keyExtractor={item => item.id}
      />
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  botones: {
    paddingTop: 55,
    paddingBottom: 72
  },
  botones2: {
    right: 7,
  },
  container: {
    paddingTop: 11,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 45,
  },
  card: {
    paddingTop: 25,
  },
  titulo: {
    paddingBottom: 1,
    fontSize: 15,
    textTransform: 'uppercase'

  },
  pelicula: {
    backgroundColor: '#FFFF',
    width: 290,
    height: 160,
    marginLeft: 25,
  },

})