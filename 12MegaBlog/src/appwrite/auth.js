import conf from "../conf/conf.js"
import {Client,Account,ID,} from "appwrite"

export class AuthService {
  client= new Client ();
  account;


  constructor() {
      this.client
              .setEndpoint(conf.appwriteUrl)
              .setProject(conf.appwriteprojectId);

          this.account=new Account(this.client);
 }
async createAccount({name,email,password}){
  try {
   const useraccount= await this.account.create(ID.unique(),email,password,name);
    if(useraccount){    //callanothermethod 
      return this.login({email,password});
    }
      else{return useraccount}
  } catch (error) {
    throw error;
  }
}

async login({email,password}){
  try {
    await this.account.get(email,password);
  } catch (error) {
    throw error;
  }
}

async getCurrentUser(){
  try {
    return await this.account.getSession();
    
  } catch (error) {
    console.log("appwrite service :: getCurrentUser :: error", error);
  }
  return null;
}

async logout (){
  try {
    await this.account.deleteSessions()
    
  } catch (error) {
    console.log("Appwrite service :: logout :: error", error);
  }
}

}
const authservice= new AuthService()
export default authservice