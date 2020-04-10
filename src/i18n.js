import i18n from 'i18n-js';
// import * as RNLocalize from ‘react-native-localize’;
// import memoize from ‘lodash.memoize’; // Use for caching/memoize for better performance
import en from '../languageBase/en.json';
import Hindi from '../languageBase/hi.json';
import Nepali from '../languageBase/ne.json';
import Bengali from '../languageBase/be.json';
import Urdu from '../languageBase/ur.json';
import Assamese from '../languageBase/as.json';
import Gujarati from '../languageBase/gu.json';
import Kannada from '../languageBase/kn.json';
import Kashmiri from '../languageBase/ks.json';
import Konkani from '../languageBase/ko.json';
import Maithili from '../languageBase/ma.json';
import Malayalam from '../languageBase/ml.json';
// const locales = RNLocalize.getLocales();
// if (Array.isArray(locales)) {
// I18n.locale = locales[0].languageTag;
// }

i18n.defaultLocale = 'en';
i18n.locale = null;
i18n.fallbacks = true;
i18n.translations = {
  en,
  Hindi,
  Nepali,
  Bengali,
  Urdu,
  Assamese,
  Gujarati,
  Kannada,
  Kashmiri,
  Konkani,
  Maithili,
  Malayalam,
};

export default i18n;
