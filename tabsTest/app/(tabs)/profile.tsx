import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function profile() {
  let userName = "Don Omar";
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#c2db26", dark: "#c2db26" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#ffffff"
          name="person"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Perfil</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText>Este es el perfil de {userName}</ThemedText>
      </ThemedView>
      <Image
        style={styles.image}
        source={{
          uri: "https://peopleenespanol.com/thmb/9E1tEGiF6E0fstWUf6xKiZ9lH-8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/donomar-f115a94a01c142059cd8a8a4eea0dc8b.jpg",
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
