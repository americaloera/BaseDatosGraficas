import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import DatosColeccion from 'App/Models/Mongo/DatosColeccion'

export default class ColeccionDatosController {
    public async Grafica1({}: HttpContextContract) {
        const BrdH = await DatosColeccion.find({'Brd': 'Holstein'}).count()
        const BrdJ = await DatosColeccion.find({'Brd': 'Jersey'}).count()
        const BrdDC = await DatosColeccion.find({'Brd': 'Dairy Crossbreed'}).count()
        const BrdS = await DatosColeccion.find({'Brd': 'Simmental'}).count()
        const BrdB = await DatosColeccion.find({'Brd': 'Beef Crossbreeds'}).count()
        const BrdA = await DatosColeccion.find({'Brd': 'Angus'}).count()
        const BrdM = await DatosColeccion.find({'Brd': 'Montbeliarde'}).count()
        const BrdG = await DatosColeccion.find({'Brd': 'Girolando'}).count()
        const BrdDB = await DatosColeccion.find({'Brd': 'Dairy-Beef Crossbreed'}).count()
        const BrdAy = await DatosColeccion.find({'Brd': 'Ayrshire'}).count()
        const BrdL = await DatosColeccion.find({'Brd': 'Limousin'}).count()
        const BrdGI = await DatosColeccion.find({'Brd': 'Girolan'}).count()

        const datos = [
            { name: 'Holstein', allData: BrdH}, { name: 'Jersey', allData: BrdJ }, { name: 'Dairy Crossbreed', allData: BrdDC },
            { name: 'Simmental', allData: BrdS }, { name: 'Beef Crossbreeds', allData: BrdB }, { name: 'Angus', allData: BrdA },
            { name: 'Montbeliarde', allData: BrdM }, { name: 'Girolando', allData: BrdG }, { name: 'Dairy-Beef Crossbreed', allData: BrdDB },
            { name: 'Ayrshire', allData: BrdAy }, { name: 'Limousin', allData: BrdL }, { name: 'Girolan', allData: BrdGI }
        ]

        return View.render('grafica1', {datos})
    }
}