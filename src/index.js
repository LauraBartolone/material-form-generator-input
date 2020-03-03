import FGMaterialChecks from "./bw_checks/component.vue";
import FGMaterialRadios from "./bw_radios/component.vue";
import FGMaterialSwitch from "./bw_switch/component.vue";
import FGMaterialText from "./bw_text/component.vue";
import FGMaterialSelect from "./bw_select/component.vue";
import FGMaterialMultiselect from "./bw_multiselect/component.vue";



import Vue from 'vue';
import BwMaterial from "bw-material/dist";
Vue.use(BwMaterial);


import VueFormGenerator from 'vue-form-generator';
Vue.use(VueFormGenerator);
Vue.component('VueFormGenerator', VueFormGenerator.component);


var VeeValidate = require('vee-validate');

Vue.use(VeeValidate, {
  errorBagName: 'vErrors',
  inject: false
});

export default {
    install(Vue, options) {
        const v = new VeeValidate.Validator();
        Vue.component("field-bw-checks", FGMaterialChecks);      
        Vue.component("field-bw-radios", FGMaterialRadios);
        Vue.component("field-bw-switch", FGMaterialSwitch);
        Vue.component("field-bw-text", FGMaterialText);
        Vue.component("field-bw-select", FGMaterialSelect);
        Vue.component("field-bw-multiselect", FGMaterialMultiselect);


    },
};
