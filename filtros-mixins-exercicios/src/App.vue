<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		{{cpfValor | cpf |inverter}} - 
		<hr>
		{{nome | inverter}}
		<hr>
		<input type="text" :value="cpfValor | cpf">
		<hr>
		<Frutas></Frutas>
		<hr>
		<input type="text" v-model="fruta" @keydown.enter="addFruta">
		<ul>
			<li v-for="frut in frutas" :key="frut">
				{{frut}}
			</li>
		</ul>
		
	</div>
</template>

<script>
import FrutaMixxin from './FrutaMixxin'
import Frutas from './Frutas.vue'

export default {
	components:{Frutas},
	mixins:[FrutaMixxin],
	filters:{
		cpf(valor){
			let arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data(){
		return {
			cpfValor: '08740512665',
			nome: 'Natalia',
		}
	}, computed:{
		cpfC: function(){
			let arr = this.cpf.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	methods:{}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
input {
	font-size: 2.5rem;
}
</style>
