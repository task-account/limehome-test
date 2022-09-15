import { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import MapView from "react-native-map-clustering";
import { Marker } from "react-native-maps";
import { observer } from "mobx-react-lite";

import { ApartmentCard } from "@components";
import { Apartment } from "@models";
import { theme } from "@utils/constants";
import { useStore } from "@store";

import { useStyles } from "./styles";

const initialRegion = {
  latitude: 52.520008,
  longitude: 13.404954,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

function Component() {
  const styles = useStyles();
  const [selected, setSelected] = useState<Apartment>();

  const { apartmentStore } = useStore();
  const { apartments, getApartments } = apartmentStore;

  useEffect(() => {
    getApartments();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        maxZoom={8}
        minPoints={3}
        initialRegion={initialRegion}
        clusterColor={theme.colors.light}
        style={styles.map}
      >
        {apartments.map((point) => {
          const { id, location, price } = point;
          const selectedId = selected?.id;

          return (
            <Marker
              key={id}
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              onPress={() => setSelected(point)}
            >
              <View style={styles.markerWrapper}>
                <View style={[styles.marker, id === selectedId && styles.selectedMarker]}>
                  <Text style={styles.markerText}>{price}</Text>
                </View>
                <View style={[styles.pointer, id === selectedId && styles.selectedPointer]} />
              </View>
            </Marker>
          );
        })}
      </MapView>
      {selected && (
        <View style={styles.cardWrapper}>
          <ApartmentCard apartment={selected} />
        </View>
      )}
    </SafeAreaView>
  );
}

export const MapScreen = observer(Component);
