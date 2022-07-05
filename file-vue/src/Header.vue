<template>
<div id="header">
    <h1>{{title}}</h1>
</div>

</template>

<script>
export default {
    data() {
        return {
            title: 'Some list'
        }
    }
}
</script>

<style>

#header{
    border-bottom: 2px solid silver;
    text-align: center;
    width: 100%;
}
</style>