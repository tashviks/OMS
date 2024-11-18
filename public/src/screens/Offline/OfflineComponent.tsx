import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const OfflineComponent: React.FC = ({navigation} : any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>You are offline</Text>
            <Text style={styles.text}>Please check your internet connection and try again.</Text>
            <View style={{height : 30}}></View>
            <Button title="GO BACK" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        textAlign: 'center' as 'center',
        backgroundColor: '#ffff',
        color: '#fff',
        marginTop: 350,
    },
    header: {
        fontSize: 32,
        marginBottom: 16,
        color : '#000'
    },
    text: {
        color: '#000',
        fontSize: 16,
    },
});

export default OfflineComponent;