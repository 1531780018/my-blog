import fs from "fs";
import path from "path";
export async function getAllFilesExport(filePath: string, callback: Function) {
  // 根据文件路径读取文件, 返回一个文件列表
  const files: string[] = fs.readdirSync(filePath);
  // 遍历读取到的文件列表
  files.forEach((fileName) => {
    // path.join得到当前文件的绝对路径
    const absFilePath: string = path.join(filePath, fileName);
    const stats: fs.Stats = fs.statSync(absFilePath);
    const isFile = stats.isFile(); // 是否为文件
    const isDir = stats.isDirectory(); // 是否为文件夹
    if (isFile) {
      const file = require(absFilePath);
      callback(file.default);
    }
    if (isDir) {
      getAllFilesExport(absFilePath, callback); // 递归, 如果是文件夹, 就继续遍历该文件夹里面的文件；
    }
  })
}

interface DictItem {
  key?: string
  Value?: string
}
export async function getDictObj(arr: Array<DictItem>) {
  let obj: any = {};
  arr.forEach(item => {
    obj[`${item.key}`] = item.Value
  })
  return obj

}