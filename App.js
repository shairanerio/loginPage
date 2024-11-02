import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

const PageLoginScreen = ({ navigation }) => {
  const [isRemembered, setIsRemembered] = useState(false);

  const toggleRememberMe = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginSection}>
        <Text style={styles.login}>Login</Text>
      </View>

      <View style={styles.emAdSection}>
        <Text style={styles.emmAdd}>Email Address:</Text>
        <TextInput style={styles.input} placeholder="Enter email" keyboardType="email-address" autoCapitalize="none" />
      </View>

      <View style={styles.passWrdSection}>
        <Text style={styles.PaSS}>Password:</Text>
        <TextInput style={styles.input} placeholder="Enter password" secureTextEntry={true} autoCapitalize="none" />
      </View>

      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleRememberMe}>
        <Icon name={isRemembered ? "check-box" : "check-box-outline-blank"} />
        <Text style={styles.checkLabel}>Remember Me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={() => console.log('Submit pressed')}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotButton} onPress={() => console.log('Forgot Password pressed')}>
        <Text style={styles.forgotButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.orSection}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line}></View>
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Login with Google pressed')}>
        <FontAwesome name="google" size={24} color="#AB644B" />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton} onPress={() => console.log('Login with Facebook pressed')}>
        <FontAwesome name="facebook" size={24} color="#AB644B" />
        <Text style={styles.googleButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      <View style={styles.addSection}>
        <Text style={styles.addText}>Need an account?</Text>
        <TouchableOpacity onPress={() => console.log('Sign Up pressed')}>
          <Text style={styles.signUpButtonText}> SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    padding: 13,
  },
  loginSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  login: {
    fontSize: 25,
    paddingTop: 75,
    fontWeight: 'bold',
  },
  emmAdd: {
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 30,
  },
  input: {
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 10,
    marginTop: 10,
    width: 310,
    borderRadius: 10,
  },
  PaSS: {
    fontSize: 15,
    paddingLeft: 10,
    paddingTop: 18,
  },
  checkboxContainer: {
    marginLeft: 10,
    marginTop: 4,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkLabel: {
    marginLeft: 5,
    flexDirection: 'row',
  },
  submitButton: {
    padding: 15,
    marginTop: 20,
    backgroundColor: '#AB644B',
    borderRadius: 10,
    width: 310,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  submitButtonText: {
    color: '#fff',
  },
  forgotButton: {
    marginLeft: 200,
    marginTop: 8,
  },
  forgotButtonText: {
    color: '#696969',
  },
  orSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 20,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#AB644B',
    borderRadius: 5,
  },
  googleButtonText: {
    marginLeft: 10,
    color: '#AB644B',
    fontSize: 16,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#AB644B',
    borderRadius: 5,
  },
  facebookButtonText: {
    marginLeft: 10,
    color: '#AB644B',
    fontSize: 16,
  },
  addSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addText: {
    fontSize: 16,
    color: '#696969',
  },
  signUpButtonText: {
    fontSize: 16,
    color: '#AB644B',
    fontWeight: 'bold',
  },
});

export default PageLoginScreen;
