<template>
    <div id="app">
        <h1>Problema de MontyHall</h1>
        <GiftComponent/>
    </div>
</template>

<script>
import GiftComponent from './components/GiftComponent'

export default {
    name:'App',
    components:{GiftComponent}
    
    
}
</script>

<style>
body{background: #000;}
</style>