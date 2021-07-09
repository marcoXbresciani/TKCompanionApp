import * as React from 'react';
import {
        Button,
        SafeAreaView,
        StatusBar,
        Text,
        View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import {createStackNavigator} from '@react-navigation/stack';

function Home({navigation}) {
        const Title = styled(Text)`
                font-size: 25px;
                text-align: center;
                font-family: serif;
        `;

        return (
                <SafeAreaView>
                        <StatusBar />
                        <View>
                                <Title>Toyota Kata Companion App</Title>
                        </View>
                </SafeAreaView>
        );
}

function Card5QFront({navigation}) {
        return (
                <SafeAreaView>
                        <StatusBar />
                        <View>
                                <Text>The Five Questions</Text>

                                <Button
                                        title="Turn Card Over"
                                        onPress={() =>
                                                navigation.navigate(
                                                        'Reflect on the Last Step Taken',
                                                )
                                        }
                                />
                        </View>
                </SafeAreaView>
        );
}

function Card5QBack({navigation}) {
        return (
                <SafeAreaView>
                        <StatusBar />
                        <View>
                                <Text>
                                        Reflect on the Last Step Taken
                                </Text>
                        </View>
                </SafeAreaView>
        );
}

const Card5QStack = createStackNavigator();

function Card5QStackScreen() {
        return (
                <Card5QStack.Navigator>
                        <Card5QStack.Screen
                                name="The Five Questions"
                                component={Card5QFront}
                        />
                        <Card5QStack.Screen
                                name="Reflect on the Last Step Taken"
                                component={Card5QBack}
                        />
                </Card5QStack.Navigator>
        );
}

const Tab = createMaterialBottomTabNavigator();

function App() {
        return (
                <NavigationContainer>
                        <Tab.Navigator initialRouteName={'Home'}>
                                <Tab.Screen
                                        name="Home"
                                        component={Home}
                                        options={{
                                                tabBarLabel: 'Home',
                                                tabBarIcon: ({
                                                        color,
                                                }) => (
                                                        <MaterialCommunityIcons
                                                                name="home"
                                                                color={
                                                                        color
                                                                }
                                                                size={
                                                                        26
                                                                }
                                                        />
                                                ),
                                        }}
                                />
                                <Tab.Screen
                                        name="5Q Card"
                                        component={Card5QStackScreen}
                                        options={{
                                                tabBarLabel: '5Q Card',
                                                tabBarIcon: ({
                                                        color,
                                                }) => (
                                                        <MaterialCommunityIcons
                                                                name="forum"
                                                                color={
                                                                        color
                                                                }
                                                                size={
                                                                        26
                                                                }
                                                        />
                                                ),
                                        }}
                                />
                        </Tab.Navigator>
                </NavigationContainer>
        );
}

export default App;
