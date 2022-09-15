import { View, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import { Spacer } from "@components/common";
import { theme } from "@utils/constants";

import { useStyles } from "./styles";

interface Props {
  distance: number;
}

export function Distance(props: Props) {
  const { distance } = props;
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <SimpleLineIcons name={"location-pin"} color={theme.colors.orange} size={15} />
      <Spacer horizontal={"xs"} />
      <Text>{`${distance.toFixed(1)} km from city centre`}</Text>
    </View>
  );
}
