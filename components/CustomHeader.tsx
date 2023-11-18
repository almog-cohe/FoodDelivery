import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet from "./BottomSheet";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons style={styles.searchIcon} name="ios-search" size={20} color={Colors.medium} />
        <TextInput style={styles.input} placeholder="Restaurants, groceries, dishes" />
      </View>
      <Link href={"/"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null)
  const openModal = () => {
    bottomSheetRef.current?.present()
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            style={styles.bike}
            source={require("@/assets/images/bike.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={openModal} style={styles.titleContainer}>
          <Text style={styles.title}>Delivery • now</Text>
          <View style={styles.locationName}>
            <Text style={styles.subtitle}>London</Text>
            <Ionicons name="chevron-down" size={22} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={28} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    height: 60,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 19,
  },
  bike: {
    width: 60,
    height: 60,
    backgroundColor: "#F0F6FB",
    borderRadius: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 14,
    borderRadius: 28,
  },
  searchContainer: {
    height: 60,
    backgroundColor: "white",
  },
  searchSection: {
    flexDirection: 'row',
    gap:10,
    paddingHorizontal:20,
    alignItems: 'center'
  },
  searchField: {
    flex:1,
    backgroundColor: Colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchIcon: {
    paddingLeft:10
  },
  input: {
    padding:10,
    color: Colors.mediumDark
  },
  optionButton: {
    padding: 10,
    borderRadius:8
  }
});

export default CustomHeader;
