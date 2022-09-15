import { PropsWithChildren } from "react";
import { Text, StyleProp, TouchableOpacity, ViewStyle, TextStyle } from "react-native";

import { useStyles } from "./styles";

interface Props {
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export function Button(props: PropsWithChildren<Props>) {
  const { title, style, textStyle, children, onPress } = props;
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {title && <Text style={textStyle}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
}
