/* eslint-disable class-methods-use-this */
import { ServiceContext } from '../../types/core';
import { Address, IAddressService } from '../../types/address';

export class AddressService implements IAddressService {
  private addressRepository: ServiceContext['addressRepository'];

  constructor(ctx: ServiceContext) {
    this.addressRepository = ctx.addressRepository;
  }

  getAddressByZipCode(cep: Address['cep']): Address {
    return this.addressRepository.getAddressByZipCode(cep);
  }

}
