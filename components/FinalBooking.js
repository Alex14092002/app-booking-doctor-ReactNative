import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import HeaderGoBack from "./HeaderGoBack";
import { Image } from "react-native";
import { DataTable } from "react-native-paper";
import { useState } from "react";

const FinalBooking = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View>
      <HeaderGoBack title="Đặt lịch khám bệnh" />
      <View style={styles.container}>
        <Image
          style={styles.image_final_book}
          source={require("../assets/images/img-booking.png")}
          resizeMode="contain"
        />
      </View>

      <View>
        <DataTable>
          <DataTable.Row style={styles.rowTable}>
            <DataTable.Cell>Tên bệnh nhân</DataTable.Cell>
            <DataTable.Cell>
              <TextInput
                style={styles.TextInput}
                placeholder="Nhập họ và tên."
                placeholderTextColor="#003f5c"
                secureTextEntry={false}
              />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.rowTable}>
            <DataTable.Cell>Triệu chứng</DataTable.Cell>
            <DataTable.Cell>
              <TextInput
                style={styles.TextInput2}
                placeholder="Triệu chứng."
                placeholderTextColor="#003f5c"
                secureTextEntry={false}
              />
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.rowTable}>
            <DataTable.Cell>Tổng phí ứng trước</DataTable.Cell>
            <DataTable.Cell>
              <Text style={styles.priceBook}>150.000đ</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
        <View style={styles.area_Thanhtoan}>
          <TouchableOpacity style={styles.btn_tt}>
            <Text style={styles.content_btn}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  area_Thanhtoan: {
    flexDirection : 'row',
    justifyContent : 'center'
  },
  btn_tt : {
    backgroundColor : '#0099ff',
    padding :15,
    borderRadius : 10
  },    
  content_btn : {
    color : '#fff'
  },    
  image_final_book: {
    width: "50%",
    height: 150,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    borderWidth: 1, // Độ dày của border
    borderColor: "#ccc", // Màu sắc của border
    borderRadius: 8, // Độ cong của góc
  },
  TextInput2: {
    height: 100,
    flex: 1,
    padding: 10,
    borderWidth: 1, // Độ dày của border
    borderColor: "#ccc", // Màu sắc của border
    borderRadius: 8, // Độ cong của góc
  },
  rowTable: {
    marginBottom: 50,
  },
  priceBook: {
    color: "#ff0000",
    fontWeight: "bold",
    fontSize: 22,
  },
});
export default FinalBooking;
