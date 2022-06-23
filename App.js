import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView, Button } from 'react-native';

export default function App() {
  console.log("App executed");
  //const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        color="orange"
        title ="Click Me" onPress={() => console.log("Button tap")}/>
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
