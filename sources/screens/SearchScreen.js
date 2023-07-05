import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { debounce } from "lodash";
import API from "../data/api.json";
import DetailWeather from "../components/DetailWeather";

export default function SearchScreen() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState(null);

  async function fetchData() {
    try {
      const fetching = await fetch(`${API.BASE_URL}weather?q=${search}&appid=${API.KEY}&lang=id`);
      const response = await fetching.json();
      setData(response);
    } catch (error) {
      console.log(error);
    }
  }

  function onChangeTextHandler(query) {
    if(query) setSearch(query);
  }

  const delayedQuery = React.useCallback(debounce(fetchData, 500), [search]);

  React.useEffect(() => {
    delayedQuery();
    return delayedQuery.cancel;
  }, [search, delayedQuery]);

  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchField}
          placeholder="Location"
          onChangeText={onChangeTextHandler}
          defaultValue={search}
        />
      </View>
      {data?.name ? <DetailWeather data={data} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    padding: 16
  },
  searchField: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8,
    borderColor: "black",
    paddingHorizontal: 16,
  }
});