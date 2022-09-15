import { SafeAreaView, Text } from "react-native";
import { useStyles } from "./styles";

export function NotFoundScreen() {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Oops! Screen is missing</Text>
    </SafeAreaView>
  );
}
