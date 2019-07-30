<template>
    <v-card>
        <v-container>
            <v-layout wrap>
                <v-flex xs3 sm3 md3><div class="title">Current Pool: {{totalValue()}}円</div></v-flex>
                <v-flex xs3 sm3 md3><div class="title">Total Fail: {{totalFail}}</div></v-flex>
            </v-layout>
        </v-container>
    </v-card>
</template>
<script>
export default {
  name: 'Pool',
  props: {
    items: Array
  },
  data () {
    return {
      totalFail: 0
    }
  },
  methods: {
    isCompleted: function (item) {
      return item.progress - item.goal > 0
    },
    isExpired: function (item) {
      var currentYear = new Date().getFullYear()
      var currentMonth = new Date().getMonth() + 1
      return item.year < currentYear || (item.year === currentYear && item.month < currentMonth)
    },
    totalValue: function () {
      var value = 0

      if (this.items) {
        var expiredItems = this.items.filter(item => this.isExpired(item) && !this.isCompleted(item))

        this.totalFail = expiredItems.length

        expiredItems.forEach(e => {
          value += e.ante
        })
      }

      return value
    }
  }
}
</script>
