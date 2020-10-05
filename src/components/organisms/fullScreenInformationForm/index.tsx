import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import BordereToFilledButton from "../../atoms/borderToFilledButton";
import Fade from "react-reveal/Fade";
import NavigationManager, {
  NavigationType,
  Page,
} from "../../../services/NavigationManager";
import Stores from "../../../stores";

export interface FullScreenInformationFormProps {
  image: string;
  title: string;
  description: string;
}

const FullScreenInformationForm = (props: FullScreenInformationFormProps) => {
  const languageStore = Stores.languageStore;

  const onPressBackToHomeButton = () => {
    NavigationManager.open(Page.home, NavigationType.currentTab);
  };

  return useObserver(() => (
    <div className={"full-screen-information-form center-style"}>
      <img height={200} src={props.image} />
      <Fade bottom>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </Fade>
      <BordereToFilledButton
        text={languageStore.strings.Backtohome}
        disableAnimation={true}
        onPress={onPressBackToHomeButton}
      />
    </div>
  ));
};

export default FullScreenInformationForm;
