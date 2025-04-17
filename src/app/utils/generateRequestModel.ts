import { UtilBaseRequest } from '../models/interfaces/utilBaseRequest';

export class RequestModel {
  public generateModel(
    controller: string,
    method: string,
    params?: any
  ): UtilBaseRequest {
    let request: UtilBaseRequest;

    if (params == null) {
      request = {
        controller: '',
        method: '',
      };
    } else {
      request = {
        controller: '',
        method: '',
        params: {},
      };
    }

    request.controller = controller;
    request.method = method;
    request.params = params;

    return request;
  }
}
