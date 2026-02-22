export class JSONService {
  public static instance: JSONService;

  public modules: Record<string, unknown>;
  static getInstance() {
    if (JSONService.instance == null) {
      JSONService.instance = new JSONService();
    }
    return JSONService.instance;
  }

  private constructor() {
    this.modules = import.meta.glob('/src/data/**/*.json', {
      eager: true,
      import: 'default',
    });
  }

  getByPath<T>(path: string): T {
    var filename = `/src/data/${path}`;
    try {
      return this.modules[filename] as T;
    } catch (err) {
      console.error(`${filename} was not found`);
    }
    return null as T;
  }
}
