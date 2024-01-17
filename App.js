import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notes from "./Screens/Notes";
import Planner from "./Screens/Planner";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Notes') {
            iconName = focused
             ? 'book' 
             : 'book-outline';
          } else if (route.name === 'Planner') {
             iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
         activeTintColor: 'tomato',
         inactiveTintColor: 'gray',
      }}
      >
       <Tab.Screen name="Notes" component={Notes} options={{headerShown:false}}/>
        <Tab.Screen name="Planner" component={Planner} options={{headerShown:false}}/>

      </Tab.Navigator>
      </NavigationContainer>
  );

}


export default BottomTabNavigator 