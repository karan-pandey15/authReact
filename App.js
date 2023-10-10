
import { StyleSheet , View } from 'react-native';
import Otp from './src';
export default function App() {
  return (
    <View style={styles.container}>
      <Otp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
