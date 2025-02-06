import Header from '@/components/home/header';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Link href={'/(tabs)/(home)/view'} asChild>
      <Text style={styles.title}>Tab One</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
