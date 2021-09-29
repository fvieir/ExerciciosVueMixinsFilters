export default {
    data () {
        return {
            fruta: '',
            frutas: ['Laranja','Maça']
        }
    },
    methods:{
        addFruta(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}