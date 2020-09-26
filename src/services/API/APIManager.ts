export class URLType {
  static server = "https://cryptic-plains-40071.herokuapp.com/api";
}

export enum RequestType {
  createRequest,
  getRequests,
  deleteRequest,

  getProjects,
}

const getRequestString = (requestType: RequestType, linkParams: string[]) => {
  switch (requestType) {
    case RequestType.createRequest:
    case RequestType.getRequests:
      return "/requests";
    case RequestType.deleteRequest:
      return "/requests/" + (linkParams[0] || "");

    case RequestType.getProjects:
      return "/projects/" + (linkParams[0] || "");
  }
};

const getRequestType = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.createRequest:
      return "POST";

    // case RequestType.editStep:
    //   return "PATCH";

    case RequestType.getRequests:
    case RequestType.getProjects:
      return "GET";

    case RequestType.deleteRequest:
      return "DELETE";
  }
};

const needAuthorization = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.createRequest:
      return false;

    default:
      return true;
  }
};

const getContentType = (requestType: RequestType) => {
  switch (requestType) {
    // case RequestType.createQuest:
    // case RequestType.editQuest:
    // case RequestType.loadImage:
    // case RequestType.loadVideo:
    // case RequestType.editStep:
    // case RequestType.startQuest:
    // case RequestType.editUserProfile:
    //   return "multipart/form-data";
    default:
      return "application/json";
  }
};

const createBody = (requestType: RequestType, body?: Object) => {
  switch (requestType) {
    default:
      return JSON.stringify(body);
  }
};

export const request = async <T>(
  requestType: RequestType,
  params: {
    body?: Object;
    token?: string;
    headerParams?: Object;
    linkParams?: string[];
  },
  serverType: URLType = URLType.server
) => {
  let headers = {
    "Content-Type": getContentType(requestType),
  };

  //   const token = await retrieveData<string>(DataType.token);

  //   if (needAuthorization(requestType)) {
  //     headers = { ...headers, Authorization: "Bearer " + token || "" };
  //   }

  let paramsString = "";
  if (params.headerParams) {
    for (const [key, value] of Object.entries(params.headerParams)) {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item != undefined) {
            paramsString += paramsString.length == 0 ? "?" : "&";
            paramsString += key + "=" + item;
          }
        });
      } else {
        if (value != undefined) {
          paramsString += paramsString.length == 0 ? "?" : "&";
          paramsString += key + "=" + value;
        }
      }
    }
  }

  const url =
    serverType +
    getRequestString(requestType, params.linkParams || []) +
    paramsString;
  console.log(url, headers, params);

  return new Promise<T>((resolve, reject) => {
    fetch(url, {
      method: getRequestType(requestType),
      headers,
      body: createBody(requestType, params.body),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err);
      });
  });
};
