import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { Spacer } from "@components/common";
import { theme } from "@utils/constants";

import { useStyles } from "./styles";

interface Props {
  rating: string;
}

export function Rating(props: Props) {
  const { rating } = props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>{rating}</Text>
      <Spacer horizontal={"xxs"} />
      <AntDesign name={"star"} size={15} color={theme.colors.brown} />
    </View>
  );
}
