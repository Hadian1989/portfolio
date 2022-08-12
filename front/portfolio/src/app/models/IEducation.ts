import { IAddress } from "./IAddress";

export interface IEducation {
  pk: number;
  title: string;
  start_at: string;
  end_at: string | null;
  university: string;
  gpa: number;
  address: IAddress;
}
