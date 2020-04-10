import i18n from 'i18n-js';
// import * as RNLocalize from ‘react-native-localize’;
// import memoize from ‘lodash.memoize’; // Use for caching/memoize for better performance
import en from '../languageBase/en.json';
import Hindi from '../languageBase/hi.json';

// const locales = RNLocalize.getLocales();
// if (Array.isArray(locales)) {
// I18n.locale = locales[0].languageTag;
// }

i18n.defaultLocale = 'en';
i18n.locale = null;
i18n.fallbacks = true;
i18n.translations = { en, Hindi };

export default i18n;
