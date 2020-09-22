import { RequestModel } from "../../../models/RequestModel";
import { SendRequestModel } from "../../../models/SendRequestModel";

export interface ContactAPIInterface {
  createRequest: (model: SendRequestModel) => Promise<void>;
  getRequests: () => Promise<RequestModel[]>;
  deleteRequest: (id?: string) => Promise<void>;
}
