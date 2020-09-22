import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import { Images } from "../../../styles";
import Stores from "../../../stores";
import BordereToFilledButton from "../../atoms/borderToFilledButton";
import NavigationManager, {
  NavigationType,
  Page,
} from "../../../services/NavigationManager";
import Fade from "react-reveal/Fade";

export interface SuccessRequestFormProps {}

const SuccessRequestForm = (props: SuccessRequestFormProps) => {
  const languageStore = Stores.languageStore;

  const onPressBackToHomeButton = () => {
    NavigationManager.open(Page.home, NavigationType.currentTab);
  };

  return useObserver(() => (
    <div className={"success-request-form center-style"}>
      <img height={200} src={Images.mailbox} />
      <Fade bottom cascade>
        <h1>{languageStore.strings.MessageReceivedThanks}</h1>
        <p>{languageStore.strings.Illbeintouchwithyoushortly}</p>
      </Fade>
      <BordereToFilledButton
        text={languageStore.strings.Backtohome}
        disableAnimation={true}
        onPress={onPressBackToHomeButton}
      />
    </div>
  ));
};

export default SuccessRequestForm;
