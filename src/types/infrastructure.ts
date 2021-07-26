import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { IAddressRepository } from './address';

/* Http Adapter */
export interface IHttpAdapterConstructs {
  new(config: AxiosRequestConfig): IHttpAdapter;
}

export interface IHttpAdapter {
  send(config: AxiosRequestConfig): Promise<AxiosResponse>;
}

/* Infrastructure */
export type Container = {
  addressRepository: IAddressRepository;
};

export type ContainerConfig = {
  addressProcessorUrl?: string;
};
