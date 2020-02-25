import utils from '@js/utils/utils';
import {abstractField} from "vue-form-generator";

export default {
  mixins: [abstractField],
  name: "field-bwchecks",
  props: {
  },
  data() {
    return {
      randId: 'a'+Math.random().toString(36).substring(5)
    }
  },
  mounted() {
  },
  methods: {
    isChecked(item) {
        return this.model[this.schema.model].map( e => e[this.schema.radiosOptions.value || 'id']).indexOf(item) !== -1;
    }
  },
  computed: {
    values(){
     	let values = this.schema.values;
			if (typeof values == "function") {
				return values.apply(this, [this.model, this.schema]);
			} else {
				return values;
			}
    }
  },
}
