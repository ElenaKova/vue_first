<template>
    <div id="block">
        <p>{{mess}}</p>
        <hr>
        <p>{{info}}</p>
    </div>

</template>

<script>
export default {
    props: ['mess', 'info'],
    data() {
        return {
            
        }
    }
}
</script>

<style>

hr {
    display: block;
    height: 0;
    border-bottom: 2px solid #cf2300;
    margin: 10px 0;
}
#block {
        margin: 20px 25%;
        background: #e5ff72;
        border: 2px solid rgb(200, 226, 0);
        border-radius: 10px;
        padding: 0.5px 0.3% 0.5px;
        color: #474747;
        text-align: center;
        align-content: center;
         width: 50%;
}


</style>