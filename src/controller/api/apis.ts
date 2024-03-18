import { Request, Response } from "express"
import Quality from "../../Models/Quality"
import QualityAction from "../../Models/QualityAction"
import QualityPost from "../../Models/QualityPost"
import Dashboard from "../../Models/Dashboard"
import { StatusCodes } from "http-status-codes"

export const rawData = async (req: Request, res: Response) => {
    try {
        const quality = new Quality()
        const resultRawData = await quality.getRawData()
        return res.status(StatusCodes.OK).json(resultRawData)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

export const deleteControl = async (req: Request, res: Response) => {
    try {
        const id = req.query.id
        const qualityAction = await new QualityAction(id)
        const resultDelete = await qualityAction.delete()
        return res.status(StatusCodes.ACCEPTED).json(resultDelete)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}

export const saveNewItem = async (req: Request, res: Response) => {
    try {
        const {
            co2,
            pm25,
            pm10,
            moisture,
            vocs,
            temperature,
            air_renewal,
            radonio,
            bacteria
        } = req.body
        const qualityPost = new QualityPost(co2, pm25, pm10, moisture, vocs, temperature, air_renewal, radonio, bacteria)
        const resultInsert = await qualityPost.insert()
        return res.status(StatusCodes.ACCEPTED).json({ success: true, ...resultInsert })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}


export const getDashboard = async (req: Request, res: Response) => {
    try {
        const dashboard = new Dashboard()
        const resultCo2 = await dashboard.getCo2()
        const pm25 = await dashboard.getPm25()
        const pm10 = await dashboard.getPm10()
        const umidade = await dashboard.getUmidade()
        const vocs = await dashboard.getVocs()
        const temp = await dashboard.getTemp()
        const renovAr = await dashboard.getRenovAr()
        const radonio = await dashboard.getRadonio()
        const bacteria = await dashboard.getBacteria()

        const valoresCo2 = resultCo2.data.map((item: any) => item.co2)
        const valoresPm25 = pm25.data.map((item: any) => item.pm25)
        const valoresPm10 = pm10.data.map((item: any) => item.pm10)
        const valoresUmidade = umidade.data.map((item: any) => item.umidade)
        const valoresVocs = vocs.data.map((item: any) => item.vocs)
        const valoresTemp = temp.data.map((item: any) => item.temp)
        const valoresRenovAr = renovAr.data.map((item: any) => item.renov_ar)
        const valoresRadonio = radonio.data.map((item: any) => item.radonio)
        const valoresBacteria = bacteria.data.map((item: any) => item.fungos_bact)

        const dashboardData = {
            valoresCo2: valoresCo2,
            valoresPm25: valoresPm25,
            valoresPm10: valoresPm10,
            valoresUmidade: valoresUmidade,
            valoresVocs: valoresVocs,
            valoresTemp: valoresTemp,
            valoresRenovAr: valoresRenovAr,
            valoresRadonio: valoresRadonio,
            valoresBacteria: valoresBacteria
        }

        return res.status(StatusCodes.OK).json(dashboardData)
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }
}