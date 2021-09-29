<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<p>Usando Filters local: {{ exe1 | Cont }}</p>
		<p> 'Contando Caracter' => {{ exe1 | contCaracter}}</p>
		<p>Usando Computed com mixins: {{Cont}}</p>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import desafioMixxins from './desafioMixxins'
export default {
	mixins:[desafioMixxins],
	data() {
		return {
			exe1: 'Exercício trocando espaço por vírgula'
		}
	},
	filters:{
		Cont(valor){
			return valor.replace(/ /g,",");
		}
	}
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
</style>
