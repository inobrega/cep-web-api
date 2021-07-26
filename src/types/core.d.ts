import { Container as infraContainer } from './infrastructure';
import { IAddressService, IAddressUseCase } from './address';

export type Container = {
  addressUseCase: IAddressUseCase;
};

export type ContainerConfig = {
  addressRepository: infraContainer['addressRepository'];
};

export type ServiceContext = {
  addressRepository: ContainerConfig['addressRepository'];
};

export type UseCaseContext = {
  addressService: IAddressService;
};
