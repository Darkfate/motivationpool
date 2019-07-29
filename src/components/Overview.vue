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
          <motivation-item v-for="item in items" v-bind:key="item.id" v-bind="item"></motivation-item>
      </table>
  </div>
</template>

<script>
import MotivationItem from '@/components/MotivationItem'

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
  components: {
    MotivationItem
  }
}
</script>
