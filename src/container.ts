import type { Model } from "./domain/model";
import { JsonService } from "./infra/services/json.service";

interface IUseCase<T> {
	execute(): T;
}

export class LoadEvents implements IUseCase<Model.Events> {
	constructor() {}
	execute(json: string = 'db/events.json'): Model.Events {
		var service = JsonService.getInstance();
		return service.getByPath(json) as unknown as Model.Events;
	}
}

type Factory = () => any

// const dependencies: Record<string, Factory> = {
//   "LoadEventsUseCase": () => new LoadEvents(),
//   "JsonService": () => new JsonService()
// }

interface Class {
	static instance: Class
	new (): any;
}

class Container {
	public dependencies: Map<string, Factory> = new Map()
	constructor() {}
	get(name: keyof typeof dependencies){

	}

	register(name: string, dep: Class, lifecycle: "singleton" | "transient") {
		// if (lifecycle == "")
		let factory;
		if (lifecycle == "singleton") {
			factory = () => {
				if (dep.instance == null) {
					dep.instance = new dep()
				}
				dep.instance
			}
		} else {
			factory = () => new dep()
		}
		this.dependencies.set(name, factory)
	}
}

function useUseCase<T>(name : keyof typeof dependencies) {
	const [data, trigger, _] = usePromise<T>({
		fn: () => ,
		defaultValue: defaultValue,
	});

	useEffect(() => {
		trigger();
	}, []);

	return [data];
}
