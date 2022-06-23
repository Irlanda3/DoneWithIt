import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App executed");
  //const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello React Native</Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <Image 
          source={{
          
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }} 
        />

      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
