/// <reference types="react" />
/**

Copyright 2021 Forestry.io Holdings, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import { Form, FormOptions } from 'tinacms';
interface JsonNode {
    id: string;
    rawJson: string;
    fileRelativePath: string;
    [key: string]: string;
}
export declare function useJsonForm(_node: JsonNode | null, formOptions?: Partial<FormOptions<any>>): [JsonNode | null, Form | null];
/**
 * @deprecated
 *
 * Instead you should now do this:
 *
 * ```jsx
 * import { usePlugin } from "tinacms"
 * import { useJsonForm } from "gatsby-tinacms-json"
 *
 * export function BlogTemplate(...) {
 *    const [ values, form] = useJsonForm(...)
 *
 *    usePlugin(form)
 *
 * ```
 */
export declare function useLocalJsonForm(jsonNode: JsonNode | null, formOptions?: Partial<FormOptions<any>>): [any, Form | null];
/**
 * @deprecated
 *
 * Instead you should now do this:
 *
 * ```jsx
 * import { useFormScreenPlugin } from "tinacms"
 * import { useJsonForm } from "gatsby-tinacms-json"
 *
 * export function BlogTemplate(...) {
 *     const [values, form] = useJsonForm(...)
 *
 *     useFormScreenPlugin(form)
 */
export declare function useGlobalJsonForm(jsonNode: JsonNode | null, formOptions?: Partial<FormOptions<any>>): [any, Form | null];
interface JsonFormProps extends Partial<FormOptions<any>> {
    data: JsonNode;
    render(renderProps: {
        form: Form;
        data: any;
    }): JSX.Element;
}
export declare function JsonForm({ data, render, ...options }: JsonFormProps): JSX.Element;
export declare const ERROR_MISSING_REMARK_PATH: string;
export declare const ERROR_MISSING_RAW_JSON: string;
export {};
