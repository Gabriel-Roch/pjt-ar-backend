import { pool as conn } from "./pool"

export function fetchAll(sql: string, params?: Array<string | number>): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const connMultiple = await conn.getConnection()
        const data: any = []
        try {
            await connMultiple.beginTransaction()

            const [data] = await connMultiple.query(sql, params)

            await connMultiple.commit()
            resolve({
                data: data
            })
        } catch (err: any) {
            await connMultiple.rollback()
            reject({
                headerMysql: data,
                errorCode: err.errno,
                errorMessage: err.sqlMessage
            })
        } finally {
            connMultiple.release()
        }
    })
}