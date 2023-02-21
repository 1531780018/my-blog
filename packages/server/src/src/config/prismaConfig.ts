/*
 * @Author: Mowang
 * @Date: 2023-02-19 20:34:24
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\server\src\src\config\prismaConfig.ts
 */
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

export default prisma;