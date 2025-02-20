import { Common } from "./common.dao.js"

export class AlumnosDao extends Common {

    async getByDni(dni){
        try{
            const result = await this.model.findOne({ dni })
            return result
        } catch(e){
            return null
        }
    }
}
