import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AppWrite {
  client = new Client();

  account;

  constructor() {
    this.client
      .setEndpoint(config.APPWRITE_URL)
      .setProject(config.APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }

  async create({ name, emailId, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        emailId,
        password,
        name
      );
      if (userAccount) {
        //call another method for login
        this.login({ emailId, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Appwrite service :: create :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      console.error("Appwrite service :: login :: error", err);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      console.error("Appwrite service :: logout :: error", err);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.error("Appwrite service :: getCurrentUser :: error", err);
    }
    return null;
  }
}

const appwriteService = new AppWrite();

export default appwriteService;
