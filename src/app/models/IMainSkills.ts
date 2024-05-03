import { ICandidate } from "./ICandidate"

export interface IMainSkills {
    ID: number
    Name: string
    Description: string
    Level: number
    CandidateID: number
    //Navigation Properties
    //Candidate?: ICandidate
}
