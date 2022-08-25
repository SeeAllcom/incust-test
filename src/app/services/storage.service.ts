import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({providedIn: 'root'})
export class StorageService {
  constructor(private storage: Storage) {
    this.storage.create().then();
  }

  async set(key: string, value: any): Promise<any> {
    try {
      await this.storage.set(key, value);
      return true;
    } catch (reason) {
      return false;
    }
  }

// to get a key/value pair
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result !== null) {
        return result;
      }
      return null;
    } catch (reason) {
      return null;
    }
  }

// set a key/value object
  async setObject(key: string, object: Object) {
    try {
      await this.storage.set(key, JSON.stringify(object));
      return true;
    } catch (reason) {
      return false;
    }
  }

// get a key/value object
  async getObject(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      if (result !== null) {
        return JSON.parse(result);
      }
      return null;
    } catch (reason) {
      return null;
    }
  }

// remove a single key value:
  remove(key: string) {
    this.storage.remove(key).then();
  }

//  delete all data from your application:
  clear() {
    this.storage.clear().then();
  }
}
