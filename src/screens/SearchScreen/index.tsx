import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, TextInput, View } from "react-native";
import { observer } from "mobx-react-lite";

import { ApartmentCard } from "@components";
import { Spacer } from "@components/common";
import { Apartment } from "@models";
import { useStore } from "@store";
import { theme } from "@utils/constants";

import { useStyles } from "./styles";

function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  const styles = useStyles();
  const { apartmentStore } = useStore();
  const { apartments, getApartments } = apartmentStore;

  useEffect(() => {
    setIsLoading(true);
    getApartments().finally(() => setIsLoading(false));
  }, []);

  const renderItem = ({ item }: { item: Apartment }) => {
    return <ApartmentCard apartment={item} />;
  };

  const searchedData = useMemo(() => {
    return !!search
      ? apartments.filter(({ name }) => name.includes(search.toLowerCase()))
      : apartments;
  }, [search, apartments]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Type name"
        />
        <FlatList
          style={styles.list}
          data={searchedData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Spacer vertical={"s"} />}
          ListFooterComponent={<View style={styles.listFooter} />}
          ListEmptyComponent={
            <View style={styles.emptyComponent}>
              <Spacer vertical={100} />
              {isLoading ? (
                <ActivityIndicator size={50} color={theme.colors.white} />
              ) : (
                <Text style={styles.placeholder}>Nothing was found</Text>
              )}
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

export const SearchScreen = observer(Component);
