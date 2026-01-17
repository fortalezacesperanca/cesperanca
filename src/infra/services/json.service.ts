import type { IService } from "./iservice";

export class JsonService implements IService {
  public static instance: JsonService;

  public modules: Record<string, unknown>;
  static getInstance() {
    if (JsonService.instance == null) {
      JsonService.instance = new JsonService();
    }
    return JsonService.instance;
  }

  private constructor() {
    this.modules = import.meta.glob("/src/data/**/*.json", {
      eager: true,
      import: "default",
    });
  }

  getByPaths(paths: string[]): string[] {
    var base64s: string[] = [];
    paths.forEach((path) => {
      base64s.push(this.getByPath(path));
    });

    return base64s;
  }

  getByPath(path: string): string {
    var filename = `/src/data/${path}`;
    try {
      return this.modules[filename] as string;
    } catch (err) {
      console.error(`${filename} was not found`);
    }
    return "";
  }
}
