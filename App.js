import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


function LoginScreen({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handlePhoneChange = (text) => {

    // Chỉ giữ lại số
    const cleaned = text.replace(/\D/g, '');

    // Format dạng: 0912 345 678
    const match = cleaned.match(/^(\d{0,4})(\d{0,3})(\d{0,3})$/);

    if (match) {  
      let formatted = match[1];
      if (match[2]) formatted += ' ' + match[2];
      if (match[3]) formatted += ' ' + match[3];

      setPhoneNumber(formatted);
    }

    const phoneRegex = /^0[0-9]{9}$/; // Kiểm tra định dạng số điện thoại

    if(cleaned.trim() === '') {
      setError('Vui lòng nhập số điện thoại');
    } else if (!phoneRegex.test(cleaned)) {
      setError('Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng.');
    } else {
      setError('');
    }
  };

  const handleContinue = () => {
    const cleanPhone = phoneNumber.replace(/\s/g, '');
    alert('Số điện thoại hợp lệ: ' + cleanPhone);

    navigation.navigate("Home");
  };

  const isValid = error === '' && phoneNumber !== '';
  
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Đăng nhập</Text>

     
      <Text style={styles.label}>Nhập số điện thoại</Text>

      
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value =  {phoneNumber}
        onChangeText={handlePhoneChange}     
      />
      {error != '' && <Text style={styles.errorText}>{error}</Text>}
    
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isValid ? '#007AFF' : '#e0e0e0' }]}
        onPress={handleContinue}
        disabled={!isValid}
      >
        <Text style={[styles.buttonText, { color: isValid ? '#fff' : '#999' }]}>Tiếp tục</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang chủ</Text>
      <Text>Chào mừng bạn đến với ứng dụng</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },

  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    marginBottom: 40,
  },

  button: {
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: '#999',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginBottom: 20,
    fontSize: 14,
  },
});