const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HOME from "./screens/HOME";
import A1KaraDetail from "./screens/A1KaraDetail";
import Ellipse from "./components/Ellipse";
import Rectangle from "./components/Rectangle";
import A21dNg from "./screens/A21dNg";
import A21cKtQu from "./screens/A21cKtQu";
import A21bGc from "./screens/A21bGc";
import A21aPlay from "./screens/A21aPlay";
import A21HngDn from "./screens/A21HngDn";
import A22VidBack1 from "./screens/A22VidBack1";
import A22aVidPlay from "./screens/A22aVidPlay";
import A22VidBack from "./screens/A22VidBack";
import A22KaraokeVideo from "./screens/A22KaraokeVideo";
import A21KaraokeMicro from "./screens/A21KaraokeMicro";
import AHt from "./screens/AHt";
import HOME1 from "./screens/HOME1";
import Frame from "./screens/Frame";
import YCInterviewDefault from "./screens/YCInterviewDefault";
import YCInterview2 from "./screens/YCInterview2";
import YCInterview1 from "./screens/YCInterview1";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding4 from "./screens/Onboarding4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Black": require("./assets/fonts/Nunito-Black.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A1KaraDetail"
              component={A1KaraDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21dNg"
              component={A21dNg}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21cKtQu"
              component={A21cKtQu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21bGc"
              component={A21bGc}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21aPlay"
              component={A21aPlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21HngDn"
              component={A21HngDn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A22VidBack1"
              component={A22VidBack1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A22aVidPlay"
              component={A22aVidPlay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A22VidBack"
              component={A22VidBack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A22KaraokeVideo"
              component={A22KaraokeVideo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21KaraokeMicro"
              component={A21KaraokeMicro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AHt"
              component={AHt}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HOME1"
              component={HOME1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YCInterviewDefault"
              component={YCInterviewDefault}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YCInterview2"
              component={YCInterview2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YCInterview1"
              component={YCInterview1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding4"
              component={Onboarding4}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
