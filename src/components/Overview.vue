<template>
    <v-data-table :headers="headers" :items="items" :items-per-page="5" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" @click="addItem()">New Item</v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">Edit Item</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.year" label="Year"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.month" label="Month"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.target" label="Target"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.goal" label="Goal"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.progress" label="Progress"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.unit" label="Unit"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.source" label="Source"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.details" label="Details"></v-text-field>
                        </v-flex>
                        </v-layout>
                    </v-container>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDialog">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="updateItem">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.archieved="{ item }">
            {{getStatus(item)}}
        </template>>
        <template v-slot:item.achievement="{ item }">
            {{getProgress(item)}}
        </template>>
        <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
            <v-icon small @click="deleteItem(item)">delete</v-icon>
        </template>
    </v-data-table>
</template>

<script>
import { db } from '../scripts/db'

export default {
  name: 'Overview',
  data () {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Archieved', value: 'archieved' },
        { text: 'Year', value: 'year' },
        { text: 'Month', value: 'month' },
        { text: 'Target', value: 'target' },
        { text: 'Goal', value: 'goal' },
        { text: 'Progress', value: 'progress' },
        { text: 'Achievement', value: 'achievement' },
        { text: 'Unit', value: 'unit' },
        { text: 'Source', value: 'source' },
        { text: 'Detailed plan(if any)', value: 'details' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      items: [],
      dialog: false,
      editedItem: {}
    }
  },
  firestore: {
    items: db.collection('items')
  },
  computed: {

  },
  methods: {
    updateItem: function () {
      var validatedItem = this.validate(this.editedItem)

      if (validatedItem.id) {
        db.collection('items')
          .doc(validatedItem.id)
          .set(validatedItem)
          .then(() => this.closeDialog())
      } else {
        db.collection('items')
          .add(validatedItem)
          .then(() => this.closeDialog())
      }
    },
    deleteItem: function (item) {
      db.collection('items')
        .doc(item.id)
        .delete()
    },
    editItem: function (item) {
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    addItem: function () {
      this.editedItem = {
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

      this.dialog = true
    },
    getStatus: function (item) {
      return this.getProgress(item) >= 0 ? 'Achieved' : 'Unachieved'
    },
    getProgress: function (item) {
      return item.progress - item.goal
    },
    closeDialog: function () {
      this.dialog = false
      this.editedItem = {}
      this.editedIndex = -1
    },
    validate: function (rawData) {
      return {
        id: rawData.id || '',
        name: rawData.name || '',
        year: parseInt(rawData.year || 0),
        month: parseInt(rawData.month || 0),
        target: rawData.target || '',
        goal: parseInt(rawData.goal || 0),
        progress: parseInt(rawData.progress || 0),
        unit: rawData.unit || '',
        source: rawData.source || '',
        details: rawData.details || ''
      }
    }
  }
}
</script>
