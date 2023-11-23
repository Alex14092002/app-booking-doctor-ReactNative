import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import HeaderGoBack from './HeaderGoBack';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      // Thực hiện quá trình đăng nhập (điều này có thể là một hàm bất đồng bộ)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsLoading(false);
    } catch (error) {
      // Xử lý lỗi nếu cần
      console.error("Đăng nhập không thành công", error);

      // Đặt lại trạng thái loading nếu có lỗi
      setIsLoading(false);
    }
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  return (
    <View>
      <HeaderGoBack title="Đăng nhập"/>
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
            placeholder="Username."
            placeholderTextColor="#003f5c"
            onChangeText={(username) => setUsername(username)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={handleRegisterPress}>Chưa có tài khoản?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <Spinner
        visible={isLoading}
        textContent={'Đang đăng nhập...'}
        textStyle={styles.spinnerText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 100,
    paddingVertical: 100,
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
    marginTop: 40,
    backgroundColor: "#0099ff",
  },
  loginText: {
    color: '#fff'
  },
  spinnerText: {
    color: '#fff',
  },
});

export default Login;
