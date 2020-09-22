import React from "react";
import { useObserver } from "mobx-react";
import ImageButton from "../../../components/atoms/imageButton";
import BordereToFilledButton from "../../../components/atoms/borderToFilledButton";
import "./styles.scss";
import NavigationManager, {
  Page,
  NavigationType,
} from "../../../services/NavigationManager";
import { Images } from "../../../styles";
import SwitchLanguageButton from "../switchLanguageButton";
import stores from "../../../stores";

export interface HeaderProps {
  needToShowAnimationForSayHelloButton?: boolean;
}

const Header = (props: HeaderProps) => {
  const languageStore = stores.languageStore;

  const onPressSayHelloButton = () => {
    NavigationManager.open(Page.contact, NavigationType.currentTab);
  };

  const onPressLogoButton = () => {
    NavigationManager.open(Page.home, NavigationType.currentTab);
  };

  return useObserver(() => (
    <div className={"header"}>
      <ImageButton onPress={onPressLogoButton} image={Images.logo} />
      <div className={"right-part"}>
        {/* <TextButton text={strings.Mentorship} /> */}
        <SwitchLanguageButton />
        <div className={"right-part-spacer"} />
        <BordereToFilledButton
          text={languageStore.strings.SayHello}
          disableAnimation={!props.needToShowAnimationForSayHelloButton}
          onPress={onPressSayHelloButton}
        />
      </div>
    </div>
  ));
};

export default Header;
