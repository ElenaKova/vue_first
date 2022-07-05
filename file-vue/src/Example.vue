<template>
    <div>
        <h1>{{ message }}</h1>
        <app-input :msg="message" @messChange="message = $event"></app-input>
    </div>
</template>

<script>
import Input from './Field.vue';

export default {
    data() {
        return {
            message: 'Testing'
        }
    },
    components: {
        'app-input': Input
    }
}
</script>