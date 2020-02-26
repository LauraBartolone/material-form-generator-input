<template>
<div>
    <div v-for="item in schema.values" 
        :key="item[schema.radiosOptions.value || 'id']">        
        <bw-material-radio :id="item[schema.radiosOptions.value || 'id']+randId"
            :label="item[schema.radiosOptions.name || 'name']"
            v-model="value" :value="item" 
            :checked="item[schema.radiosOptions.value || 'id'] == value[schema.radiosOptions.value || 'id'] ? true : false"
        >
        </bw-material-radio>
    </div>
</div>
</template>

<script src="./script.js"></script>

