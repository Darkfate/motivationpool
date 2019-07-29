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
      db.collection('items')
        .doc(item.id)
        .set(item)
        .then(() => console.log('Item Updated'))
    },
    addItem: function () {
      this.newItem = {
        id: '',
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
      db.collection('items')
        .add(item)
        .then(() => console.log('Item Added'))

      this.newItem = {}
      this.addingNewItem = false
    }
  }
}
</script>
