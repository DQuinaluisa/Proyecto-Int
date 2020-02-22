import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Right, Text, Button, Icon, Left, Body, Input } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class Inicio extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Input>Nombre Producto</Input>
                                    <Text note>Categoria</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'Image URL' }} style={{ height: 130, width: 150, flex: 1 }} />
                                <Input>
                                    Descripción
                                </Input>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Input>Contacto</Input>
                            </Body>
                            <Body>
                                <Text>Precio</Text>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.botones}>
                            <Body>
                                <Body>
                                    <Button small light style={styles.botones1} >
                                        <Entypo name='edit' size={15} style={styles.icono}></Entypo>
                                        <Text>Editar</Text>
                                    </Button>
                                </Body>
                            </Body>
                            <Body>
                                <Body>
                                    <Button small light style={styles.botones2}>
                                        <Entypo name='cup' size={15} style={styles.icono}></Entypo>
                                        <Text>Eliminar</Text>
                                    </Button>
                                </Body>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}



const styles = StyleSheet.create({
    
    botones: {
        right: 5,
    },
    botones1: {
        right: 9
    },
    botones2: {
        right: 7
    },
    icono: {
        left: 10
    },
    

})