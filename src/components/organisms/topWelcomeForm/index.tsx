import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import { Images } from "../../../styles";
import Fade from "react-reveal/Fade";
import Stores from "../../../stores";

const TopWelcomeForm = () => {
  const languageStore = Stores.languageStore;

  return useObserver(() => (
    <div className={"top-welcome-form center-style"}>
      <Fade bottom cascade>
        <h1>{languageStore.strings.FrontendBackendandMobileDeveloper}</h1>
        <p>{languageStore.strings.IcodebeautifulthingsandIlovewhatIdo}</p>
      </Fade>
      <img className={"avatar-img"} src={Images.avatar} />
      <img className={"technique-img"} src={Images.technique} />
    </div>
  ));
};

export default TopWelcomeForm;
