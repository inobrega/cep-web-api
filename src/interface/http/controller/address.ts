/* eslint-disable class-methods-use-this */
import httpStatus from 'http-status-codes';

import { Logger } from '../../../util/logger';
import { getAddressByZipCode } from '../schema/address';


import {
  HttpRouter,
  HttpNext,
  HttpRequest,
  HttpResponse,
  IHttpRoute,
  HttpControllerConfig,
} from '../../../types/interface';

export class AddressController implements IHttpRoute {
  private _validator: HttpControllerConfig['validator'];
  private addressUseCase: HttpControllerConfig['coreContainer']['addressUseCase'];

  constructor({ validator, coreContainer }: HttpControllerConfig) {
    this._validator = validator;
    this.addressUseCase = coreContainer.addressUseCase;
  }

  register(router: HttpRouter) {
    router
      .route('/address/cep/:cep')
      .get(
        this._validator(getAddressByZipCode),
        this.getAddressByZipCode.bind(this),
      );

    Logger.debug('fun: PaymentController.register end');
  }

  async getAddressByZipCode(req: HttpRequest, res: HttpResponse, next: HttpNext) {
    try {
      const { cep } = req.params;

      const addressData = await this.addressUseCase.getAddressByZipCode(cep);
      res.status(httpStatus.OK).send({ success: true, data: addressData });
    } catch (err) {
      next(err);
    }
  }
}
