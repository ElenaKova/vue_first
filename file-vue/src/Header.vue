<template>
    <div id="header">
        <h1>{{text}}</h1>
    </div> 
</template>

<script>
export default {
    props: ['text'] //понять как должен передаваться параметр, от куда приходит значение (№9)
}
</script>

<style>

#header{
    border-bottom: 2px solid silver;
    text-align: center;
    width: 100%;
}

</style>