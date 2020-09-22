import { action, decorate, observable } from "mobx";
import { Lang } from "../models/Lang";
import { ProjectModel } from "../models/ProjectModel";
import ProjectsAPIService from "../services/API/ProjectAPIService/ProjectAPIService";
import { LanguageStore } from "./languageStore";

export class ProjectStore {
  private languageStoreInstance?: LanguageStore;
  private projectsAPIService = new ProjectsAPIService();

  project?: ProjectModel;

  setLanguageStore(languageStore: LanguageStore) {
    this.languageStoreInstance = languageStore;
  }

  getProject = (id: string) => {
    const lang = this.languageStoreInstance?.lang || Lang.en;

    this.projectsAPIService.getProject(id, lang).then((project) => {
      this.project = project;
    });
  };
}

const projectStore = new ProjectStore();
export default projectStore;

decorate(ProjectStore, {
  project: observable,

  getProject: action,
});
