//Imports
const ResponseHandler = require('../handlers/ResponseHandler.js');
import * as ERROR_CONSTANTS from '../constants/ErrorMessageConstants';
let UserService = require("../services/UserService");
let userService = new UserService();
const Joi = require('joi');

//Return list of all sample values
export const getUsers = () => {
  return {
    auth:false,
    // "tags" enable swagger to document API
    tags: ['api'],
    description: 'Get all user data',
    notes: 'Returns a list of all users',
    handler: (request, reply) => {
      userService.getUsers(function (err, users) {
        if (err) {
          console.error(err);
          reply(Boom.badImplementation(ERROR_CONSTANTS.INTERNAL_ERROR));
        }
        console.log("users=" + users);
        reply(ResponseHandler.handleSuccessResponse(request, users));
      });
    }
  };
};

export const saveUser = () => {
  return {
    auth:false,
    // "tags" enable swagger to document API
    tags: ['api'],
    description: 'Save user data',
    notes: 'Save user data',
    // We use Joi plugin to validate request
  
    handler: (request, reply) => {
      if (request.payload) {
        userService.addUser(request.payload, function (err, user) {
          if (err) {
            console.error(err);
            reply(Boom.badImplementation(ERROR_CONSTANTS.INTERNAL_ERROR));
          }
          else {
            reply(ResponseHandler.handleSuccessResponse(request, user));
          }
        })
      }
      else {
        reply(Boom.badRequest(ERROR_CONSTANTS.MISSING_REQUEST_BODY));
      }
    }
  };
};

export const getUserById = () => {
  return {
    auth:false,
    // "tags" enable swagger to document API
    tags: ['api'],
    description: 'Get user by ID',
    notes: 'Returns a user value',
    handler: (request, reply) => {
      if (request.params.id) {
        userService.getUserById(request.params.id ,function (err, user) {
          if (err) {
            console.error(err);
            reply(Boom.badImplementation(ERROR_CONSTANTS.INTERNAL_ERROR));
          }
          console.log("user=" + user);
          reply(ResponseHandler.handleSuccessResponse(request, user));
        });
      } else {
        reply(Boom.badRequest(ERROR_CONSTANTS.MISSING_REQUEST_PARAM));
      }
    }
  };
};

export const updateUserById = () => {
  return {
    auth:false,
    // "tags" enable swagger to document API
    tags: ['api'],
    description: 'Update user by ID',
    notes: 'Returns the updated user value',
    handler: (request, reply) => {
      if (request.params.id && request.payload) {
        userService.updateUserById(request.params.id, request.payload, function (err, user) {
          if (err) {
            console.error(err);
            reply(Boom.badImplementation(ERROR_CONSTANTS.INTERNAL_ERROR));
          }
          console.log("user=" + user);
          reply(ResponseHandler.handleSuccessResponse(request, user));
        });
      } else {
        reply(Boom.badRequest(ERROR_CONSTANTS.MISSING_REQUEST_BODY));
      }
    }
  };
};

export const deleteUserById = () => {
  return {
    auth:false,
    // "tags" enable swagger to document API
    tags: ['api'],
    description: 'DELETE user by ID',
    notes: 'Returns confirmation',
    handler: (request, reply) => {
      if (request.params.id) {
        userService.deleteUserById(request.params.id ,function (err, user) {
          if (err) {
            console.error(err);
            reply(Boom.badImplementation(ERROR_CONSTANTS.INTERNAL_ERROR));
          }
          console.log("user=" + user);
          reply(ResponseHandler.handleSuccessResponse(request, user));
        });
      } else {
        reply(Boom.badRequest(ERROR_CONSTANTS.MISSING_REQUEST_PARAM));
      }
    }
  };
};
