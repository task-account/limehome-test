import { View, Text } from "react-native";
import { Spacer } from "@components/common";

import { useStyles } from "./styles";

interface Props {
  price: string;
}

export function Price(props: Props) {
  const { price } = props;

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text>From</Text>
      <Spacer horizontal={"xs"} />
      <Text style={styles.price}>{`${price}/Night`}</Text>
    </View>
  );
}
