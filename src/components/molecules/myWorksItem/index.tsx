import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";

export interface MyWorksItemProps {
  imageUrl: string;
  title: string;
  onPress?: () => void;
}

const MyWorksItem = (props: MyWorksItemProps) => {
  console.log(props.imageUrl);

  return useObserver(() => (
    <div
      className={"my-works-item"}
      onClick={props.onPress}
      style={{ backgroundImage: "url(" + props.imageUrl + ")" }}
    >
      <div className={"hover-component"}>
        <p>{props.title}</p>
      </div>
    </div>
  ));
};

export default MyWorksItem;
