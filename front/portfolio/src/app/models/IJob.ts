import { IAddress } from "./IAddress";

export interface IJob {
  pk: number;
  position: string;
  start_at: string;
  end_at: string | null;
  resposibility: string[];
  type: string;
  address: IAddress;
}
