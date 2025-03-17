import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TransactionItem from '../components/TransactionItem';

export default function TransactionListScreen() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // TODO: 백엔드에서 거래 목록 불러오기
    setTransactions([
      { id: 1, type: 'income', amount: 50000, description: '월급' },
      { id: 2, type: 'expense', amount: 15000, description: '점심식사' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>거래 내역</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});