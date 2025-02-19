export class Common {
    constructor(model){
        this.model = model
    }

    async getAll(){
        try{
            const result = await this.model.find()
            return result
        } catch(e){
            return null
        }
    }

    async getById(id){
        try{
            const result = await this.model.findById(id)
            return result
        } catch(e){
            return null
        }
    }

    async create(object){
        try{
            const result = await this.model.create(object)
            return result
        } catch(e){
            return null
        }
    }

    async update(id, objectUpdate){
        try{
            const result = await this.model.findByIdAndUpdate(id,objectUpdate, {new : true})
            return result
        } catch(e){
            return null
        }
    }

    async delete(id){
        try{
            const result = await this.model.deleteOne({ _id: id })
            return result
        } catch(e){
            return null
        }
    }
}
