import { database } from "../database"

class QualityPost {

    public co2: any
    public pm25: any
    public pm10: any
    public moisture: any
    public vocs: any
    public temperature: any
    public air_renewal: any
    public radonio: any
    public bacteria: any

    constructor(co2: any, pm25: any, pm10: any, moisture: any, vocs: any, temperature: any, air_renewal: any, radonio: any, bacteria: any) {
        this.co2 = co2
        this.pm25 = pm25
        this.pm10 = pm10
        this.moisture = moisture
        this.vocs = vocs
        this.temperature = temperature
        this.air_renewal = air_renewal
        this.radonio = radonio
        this.bacteria = bacteria
    }

    insert() {
        const sql = "INSERT INTO asc_system.quality (co2, pm25, pm10, umidade, vocs, temp, renov_ar, radonio, fungos_bact, dt_insert) VALUES (?,?,?,?,?,?,?,?,?, curdate())"
        return database.executeTransaction(sql, [
            this.co2,
            this.pm25,
            this.pm10,
            this.moisture,
            this.vocs,
            this.temperature,
            this.air_renewal,
            this.radonio,
            this.bacteria
        ])
    }
}


export default QualityPost