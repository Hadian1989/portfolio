export interface IJob {
    position:string,
    start_at:string,
    end_at:string | null,
    resposibility: string[],
    type: string,
    address: string
}