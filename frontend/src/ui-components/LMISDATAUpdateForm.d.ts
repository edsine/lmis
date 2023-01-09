/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LMISDATA } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LMISDATAUpdateFormInputValues = {};
export declare type LMISDATAUpdateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LMISDATAUpdateFormOverridesProps = {
    LMISDATAUpdateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type LMISDATAUpdateFormProps = React.PropsWithChildren<{
    overrides?: LMISDATAUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    lMISDATA?: LMISDATA;
    onSubmit?: (fields: LMISDATAUpdateFormInputValues) => LMISDATAUpdateFormInputValues;
    onSuccess?: (fields: LMISDATAUpdateFormInputValues) => void;
    onError?: (fields: LMISDATAUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LMISDATAUpdateFormInputValues) => LMISDATAUpdateFormInputValues;
    onValidate?: LMISDATAUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LMISDATAUpdateForm(props: LMISDATAUpdateFormProps): React.ReactElement;
