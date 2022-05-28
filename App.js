import { StatusBar } from 'expo-status-bar';
import { ScrollView, SafeAreaView } from 'react-native';

import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Home />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

