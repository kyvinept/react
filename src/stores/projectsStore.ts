import { access } from "fs";
import { action, decorate, observable } from "mobx";
import { Lang } from "../models/Lang";
import { ProjectShort } from "../models/ProjectModel";
import ProjectsAPIService from "../services/API/ProjectAPIService/ProjectAPIService";
import { LanguageStore } from "./languageStore";

export class ProjectsStore {
  private languageStoreInstance?: LanguageStore;
  private projectsAPIService = new ProjectsAPIService();

  projects: ProjectShort[] = [];

  setLanguageStore(languageStore: LanguageStore) {
    this.languageStoreInstance = languageStore;
  }

  getProjects = () => {
    const lang = this.languageStoreInstance?.lang || Lang.en;

    this.projectsAPIService.getProjects(lang).then((projects) => {
      this.projects = projects;
    });
  };
}

const projectsStore = new ProjectsStore();
export default projectsStore;

decorate(ProjectsStore, {
  projects: observable,

  getProjects: action,
});
