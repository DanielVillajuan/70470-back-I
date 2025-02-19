import { Common } from "./common.dao.js"

export class MateriasDao extends Common {

    async getByCupos(cupo){
        try{
            const result = await this.model.find({ cupo })
            return result
        } catch(e){
            return null
        }
    }

    async getByComision(comision){
        try{
            const result = await this.model.find({ comision })
            return result
        } catch(e){
            return null
        }
    }
}
