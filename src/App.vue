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

        <h6>MATERIAL Select</h6>
        <vue-form-generator
            @validated="onValidateData"
            :schema="schemaSelect"
            :model="modelSelect"
            :options="formOptions"
        >
        </vue-form-generator> 
        {{modelSelect}}
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
                groups: [{
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
                }]
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
            schemaSelect: {
                groups: [{
                    fields: [
                    {
                        id: "ex-select-iid",
                        type: "bw-select",
                        inputType: 'contain',
                        placeholder: "prova placeholder",
                        textLabel: "select label",
                        color: "primary",
                        model: "slect1",
                        rules: "required",
                        options: [
                            {"name": "prova 10", code: "10", id: 'a10'}, 
                            {"name": "prova 20", code: "20", id: 'a20'}, 
                            {"name": "prova 30", code: "30", id: 'a30'},

                        ]
                    },
                    {
                        id: "prova id2",
                        type: "bw-multiselect",
                        inputType: 'outline',
                        placeholder: "prova2 placeholder",
                        textLabel: "select multiple label",
                        color: "primary",
                        model: "multiselect",
                        rules: "required",
                        options: [
                            {"name": "prova 10", code: "10", id: 'a10'}, 
                            {"name": "prova 20", code: "20", id: 'a20'}, 
                            {"name": "prova 30", code: "30", id: 'a30'},

                        ]
                    },
                    ]
                }]
            },
            modelSelect: {
                slect1: '',
                multiselect: [],

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
:root {
    --mdc-theme-primary: #AE1B21;
    --mdc-rgba-theme-primary: 174, 27, 33;

    --mdc-theme-on-primary: #ffffff;

    --mdc-theme-text-primary-on-light: #000000;
    --mdc-theme-text-secondary-on-light: #000000;

    --mdc-theme-secondary: #0b156b;
    --mdc-rgba-theme-secondary: 11, 21, 107;


    --mdc-theme-on-secondary: #cf96e6;
    --mdc-theme--secondary-bg: #000000;

    --mdc-theme--primary-bg: #f5f8f6;
    --mdc-theme-secondary-bg: #ffee00;


    --contain-input-bg: rgba(0, 0, 0, 0.12);

    --label-color: rgba(0, 0, 0, 0.6);
    --label-color-secondary: rgba(0, 0, 0, 0.6);

    --footer-text-color: var(--bw-text-link);
    --footer-text-hover-color: linear-gradient(93.61deg, #EB643F -0.04%, #F8017A 49.25%, #994E9D 99.89%);
    --footer-divider-color: linear-gradient(93.61deg, #EB643F -0.04%, #F8017A 49.25%, #994E9D 99.89%);


    --icon-selected-color: pink;

    --bw-text-link: rgb(149, 149, 149);
    --bw-text-link-hover: rgb(29, 29, 29);

    --mdc-chip-selected: #158b15;
    --btn-text-color-secondary: white;
}
</style>
