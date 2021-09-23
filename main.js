Vue.config.devtools = true;

const app = new Vue({
    el: '#app',
    data:{
       newToDo: '', 
       toDos: [
        {
            title: 'Fare i compiti',
            done: false,
        },
        {
            title: 'Fare la spesa',
            done: false,
        },
        {
            title: 'Fare il bucato',
            done: false,
        },
       ],

       classiDone: ['notDone', 'done']
    },
    methods: {
        addToDo() {
            if(!this.newToDo == ''){
                this.toDos.push({
                   title: this.newToDo,
                   done: false,
                });
            };
            this.newToDo = '';
        },

        removeToDo(index) {
            this.toDos.splice(index, 1);
        },

        doneToggle(index) {
            this.toDos[index].done = !this.toDos[index].done
            // console.log(this.toDos[index].done)
        }
    },
});