import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import { ProjectType } from "../../../models/ProjectModel";
import { Images } from "../../../styles";

export interface MyWorksItemProps {
  imageUrl: string;
  title: string;
  onPress?: () => void;
  type: ProjectType;
}

const MyWorksItem = (props: MyWorksItemProps) => {
  return useObserver(() => (
    <div
      className={"my-works-item"}
      onClick={props.onPress}
      style={{ backgroundImage: "url(" + props.imageUrl + ")" }}
    >
      <img src={props.type == 'mobile' ? Images.mobileIcon : Images.webIcon}/>
      <div className={"hover-component"}>
        <p>{props.title}</p>
      </div>
    </div>
  ));
};

export default MyWorksItem;
