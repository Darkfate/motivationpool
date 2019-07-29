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
          </tr>
          <tr v-for="item in items" v-bind:key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{getStatus(item)}}</td>
            <td>{{item.year}}</td>
            <td>{{item.month}}</td>
            <td>{{item.target}}</td>
            <td>{{item.goal}}</td>
            <td>{{item.progress}}</td>
            <td>{{getProgress(item)}}</td>
            <td>{{item.unit}}</td>
            <td>{{item.source}}</td>
            <td>{{item.details}}</td>
          </tr>
      </table>
  </div>
</template>

<script>

var sampleData = [
  {
    id: 1,
    name: 'John',
    year: 2019,
    month: 7,
    target: 'Run 100km',
    goal: 100,
    progress: 120,
    unit: 'km',
    source: 'https://www.example.com',
    details: ''
  },
  {
    id: 2,
    name: 'Bob',
    year: 2019,
    month: 7,
    target: 'Run 50km',
    goal: 50,
    progress: 33,
    unit: 'km',
    source: 'https://www.example.com',
    details: 'None'
  }]

export default {
  name: 'Overview',
  data () {
    return {
      items: sampleData
    }
  },
  methods: {
    getProgress: function (item) {
      return item.progress - item.goal
    },
    getStatus: function (item) {
      return this.getProgress(item) >= 0 ? 'Unachieved' : 'Achieved'
    }
  }
}
</script>
