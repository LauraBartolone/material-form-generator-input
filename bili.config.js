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
        postcss: {
            minimize: {
                preset: ['advanced', {
                    discardDuplicates: true
                }]
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