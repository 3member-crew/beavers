<template>
    <div class="login">
        <div class="header">
            Авторизация
        </div>
        <form @submit.prevent="login">
            <div class="form">
                <input v-model="username" type="text" placeholder="Имя пользователя" required>
                <div class="pwrd">
                    <input v-model="password" type="password" placeholder="Пароль" required id="password">
                    <button @click="showPassword" class="show">
                        <img src="../assets/showPassword.png" class="pwrd-img" v-if="!isShow">
                        <img src="../assets/closePassword.png" class="pwrd-img" v-else>
                    </button>
                </div>
                <div class="in">
                    <router-link to="/menu"> <!--check login and password-->
                        <game-button type="submit" class="enter">
                            Войти
                        </game-button>
                    </router-link>
                </div>
                <div class="in">
                    <router-link to="register">
                        <a class="reg">Еще нет аккаунта?</a>
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import http from "../http_common";
    import GameButton from "../components/GameButton.vue";

    export default {
        components: {
            GameButton
        },

        data() {
            return {
                username: '',
                password: '',
                isShow: false
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
            showPassword() {
                var x = document.getElementById("password");
                if (x.type === "password") {
                    x.type = "text";
                } else {
                    x.type = "password";
                }
                var tmp = this.isShow;
                this.isShow = !tmp;
            }
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

    .form {
        display: flex;
        flex-direction: column;
        background-color: #b8cece;
        height: 50vh;
        width: 100%;
        align-items: flex-start;
        justify-content: space-evenly;
        border-radius: 5px;
        padding: 10px;
    }

    input {
        padding: 5px;
        background: none;
        border: 3px solid #8496ae;
        border-radius: 10px;
        width: 75%;
        font-size: 20px;
        font-family: 'Comfortaa', sans-serif;
    }
    
    input:focus {
        outline: none;
    }

    .login {
        width: 25%;
    }

    .pwrd {
        display: flex;
    }

    .pwrd-img {
        width: 4cqmin;
    }

    .show {
        width: 15%;
        margin-left: 1em;
        background: none;
        border: 3px solid #8496ae;
        border-radius: 10px;
        background: #8496ae;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .show:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }

    .in {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .enter {
        font-size: 24px;
    }

    .reg {
        font-style: italic;
        color: rgb(87, 83, 83);
    }

    .reg:hover {
        text-decoration: underline;
    }

    a {
        text-decoration: none;
    }
</style>