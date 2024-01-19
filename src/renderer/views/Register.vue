<template>
    <div>
        <h1>Авторизация</h1>
        <form @submit.prevent="login">
            <input v-model="username" type="text" placeholder="Имя пользователя" required>
            <input v-model="email" type="email" placeholder="Почта" required>
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
            email: '',
            password: '',
        };
    },

    methods: {
        async login() {
            try {
                const response = await http.post('/register/', {
                    username: this.username,
                    email: this.email,
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