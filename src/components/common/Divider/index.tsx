import { View } from "react-native";

import { theme } from "@utils/constants";

type Space = keyof typeof theme["spacing"];

interface Props {
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
  vertical?: Space | number;
  horizontal?: Space | number;
}

export function Divider(props: Props) {
  const { top, bottom, left, right, vertical, horizontal } = props;

  return (
    <View
      style={{
        height: 1,
        backgroundColor: theme.colors.gray,
        marginTop: top && theme.spacing[top],
        marginBottom: bottom && theme.spacing[bottom],
        marginLeft: left && theme.spacing[left],
        marginRight: right && theme.spacing[right],
        marginVertical:
          vertical && (typeof vertical === "number" ? vertical : theme.spacing[vertical]),
        marginHorizontal:
          horizontal && (typeof horizontal === "number" ? horizontal : theme.spacing[horizontal])
      }}
    />
  );
}
