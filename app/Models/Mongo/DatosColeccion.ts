import { Schema, model } from "@ioc:Mongoose";

export default model('DatosColeccion', new Schema
    ({
        id: Number,
        NumPreg: String,
        AbortRes: Number,
        SireBull: String,
        Lact: Number,
        Date: String,
        EvnL: String,
        EnEV: String,
        EvGap: String,
        Tech: String,
        Pen: String,
        BredSexed: Number,
        BredREas: String,
        DIME: String,
        Anld: Number,
        FarmLoc: String,
        AnOwner: String,
        Brd: String,
        Ageda: String,
        Other2id: String,
        Other5id: String,
        ConcepRate: String,
        Bredunk: String,
        Evsirebreed: String
    }))