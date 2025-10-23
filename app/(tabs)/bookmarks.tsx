import { StyleSheet, Text, View } from 'react-native';

export default function Bookmarks() {
  return (
    <View style={styles.container}>
      <Text>Tab bookmarks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
