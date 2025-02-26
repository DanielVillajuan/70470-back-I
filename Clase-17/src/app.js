import { mongoConnection } from "./connection/mongo.js";
import express from 'express'
import { OrdenesModel } from "./models/ordenes.model.js";

const app = express();

mongoConnection()

app.get('/', async (req, res) => {
    const result = await OrdenesModel.paginate({},{limit:10 ,page: 1, sort: { }});
    res.json(result)
})

app.post('/api/ordenes', async (req, res) => {
    const result = await OrdenesModel.insertMany([
        {
            talle: 's',
            cantidad: 5500,
            precio_unitario: 5000,
            descripcion: 'Remera Sport' 
        },
        // {
        //     talle: 'm',
        //     cantidad: 2,
        //     precio_unitario: 6000,
        //     descripcion: 'Remera estampada' 
        // },
        // {
        //     talle: 'm',
        //     cantidad: 8,
        //     precio_unitario: 9000,
        //     descripcion: 'Remera Gucci' 
        // },
        // {
        //     talle: 's',
        //     cantidad: 10,
        //     precio_unitario: 4000,
        //     descripcion: 'Pantalon sport' 
        // },
        // {
        //     talle: 'l',
        //     cantidad: 20,
        //     precio_unitario: 4200,
        //     descripcion: 'Pantalon mega sport' 
        // },
        // {
        //     talle: 'm',
        //     cantidad: 15,
        //     precio_unitario: 10000,
        //     descripcion: 'Jeans' 
        // },
        // {
        //     talle: 'm',
        //     cantidad: 5,
        //     precio_unitario: 10000,
        //     descripcion: 'Jeans' 
        // },
        // {
        //     talle: 'm',
        //     cantidad: 20,
        //     precio_unitario: 5000,
        //     descripcion: 'Remera Sport' 
        // },
        // {
        //     talle: 'm',
        //     cantidad: 32,
        //     precio_unitario: 4000,
        //     descripcion: 'Pantalon sport' 
        // },
        // {
        //     talle: 'm',
        //     cantidad: 18,
        //     precio_unitario: 6000,
        //     descripcion: 'Remera estampada' 
        // },
    ]);
    res.json({result})
})

app.get('/api/reporte/:talle', async (req, res) => {
    const { talle }= req.params
    const result = await OrdenesModel.aggregate([
    {
        $match: { talle }   // filtre solo talle M
    },
    {
        $group: { 
                    _id: "$descripcion", 
                    total_cantidad: { $sum: "$cantidad" },
                    total_ventas: { $sum: { 
                                        $multiply: ["$precio_unitario","$cantidad"]
                                    } 
                                }
                }
    },
    {
        $match: { total_ventas: { $gte: 100000 } } // devuelve un array con lo filtrado
    },
    {
        $group: { _id: 1, ordenes: { $push: "$$ROOT" } }
    },
    {
        $project: {
            "_id": 0,
            orders: "$ordenes"
        }
    },
    {
        $merge: { // create document
            into: "reportes"  // indico en que documento vas a intertar lo del anterior paso
        }
    }
    ])
    res.json({mensaje: "Reporte generado", payload: result})
})

app.listen(8080, () => {
    console.log('Servidor on')
})
