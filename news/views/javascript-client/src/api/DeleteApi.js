(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Comment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Comment'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.DeleteApi = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.Comment);
  }
}(this, function(ApiClient, Comment) {
  'use strict';

  /**
   * Delete service.
   * @module api/DeleteApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DeleteApi. 
   * @alias module:api/DeleteApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteComment operation.
     * @callback module:api/DeleteApi~deleteCommentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * \u7528\u6237\u5220\u9664Comment
     * \u7528\u6237\u5220\u9664Comment,\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u7684Comment
     * @param {String} userId authorization
     * @param {String} commentId \u8BC4\u8BBAId
     * @param {module:api/DeleteApi~deleteCommentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/Comment}
     */
    this.deleteComment = function(userId, commentId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteComment";
      }

      // verify the required parameter 'commentId' is set
      if (commentId == undefined || commentId == null) {
        throw "Missing the required parameter 'commentId' when calling deleteComment";
      }


      var pathParams = {
        'commentId': commentId
      };
      var queryParams = {
      };
      var headerParams = {
        'userId': userId
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Comment;

      return this.apiClient.callApi(
        '/comments/{commentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
