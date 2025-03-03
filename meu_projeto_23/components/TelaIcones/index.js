import { View, Text } from "react-native";

import { Entypo, EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";

export default function TelaIcones() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Entypo</Text>
        <View style={styles.icones}>
          <Entypo name="arrow-bold-up" size={28} color="green" />
          <Entypo name="arrow-bold-down" size={28} color="green" />
          <Entypo name="arrow-bold-left" size={28} color="green" />
          <Entypo name="arrow-bold-right" size={28} color="green" />
          <Entypo name="chat" size={28} color="rgb(2,140,245)" />
          <Entypo name="cloud" size={28} color="rgb(107,107,107)" />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>EvilIcons</Text>
        <View style={styles.icones}>
          <EvilIcons name="close" size={28} color="red" />
          <EvilIcons name="location" size={28} color="gold" />
          <EvilIcons name="navicon" size={28} color="rgb(131,30,214)" />
          <EvilIcons name="star" size={28} color="gold" />
          <EvilIcons name="trash" size={28} color="black" />
          <EvilIcons name="search" size={28} color="black" />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.titulo}>Entypo</Text>
        <View style={styles.icones}>
          <MaterialCommunityIcons
            name="account-box"
            size={28}
            color="rgb(30, 115, 212)"
          />
          <MaterialCommunityIcons
            name="alarm"
            size={28}
            color="rgb(235, 106, 91)"
          />
          <MaterialCommunityIcons name="alert-circle" size={28} color="gold" />
          <MaterialCommunityIcons name="autorenew" size={28} color="green" />
          <MaterialCommunityIcons
            name="camera-outline"
            size={28}
            color="black"
          />
          <MaterialCommunityIcons
            name="cart"
            size={28}
            color="rgb(107, 107, 107)"
          />
        </View>
      </View>
    </View>
  );
}
