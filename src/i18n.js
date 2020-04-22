import i18n from 'i18n-js';

import English from '../translations/en.json';
import Hindi from '../translations/hi.json';
import Nepali from '../translations/ne.json';
import Bengali from '../translations/be.json';
import Urdu from '../translations/ur.json';
import Assamese from '../translations/as.json';
import Gujarati from '../translations/gu.json';
import Kannada from '../translations/kn.json';
import Kashmiri from '../translations/ks.json';
import Konkani from '../translations/ko.json';
import Maithili from '../translations/ma.json';
import Malayalam from '../translations/ml.json';

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
