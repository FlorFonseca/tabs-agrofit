import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#ffffff"
          name="house.fill"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenid@!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Esta es una pruebaaaa</ThemedText>
      </ThemedView>
      <Image
        style={styles.image}
        source={{
          uri: "https://giveasht.com/cdn/shop/articles/1_b935111e-a64f-496b-b959-68928d911ea6_1200x.png?v=1682343259",
        }}
      ></Image>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#ffffff",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
