import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderGoBack from "./HeaderGoBack";
import { Card, Button, Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Booking = () => {
  const nav = useNavigation();

  const handleBooking = () => {
    nav.navigate("BookFinal");
  };

  return (
    <View>
      <HeaderGoBack title="Chọn bác sĩ" />
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <View style={styles.info_doctor}>
              <View>
                <Avatar.Image
                  size={100}
                  source={require("../assets/images/doctor-demo.jpeg")}
                />
              </View>
              <View>
                <Text>Nguyễn Văn A</Text>
                <Text>Email : fjdhfsja@gmail.com</Text>
                <Text>Phone : 098263223</Text>
              </View>
            </View>
            <View style={styles.main_btn_book}>
              <TouchableOpacity>
                <Text style={styles.btn_book} onPress={handleBooking}>
                  Đặt lịch
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Card>
            <View style={styles.info_doctor}>
              <View>
                <Avatar.Image
                  size={100}
                  source={require("../assets/images/doctor-demo.jpeg")}
                />
              </View>
              <View>
                <Text>Nguyễn Văn A</Text>
                <Text>Email : fjdhfsja@gmail.com</Text>
                <Text>Phone : 098263223</Text>
              </View>
            </View>
            <View style={styles.main_btn_book}>
              <TouchableOpacity>
                <Text style={styles.btn_book} onPress={handleBooking}>
                  Đặt lịch
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Card>
            <View style={styles.info_doctor}>
              <View>
                <Avatar.Image
                  size={100}
                  source={require("../assets/images/doctor-demo.jpeg")}
                />
              </View>
              <View>
                <Text>Nguyễn Văn A</Text>
                <Text>Email : fjdhfsja@gmail.com</Text>
                <Text>Phone : 098263223</Text>
              </View>
            </View>
            <View style={styles.main_btn_book}>
              <TouchableOpacity>
                <Text style={styles.btn_book} onPress={handleBooking}>
                  Đặt lịch
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Card>
            <View style={styles.info_doctor}>
              <View>
                <Avatar.Image
                  size={100}
                  source={require("../assets/images/doctor-demo.jpeg")}
                />
              </View>
              <View>
                <Text>Nguyễn Văn A</Text>
                <Text>Email : fjdhfsja@gmail.com</Text>
                <Text>Phone : 098263223</Text>
              </View>
            </View>
            <View style={styles.main_btn_book}>
              <TouchableOpacity>
                <Text style={styles.btn_book} onPress={handleBooking}>
                  Đặt lịch
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Card>
            <View style={styles.info_doctor}>
              <View>
                <Avatar.Image
                  size={100}
                  source={require("../assets/images/doctor-demo.jpeg")}
                />
              </View>
              <View>
                <Text>Nguyễn Văn A</Text>
                <Text>Email : fjdhfsja@gmail.com</Text>
                <Text>Phone : 098263223</Text>
              </View>
            </View>
            <View style={styles.main_btn_book}>
              <TouchableOpacity>
                <Text style={styles.btn_book} onPress={handleBooking}>
                  Đặt lịch
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
          <Card>
            <View style={styles.info_doctor}>
              <View>
                <Avatar.Image
                  size={100}
                  source={require("../assets/images/doctor-demo.jpeg")}
                />
              </View>
              <View>
                <Text>Nguyễn Văn A</Text>
                <Text>Email : fjdhfsja@gmail.com</Text>
                <Text>Phone : 098263223</Text>
              </View>
            </View>
            <View style={styles.main_btn_book}>
              <TouchableOpacity>
                <Text style={styles.btn_book} onPress={handleBooking}>
                  Đặt lịch
                </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  info_doctor: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn_book: {
    backgroundColor: "#0099ff",
    color: "#fff",
    width: 100,
    padding: 10,
    textAlign: "center",
  },
  main_btn_book: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,
  },
});
export default Booking;
