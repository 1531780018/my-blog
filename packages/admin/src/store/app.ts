/*
 * @Author: Mowang
 * @Date: 2023-03-09 17:20:14
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\admin\src\store\app.ts
 */
import { defineStore } from 'pinia';
import { SetDict } from '../types/app'

export const uesAppStore = defineStore({
  id: "id", // id为必填
  state: () => {
    return {
      isDict: false,
      cateList: [],
      website: [],
    }
  },
  actions: {
    setDict(data: SetDict) {
      this.isDict = true;
      this.cateList = data.catelist;
      this.website = data.website;
    }
  }
})