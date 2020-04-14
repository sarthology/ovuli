import i18n from 'i18n-js';
import English from '../languageBase/en.json';
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

i18n.defaultLocale = 'English';
i18n.locale = null;
i18n.fallbacks = true;
i18n.translations = {
  English,
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
