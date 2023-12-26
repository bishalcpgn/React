import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";

/*
This file can be shared among other appwrite projects too.
Workflow : 
    make clas AuthService and export its object 
    make obj of Client
    add properties in constructor 
    add other auth services
*/

class AuthService {
    client = new Client()
    account

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account(this.client)
    }



    async createAccount({ email, password, name }) {

        try {
            const useraccount = await this.account.create(ID.unique(), email, password, name)
            if (useraccount) {
                // login user after creating account  
                return this.login({ email, password })
            } else {
                return useraccount
            }

        } catch (error) {
            throw error
        }
    }


    async login({ email, password }) {

        try {
            await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error 
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }

        return null
    }


    async logout() {
        try {
            // deletes all the active sessions 
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }


}

const authService = new AuthService()
export default authService
