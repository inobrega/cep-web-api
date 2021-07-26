import { HttpAdapter } from './adapter/http';

import {
  ContainerConfig,
  Container,
} from '../types/infrastructure';
import { AddressRepository } from './repository/address';

export function createContainer(config: ContainerConfig): Container {
  return {
    addressRepository: new AddressRepository({
      config,
      httpAdapter: HttpAdapter,
    }),
  };
}
