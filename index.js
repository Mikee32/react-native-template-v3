import 'react-native-gesture-handler';
import codePush from 'react-native-code-push';
import {AppRegistry, I18nManager} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {configureFontAwesomePro} from 'react-native-fontawesome-pro';
import App from './App';
import {name as appName} from './app.json';
// import RNFetchBlob from 'rn-fetch-blob';

// const translationGetters = {
//   en: () => require('./App/Config/Languages/en.json'),
// };
// const fallback = {languageTag: 'en', isRTL: false};

// const {languageTag, isRTL} = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;

// // translate.cache.clear();
// I18nManager.forceRTL(isRTL);

// i18n.translations = {[languageTag]: translationGetters[languageTag]()};
// i18n.locale = languageTag;
configureFontAwesomePro();

AppRegistry.registerComponent(appName, () => codePush(App));

// const Fetch = RNFetchBlob.polyfill.Fetch;
// // replace built-in fetch
// window.fetch = new Fetch({
//   // enable this option so that the response data conversion handled automatically
//   auto: true,
//   // when receiving response data, the module will match its Content-Type header
//   // with strings in this array. If it contains any one of string in this array,
//   // the response body will be considered as binary data and the data will be stored
//   // in file system instead of in memory.
//   // By default, it only store response data to file system when Content-Type
//   // contains string `application/octet`.
//   binaryContentTypes: ['image/', 'video/', 'audio/', 'foo/'],
//   trusty: true,
// }).build();
