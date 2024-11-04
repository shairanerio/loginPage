import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider as PaperProvider, TextInput, Button, Checkbox, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PageLoginScreen = ({ navigation }) => {
  const [isRemembered, setIsRemembered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleRememberMe = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Image source={require('./assets/avatar.jpg')} style={styles.avatar}/>

        <TextInput label="Email Address" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none"/>

        <TextInput label="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry autoCapitalize="none"/>

        <View style={styles.checkboxContainer}>
          <Checkbox status={isRemembered ? 'checked' : 'unchecked'} onPress={toggleRememberMe} color="#AB644B"/>
          <Text style={styles.checkLabel}>Remember Me</Text>
        </View>

        <Button mode="contained" onPress={() => console.log('Login pressed')} style={styles.loginButton} buttonColor="#AB644B" textColor="#fff">Login</Button>

        <TouchableOpacity style={styles.forgotButton} onPress={() => console.log('Forgot Password pressed')}>
          <Text style={styles.forgotButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.orSection}>
          <Divider style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <Divider style={styles.line} />
        </View>

        <Button mode="outlined" icon={() => <FontAwesome name="google" size={20} color="#AB644B" />} onPress={() => console.log('Login with Google pressed')} style={styles.socialButton} textColor="#AB644B">Login with Google</Button>

        <Button mode="outlined" icon={() => <FontAwesome name="facebook" size={20} color="#AB644B" />} onPress={() => console.log('Login with Facebook pressed')} style={styles.socialButton} textColor="#AB644B">Login with Facebook</Button>

        <View style={styles.addSection}>
          <Text style={styles.addText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => console.log('Sign Up pressed')}>
            <Text style={styles.signUpButtonText}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    padding: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 15,
  },
  login: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    marginBottom: 16,
    backgroundColor: 'transparent',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkLabel: {
    marginLeft: 8,
  },
  loginButton: {
    marginBottom: 16,
    borderRadius: 10,
  },
  forgotButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  forgotButtonText: {
    color: '#696969',
  },
  orSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
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
  socialButton: {
    marginBottom: 15,
    borderColor: '#AB644B',
    borderRadius: 5,
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
