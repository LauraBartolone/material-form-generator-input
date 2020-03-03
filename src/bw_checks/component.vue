<template>
<div>
    <div v-for="item in values" 
        :key="item[schema.radiosOptions.value || 'id']">        
        <bw-material-check :id="item[schema.radiosOptions.value || 'id']+randId"
            :label="item[schema.radiosOptions.name || 'name']"
            v-model="value" :value="item" 
            :checked="isChecked(item[schema.radiosOptions.value || 'id'])"
        >
        </bw-material-check>
    </div>
</div>
</template>

<script src="./script.js"></script>

