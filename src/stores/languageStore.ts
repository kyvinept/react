import { action, decorate, observable } from "mobx";
import { Lang } from "../models/Lang";
import Strings from "../translations";
import Localization from "react-localization";

type OnChangeLanguageCallback = (newLang: Lang) => void;

export class LanguageStore {
  private onChangeLanguageCallbacks: OnChangeLanguageCallback[] = [];

  lang = Lang.en;
  strings = Strings.en;

  constructor() {
    const rl = new Localization(Strings);
    this.setLanguage(rl.getLanguage() as Lang);
  }

  setOnChangeLanguageCallback = (callback: OnChangeLanguageCallback) => {
    this.onChangeLanguageCallbacks.push(callback);
  };

  setLanguage = (lang: Lang) => {
    this.lang = lang;

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
