import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";

export interface DevelopmentStackItemProps {
  title: string;
  text: string;
}

const DevelopmentStackItem = (props: DevelopmentStackItemProps) => {
  return useObserver(() => (
    <div className={"development-stack-item center-style"}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  ));
};

export default DevelopmentStackItem;
