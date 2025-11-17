import { IBase } from './base.types';

export enum EnumSiteStatus {
  Online = 'Online',
  Offline = 'Offline',
  Unknown = 'Unknown',
}

export interface ISiteResponse extends IBase {
  name: string;
  status?: EnumSiteStatus;
  url: string;
  description?: string;
}

export type TypeSiteFormState = Partial<Omit<ISiteResponse, 'id' | 'updatedAt'>>;
