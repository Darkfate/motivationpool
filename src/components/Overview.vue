<template>
  <div>
      <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Achieved</th>
            <th>Year</th>
            <th>Month</th>
            <th>Target</th>
            <th>Goal</th>
            <th>Progress</th>
            <th>Achievement</th>
            <th>Unit</th>
            <th>Source</th>
            <th>Detailed plan(if any)</th>
            <th><a v-on:click="addItem()">Add</a></th>
          </tr>
          <motivation-item v-for="item in items" v-bind:key="item.id" v-bind="item" v-on:update="updateItem"></motivation-item>
          <motivation-item v-if="addingNewItem" v-bind="newItem" v-on:add="saveNewItem"></motivation-item>
      </table>
  </div>
</template>

<script>
import MotivationItem from '@/components/MotivationItem'
import { db } from '../scripts/db'

export default {
  name: 'Overview',
  data () {
    return {
      items: [],
      newItem: {},
      addingNewItem: false
    }
  },
  firestore: {
    items: db.collection('items')
  },
  components: {
    MotivationItem
  },
  methods: {
    updateItem: function (item) {
      var index = this.items.findIndex(i => i.id === item.id)
      this.items[index] = item
    },
    addItem: function () {
      this.newItem = {
        id: 0,
        name: '',
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        target: '',
        goal: 0,
        progress: 0,
        unit: '',
        source: '',
        detail: ''
      }

      this.addingNewItem = true
    },
    saveNewItem: function (item) {
      item.id = this.items[this.items.length - 1].id + 1
      this.items.push(item)
      this.newItem = {}
      this.addingNewItem = false
    }
  }
}
</script>
