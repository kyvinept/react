import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import "./styles.scss";
import "../../common/styles.scss";
import MyWorksItem from "../../molecules/myWorksItem";
import NavigationManager, {
  NavigationType,
  Page,
} from "../../../services/NavigationManager";
import Stores from "../../../stores";
import { ProjectShort } from "../../../models/ProjectModel";
import Loader from "../loader";
import { LoaderType } from "../../../stores/containerStore";

const LOADER_SIZE = 160;

const MyWorksForm = () => {
  const projectsStore = Stores.projectsStore;
  const languageStore = Stores.languageStore;

  const renderMyWorkItem = (item: ProjectShort) => {
    const onPress = () => {
      NavigationManager.open(Page.projects, NavigationType.currentTab, {
        id: item.id,
      });
    };

    return (
      <MyWorksItem
        title={item.title}
        imageUrl={item.image_url}
        type={item.type}
        onPress={onPress}
      />
    );
  };

  const onPressEmailMeLink = () => {
    NavigationManager.open(Page.contact, NavigationType.currentTab);
  };

  return useObserver(() => (
    <div className={"my-works-form"}>
      <h1>{languageStore.strings.MyWorks}</h1>
      <p>
        {
          languageStore.strings
            .HereareafewdesignprojectsIveworkedonrecentlyWanttoseemore
        }
        <a onClick={onPressEmailMeLink}>{languageStore.strings.Emailme}</a>
      </p>
      <div className={"works"}>
        {projectsStore.projects.map((item) => {
          return renderMyWorkItem(item);
        })}
        {projectsStore.loading != undefined && (
          <Loader type={LoaderType.loading} size={LOADER_SIZE} />
        )}
      </div>
    </div>
  ));
};

export default MyWorksForm;
