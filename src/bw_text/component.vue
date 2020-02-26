<template>
<div>
    <bw-material-text-field v-model="value"
        :placeholder="schema.placeholder || ''"
        :id="schema.id || randId" 
        v-bind="schema.attrs"
        :input-type="schema.inputType"
        :color="schema.color || 'primary'"
        :name="schema.id" type="text"
    >
        <bw-material-text-field-icon v-if="schema.leadingIcon" 
            :icon="schema.leadingIcon" slot="leadingIcon"
        ></bw-material-text-field-icon>

        <bw-material-floating-label for="my-text-field6">{{schema.textLabel}}</bw-material-floating-label>

        <bw-material-text-field-icon v-if="schema.trailingIcon" 
            :icon="schema.trailingIcon" slot="trailingIcon"
        ></bw-material-text-field-icon>
        <bw-material-line-ripple slot="bottomLine"/>
    </bw-material-text-field>

</div>
</template>

<script src="./script.js"></script>

