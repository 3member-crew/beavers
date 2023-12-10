import http from "../http_common"

class UserService {
    getAll() {
        return http.get("/users/");
    }

    get(username: string) {
        return http.get(`/tutorials/${username}/`);
    }

    register(data: any) {
        return http.post("/register/", data);
    }

    login(data: any) {
        return http.post("/login/", data);
    }

    update(username:string, data: number) {
        return http.put(`/user/${username}/update/`, data);
    }

}

export default new UserService();