import React, { useContext } from "react";
// import { initializeApp, getApps } from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme, themeColor } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";
//Screens
import Home from "../screens/Home";
import Vehicle from "../screens/Vehicle";
import Profile from "../screens/Profile";
import Loading from "../screens/utils/Loading";
// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";
import Map from "../screens/Map";
// import { AuthContext } from "../provider/AuthProvider";

// Better put your these secret keys in .env file
// const firebaseConfig = {
//   apiKey: "AIzaSyB0OgvpyUiN4BYTOFwsD61fHShh1JiUk08",
//   authDomain: "",
//   databaseURL: "",
//   projectId: "project-map-374713",
//   storageBucket: "project-map-374713.appspot.com",
//   messagingSenderId: "",
//   appId: "",
// };

// if (getApps().length === 0) {
//   initializeApp(firebaseConfig);
// }

const AuthStack = createNativeStackNavigator();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="Map" component={Map} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"person"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Vehicle"
        component={Vehicle}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Vehicle" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"car"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  //   const auth = useContext(AuthContext);
  //   const user = auth.user;
  return (
    <NavigationContainer>
      {/* {user == null && <Loading />} */}
      {/* {user == false && <Auth />} */}
      {/* {user == true && <Main />} */}
      <Main />
    </NavigationContainer>
  );
};
