import { decorate, observable } from "mobx";

export enum LoaderType {
  loading,
  translating,
}

export class ContainerStore {
  loading?: LoaderType;
}

const containerStore = new ContainerStore();
export default containerStore;

decorate(ContainerStore, {
  loading: observable,
});
