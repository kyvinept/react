import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import DevelopmentStackItemComponent from "../../molecules/developmentStackItem";
import { DevelopmentStackItem } from "../../../models/ProjectModel";

export interface DevelopmentStackFormProps {
  title: string;
  developmentStackItems: DevelopmentStackItem[];
}

const DevelopmentStackForm = (props: DevelopmentStackFormProps) => {
  return useObserver(() => (
    <div className={"development-stack-form center-style"}>
      <h2>{props.title}</h2>

      <div className={"development-stack-item-container"}>
        {props.developmentStackItems.map((item) => {
          return (
            <DevelopmentStackItemComponent
              title={item.title}
              text={item.text}
            />
          );
        })}
      </div>
    </div>
  ));
};

export default DevelopmentStackForm;
