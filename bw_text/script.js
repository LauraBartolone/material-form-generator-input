import utils from '@js/utils/utils';
import {abstractField} from "vue-form-generator";

export default {
  mixins: [abstractField],
  inject: ['$validator'],
  name: "field-bwtext",
  props: {
  },
  data() {
    return {
      randId: 'text-field-'+this._uid,
      validationScope: ''
    }
  },
  mounted() {
    if(utils.isDefined(this.$parent.options.validationScope)) {
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
  }
  },
}
