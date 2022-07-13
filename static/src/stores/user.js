// User store
import { defineStore} from "pinia";

export const useUserStore = defineStore('user',{
    state: () => {
        console.log("In state")
        return {
            isLoggedIn : false,
            name: "Anakin Skywalker"
        }
    },
    actions: {
        logout() {
            this.isLoggedIn = false;
            this.name = null;
        }
    }
})