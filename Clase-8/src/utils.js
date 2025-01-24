import multer from "multer";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url)

export const __dirname = dirname(__filename)

const config = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/public/image')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

export const upload = multer({ storage: config })
