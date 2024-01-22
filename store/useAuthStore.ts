
import { defineStore } from 'pinia'

export const useMyUseAuthStoreStore = defineStore({
  id: 'myUseAuthStoreStore',
  state: () => ({
    
      token: "",
      user: {name:"",email:""}
  
   }),
  getters:{
    isLogin: (state) => {
      return state.user.name !== ""
    }
  },
  actions: {
    setNewToken(token:string){
      this.token = token;
    },
    setUser(name:string,email:string){
      this.user.name = name;
      this.user.email = email;
    },
    clear(){
      this.token = "";
      this.user.name = "";
      this.user.email = "";
    }


  },
  persist: true,



})
