/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LMISDATACreateFormInputValues = {};
export declare type LMISDATACreateFormValidationValues = {};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LMISDATACreateFormOverridesProps = {
    LMISDATACreateFormGrid?: FormProps<GridProps>;
} & EscapeHatchProps;
export declare type LMISDATACreateFormProps = React.PropsWithChildren<{
    overrides?: LMISDATACreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LMISDATACreateFormInputValues) => LMISDATACreateFormInputValues;
    onSuccess?: (fields: LMISDATACreateFormInputValues) => void;
    onError?: (fields: LMISDATACreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LMISDATACreateFormInputValues) => LMISDATACreateFormInputValues;
    onValidate?: LMISDATACreateFormValidationValues;
} & React.CSSProperties>;
export default function LMISDATACreateForm(props: LMISDATACreateFormProps): React.ReactElement;
