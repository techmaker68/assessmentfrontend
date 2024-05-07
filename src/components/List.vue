<template>
    <div class="container">
      <div class="d-flex">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Content</th>
              <th scope="col">Title</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(note, index) in notes" :key="note.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ note.content }}</td>
              <td>{{ note.title }}</td>
              <button @click="deleteNote(note)">delete</button>
            </tr>
          </tbody>
        </table>
      </div>
      <button @click="redirect" class="btn btn-secondary">Add new</button>
    </div>
  </template>
  
  <script>
  import apiService from "../../apiService";
  import router from "@/Router";
  export default {
    name: "list",
    data() {
      return {
        notes: [],
      };
    },
  
    mounted() {
      this.getNotes();
    },
  
    methods: {
      getNotes() {
        apiService
          .get("/note")
          .then((response) => {
            console.log(response);
            this.notes = response.data;
          })
          .catch((error) => {
            console.error("Error fetching notes:", error);
          });
      },
      deleteNote(note) {
        apiService
          .delete(`/note/${note.id}`)
          .then((response) => {
            this.getNotes();
          })
          .catch((error) => {
            console.error("Error fetching notes:", error);
          });
      },
      redirect() {
        router.push("/create");
      },
    },
  };
  </script>
  