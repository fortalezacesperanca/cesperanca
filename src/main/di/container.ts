import { Container } from 'inversify';
import { LoadEventsUseCase } from '../../app/usecase/loadEventsUseCase';

export class DiContainer {
  public container: Container;
  constructor() {
    this.container = new Container();
    this.container.bind(LoadEventsUseCase).toSelf();
    // this.container.bind(Katana).toSelf();
  }
}
