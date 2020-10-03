import React, { useEffect } from "react";
import { useObserver } from "mobx-react";
import Header from "../../components/molecules/header";
import "../../components/common/styles.scss";
import { RouteComponentProps } from "react-router";
import PurpleForm from "../../components/molecules/purpleForm";
import AppFeaturesForm from "../../components/organisms/appFeaturesForm";
import Footer from "../../components/organisms/footer";
import DevelopmentStackForm from "../../components/organisms/developmentStackForm";
import StartProjectForm from "../../components/organisms/startProjectForm";
import Stores from "../../stores";
import Loader from "../../components/organisms/loader";

interface ProjectProps {
  id: string;
}

const LOADER_SIZE = 250;

const Project = (props: RouteComponentProps<ProjectProps>) => {
  const projectStore = Stores.projectStore;
  const languageStore = Stores.languageStore;

  const id = props.match.params.id;

  if (projectStore.project?.title) {
    document.title = projectStore.project?.title;
  }

  useEffect(() => {
    projectStore.getProject(id);
    languageStore.setOnChangeLanguageCallback(onChangeLanguageCallback);

    return () => {
      languageStore.removeOnChangeLanguageCallback(onChangeLanguageCallback);
    };
  }, []);

  const onChangeLanguageCallback = () => {
    projectStore.getProject(id, true);
  };

  return useObserver(() => (
    <div className={"center-style"}>
      <Header needToShowAnimationForSayHelloButton={true} />
      {projectStore.loading !== undefined && (
        <Loader type={projectStore.loading} size={LOADER_SIZE} />
      )}
      {projectStore.loading == undefined && (
        <PurpleForm
          title={projectStore.project?.title}
          text={projectStore.project?.description}
        />
      )}
      {projectStore.loading == undefined && <AppFeaturesForm />}
      {projectStore.loading == undefined &&
        projectStore.project?.development_stacks.map((item) => {
          return (
            <DevelopmentStackForm
              title={item.title}
              developmentStackItems={item.developmentStackItems}
            />
          );
        })}
      <StartProjectForm />
      <Footer />
    </div>
  ));
};

export default Project;
