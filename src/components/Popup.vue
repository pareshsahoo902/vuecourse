<template>
    <div>
        <h3>Change Title</h3>
        <input
            :value="text"
            @input="event => text = event.target.value"
            placeholder="enter a new title">
        <button @click="$emit('submit',text)">Submit</button>
        <button @click="$emit('closePopup')">Close</button>
    </div>
</template>

<script>
export default {
    name:'PopUp',
    emits:['closePopup','submit'],
    data(){
        return{
            text:''
        }
    }
}
</script>

<style scoped>

</style>