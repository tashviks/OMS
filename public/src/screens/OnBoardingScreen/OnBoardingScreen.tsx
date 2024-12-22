import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CopilotStep, useCopilot } from 'react-native-copilot';
import Onboarding from 'react-native-onboarding-swiper';
const Dots = ({selected} : any) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);
const OnboardingScreen = ({navigation} : any) => {
    const handleSkip = () => {
        navigation.navigate('ProductScreen');
        // AsyncStorage.setItem('alreadyLaunched', 'true');
    }
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={handleSkip}
            onDone={() => {handleSkip()}}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../../assets/image.png')} style={{marginLeft: 225}} />,
                    title: 'Welcome to Infra.Market OMS',
                    subtitle: 'A single place for all your construction needs',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../../assets/ivas.png')} style={{marginLeft : 10 , height : 70 , width : 200 , objectFit : 'contain'}} />,
                    title: 'Huge Range of Products',
                    subtitle: 'Get the best deals on all construction materials',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../../assets/image.png')} style={{marginLeft: 225}}/>,
                    title: 'Get Started',
                    subtitle: "Enter the world of a hassle-free construction experience",
                },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    gap : 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});