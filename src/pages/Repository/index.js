import React from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import { Loading } from './styles';

export default function Repository({ navigation }) {
  const uri = navigation.getParam('repository').owner.html_url;

  return (
    <WebView
      source={{ uri }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      bounces={false}
      renderLoading={() => <Loading />}
      startInLoadingState
    />
  );
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
