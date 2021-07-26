import {
  IHttpAdapterConstructs,
  IHttpAdapter,
  ContainerConfig,
} from '../../types/infrastructure';
import { Address, IAddressRepository } from '../../types/address';

type Context = {
  config: ContainerConfig;
  httpAdapter: IHttpAdapterConstructs;
};

export class AddressRepository implements IAddressRepository {
  private httpAdapter: IHttpAdapter;
  private config: any;

  constructor({
    config,
    httpAdapter,
  }: Context) {
    // eslint-disable-next-line new-cap
    this.httpAdapter = new httpAdapter({
      baseURL: config.addressProcessorUrl,
    });
    this.config = config;
  }

  // eslint-disable-next-line class-methods-use-this
  private createAuthorizeRequestConfig(params: object = {}) {
    return { ...params };
  }

  // eslint-disable-next-line class-methods-use-this
  async getAddressByZipCode(cep: Address['cep']) {
    const url = `${this.config.addressProcessorUrl}/${cep}/json`;
    const config = this.createAuthorizeRequestConfig({
      url,
    });
    return this.httpAdapter.send(config).then((res) => {
      return res.data;
    }).catch((err) => {
      return { success: false, msg: 'CEP não encontrado' };
    });
  }
}
