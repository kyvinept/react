import { access } from "fs";
import { action, decorate, observable } from "mobx";
import { RequestModel } from "../models/RequestModel";
import ContactAPIService from "../services/API/ContactAPIService/ContactAPIService";
import { ContainerStore } from "./containerStore";

export class ContactsStore extends ContainerStore {
  private contactAPIService = new ContactAPIService();

  requests: RequestModel[] = [];

  getRequests = () => {
    this.contactAPIService.getRequests().then((requests) => {
      this.requests = requests;
    });
  };

  deleteAllRequests = () => {
    this.contactAPIService.deleteRequest().then(() => {
      this.requests = [];
    });
  };

  deleteRequest = (id: string) => {
    this.contactAPIService.deleteRequest(id).then(() => {
      this.requests = this.requests.filter((item) => item.id != id);
    });
  };
}

const contactsStore = new ContactsStore();
export default contactsStore;

decorate(ContactsStore, {
  requests: observable,

  getRequests: action,
  deleteRequest: action,
});
