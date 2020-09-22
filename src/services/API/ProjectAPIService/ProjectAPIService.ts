import { ProjectModel, ProjectShort } from "../../../models/ProjectModel";
import { RequestModel } from "../../../models/RequestModel";
import { SendRequestModel } from "../../../models/SendRequestModel";
import { request, RequestType } from "../APIManager";
import { ProjectAPIInterface } from "./ProjectAPIInterface";

export default class ProjectAPIService implements ProjectAPIInterface {
  getProjects = async (lang: string) => {
    return request<ProjectShort[]>(RequestType.getProjects, {
      headerParams: {
        lang,
      },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  };

  getProject = async (id: string, lang: string) => {
    return request<ProjectModel>(RequestType.getProjects, {
      linkParams: [id],
      headerParams: {
        lang,
      },
    })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  };
}
