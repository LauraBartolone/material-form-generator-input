<template>
<div>
    <bw-material-multiselect :type="schema.inputType"
        :class="{'color-error': filteredErrors.length > 0}"
        :placeholder="schema.placeholder || ''"
        :id="schema.id || randId" 
        v-bind="schema.attrs"
        :label="schema.textLabel || undefined"
        :color="schema.color || 'primary'"
        v-model="value" 
        :options="options"
        :name="schema.textLabel"
        v-validate.disable="schema.rules" :data-vv-scope="validationScope" 
        :config-options="schema.configOption || {codeField: 'id', nameField: 'name'}"
    ></bw-material-multiselect>
    <div v-if="filteredErrors.length > 0" class="err-msg">
        <div v-for="(err, index) in filteredErrors" :key="index">
                {{err.msg}}
        </div>
    </div> 
</div>
</template>

<script src="./script.js"></script>

