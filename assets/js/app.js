/**
 * Angular Tree module
 * ------------------------------------------------------------------------
 * This is the main app module.
 */
angular.module('angularTree', [])

// This is some dummy tree data. Right now its the file structure of a sails project.
.constant('sailsProject', {
  type: 'root',
  name: 'project',
  path: '/',
  children: [

    // api
    {
      type: 'node',
      name: 'api',
      path: '/api',
      children: [
        {
          type: 'node',
          name: 'controllers',
          path: '/api/controllers',
          children: []
        },
        {
          type: 'node',
          name: 'models',
          path: '/api/models',
          children: []
        },
        {
          type: 'node',
          name: 'policies',
          path: '/api/policies',
          children: []
        },
        {
          type: 'node',
          name: 'responses',
          path: '/api/responses',
          children: []
        },
        {
          type: 'node',
          name: 'services',
          path: '/api/services',
          children: []
        }
      ]
    },

    // assets
    {
      type: 'node',
      name: 'assets',
      path: '/assets',
      children: [
        {
          type: 'node',
          name: 'images',
          path: '/assets/images',
          children: []
        },
        {
          type: 'node',
          name: 'js',
          path: '/assets/js',
          children: [
            {
              type: 'leaf',
              name: 'connection.example.js',
              path: '/assets/js/connection.example.js'
            },
            {
              type: 'leaf',
              name: 'sails.io.js',
              path: '/assets/js/sails.io.js'
            },
            {
              type: 'leaf',
              name: 'socket.io.js',
              path: '/assets/js/socket.io.js'
            }
          ]
        },
        {
          type: 'node',
          name: 'styles',
          path: '/assets/styles',
          children: [
            {
              type: 'leaf',
              name: 'importer.less',
              path: '/assets/styles/importer.less'
            }
          ]
        },
        {
          type: 'node',
          name: 'templates',
          path: '/assets/templates',
          children: []
        },
        {
          type: 'leaf',
          name: 'favicon.ico',
          path: '/assets/favicon.ico'
        },
        {
          type: 'left',
          name: 'robots.txt',
          path: '/assets/robots.txt'
        },
      ]
    },

    // config
    {
      type: 'node',
      name: 'config',
      path: '/config',
      children: [
        {
          type: 'node',
          name: 'locales',
          path: '/config/locales',
          children: [
            {
              type: 'leaf',
              name: 'de.json',
              path: '/config/locales/de.json'
            },
            {
              type: 'leaf',
              name: 'en.json',
              path: '/config/locales/en.json'
            },
            {
              type: 'leaf',
              name: 'es.json',
              path: '/config/locales/es.json'
            },
            {
              type: 'leaf',
              name: 'fr.json',
              path: '/config/locales/fr.json'
            }
          ]
        },
        {
          type: 'leaf',
          name: 'blueprints.js',
          path: '/config/blueprints.js'
        },
        {
          type: 'leaf',
          name: 'bootstrap.js',
          path: '/config/bootstrap.js'
        },
        {
          type: 'leaf',
          name: 'connections.js',
          path: '/config/connections.js'
        },
        {
          type: 'leaf',
          name: 'cors.js',
          path: '/config/cors.js'
        },
        {
          type: 'leaf',
          name: 'csrf.js',
          path: '/config/csrf.js'
        },
        {
          type: 'leaf',
          name: 'express.js',
          path: '/config/express.js'
        },
        {
          type: 'leaf',
          name: 'globals.js',
          path: '/config/globals.js'
        },
        {
          type: 'leaf',
          name: 'i18n.js',
          path: '/config/i18n.js'
        },
        {
          type: 'leaf',
          name: 'csrf.js',
          path: '/config/csrf.js'
        },
        {
          type: 'leaf',
          name: 'express.js',
          path: '/config/express.js'
        },
        {
          type: 'leaf',
          name: 'globals.js',
          path: '/config/globals.js'
        },
        {
          type: 'leaf',
          name: 'i18n.js',
          path: '/config/i18n.js'
        },
        {
          type: 'leaf',
          name: 'local.js',
          path: '/config/local.js'
        },
        {
          type: 'leaf',
          name: 'log.js',
          path: '/config/log.js'
        },
        {
          type: 'leaf',
          name: 'models.js',
          path: '/config/models.js'
        },
        {
          type: 'leaf',
          name: 'policies.js',
          path: '/config/policies.js'
        },
        {
          type: 'leaf',
          name: 'routes.js',
          path: '/config/routes.js'
        },
        {
          type: 'leaf',
          name: 'session.js',
          path: '/config/session.js'
        },
        {
          type: 'leaf',
          name: 'sockets.js',
          path: '/config/sockets.js'
        },
        {
          type: 'leaf',
          name: 'views.js',
          path: '/config/views.js'
        }
      ]
    },

    // node modules. Children arent important here.
    {
      type: 'node',
      name: 'node_modules',
      path: '/node_modules',
      children: []
    },

    // tasks
    {
      type: 'node',
      name: 'tasks',
      path: '/tasks',
      children: [
        {
          type: 'node',
          name: 'config',
          path: '/tasks/config',
          children: [
            {
              type: 'leaf',
              name: 'clean.js',
              path: '/tasks/config/clean.js'
            },
            {
              type: 'leaf',
              name: 'coffee.js',
              path: '/tasks/config/coffee.js'
            },
            {
              type: 'leaf',
              name: 'concat.js',
              path: '/tasks/config/concat.js'
            },
            {
              type: 'leaf',
              name: 'copy.js',
              path: '/tasks/config/clean.js'
            },
            {
              type: 'leaf',
              name: 'cssmin.js',
              path: '/tasks/config/cssmin.js'
            },
            {
              type: 'leaf',
              name: 'jst.js',
              path: '/tasks/config/jst.js'
            },
            {
              type: 'leaf',
              name: 'less.js',
              path: '/tasks/config/less.js'
            },
            {
              type: 'leaf',
              name: 'sails-linker.js',
              path: '/tasks/config/sails-linker.js'
            },
            {
              type: 'leaf',
              name: 'sync.js',
              path: '/tasks/config/sync.js'
            },
            {
              type: 'leaf',
              name: 'uglify.js',
              path: '/tasks/config/uglify.js'
            },
            {
              type: 'leaf',
              name: 'watch.js',
              path: '/tasks/config/watch.js'
            }
          ]
        },
        {
          type: 'node',
          name: 'resiter',
          path: '/tasks/resiter',
          children: [
            {
              type: 'leaf',
              name: 'build.js',
              path: '/tasks/register/build.js'
            },
            {
              type: 'leaf',
              name: 'buildProd.js',
              path: '/tasks/register/buildProd.js'
            },
            {
              type: 'leaf',
              name: 'compileAssets.js',
              path: '/tasks/register/compileAssets.js'
            },
            {
              type: 'leaf',
              name: 'default.js',
              path: '/tasks/register/default.js'
            },
            {
              type: 'leaf',
              name: 'linkAssets.js',
              path: '/tasks/register/linkAssets.js'
            },
            {
              type: 'leaf',
              name: 'linkAssetsBuild.js',
              path: '/tasks/register/linkAssetsBuild.js'
            },
            {
              type: 'leaf',
              name: 'linkAssetsBuildProd.js',
              path: '/tasks/register/linkAssetsBuildProd.js'
            },
            {
              type: 'leaf',
              name: 'prod.js',
              path: '/tasks/register/prod.js'
            },
            {
              type: 'leaf',
              name: 'syncAssets.js',
              path: '/tasks/register/syncAssets.js'
            }
          ]
        },
        {
          type: 'node',
          name: 'pipeline.js',
          path: '/task/pipeline.js',
          children: []
        }
      ]
    },

    // views
    {
      type: 'node',
      name: 'views',
      path: '/views',
      children: [
        {
          type: 'leaf',
          name: '403.ejs',
          path: '/views/403.ejs'
        },
        {
          type: 'leaf',
          name: '404.ejs',
          path: '/views/404.ejs'
        },
        {
          type: 'leaf',
          name: '500.ejs',
          path: '/views/500.ejs'
        },
        {
          type: 'leaf',
          name: 'homepage.ejs',
          path: '/views/homepage.ejs'
        },
        {
          type: 'leaf',
          name: 'layout.ejs',
          path: '/views/layout.ejs'
        }
      ]
    },

    // misc project root files
    {
      type: 'leaf',
      name: '.gitignore',
      path: '/.gitignore'
    },
    {
      type: 'leaf',
      name: '.sailsrc',
      path: '/.sailsrc'
    },
    {
      type: 'leaf',
      name: 'app.js',
      path: '/app.js'
    },
    {
      type: 'leaf',
      name: 'Gruntfile.js',
      path: '/Gruntfile.js'
    },
    {
      type: 'leaf',
      name: 'package.json',
      path: '/package.json'
    },
    {
      type: 'leaf',
      name: 'README.md',
      path: '/README.md'
    }
  ]
})
