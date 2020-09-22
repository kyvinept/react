import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import ImageButton from "../../atoms/imageButton";
import { Images } from "../../../styles";
import stores from "../../../stores";
import { Lang } from "../../../models/Lang";

export interface SwitchLanguageButtonProps {}

const SwitchLanguageButton = (props: SwitchLanguageButtonProps) => {
  const languageStore = stores.languageStore;

  const onPress = () => {
    languageStore.setLanguage(
      languageStore.lang == Lang.en ? Lang.ru : Lang.en
    );
  };

  return useObserver(() => (
    <div className={"switch-language-button"}>
      <ImageButton
        image={languageStore.lang == Lang.en ? Images.en : Images.ru}
        onPress={onPress}
      />
    </div>
  ));
};

export default SwitchLanguageButton;
