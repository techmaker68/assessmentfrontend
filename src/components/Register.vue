<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center">
      <div>
        <h3>Register form</h3>
        <form @submit="login">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              required
              aria-describedby="emailHelp"
              v-model="name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              required
              aria-describedby="emailHelp"
              v-model="email"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
              v-model="password"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button @click="redirect" class="btn btn-primary">login</button>
          </div>
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
  name: "Register",
  setup() {},
  data() {
    return {
      email: "",
      password: "",
      name: "",
      errorMessage: "",
    };
  },

  methods: {
    login(e) {
      e.preventDefault();
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      apiService
        .post("register", data)
        .then((res) => {
          localStorage.setItem("token", res.access_token);
          router.push("/welcome");
        })
        .catch((err) => {
          this.errorMessage = err;
        });
    },
    redirect() {
      router.push("/");
    },
  },
};
</script>
