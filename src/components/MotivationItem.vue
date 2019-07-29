<template>
  <tr>
    <td>
      <div>{{isAdd? '': data.id}}</div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.name}}</div>
        <div v-if="allowChange"><input v-model="data.name"/></div>
    </td>
    <td>
        <div>{{getStatus}}</div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.year}}</div>
        <div v-if="allowChange"><input v-model="data.year"/></div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.month}}</div>
        <div v-if="allowChange"><input v-model="data.month"/></div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.target}}</div>
        <div v-if="allowChange"><input v-model="data.target"/></div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.goal}}</div>
        <div v-if="allowChange"><input type="number" v-model="data.goal"/></div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.progress}}</div>
        <div v-if="allowChange"><input v-model="data.progress"/></div>
    </td>
    <td>
        <div>{{getProgress}}</div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.unit}}</div>
        <div v-if="allowChange"><input v-model="data.unit"/></div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.source}}</div>
        <div v-if="allowChange"><input v-model="data.source"/></div>
    </td>
    <td>
        <div v-if="!allowChange">{{data.details}}</div>
        <div v-if="allowChange"><input v-model="data.details"/></div>
    </td>
    <td>
        <a v-if="!allowChange" v-on:click="edit()">Edit</a>
        <a v-if="allowChange" v-on:click="save()">Save</a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'MotivationItem',
  props: {
    id: String,
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
  data () {
    return {
      data: {
        id: this.id,
        name: this.name,
        year: this.year,
        month: this.month,
        target: this.target,
        goal: this.goal,
        progress: this.progress,
        unit: this.unit,
        source: this.source,
        details: this.details
      },
      isEdit: false
    }
  },
  watch: {
    id: { deep: true, handler: function (newVal) { this.data.id = newVal } },
    name: { deep: true, handler: function (newVal) { this.data.name = newVal } },
    year: { deep: true, handler: function (newVal) { this.data.year = newVal } },
    month: { deep: true, handler: function (newVal) { this.data.month = newVal } },
    target: { deep: true, handler: function (newVal) { this.data.target = newVal } },
    goal: { deep: true, handler: function (newVal) { this.data.goal = newVal } },
    progress: { deep: true, handler: function (newVal) { this.data.progress = newVal } },
    unit: { deep: true, handler: function (newVal) { this.data.unit = newVal } },
    source: { deep: true, handler: function (newVal) { this.data.source = newVal } },
    details: { deep: true, handler: function (newVal) { this.data.details = newVal } }
  },
  computed: {
    getProgress: function () {
      return this.data.progress - this.data.goal
    },
    getStatus: function (item) {
      return this.getProgress >= 0 ? 'Unachieved' : 'Achieved'
    },
    isAdd: function () {
      return this.id === 0
    },
    allowChange: function () {
      return this.isEdit || this.isAdd
    }
  },
  methods: {
    edit: function () {
      this.isEdit = true
    },
    save: function () {
      if (this.isEdit) {
        this.isEdit = false
        this.$emit('update', this.data)
      }
      if (this.isAdd) {
        this.$emit('add', this.data)
      }
    }
  }
}
</script>
