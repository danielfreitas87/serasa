import Cryptojs from 'crypto-js'

const DEFAULT_ENCRYPT_SECRET = 'serasa@123'

export function encrypt(decryptedString: string) {
  return Cryptojs.AES.encrypt(
    decryptedString,
    process.env.ENCRYPT_SECRET || DEFAULT_ENCRYPT_SECRET,
  ).toString()
}

export function decrypt(encryptedString: string) {
  const decryptedString = Cryptojs.AES.decrypt(
    encryptedString,
    process.env.ENCRYPT_SECRET || DEFAULT_ENCRYPT_SECRET,
  )
  return decryptedString.toString(CryptoJS.enc.Utf8)
}
