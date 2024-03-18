import { pool as conn } from "./pool"

interface TypeQueryAndParams {
    query: string,
    params: Array<string | number>
}

export function executeMultipleTransactions(querysAndParams: Array<TypeQueryAndParams>): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const querys: any = querysAndParams
        const data: any = []
        const connMultiple = await conn.getConnection()
        try {
            await connMultiple.beginTransaction()

            for (const i in querys) {
                [data[i]] = await connMultiple.query(querys[i].query, querys[i].params)
            }

            await connMultiple.commit()
            resolve({
                headerMysql: data
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