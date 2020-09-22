import { ProjectModel, ProjectShort } from "../../../models/ProjectModel";

export interface ProjectAPIInterface {
  getProjects: (lang: string) => Promise<ProjectShort[]>;
  getProject: (id: string, lang: string) => Promise<ProjectModel>;
}
