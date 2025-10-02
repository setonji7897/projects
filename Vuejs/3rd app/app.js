const app=Vue.createApp({
    data(){
        return{
        counter: 0,
        name:'',
        confirmedName :''
        };
    },
  methods:{
    confirmInput(){
        this.confirmedName = this.name; 
    },
    submitForm(event){
        
        alert('Submitted')
    },
    setName(event){
       this.name= event.target.value;
    },
    add(){
        this.counter = this.counter +1;
    },
    reduce(){
        this.counter=this.counter -1;
    }
  }
});
app.mount('#events')