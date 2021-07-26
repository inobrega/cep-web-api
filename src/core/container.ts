import { ContainerConfig, Container } from '../types/core';
import { AddressUseCase } from './useCase/address';
import { AddressService } from './service/address';

export function createContainer(config: ContainerConfig): Container {
  const serviceContext = {
    addressRepository: config.addressRepository,
  };

  const useCaseContext = {
    addressService: new AddressService(serviceContext),
  };

  return {
    addressUseCase: new AddressUseCase(useCaseContext),
  };
}
