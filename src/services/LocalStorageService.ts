export enum DataType {
  lang = "lang",
}

class LocalStorageService {
  save(data: string, dataType: DataType) {
    localStorage.setItem(dataType, data);
  }

  get(dataType: DataType) {
    return localStorage.getItem(dataType);
  }
}

const localStorageService = new LocalStorageService();
export default localStorageService;
