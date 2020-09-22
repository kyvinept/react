import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import BordereToFilledButton from "../../atoms/borderToFilledButton";
import NavigationManager, {
  Page,
  NavigationType,
} from "../../../services/NavigationManager";
import Stores from "../../../stores";
import Tada from "react-reveal/Tada";

export interface StartProjectFormProps {}

const StartProjectForm = (props: StartProjectFormProps) => {
  const languageStore = Stores.languageStore;

  const onPressLetsDoThisButton = () => {
    NavigationManager.open(Page.contact, NavigationType.currentTab);
  };

  return useObserver(() => (
    <div className={"start-project-form"}>
      <h1>{languageStore.strings.StartAProject}</h1>
      <p>
        {
          languageStore.strings
            .InterestedInWorkingTogetherWeShouldQueueUpAChatIllBuyTheCoffee
        }
      </p>
      <Tada>
        <BordereToFilledButton
          text={languageStore.strings.LetsDoThis}
          textStyle={"filled-button-style"}
          onPress={onPressLetsDoThisButton}
        />
      </Tada>
    </div>
  ));
};

export default StartProjectForm;
