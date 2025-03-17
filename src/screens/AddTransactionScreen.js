import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AddTransactionScreen({ navigation }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [transactionType, setTransactionType] = useState('income'); // 기본값: 수입

    const handleSaveTransaction = () => {
        if (!amount || !description) {
            Alert.alert('오류', '금액과 내용을 입력하세요.');
            return;
        }

        console.log('거래 추가됨:', { amount, description, transactionType });

        // TODO: 백엔드 API 연결해서 거래 데이터 저장하기

        Alert.alert('성공', '거래가 추가되었습니다.', [{ text: '확인', onPress: () => navigation.goBack() }]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>거래 추가</Text>

            <Text style={styles.label}>거래 유형</Text>
            <View style={styles.buttonContainer}>
                <Button title="수입" onPress={() => setTransactionType('income')} color={transactionType === 'income' ? 'green' : 'gray'} />
                <Button title="지출" onPress={() => setTransactionType('expense')} color={transactionType === 'expense' ? 'red' : 'gray'} />
                <Button title="이체" onPress={() => setTransactionType('transfer')} color={transactionType === 'transfer' ? 'blue' : 'gray'} />
            </View>

            <Text style={styles.label}>금액</Text>
            <TextInput style={styles.input} placeholder="금액 입력 (원)" keyboardType="numeric" value={amount} onChangeText={setAmount} />

            <Text style={styles.label}>내용</Text>
            <TextInput style={styles.input} placeholder="설명 입력" value={description} onChangeText={setDescription} />

            <Button title="거래 저장" onPress={handleSaveTransaction} />
            <Button title="취소" onPress={() => navigation.goBack()} color="gray" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
    input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 5, marginTop: 5, marginBottom: 10 },
    buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
});