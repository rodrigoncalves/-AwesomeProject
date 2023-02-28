/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import RampSdk from '@ramp-network/react-native-sdk';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const rampNetwork = () => {
    console.log('Ramp Network');
    const ramp = new RampSdk({
      // for testnet:
      url: 'https://ri-widget-staging.web.app/',

      // for IOV:
      swapAsset: 'RSK_RDOC',
      // userAddress must be lowercase or checksummed correctly:
      userAddress: '0x65f3e305bb155031a2E861306248870bE7D3441C',

      // for the dapp:
      hostAppName: 'RIF Wallet',
      hostLogoUrl: 'https://rampnetwork.github.io/assets/misc/test-logo.png',
      hostApiKey: 'API_KEY',
    });

    ramp.on('*', console.log);
    ramp.show();
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button title="Ramp Network" onPress={rampNetwork} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
