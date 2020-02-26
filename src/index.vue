<template>
    <div class="app2">
        <vue-form-generator ref="dataTextForm"
        @validated="onValidateData"
        :schema="schemaText"
        :model="modelText"
        :options="formOptions"
        >
        </vue-form-generator> 
    </div>
</template>

<script>
import Vue from 'vue';

import BwMaterialFG from './index';
Vue.use(BwMaterialFG);

    export default {
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
            onValidateData() {}
        }
        
    }
</script>
