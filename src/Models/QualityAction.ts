import { database } from "../database"

class QualityAction {

    public id: any

    constructor(id: any) {
        this.id = id
    }

    delete() {
        const sql = "DELETE FROM asc_system.quality WHERE id = ?"
        return database.executeTransaction(sql, [
            this.id
        ])
    }

}

export default QualityAction