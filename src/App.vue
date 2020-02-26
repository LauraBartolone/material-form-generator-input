<template>
    <div class="app">
        <vue-form-generator ref="dataTextForm"
            @validated="onValidateData"
            :schema="schemaText"
            :model="modelText"
            :options="formOptions"
        >
        </vue-form-generator> 
        
        {{modelText}}
        
        <bw-material-button v-on:click-btn="submitTextForm"
            label="submit" class="mb-4" type="contain" color="secondary"
            size="small"
        ></bw-material-button>
    </div>
</template>

<script>

import Vue from 'vue';
import BwMaterialFG from './index';

Vue.use(BwMaterialFG);
    export default {
        inject: ['$validator'],
        data () {
            return {
                schemaText: {
                groups: [
                {
                    fields: [
                    {
                        id: "prova id",
                        type: "bw-text",
                        inputType: 'text',
                        placeholder: "prova placeholder",
                        textLabel: "prova",
                        color: "primary",
                        attrs: [{ "outlined": true }, { "textarea": true }, { "maxlength": 20 }, { "minlength": 2 },], // textarea
                        model: "text1",
                        rules: "required"
                    },
                    {
                        id: "prova id2",
                        type: "bw-text",
                        inputType: 'text',
                        placeholder: "prova2 placeholder",
                        textLabel: "prova",
                        color: "primary",
                        attrs: [{ "maxlength": 20 }, { "minlength": 2 },], // textarea
                        model: "text2",
                        rules: "required|min:5"
                    },
                    ]
                }
                ]
            },
            modelText: {
                text1: "",
                text2: "",
            },
            formOptions: {
                validateAfterChanged: false,
                validateAsync: true,
                validationScope: 'examplescope',
            },
               
            }
        },
        components: {
        },
        methods: {
            onValidateData() {},
            submitTextForm() {
                this.$validator.validate('examplescope.*').then(valid => {
                    if (!valid) {
                        console.log('invalid data format');
                    // do stuff if not valid.
                    }
                }).catch(() => {
                });
            },
        }
        
    }
</script>

<style>
@import '~bw-material/dist/index.css';
</style>
