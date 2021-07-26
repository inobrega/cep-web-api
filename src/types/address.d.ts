export type Address = {
  cep: string;
};

export interface IAddressService {
  getAddressByZipCode(cep: Address['cep']): Address;
}

export interface IAddressRepository {
  getAddressByZipCode(cep: Address['cep']): any;
}

export interface IAddressUseCase {
  getAddressByZipCode(cep: Address['cep']): Address;
}
