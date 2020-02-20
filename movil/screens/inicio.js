import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Right, Text, Button, Icon, Left, Body } from 'native-base';

export default class Inicio extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Nombre Producto</Text>
                                    <Text note>Categoria</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'Image URL' }} style={{ height: 150, width: 150, flex: 1 }} />
                                <Text>
                                    Descripción
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>Contacto</Text>
                            </Body>
                            <Body>
                                <Text>Precio</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

