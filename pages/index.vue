<template>
    <div>
        <form class="pa3 pa5-ns" @submit.prevent="add(task)">
            <input v-model="task" type="text">
            <input type="submit" VALUE="Add"/>
        </form>

        <article class="pa3 pa5-ns">
            <h1 class="f4 bold center mw6">Todos</h1>
            <ul class="list pl0 ml0 center mw6 ba b--light-silver br2">
                <li v-for="todo of todos" class="flex items-center ph3 pv3 bb b--light-silver">
                    <span v-bind:class="{strike: todo.complete}" class="flex-auto">{{todo.id}}. {{todo.task}}</span>
                    <button @click="remove(todo)"><img src="https://icon.now.sh/skull" alt="trash"/></button>
                    <button @click="toggle(todo)"><img src="https://icon.now.sh/done" alt="trash"/></button>
                </li>
            </ul>
        </article>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex'
    import {init} from './shared'
    export default {
      fetch: init,
      data () {
        return {
          task: 'some task'
        }
      },
      computed: {
        ...mapState({
          todos: state => state.todos
        })
      },
      methods: {
        ...mapActions([
          'add',
          'remove',
          'toggle'
        ])
      }
    }
</script>
