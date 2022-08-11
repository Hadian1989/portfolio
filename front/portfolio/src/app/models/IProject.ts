export interface IProject {
  name: string;
  start_at: string;
  end_at: string | null;
  technology: string[];
  type: string;
}
