import { action, decorate, observable } from "mobx";
import { Lang } from "../models/Lang";
import { ProjectModel } from "../models/ProjectModel";
import ProjectsAPIService from "../services/API/ProjectAPIService/ProjectAPIService";
import { ContainerStore, LoaderType } from "./containerStore";
import { LanguageStore } from "./languageStore";

export class ProjectStore extends ContainerStore {
  private languageStoreInstance?: LanguageStore;
  private projectsAPIService = new ProjectsAPIService();

  project?: ProjectModel;

  setLanguageStore(languageStore: LanguageStore) {
    this.languageStoreInstance = languageStore;
  }

  getProject = (id: string, isTranslating?: boolean) => {
    this.loading = isTranslating ? LoaderType.translating : LoaderType.loading;
    const lang = this.languageStoreInstance?.lang || Lang.en;

    this.projectsAPIService
      .getProject(id, lang)
      .then((project) => {
        this.project = project;
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = undefined;
        }, 1000);
      });
  };
}

const projectStore = new ProjectStore();
export default projectStore;

decorate(ProjectStore, {
  project: observable,
  loading: observable,

  getProject: action,
});
