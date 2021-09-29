<template>
    <div>
        <input type="text" v-model="fruta" @keydown.enter="addFruta()">
        <hr>
        <ul>
            <li v-for="frut in frutas" :key="frut">
                {{frut}}
            </li>
        </ul>
    </div>
</template>

<script>
    import FrutaMixxin from './FrutaMixxin'
    export default {
       mixins:[FrutaMixxin]
    }
</script>

<style lang="scss" scoped>

</style>