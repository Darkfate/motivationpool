<template>
  <tr>
    <td>
      <div>{{data.id}}</div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.name}}</div>
        <div v-if="isEdit"><input v-model="data.name"/></div>
    </td>
    <td>
        <div>{{getStatus}}</div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.year}}</div>
        <div v-if="isEdit"><input v-model="data.year"/></div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.month}}</div>
        <div v-if="isEdit"><input v-model="data.month"/></div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.target}}</div>
        <div v-if="isEdit"><input v-model="data.target"/></div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.goal}}</div>
        <div v-if="isEdit"><input v-model="data.goal"/></div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.progress}}</div>
        <div v-if="isEdit"><input v-model="data.progress"/></div>
    </td>
    <td>
        <div>{{getProgress}}</div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.unit}}</div>
        <div v-if="isEdit"><input v-model="data.unit"/></div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.source}}</div>
        <div v-if="isEdit"><input v-model="data.source"/></div>
    </td>
    <td>
        <div v-if="!isEdit">{{data.details}}</div>
        <div v-if="isEdit"><input v-model="data.details"/></div>
    </td>
    <td>
        <a v-if="!isEdit" v-on:click="edit()">Edit</a>
        <a v-if="isEdit" v-on:click="save()">Save</a>
    </td>
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
  computed: {
    getProgress: function () {
      return this.data.progress - this.data.goal
    },
    getStatus: function (item) {
      return this.getProgress >= 0 ? 'Unachieved' : 'Achieved'
    }
  },
  methods: {
    edit: function () {
      this.isEdit = true
    },
    save: function () {
      this.isEdit = false
      this.$emit('update', this.data)
    }
  }
}
</script>
