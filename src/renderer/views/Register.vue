<template>
        <div class="header">
            Авторизация
        </div>
        <form @submit.prevent="login">
            <div style="display: flex; flex-direction; column;">
                <input v-model="username" type="text" placeholder="Имя пользователя" required>
                <input v-model="email" type="email" placeholder="Почта" required>
                <input v-model="password" type="password" placeholder="Пароль" required>
                <button type="submit">Войти</button>
            </div>
        </form>
        <router-link to="/">
            <div class="exit">
                <game-button>
                    Назад
                </game-button>
            </div>
        </router-link>
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

<style scoped lang="css">
.header {
    background-color: #060223;
    font-size: 30px;
    text-align: center;
    padding: 20px;
    color: #7f9e9f;
    font-weight: 700;
}

.exit {
    display: flex;
    position: absolute;
    justify-content: flex-end;
    width: 40%;
    bottom: 2em;
    right: 2em;
}
</style>