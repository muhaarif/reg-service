import _ from 'lodash';
import ResponseConstants from '../constants/ResponseConstants';

const defaultResponse = (request) => {
  let response = {};
  response.status = "success";
  response.origin = request.url;
  response.executionTime = "";
  response.uid = "";
  response.sessionid = "";
  response.result = {};
  return response;

};


export const handleSuccessResponse = (request, data) => {
  let response = defaultResponse(request);
  response.result = data;
  response.count = 1;
  if (_.isArray(data)) {
      response.count = data.length;
  }
  return response;

};

//https://github.com/hapijs/boom
export const handleErrorResponse = (request, error) => {
  let response = defaultResponse(request);
  response.status = "failure";

  return response;

};

export const healthCheck = () => {
  let response = {};
  response.status = "success";
  response.serverStatus = "active";
  return response;
};