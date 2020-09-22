import React from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import { Images } from "../../../styles";
import ImageButton from "../../atoms/imageButton";
import Stores from "../../../stores";
import NavigationManager, { Page } from "../../../services/NavigationManager";
import AppFeature from "../../molecules/appFeature";

export interface TopProjectFormProps {}

const TopProjectForm = (props: TopProjectFormProps) => {
  const projectStore = Stores.projectStore;

  const onPressLink = (link: string) => {
    NavigationManager.openLink(link);
  };

  const appstoreLink = projectStore.project?.appstore_link;
  const googlePlayLink = projectStore.project?.google_play_link;

  return useObserver(() => (
    <div className={"top-project-form center-style"}>
      {/* <h1>{projectStore.project?.icon_name}</h1> */}
      {/* <h1>{projectStore.project?.title}</h1> */}
      {/* //   <div className={"project-icon"}>
    //     <img src={projectStore.project?.icon_url} />
    //     <p>{projectStore.project?.icon_name}</p>
    //   </div>

    //   <h1>{projectStore.project?.title}</h1>
    //   <div className={"stores-buttons-container"}>
    //     {appstoreLink && (
    //       <ImageButton
    //         image={Images.availableOnAppStore}
    //         onPress={() => onPressLink(appstoreLink)}
    //       />
    //     )}
    //     {googlePlayLink && (
    //       <ImageButton
    //         image={Images.availableOnGooglePlay}
    //         onPress={() => onPressLink(googlePlayLink)}
    //       />
    //     )}
    //   </div>
    //   {/* <img
    //     className={"main-image"}
    //     src={projectStore.project?.main_image_url}
    //   /> */}
    </div>
  ));
};

export default TopProjectForm;
