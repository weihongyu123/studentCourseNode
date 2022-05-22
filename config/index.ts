import dotenv from 'dotenv';
import fs from 'fs'
import path from 'path'


const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './keys/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './keys/public.key'));

export {
    PUBLIC_KEY,
    PRIVATE_KEY
}
export default dotenv.config()
