// Vue.createApp({
//   data() {
//     return {
//       newTask: '',
//       tasks: []
//     };
//   },
//   methods: {
//     addTask() {
//       if (this.newTask.trim() === '') {
//         alert('Please enter a task');
//         return;
//       }
//       this.tasks.push({ text: this.newTask, done: false });
//       this.newTask = '';
//     },
//     toggleDone(task) {
//       task.done = !task.done;
//     },
//     deleteTask(index) {
//       this.tasks.splice(index, 1);
//     },
//     editTask(index) {
//           this.newTask = this.tasks[index].text; 
//           this.tasks.splice(index, 1);           
//         }
//   }
// }).mount('#app');








// // const addTask = document.getElementById('add-task');
// // const taskContainer = document.getElementById('task-container');
// // const inputTask = document.getElementById('input-task')
// // const editTask= document.getElementById('input-task')
// // const editDescription= document.getElementById('editDescripti')
// // addTask.addEventListener('click', function(){
// //     let task = document.createElement('div');
// //     task.classList.add('task');

// //     let li = document.createElement('li');
// //     li.innerHTML=`${inputTask.value}`;
// //     task.appendChild(li);

// //     let checkButton = document.createElement('button');
// //     checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
// //     checkButton.classList.add('checkTask');
// //     task.appendChild(checkButton);

// //     let deleteButton=document.createElement('button');
// //     deleteButton.innerHTML ='<i class="fa-solid fa-trash-can"></i>'
// //     deleteButton.classList.add('deleteTask')
// //     task.appendChild(deleteButton);

    
// //     let editButton=document.createElement('button');
// //     editButton.innerHTML ='<i class="fa fa-pencil"></i>'
// //     editButton.classList.add('editTask')
// //     task.appendChild(editButton);


// //     if(inputTask.value === ""){
// //         alert("plaease Enter a Task");
// //     }else{
// //         taskContainer.appendChild(task);

// //     }
// //     inputTask.value = "";
// //     checkButton.addEventListener('click', function(){
// //         checkButton.parentElement.style.textDecoration="line-through";
// //         inputTask.value=""       
// //     })
// //     deleteButton.addEventListener('click', function(e){
// //         let target= e.target
// //         task.remove();

        
// //     })
// //     editButton.addEventListener('click', function () {
// //          inputTask.value = li.innerHTML;
// //         task.remove();

// //     });


// // })







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
        },
        editTask(index) {
          this.newTask = this.tasks[index].text; // put text back into input
          this.tasks.splice(index, 1);           // remove old one
        }
      }
    }).mount('#app');