import { memo } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Image from "react-native-image-progress";

import { RouterNames } from "@navigation";
import { Rating } from "@components/Rating";
import { Distance } from "@components/Distance";
import { Divider, Spacer } from "@components/common";
import { Apartment } from "@models";

import { useStyles } from "./styles";
import { Price } from "@components/Price";

interface Props {
  apartment: Apartment;
}

function Component(props: Props) {
  const { apartment } = props;
  const { id, images, name, price, distance, rating } = apartment;

  const image = images.find(({ is_portrait }) => is_portrait) || images[0];

  const { navigate } = useNavigation();
  const styles = useStyles();

  const onPress = () => {
    navigate(RouterNames.apartment, { apartmentId: id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: image.url }} style={styles.image} />
        <Rating rating={rating} />
      </View>
      <View style={styles.rightBlock}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Spacer vertical={"xs"} />
        <Distance distance={distance} />
        <Divider vertical={"s"} />
        <Price price={price} />
      </View>
    </TouchableOpacity>
  );
}

export const ApartmentCard = memo(Component);
