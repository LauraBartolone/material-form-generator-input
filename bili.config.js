module.exports = {
    banner: true,
    name: 'bw-material-form-generator',
    plugins: {
        vue: {
            style: {
                preprocessOptions: {
                    scss: {
                        includePaths: ['node_modules']
                    }
                }
            }
        },
        'commonjs': {
            namedExports: {
              'vue-form-generator': [ 'abstractField' ]
            }
          },
    },
    alias: {
      resolve: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
};