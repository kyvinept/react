import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";

export interface PurpleFormProps {
  title?: string;
  text?: string;
  needToShowBottomOffset?: boolean;
}

const PurpleForm = (props: PurpleFormProps) => {
  return useObserver(() => (
    <div
      className={
        "purple-form center-style" +
        (props.needToShowBottomOffset ? " long-purple-form" : "")
      }
    >
      <div className={"text-form"}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  ));
};

export default PurpleForm;
