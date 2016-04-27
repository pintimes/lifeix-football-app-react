(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient', './model/Comment', './model/Post', './model/User', './api/CommentApi', './api/DeleteApi', './api/GetApi', './api/LikesApi', './api/PostApi', './api/PostsApi', './api/UserApi', './api/VisitorApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Comment'), require('./model/Post'), require('./model/User'), require('./api/CommentApi'), require('./api/DeleteApi'), require('./api/GetApi'), require('./api/LikesApi'), require('./api/PostApi'), require('./api/PostsApi'), require('./api/UserApi'), require('./api/VisitorApi'));
  }
}(function(ApiClient, Comment, Post, User, CommentApi, DeleteApi, GetApi, LikesApi, PostApi, PostsApi, UserApi, VisitorApi) {
  'use strict';

  /**
   * \u6B64API\u7528\u4E8E football wemedia.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var FootballWemediaApi = require('./index'); // See note below*.
   * var xxxSvc = new FootballWemediaApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new FootballWemediaApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new FootballWemediaApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new FootballWemediaApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Comment model constructor.
     * @property {module:model/Comment}
     */
    Comment: Comment,
    /**
     * The Post model constructor.
     * @property {module:model/Post}
     */
    Post: Post,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The CommentApi service constructor.
     * @property {module:api/CommentApi}
     */
    CommentApi: CommentApi,
    /**
     * The DeleteApi service constructor.
     * @property {module:api/DeleteApi}
     */
    DeleteApi: DeleteApi,
    /**
     * The GetApi service constructor.
     * @property {module:api/GetApi}
     */
    GetApi: GetApi,
    /**
     * The LikesApi service constructor.
     * @property {module:api/LikesApi}
     */
    LikesApi: LikesApi,
    /**
     * The PostApi service constructor.
     * @property {module:api/PostApi}
     */
    PostApi: PostApi,
    /**
     * The PostsApi service constructor.
     * @property {module:api/PostsApi}
     */
    PostsApi: PostsApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi,
    /**
     * The VisitorApi service constructor.
     * @property {module:api/VisitorApi}
     */
    VisitorApi: VisitorApi
  };

  return exports;
}));
