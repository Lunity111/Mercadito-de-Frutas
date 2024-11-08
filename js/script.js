const app1 = {
    data(){
        return{
            mensaje: '',
            frutas:[{nombre:'Manzana',cantidad: 15,precioUnitario:5, total:0}],
            nuevaFruta:'',
            nuevaCanti:0,
            nuevoPrecio:0.0,


        }
    },
    computed:{
        subtotal() {
            return this.frutas.reduce((sum, fruta) => sum + (fruta.cantidad * fruta.precioUnitario), 0);
        },
        iva() {
            return this.subtotal * 0.16; // suponiendo un IVA del 16%
        },
        total() {
            return this.subtotal + this.iva;
        }
    },
    methods:{
        
        precio:function(i){
            this.frutas[i].total = this.frutas[i].cantidad * this.frutas[i].precioUnitario;
            return this.frutas[i].total;
        },
        agregar:function(){
            if(this.nuevaCanti == '')
                this.nuevaCanti = 0;
            if(this.nuevaFruta)
            this.frutas.push({nombre:this.nuevaFruta, cantidad:this.nuevaCanti, precioUnitario:this.nuevoPrecio})
            this.nuevaFruta = '';
            this.nuevaCanti = 0;
            this.nuevoPrecio = 0.0; 
        },
        eliminar:function(index){
            this.frutas.splice(index,1);
        }

    },
};
const apli2 = Vue.createApp(app1).mount('#seccion');