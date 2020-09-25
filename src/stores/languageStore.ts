import { action, decorate, observable } from "mobx";
import { Lang } from "../models/Lang";
import Strings from "../translations";
import Localization from "react-localization";
import localStorageService, { DataType } from "../services/LocalStorageService";

type OnChangeLanguageCallback = (newLang: Lang) => void;

export class LanguageStore {
  private onChangeLanguageCallbacks: OnChangeLanguageCallback[] = [];

  lang: Lang;
  strings = Strings.en;

  constructor() {
    const storageLang = localStorageService.get(DataType.lang) as Lang;

    if (storageLang) {
      this.lang = storageLang;
    } else {
      const rl = new Localization(Strings);
      this.lang = rl.getLanguage() as Lang;
    }

    this.setLanguage(this.lang);
  }

  setOnChangeLanguageCallback = (callback: OnChangeLanguageCallback) => {
    this.onChangeLanguageCallbacks.push(callback);
  };

  setLanguage = (lang: Lang) => {
    this.lang = lang;
    localStorageService.save(lang, DataType.lang);

    switch (lang) {
      case Lang.ru:
        this.strings = Strings.ru;
        break;

      default:
        this.strings = Strings.en;
        break;
    }

    this.onChangeLanguageCallbacks.forEach((item) => {
      item(lang);
    });
  };
}

const languageStore = new LanguageStore();
export default languageStore;

decorate(LanguageStore, {
  strings: observable,
  lang: observable,

  setLanguage: action,
});
