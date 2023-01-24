import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerLMISDATA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LMISDATA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLMISDATA = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LMISDATA, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LMISDATA = LazyLoading extends LazyLoadingDisabled ? EagerLMISDATA : LazyLMISDATA

export declare const LMISDATA: (new (init: ModelInit<LMISDATA>) => LMISDATA) & {
  copyOf(source: LMISDATA, mutator: (draft: MutableModel<LMISDATA>) => MutableModel<LMISDATA> | void): LMISDATA;
}