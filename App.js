const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import A21bGc from "./screens/A21bGc";
import A21aPlay from "./screens/A21aPlay";
import A21HngDn from "./screens/A21HngDn";
import A22VidBack1 from "./screens/A22VidBack1";
import A22VidBack from "./screens/A22VidBack";
import A22aVidPlay from "./screens/A22aVidPlay";
import A22KaraokeVideo from "./screens/A22KaraokeVideo";
import A21KaraokeMicro from "./screens/A21KaraokeMicro";
import A1KaraDetail from "./screens/A1KaraDetail";
import TargetPop from "./screens/TargetPop";
import Lyric from "./components/Lyric";
import Luyn from "./screens/Luyn";
import ALuynTp from "./screens/ALuynTp";
import GiaoLu from "./screens/GiaoLu";
import BrokenCrossSmall from "./components/BrokenCrossSmall";
import A21cKtQu from "./screens/A21cKtQu";
import AHt from "./screens/AHt";
import HOME1 from "./screens/HOME1";
import Loader from "./components/Loader";
import Loader1 from "./components/Loader1";
import Loader2 from "./components/Loader2";
import Loader3 from "./components/Loader3";
import Loader4 from "./components/Loader4";
import Loader5 from "./components/Loader5";
import Loader6 from "./components/Loader6";
import Loader7 from "./components/Loader7";
import Loader8 from "./components/Loader8";
import Loader9 from "./components/Loader9";
import Gc2 from "./components/Gc2";
import Loader21 from "./components/Loader21";
import Loader11 from "./components/Loader11";
import Background from "./components/Background";
import ButtonIuHngKara from "./components/ButtonIuHngKara";
import HuongDanThuAm from "./components/HuongDanThuAm";
import BOTNAVKARASCREEN from "./components/BOTNAVKARASCREEN";
import XpHng from "./components/XpHng";
import Count from "./components/Count";
import NAV from "./components/NAV";
import Card from "./components/Card";
import LyricWord from "./components/LyricWord";
import PlayKtQu from "./components/PlayKtQu";
import HOME from "./screens/HOME";
import Ellipse from "./components/Ellipse";
import Rectangle from "./components/Rectangle";
import A21dNg from "./screens/A21dNg";
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
    "Figtree-Bold": require("./assets/fonts/Figtree-Bold.ttf"),
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
              name="A22VidBack"
              component={A22VidBack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A22aVidPlay"
              component={A22aVidPlay}
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
              name="A1KaraDetail"
              component={A1KaraDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TargetPop"
              component={TargetPop}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Luyn"
              component={Luyn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ALuynTp"
              component={ALuynTp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GiaoLu"
              component={GiaoLu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21cKtQu"
              component={A21cKtQu}
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
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="A21dNg"
              component={A21dNg}
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
