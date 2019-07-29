<template>
  <tr>
    <td>{{id}}</td>
    <td>{{name}}</td>
    <td>{{getStatus}}</td>
    <td>{{year}}</td>
    <td>{{month}}</td>
    <td>{{target}}</td>
    <td>{{goal}}</td>
    <td>{{progress}}</td>
    <td>{{getProgress}}</td>
    <td>{{unit}}</td>
    <td>{{source}}</td>
    <td>{{details}}</td>
  </tr>
</template>

<script>
export default {
  name: 'MotivationItem',
  props: {
    id: Number,
    name: String,
    year: Number,
    month: Number,
    target: String,
    goal: Number,
    progress: Number,
    unit: String,
    source: String,
    details: String
  },
  computed: {
    getProgress: function () {
      return this.progress - this.goal
    },
    getStatus: function (item) {
      return this.getProgress >= 0 ? 'Unachieved' : 'Achieved'
    }
  }
}
</script>
