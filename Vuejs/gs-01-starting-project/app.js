// Vue.createApp({
//     data(){
//         return{
//             goals:[],
//             enteredValue:''
//         };
//     },
//     methods:{
//         addGoal(){
//             this.goals.push(this.enteredValue);
//             this.enteredValue =''
//         }
//     }
// }).mount('#app');





Vue.createApp({
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() === '') {
        alert('Please enter a task');
        return;
      }
      this.tasks.push({ text: this.newTask, done: false });
      this.newTask = '';
    },
    toggleDone(task) {
      task.done = !task.done;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}).mount('#app');
