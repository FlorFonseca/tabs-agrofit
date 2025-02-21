import { Image, StyleSheet, Platform, TextInput, TouchableOpacity } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ThemeProvider } from "@react-navigation/native";
import { router } from "expo-router";

export default function LoginScreen() {


  return (
    <ParallaxScrollView
      headerImage={
        <IconSymbol
          size={310}
          color="#ffffff"
          name="login"
          style={styles.headerImage}
        />
      }
      headerBackgroundColor={{
        light: "#2641db",
        dark: "#2641db",
      }}
    >
      <ThemedView>
        <ThemedText>Email</ThemedText>
        <TextInput
          style={styles.input}
          defaultValue=""
          placeholder="Ingrese su email"
          placeholderTextColor={"blue"}
          keyboardType="email-address"
        />
      </ThemedView>
      <ThemedView>
        <ThemedText>Contraseña</ThemedText>
        <TextInput
          style={styles.input}
          defaultValue=""
          placeholder="Ingrese su contraseña"
          placeholderTextColor={"blue"}
          secureTextEntry
        />
      </ThemedView>
      <ThemedView>
        <TouchableOpacity
          onPress={() => router.push(`/(tabs)`)}
          style={styles.button}
        >
          <ThemedText style={styles.buttonText}>Iniciar Sesión</ThemedText>
        </TouchableOpacity>
      </ThemedView>
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
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#2641db",
    borderRadius: 5,
    height:50,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",

  },
});
