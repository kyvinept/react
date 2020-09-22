import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import InputField from "../../molecules/inputField";
import BordereToFilledButton from "../../atoms/borderToFilledButton";
import Stores from "../../../stores";
import Fade from "react-reveal/Fade";

const ContactForm = () => {
  const contactStore = Stores.contactStore;
  const languageStore = Stores.languageStore;

  return useObserver(() => (
    <div className={"contact-form center-style"}>
      <Fade bottom cascade>
        <h1>
          {
            languageStore.strings
              .ThanksForTakingTheTimeToReachOutHowCanIHelpYouToday
          }
        </h1>
      </Fade>
      <div className={"top-input center-style"}>
        <InputField
          title={languageStore.strings.Name}
          type={"text"}
          value={contactStore.sendRequestModel.name}
          onChange={(text) => {
            contactStore.setName(text);
          }}
        />
        <div className={"spacer-for-text-input-fields"} />
        <InputField
          title={languageStore.strings.Email}
          type={"email"}
          value={contactStore.sendRequestModel.email}
          onChange={(text) => {
            contactStore.setEmail(text);
          }}
        />
      </div>
      <div className={"spacer-for-text-input-fields"} />
      <div className={"bottom-input center-style"}>
        <InputField
          title={languageStore.strings.Message}
          type={"text"}
          isMultiline={true}
          rows={8}
          value={contactStore.sendRequestModel.message}
          onChange={(text) => {
            contactStore.setMessage(text);
          }}
        />
      </div>
      <div className={"big-spacer"} />
      <BordereToFilledButton
        text={languageStore.strings.Submit}
        onPress={contactStore.sendRequest}
      />
    </div>
  ));
};

export default ContactForm;
