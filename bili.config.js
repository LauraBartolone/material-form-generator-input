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
            // explicitly specify unresolvable named exports
            namedExports: {
                'vue-form-generator': [ 'abstractField' ],
            },
        },
    },
    alias: {
      resolve: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
};