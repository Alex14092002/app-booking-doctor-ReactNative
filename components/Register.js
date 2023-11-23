import React from 'react'
import HeaderGoBack from './HeaderGoBack'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    StatusBar,
  } from "react-native";
  import { useNavigation } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
    <HeaderGoBack title="Đăng ký"/>
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/images/logomain.png")}
      />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Tên tải khoản."
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="email."
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Số điện thoại."
          placeholderTextColor="#003f5c"
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mật khẩu."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button} onPress={handleLoginPress} >Đã có tài khoản ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Đăng Ký</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: 200,
      height : 150,
      paddingVertical : 100
    },
    inputView: {
      backgroundColor: "#99CCFF",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0099ff",
    },
    loginText : {
      color : '#fff'
    }
  });
export default Register