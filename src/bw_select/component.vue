<template>
<div>
    <bw-material-select :type="schema.inputType" 
        :class="{'color-error': filteredErrors.length > 0}"
        :placeholder="schema.placeholder || ''"
        :id="schema.id || randId" 
        v-bind="schema.attrs"
        :label="schema.textLabel || ''"
        :color="schema.color || 'primary'"
        v-model="value" :options="options"
        v-validate.disable="schema.rules" :data-vv-scope="validationScope" 
        :config-options="schema.configOption || {codeField: 'id', nameField: 'name'}"
    ></bw-material-select>
    <div v-if="filteredErrors.length > 0" class="err-msg">
        <div v-for="(err, index) in filteredErrors" :key="index">
                {{err.msg}}
        </div>
    </div> 
</div>
</template>

<script src="./script.js"></script>

