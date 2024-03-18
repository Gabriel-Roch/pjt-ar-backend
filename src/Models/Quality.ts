import { database } from "../database"

class Quality {

    constructor() {
    }

    getRawData() {
        const sql = "SELECT * FROM asc_system.quality;"
        return database.fetchAll(sql)
    }


}

export default Quality