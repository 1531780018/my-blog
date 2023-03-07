import jwt from 'jsonwebtoken'

export const jwtKey: string = 'myblog';

// token生成函数 有效期为一小时
export const jwtSign = (data: any) => {
  return jwt.sign(data, jwtKey, { expiresIn: 60 * 60 })
}

// token验证
export const jwtChecks = (token: string) => {
  try {
    return jwt.verify(token, jwtKey)
  } catch (error) {
    return false
  }
}