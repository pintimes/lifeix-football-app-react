(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FootballWemediaApi) {
      root.FootballWemediaApi = {};
    }
    root.FootballWemediaApi.User = factory(root.FootballWemediaApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The User model module.
   * @module model/User
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * \u7528\u6237
   * @alias module:model/User
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('picture')) {
        obj['picture'] = ApiClient.convertToType(data['picture'], 'String');
      }
    }
    return obj;
  }


  /**
   * id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * \u6635\u79F0
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * \u5934\u50CF\u5730\u5740
   * @member {String} picture
   */
  exports.prototype['picture'] = undefined;




  return exports;
}));
