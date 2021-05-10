import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
//Local dir
import {Home,AddArticle} from "../screen";

const Stack = createStackNavigator();

export const Navigator = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="AddArticle" options={{title: 'Add Article'}} component={AddArticle}/>
        </Stack.Navigator>
    </NavigationContainer>
}