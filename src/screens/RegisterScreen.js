import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleRegister = () => {
    console.log('회원가입 시도:', { email, password, nickname });
    navigation.navigate('Login'); // 회원가입 후 로그인 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회원가입</Text>
      <TextInput style={styles.input} placeholder="이메일" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="닉네임" value={nickname} onChangeText={setNickname} />
      <TextInput style={styles.input} placeholder="비밀번호" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="회원가입" onPress={handleRegister} />
      <Button title="로그인 화면으로" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
});