import { CollectionRecordResponse } from "@polybase/client"

export interface IDetailsPage {
    data:CollectionRecordResponse<any>[]
    proposalId:string
}

export interface IDonorsCount {
    count:number
}

export interface IProposalData {
    data:{
        id: string
        title: string
        explanation: string
        budgetAmount: number
        images: string
        donorsCount: number
       raisedAmount: number
    }
}

export interface IExplanationCard {
    image:string
    text:string
}

export interface IIllustrationCard extends IExplanationCard {
}