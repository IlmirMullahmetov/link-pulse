import { IBase } from "./base.types";

export enum EnumSiteStatus {
    Online = 'online',
    Offline = 'offline',
    Unknown = 'unknown'
}

export interface ISiteResponse extends IBase {
    name: string;
    status: EnumSiteStatus;
    description?: string
}

export type TypeSiteFormState = Partial<Omit<ISiteResponse, 'id' | 'updatedAt'>>