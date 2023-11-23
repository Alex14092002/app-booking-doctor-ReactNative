import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRIMARYCOLOR, PRIMARYBORDERADIUS } from "../Constants.js";
import { Ionicons } from "@expo/vector-icons";

import bus from "../assets/images/bus.png";
import mrt from "../assets/images/mrt.jpg";
import { Avatar, Card, IconButton } from "react-native-paper";
import Header from "./Header.js";
import Swiper from "react-native-swiper";
import { Button } from "react-native-paper";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const nav = useNavigation();
  
  const handleBooking = () =>{
    nav.navigate('Booking')
  }

  return (
   
      <View style={styles.container}>
        <Header />
        <ScrollView >
        <View style={styles.sliderContainer}>
          <Swiper style={styles.wrapper}>
            <View style={styles.slide1}>
              <Image
                source={require("../assets/images/banner1.webp")}
                resizeMode="contain"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide2}>
              <Image
                source={require("../assets/images/banner2.webp")}
                resizeMode="contain"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide3}>
              <Image
                source={require("../assets/images/banner3.jpeg")}
                resizeMode="contain"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.main_btn}>
          <Button icon="book" mode="contained" onPress={handleBooking} style={styles.btn_datlich}>
            ĐẶT LỊCH KHÁM BỆNH
          </Button>
        </View>

        <View style={styles.sec2}>
          <Card style={styles.item_sec2}>
            <Card.Content style={styles.content_card}>
              <Foundation name="page-search" size={30} color="#0099FF" />
              <Text style={styles.text_card}>Tra cưu lịch sử khám bệnh</Text>
            </Card.Content>
          </Card>
          <Card style={styles.item_sec2}>
            <Card.Content style={styles.content_card}>
              <MaterialIcons
                name="integration-instructions"
                size={30}
                color="#0099ff"
              />
              <Text style={styles.text_card}>Hướng dẫn đặt lịch khám bệnh</Text>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.sec3}>
          <Text style={styles.title_sec3}>Chúng tôi chuyên về</Text>
          <Card style={styles.img_item_sec3}>
            <Card.Cover
              source={require("../assets/images/gioi-thieu-khoa-noi-tong-hop.jpg")}
            />
          </Card>
          <Card.Content>
            <Text style={styles.type_name}>Khoa Nội Tổng Hợp</Text>
            <Text style={styles.type_des}>
              Dịch vụ Khoa Nội Tổng Hợp cung cấp chăm sóc sức khỏe đa ngành, tập
              trung vào đánh giá và điều trị các vấn đề nội khoa để duy trì sức
              khỏe tổng thể của bệnh nhân.
            </Text>
          </Card.Content>

          <Card style={styles.img_item_sec3}>
            <Card.Cover
              source={require("../assets/images/gioi-thieu-khoa-noi-tong-hop.jpg")}
            />
          </Card>
          <Card.Content>
            <Text style={styles.type_name}>Khoa Nội Tổng Hợp</Text>
            <Text style={styles.type_des}>
              Dịch vụ Khoa Nội Tổng Hợp cung cấp chăm sóc sức khỏe đa ngành, tập
              trung vào đánh giá và điều trị các vấn đề nội khoa để duy trì sức
              khỏe tổng thể của bệnh nhân.
            </Text>
          </Card.Content>
        </View>
        </ScrollView>
      </View>
   
  );
};

const styles = StyleSheet.create({
  type_name: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  img_item_sec3: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  title_sec3: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#0099ff",
   
  },
  sec3 : {
    paddingBottom : 100
  },
  text_card: {
    marginStart: 10,
  },
  content_card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item_sec2: {
    flex: 1,
    marginHorizontal: 5,
  },
  main_btn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  sec2: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  btn_datlich: {
    width: 300,
    backgroundColor: "#0099FF",
  },
  container: {
    flex: 1,
  },
  sliderContainer: {
    height: 200, // Adjust the height as needed
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderImage: {
    width: "100%",
    height: "100%",
  },
  box_home: {
    marginVertical: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  title_box: {
    width: "100%", // Điều chỉnh kích thước của container
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  topview: {
    marginTop: 60,
    marginHorizontal: 24,
    justifyContent: "space-between",
  },
  welcomemessage: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  searchbar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginBottom: 65,
  },

  welcomecontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  container: {
    flex: 1,
  },
});
