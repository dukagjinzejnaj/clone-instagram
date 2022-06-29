const { createApp } = Vue
let id = 0

createApp({
    data() {
        return {
            newTodo: '',
            todos: [],
            Meta: 'Meta',
            About: 'About',
            Blog: 'Blog',
            Jobs: 'Jobs',
            Help: 'Help',
            API: 'API',
            Privacy: 'Privacy',
            Terms: 'Terms',
            TopAccounts: 'Top Accounts',
            Hashtags: 'Hashtags',
            Locations: 'Locations',
            Lite: 'Instagram Lite',
            Contact: 'Contact Uploading & Non-Users'
        }
    },
    methods: {
        addTodo() {
            this.todos.push({ id: id++, text: this.newTodo })
            this.newTodo = ''
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)
        }
    }
}).mount('#app')