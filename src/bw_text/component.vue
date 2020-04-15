<template>
<div>
    <bw-material-text-field v-model="value"
        :class="{'color-error': filteredErrors.length > 0}"
        :placeholder="schema.placeholder || ''"
        :id="schema.id || randId" 
        v-bind="schema.attrs"
        :input-type="schema.inputType || 'text'"
        :color="schema.color || 'primary'"
        :use-native-validation="false"
        v-validate.disable="schema.rules" :data-vv-scope="validationScope" 
        :name="schema.name || schema.id || randId"
    >
        <bw-material-floating-label :for="schema.id || randId">
            {{schema.textLabel}}
        </bw-material-floating-label>

        <bw-material-text-field-icon v-if="schema.leadingIcon" 
            :icon="schema.leadingIcon" slot="leadingIcon"
        ></bw-material-text-field-icon>

        <bw-material-text-field-icon v-if="schema.trailingIcon" 
            :icon="schema.trailingIcon" slot="trailingIcon"
        ></bw-material-text-field-icon>
        <bw-material-line-ripple slot="bottomLine"/>
    </bw-material-text-field>

    <div v-if="filteredErrors.length > 0" class="err-msg">
        <div v-for="(err, index) in filteredErrors" :key="index">
                {{err.msg}}
        </div>
    </div> 
</div>
</template>

<script src="./script.js"></script>
