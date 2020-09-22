import { RequestModel } from "../../../models/RequestModel";
import { SendRequestModel } from "../../../models/SendRequestModel";
import { request, RequestType } from "../APIManager";
import { ContactAPIInterface } from "./ContactAPIInterface";

export default class ContactAPIService implements ContactAPIInterface {
  deleteRequest = async (id?: string) => {
    return request(RequestType.deleteRequest, {
      linkParams: id ? [id] : undefined,
    })
      .then(() => {
        return;
      })
      .catch((err) => {
        throw err;
      });
  };

  getRequests = async () => {
    return request<RequestModel[]>(RequestType.getRequests, {})
      .then((data) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  };

  createRequest = async (model: SendRequestModel) => {
    return request(RequestType.createRequest, {
      body: model,
    })
      .then(() => {
        return;
      })
      .catch((err) => {
        throw err;
      });
  };
}
