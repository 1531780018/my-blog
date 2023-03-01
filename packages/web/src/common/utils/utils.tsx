/*
 * @Author: Mowang
 * @Date: 2023-02-24 21:52:37
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\common\utils\utils.tsx
 */

import { lazy } from "react"
import DocumentTitle from 'react-document-title'

// const HomeTitle = process.env.VITE_APP_TITLE

export const GetDescContext = (context: string) => {

}

// 查找总页数
export const pagerCount = (count: number, pageSize: number) => {
  if (typeof (count) == "number") {
    if (count > 0) {
      try {
        var _pagerCount = count % pageSize == 0 ? count / pageSize : count / pageSize + 1;
        var c = _pagerCount.toFixed(0) as unknown as number;//小数取整
        _pagerCount = c > _pagerCount ? c - 1 : c;//过滤四舍五入
        return _pagerCount;

      } catch (error) {
        return 0;
      }

    } else {
      return 0;
    }

  }
  else {
    return 0;
  }
}

// 数据拆分
export const pagination = (pageNo: number, pageSize: number, array: Array<number>) => {
  var offset = (pageNo - 1) * pageSize;
  return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
}