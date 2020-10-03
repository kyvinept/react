import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../components/common/styles.scss";
import FullScreenInformationForm from "../../components/organisms/fullScreenInformationForm";
import useWindowDimensions from "../../helpers/useWindowDimensions";
import { Images } from "../../styles";
import Stores from "../../stores";

const TITLE = "Vladislav | Submission Success";

const SuccessRequest = () => {
  const languageStore = Stores.languageStore;

  const { height, width } = useWindowDimensions();

  document.title = TITLE;

  return useObserver(() => (
    <div className={"success-request"} style={{ height, width }}>
      <FullScreenInformationForm
        image={Images.mailbox}
        title={languageStore.strings.MessageReceivedThanks}
        description={languageStore.strings.Illbeintouchwithyoushortly}
      />
    </div>
  ));
};

export default SuccessRequest;
