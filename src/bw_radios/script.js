import {abstractField} from "vue-form-generator";

export default {
  mixins: [abstractField],
  name: "field-bwradios",
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
