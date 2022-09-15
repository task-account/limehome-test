import { useEffect } from "react";
import { View, Text, FlatList, Dimensions, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Image from "react-native-image-progress";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";

import { Distance, Rating } from "@components";
import { Button, Divider, Spacer } from "@components/common";
import { Price } from "@components/Price";
import { RouteParams, RouterNames } from "@navigation";
import { useStore } from "@store";
import { Image as ImageType } from "@models";
import { getBedroomSuites } from "@utils/helpers";
import { theme } from "@utils/constants";

import { useStyles } from "./styles";

function Component() {
  const styles = useStyles();
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteParams<RouterNames.apartment>>();

  const { apartmentStore } = useStore();
  const { apartmentDetails, getApartmentDetails } = apartmentStore;

  useEffect(() => {
    getApartmentDetails(params.apartmentId);
  }, []);

  const renderImage = ({ item }: { item: ImageType }) => {
    return <Image style={styles.image} source={{ uri: item.url }} />;
  };

  const renderText = ({ item }: { item: string }) => {
    return (
      <View style={styles.bedroomSuite}>
        <Text>{item}</Text>
      </View>
    );
  };

  if (!apartmentDetails) return null;

  return (
    <View style={styles.content}>
      <Button style={styles.closeWrapper} onPress={goBack}>
        <Entypo name={"cross"} size={30} />
      </Button>
      <View style={styles.imageWrapper}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.url}
          data={apartmentDetails.images}
          renderItem={renderImage}
          snapToAlignment={"center"}
          disableIntervalMomentum
          decelerationRate={0.0}
          snapToInterval={Dimensions.get("screen").width}
        />
      </View>
      <ScrollView style={styles.info}>
        <View style={styles.title}>
          <Text style={styles.name}>{apartmentDetails?.name}</Text>
          <Rating rating={apartmentDetails?.rating} />
        </View>
        <Spacer vertical={"xs"} />
        <Distance distance={apartmentDetails?.distance} />
        <Spacer top={"s"} bottom={"m"} />
        <Text>{apartmentDetails?.description}</Text>
        <Divider top={"m"} bottom={"l"} />
        <Text style={styles.bedroomHeader}>Room types available in this location</Text>
        <Spacer vertical={"xs"} />
        <FlatList
          scrollEnabled={false}
          numColumns={2}
          data={getBedroomSuites(apartmentDetails)}
          renderItem={renderText}
        />
        <Spacer bottom={"xl"} />
      </ScrollView>
      <View style={styles.footer}>
        <Price price={apartmentDetails.price} />
        <Button title="EXPLORE" style={styles.button} textStyle={styles.buttonText}>
          <AntDesign name="arrowright" size={20} color={theme.colors.white} />
        </Button>
      </View>
    </View>
  );
}

export const ApartmentScreen = observer(Component);
