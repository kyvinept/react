import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import { Images } from "../../../styles";
import Stores from "../../../stores";

const Footer = () => {
  const languageStore = Stores.languageStore;

  return useObserver(() => (
    <div className={"footer center-style"}>
      <img src={Images.avatarWhite} />
      <h2>{languageStore.strings.LivingLearningLevelingUpOneDayAtATime}</h2>
      <p>{languageStore.strings.HandcraftedByMeVladislav}</p>
    </div>
  ));
};

export default Footer;
