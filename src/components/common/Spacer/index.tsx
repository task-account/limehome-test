import { View } from "react-native";

import { theme } from "@utils/constants";

type Space = keyof typeof theme["spacing"];

interface Props {
  flex?: boolean;
  top?: Space;
  bottom?: Space;
  left?: Space;
  right?: Space;
  vertical?: Space | number;
  horizontal?: Space | number;
}

export function Spacer(props: Props) {
  const { flex, top, bottom, left, right, vertical, horizontal } = props;

  return (
    <View
      style={{
        flex: flex ? 1 : undefined,
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
