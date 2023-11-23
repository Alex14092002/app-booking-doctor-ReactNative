import * as React from "react";
import { Appbar } from "react-native-paper";
import { Image, StyleSheet, View, ImageBackground, Text} from "react-native";
const Header = () => {
  return (
   
      <Appbar.Header style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logomain.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.author}>
          <Text style={styles.name_author}> <Text style={styles.by}>By </Text> PhamDat</Text>
        </View>
      </Appbar.Header>


   
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    padding: 20,
  },
  logo: {
    width: 80,
  },
  author: {
    padding: 20,
  },
  name_author :{
    fontWeight: 'bold',
    fontSize : 20,
  },
  header: {
    
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor : "#33ccff"
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  by : {
    fontSize : 15
  }
});
export default Header;
