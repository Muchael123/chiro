import { StyleSheet, Text, View } from 'react-native';

export default function ProductScreen() {
  return (
    <View style={styles.container}>
      <Text >Product</Text>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
})