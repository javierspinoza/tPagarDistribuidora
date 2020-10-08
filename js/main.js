var app = new Vue({
    el: '#app',
    data: {
        arrayDatos: [],

        nom: null,
        hDi: 0 ,
        hEx: 0,
        totalP:0,
        impt:0,      
        bono:0
        
    },

    methods: {
        procesarDatos: function () {
            this.baseM = 230000;
            if (this.hDi >= 0 && this.hDi <=180) {
                this.totalD = this.hDi * 4200;                
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'el valor ingresado de horas diarias al mes no es valido min:0 y max:36 ',
                    icon: 'error',
                    confirmButtonText: 'OK'                        
                })
                return;
            }
            if (this.hEx >= 0 && this.hEx <=100) {
                this.totalE = this.hEx * 8400;                
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'el valor ingresado de horas extras al mes no es valido min:0 y max:28 ',
                    icon: 'error',
                    confirmButtonText: 'OK'                        
                })
                return;
            }  
             
            this.totalP = this.baseM + this.totalD + this.totalE;
            
            if (this.totalP < 600000 ) {
                this.bono =  this.totalP * (10/100);
                // this.all = this.totalP + this.bono;  
            }
            else if (this.totalP >=600000 && this.totalP <= 1000000) {
                this.impt = this.totalP * (20/100);         
            }
            if (this.totalP > 1000000) {
                this.impt = this.totalP * (30/100);
            }

            this.all= this.totalP + this.bono - this.impt;
            


            this.arrayDatos.push({nombre:this.nom, base:this.baseM, hD:this.totalD, hE:this.totalE, impu:this.impt, total:this.all })

            this.impt=0;
        },        
    }         
})