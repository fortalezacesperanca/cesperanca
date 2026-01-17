export interface IService {
  getByPaths(paths: string[]): string[];
  getByPath(path: string): string;
}
