<template>
    <div class="app">
        <h6>MATERIAL TEXT FIELD</h6>
        <vue-form-generator ref="dataTextForm"
            @validated="onValidateData"
            :schema="schemaText"
            :model="modelText"
            :options="formOptions"
        >
        </vue-form-generator> 
        
        {{modelText}}

        <bw-material-button v-on:click-btn="submitTextForm"
            label="submit" type="contain" color="secondary"
            size="small"
        ></bw-material-button>
        <br>

        <h6>MATERIAL RADIO</h6>
        <vue-form-generator
            @validated="onValidateData"
            :schema="schemaRadio"
            :model="modelRadio"
            :options="formOptions"
        >
        </vue-form-generator> 
        {{modelRadio}}

        <br>
        
        <h6>MATERIAL CHECK</h6>
        <vue-form-generator
            @validated="onValidateData"
            :schema="schemaCheck"
            :model="modelCheck"
            :options="formOptions"
        >
        </vue-form-generator> 
        {{modelCheck}}
        <br>
        
        <h6>MATERIAL SWITCH</h6>
        <vue-form-generator
            @validated="onValidateData"
            :schema="schemaSwitch"
            :model="modelSwitch"
            :options="formOptions"
        >
        </vue-form-generator> 
        {{modelSwitch}}

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

             schemaRadio: {
                groups: [
                {
                    id: 'states',
                    fields: [
                    {
                        type: "bw-radios",
                        model: "states",
                        values: [
                        { code: "0", name: 'ciao' },
                        { code: "1", name: 'addio' },
                        ],
                        radiosOptions: {
                        value: "code",
                        name: "name"
                        },
                        styleClasses: "color-primary",
                    },
                    ]
                }
                ]
            },
            modelRadio: {
                states:  { "code": "1", "name": "addio" }
            },
            schemaCheck: {
                groups: [
                {
                    id: 'checkStates',
                    fields: [
                    {
                        type: "bw-checks",
                        model: "prova",
                        values: [
                        { code: "0", name: 'ciao' },
                        { code: "1", name: 'addio' },
                        { code: "2", name: 'arrivederci' },
                        ],
                        radiosOptions: {
                        value: "code",
                        name: "name"
                        },
                        styleClasses: "color-secondary",
                    },
                    ]
                }
                ]
            },
            modelCheck: {
                prova:  [{ "code": "1", "name": "addio" }]
            },
            schemaSwitch: {
                groups: [
                {
                    fields: [
                    {
                        type: "bw-switch",
                        model: "swich",
                        switchLabel: 'switch form generator',
                        styleClasses: "color-primary",
                    },
                    ]
                }
                ]
            },
            modelSwitch: {
                swich:  true
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
