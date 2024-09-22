
import {SafeAreaView, View, Text, StyleSheet,Image,TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function App() {
  return (
    <LinearGradient colors={["#C7F4F7","#D1F4F6","#E5F4F5","#37D6F8","#00CCF9"]}
      style={{flex:1}}>
      <View style={styles.container}>
        <Image source = {require('./assets/Group.png')}
        style={{width: 104.94, height: 116.95}}/>
      </View>
      <View style ={styles.title}>
        <Text style={styles.titleText}>FORGET</Text>  
        <Text style={styles.titleText}>PASSWORD</Text>
      </View>
      <View style={styles.title}>
          <Text style={styles.subtitleText}>Provide your account’s email for which you want to reset your password</Text>
      </View>
      <View style = {{  flex:1,alignItems:'center',}}>
        <View style ={styles.inputContainer}>
          <Icon name="envelope" size={24} color="black" style={styles.iconStyle}/>
          <TextInput style={styles.input} 
            placeholder="Email"
            placeholderTextColor="black"
          />
        </View>
      </View>
      <View style={styles.appButtonContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.textBtn}>NEXT</Text> </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
  },
  title:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  titleText:{
    fontSize:25,
    fontFamily:'Roboto',
    lineHeight: 29.3,
    fontWeight: 700,
    textAlign: 'center',
  },
  subtitleText:{
    fontSize: 15,
    fontFamily: 'Roboto',
    lineHeight: 17.58,
    textAlign: 'center',
    fontWeight: 700,
    width:302,
    height:53,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C4', 
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 45,
    width: 305,
  },
  iconStyle: {
    marginRight: 10,
  },  
   input: {
    fontSize:15,
  },
  appButtonContainer:{
    flex: 1,
    alignItems: "center",
  },
  button:{
    backgroundColor: '#E3C000',
    justifyContent: 'center',
    alignItems: 'center',
    width: 305,
    height: 45
  },
  textBtn:{
    fontFamily: 'Roboto',
    fontSize: 20,
    lineHeight: 23.44,
    textAlign: 'center',
    fontWeight: 700
  },
});
