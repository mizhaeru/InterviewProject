
export interface IAssets {
    id: number;
    name: string;
    dateCreatedUTC: string;
    createdBy: string;
    dateModifiedUTC: string;
    modifiedBy: string;
    isDeleted: boolean;
    fields?: IFields[];
    details?: IDetails;
}

export interface IFields{
    id: number;
    name: string;
    stringVal: string;
    intVal: number;
    boolVal: boolean;
    floatVal: number;
    dblVal: number;
}

export interface IDetails {
    id: number;
    fkAsset: number;
    detailsName: string;
}