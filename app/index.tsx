import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Welcome...</Text>

      <Link href="/(tabs)/home">
        <Text>Login</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    link: {
        width: '80%',
        height: 50,
        backgroundColor: 'red',
    }
});