<template>
    <div class="mt-5">
        <form>
            <span>這是假的Login</span>
            <div class="form-group">
                <label for="exampleInputEmail1">User Name</label>
                <input
                    v-model="username"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                >
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                >
            </div>
            <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="handleSubmit"
            >Submit</button>
        </form>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        username: "chuiantw1212",
        password: "0905930953"
    }),
    methods: {
        handleSubmit: function() {
            // this.login({
            //     username: this.username,
            //     password: this.password
            // });
            this.$router.push({name: "Account"})
        },
        ...mapActions(["login"])
    }
};
</script>