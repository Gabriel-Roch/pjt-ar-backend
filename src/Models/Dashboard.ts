import { database } from "../database"

class Dashboard {
    getCo2() {
        const sql = "SELECT co2 FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getPm25() {
        const sql = "SELECT pm25 FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getPm10() {
        const sql = "SELECT pm10 FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getUmidade() {
        const sql = "SELECT umidade FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getVocs() {
        const sql = "SELECT vocs FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getTemp() {
        const sql = "SELECT temp FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getRenovAr() {
        const sql = "SELECT renov_ar FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getRadonio() {
        const sql = "SELECT radonio FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

    getBacteria() {
        const sql = "SELECT fungos_bact FROM asc_system.quality LIMIT 50 ;"
        return database.fetchAll(sql)
    }

}


export default Dashboard