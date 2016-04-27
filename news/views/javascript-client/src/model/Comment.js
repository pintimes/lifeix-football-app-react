(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.Comment = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * The Comment model module.
   * @module model/Comment
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Comment</code>.
   * \u8BC4\u8BBA
   * @alias module:model/Comment
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Comment} obj Optional instance to populate.
   * @return {module:model/Comment} The populated <code>Comment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('floorNum')) {
        obj['floorNum'] = ApiClient.convertToType(data['floorNum'], 'Integer');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], ['String']);
      }
      if (data.hasOwnProperty('postId')) {
        obj['postId'] = ApiClient.convertToType(data['postId'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
    }
    return obj;
  }


  /**
   * id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * \u697C\u5C42
   * @member {Integer} floorNum
   */
  exports.prototype['floorNum'] = undefined;

  /**
   * \u5185\u5BB9
   * @member {String} content
   */
  exports.prototype['content'] = undefined;

  /**
   * true \u53EF\u89C1\u9ED8\u8BA4 false \u4E0D\u53EF\u89C1
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;

  /**
   * \u521B\u5EFA\u65E5\u671F
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;

  /**
   * \u56FE\u7247\u5730\u5740
   * @member {Array.<String>} images
   */
  exports.prototype['images'] = undefined;

  /**
   * \u8BC4\u8BBA\u5BF9\u5E94\u7684post id
   * @member {String} postId
   */
  exports.prototype['postId'] = undefined;

  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;




  return exports;
}));
