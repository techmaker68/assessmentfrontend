<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center">
      <div>
        <h3>Create form</h3>
        <form @submit="login">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >title</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              required
              aria-describedby="emailHelp"
              v-model="title"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Content</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              required
              v-model="content"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "../../apiService";
import router from "@/Router";
export default {
  name: "Create",
  setup() {},
  data() {
    return {
      title: "",
      content: "",
      errorMessage: "",
    };
  },

  methods: {
    login(e) {
      e.preventDefault();
      console.log("rsasdasd");
      const data = { title: this.title, content: this.content };
      apiService
        .post("/note", data)
        .then((res) => {
          router.push("/welcome");
        })
        .catch((err) => {
          this.errorMessage = err;
        });
    },
  },
};
</script>
