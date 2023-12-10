<template lang="">
    <div>
        <div v-for="user in info" :key="username">
            {{user.username}}
            {{user.score}}
        </div>
    </div>
</template>
<script lang="ts">
import UserService from "../services/UserService";
import { Component, defineComponent } from "vue";
import User from "../typings/User"
import http from "../http_common"
export default defineComponent({
    data() {
        const info: User[] = []
        return { info};
    },
    mounted() {
        UserService.getAll()
        .then((response) => {
            this.info = response.data;
            console.log(response)
        })
        .catch((e) => {
            console.log(e)
        })
    }
})

</script>