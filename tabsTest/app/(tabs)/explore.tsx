import { StyleSheet, Image, Platform, FlatList } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default function ExploreTab() {
  const songs = [{id:1, title: "Si Tu Sabes"}, {id: 2, title: "No Es Lluvia De Verano"}, {id: 3, title:"Corazón Partío"}, {id:4, title:"Why Why Why"}, {id: 5, title:"Emotions"}, {id: 6, title:"Baianá"}, {id:7, title:"Quiero Saber De Ti"}];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#db2681", dark: "#db2681" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#ffffff"
          name="search"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>PlayList de canciones</ThemedText>
      <ThemedView>
        {songs.map((song)=>(
          <ThemedText key={song.id} style={styles.song}>
            {song.title}
          </ThemedText>
        ))}
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
  song: {
    backgroundColor: "#e89ec3",
    margin: 5,
    borderRadius:5,
    padding:5,
  },
});
