import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  
  const handleContinue = () => {
    const phoneRegex = /^0[0-9]{9}$/; // Kiểm tra định dạng số điện thoại

    if(phoneNumber.trim() === '') {
      alert('Vui lòng nhập số điện thoại');
    } else if (!phoneRegex.test(phoneNumber)) {
      alert('Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng.');
    } else {
      // Xử lý tiếp tục đăng nhập hoặc đăng ký
      alert('Số điện thoại hợp lệ: ' + phoneNumber);
    }
  };
  
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
      />

      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
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
});