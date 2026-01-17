export class ImageService {
  public static instance: ImageService;
  modules: Record<string, unknown>;

  static getInstance() {
    if (ImageService.instance == null) {
      ImageService.instance = new ImageService();
    }
    return ImageService.instance;
  }

  private constructor() {
    this.modules = import.meta.glob(`/src/data/**/*.{png,jpg,jpeg,svg,webp}`, {
      // eager: true,
      query: '?inline',
      import: 'default',
    });
  }
  async getByPaths(paths: string[]): Promise<string[]> {
    var base64s: string[] = [];
    // paths.forEach((path) => {
    for (let index = 0; index < paths.length; index++) {
      const res = await this.getByPath(paths[index]);
      base64s.push(res);
    }

    return base64s;
  }
  async getByPath(path: string): Promise<string> {
    var key = `/src/data/${path}`;
    // const base64 = this.modules[key];
    // return base64 as string;
    const base64 = await (this.modules[key] as any)();
    return base64 as string;
  }
}
