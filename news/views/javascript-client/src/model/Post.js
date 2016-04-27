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
    root.FootballWemediaApi.Post = factory(root.FootballWemediaApi.ApiClient, root.FootballWemediaApi.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * The Post model module.
   * @module model/Post
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Post</code>.
   * \u5E16\u5B50
   * @alias module:model/Post
   * @class
   */
  var exports = function() {















  };

  /**
   * Constructs a <code>Post</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Post} obj Optional instance to populate.
   * @return {module:model/Post} The populated <code>Post</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = User.constructFromObject(data['author']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('commentNum')) {
        obj['commentNum'] = ApiClient.convertToType(data['commentNum'], 'Integer');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], ['String']);
      }
      if (data.hasOwnProperty('likeNum')) {
        obj['likeNum'] = ApiClient.convertToType(data['likeNum'], 'Integer');
      }
      if (data.hasOwnProperty('commentTime')) {
        obj['commentTime'] = ApiClient.convertToType(data['commentTime'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Boolean');
      }
      if (data.hasOwnProperty('top')) {
        obj['top'] = ApiClient.convertToType(data['top'], 'Boolean');
      }
      if (data.hasOwnProperty('good')) {
        obj['good'] = ApiClient.convertToType(data['good'], 'Boolean');
      }
      if (data.hasOwnProperty('hot')) {
        obj['hot'] = ApiClient.convertToType(data['hot'], 'Boolean');
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
   * \u5185\u5BB9
   * @member {String} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {module:model/User} author
   */
  exports.prototype['author'] = undefined;

  /**
   * \u6807\u9898
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * \u63CF\u8FF0\uFF1A\u77ED\u63CF
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * post\u521B\u5EFA\u65E5\u671F
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;

  /**
   * \u8BC4\u8BBA\u6570\u76EE
   * @member {Integer} commentNum
   */
  exports.prototype['commentNum'] = undefined;

  /**
   * \u56FE\u7247\u5730\u5740
   * @member {Array.<String>} images
   */
  exports.prototype['images'] = undefined;

  /**
   * \u559C\u6B22\u7684\u6570\u76EE
   * @member {Integer} likeNum
   */
  exports.prototype['likeNum'] = undefined;

  /**
   * \u6700\u65B0\u8BC4\u8BBA\u7684\u66F4\u65B0\u65F6\u95F4
   * @member {Date} commentTime
   */
  exports.prototype['commentTime'] = undefined;

  /**
   * true \u53EF\u89C1\u9ED8\u8BA4 false \u4E0D\u53EF\u89C1
   * @member {Boolean} status
   */
  exports.prototype['status'] = undefined;

  /**
   * true \u7F6E\u9876 false \u4E0D\u7F6E\u9876\u9ED8\u8BA4
   * @member {Boolean} top
   */
  exports.prototype['top'] = undefined;

  /**
   * true \u52A0\u7CBE false \u4E0D\u52A0\u7CBE\u9ED8\u8BA4
   * @member {Boolean} good
   */
  exports.prototype['good'] = undefined;

  /**
   * true \u70ED\u5E16 false \u975E\u70ED\u5E16\u9ED8\u8BA4
   * @member {Boolean} hot
   */
  exports.prototype['hot'] = undefined;




  return exports;
}));
