import { access } from "fs";
import { action, decorate, observable } from "mobx";
import { Lang } from "../models/Lang";
import { ProjectShort } from "../models/ProjectModel";
import ProjectsAPIService from "../services/API/ProjectAPIService/ProjectAPIService";
import { ContainerStore, LoaderType } from "./containerStore";
import { LanguageStore } from "./languageStore";

export class ProjectsStore extends ContainerStore {
  private languageStoreInstance?: LanguageStore;
  private projectsAPIService = new ProjectsAPIService();

  projects: ProjectShort[] = [];

  setLanguageStore(languageStore: LanguageStore) {
    this.languageStoreInstance = languageStore;
  }

  getProjects = () => {
    this.loading = LoaderType.loading;

    const lang = this.languageStoreInstance?.lang || Lang.en;

    this.projectsAPIService
      .getProjects(lang)
      .then((projects) => {
        this.projects = projects;
      })
      .finally(() => {
        this.loading = undefined;
      });
  };
}

const projectsStore = new ProjectsStore();
export default projectsStore;

decorate(ProjectsStore, {
  projects: observable,
  loading: observable,

  getProjects: action,
});
