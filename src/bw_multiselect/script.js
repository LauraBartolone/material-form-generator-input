import {abstractField} from "vue-form-generator";

export default {
  mixins: [abstractField],
  inject: ['$validator'],
  name: "field-bwmultiselect",
  props: {
  },
  data() {
    return {
      randId: 'multiselect-field-'+this._uid,
      validationScope: ''
    }
  },
  mounted() {
    if(this.$parent.options.validationScope) {
      this.validationScope = this.$parent.options.validationScope;
    } else {
      console.warn('you need to declare validationScope in formOptions');
    }
  },
  methods: {
  },
  computed: {
    filteredErrors() {
      return this.vErrors.items.filter((item) => {
          return (item.scope == this.validationScope && item.field === this.schema.id)
      });
    },
    options(){
        let options = this.schema.options;
      if (typeof options == "function") {
        return options.apply(this, [this.model, this.schema]);
      } else {
        return options;
      }
    }
    
  },
}