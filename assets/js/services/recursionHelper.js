/**
 * Recursion Helper service
 * ------------------------------------------------------------------------
 * Helps with directives that want to use themseleves recursively (eg. a tree directive).
 */
angular.module('angularTree')

.factory('recursionHelper', function ($compile) {
  return {

    /**
     * Manually compiles the element, fixing the recursion loop.
     *
     * @param  {DOMel}           el   [A DOM element]
     * @param  {Function|Object} link [A post-link function, or object with pre and
     *                                 post properties]
     *
     * @return {Object}               [Object containing linking functions]
     */
    compile: function (el, link) {

      // Normalize the link parameter
      if(angular.isFunction(link)){
        link = { post: link };
      }

      // Break the recursion loop by removing the contents.
      var contents = el.contents().remove();
      var compiledContents;

      // Object with pre and post linking functions.
      return {
        pre: (link && link.pre) ? link.pre : null,

        // compiles and re-adds the contents
        post: function (scope, el) {

          // Compile the contents.
          if (!compiledContents) {
            compiledContents = $compile(contents);
          }

          // Re-add the compiled contents to the element.
          compiledContents(scope, function (clone) {
            el.append(clone);
          });

          // Call the post-link function, if any.
          if (link && link.post) {
            link.post.apply(null, arguments);
          }
        }
      }
    }
  };
});
