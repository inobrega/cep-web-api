import { UseCaseContext } from '../../types/core';
import {Address, IAddressUseCase} from '../../types/address';

export class AddressUseCase implements IAddressUseCase {
  private addressService: UseCaseContext['addressService'];

  constructor(ctx: UseCaseContext) {
    this.addressService = ctx.addressService;
  }

  // eslint-disable-next-line class-methods-use-this
  getAddressByZipCode(cep: Address['cep']): Address {
    return this.addressService.getAddressByZipCode(cep);
  }
}
