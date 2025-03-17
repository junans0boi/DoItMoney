import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionItem({ transaction }) {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{transaction.type === 'income' ? '수입' : '지출'}</Text>
      <Text style={styles.amount}>{transaction.amount.toLocaleString()} 원</Text>
      <Text>{transaction.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  type: { fontWeight: 'bold', color: 'blue' },
  amount: { fontSize: 16, fontWeight: 'bold' },
});