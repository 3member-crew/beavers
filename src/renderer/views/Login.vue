<template>
    <div>
        <h1>Авторизация</h1>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Имя пользователя" required>
            <input v-model="password" type="password" placeholder="Пароль" required>
            <button type="submit">Войти</button>
        </form>
        <router-link to="/">
            Вернуться назад
        </router-link>
    </div>
</template>
<script lang="ts">
import http from "../http_common";
export default {

    data() {
        return {
            username: '',
            password: '',
        };
    },

    methods: {
        async login() {
            try {
                const response = await http.post('/login/', {
                    username: this.username,
                    password: this.password,
                });

                const token = response.data.token;

                if (token) {
                    localStorage.setItem('token', token)
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
};

</script>