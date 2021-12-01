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
import { TinaCMS, Field, AddContentPlugin } from 'tinacms';
declare type MaybePromise<T> = Promise<T> | T;
interface CreateJsonButtonOptions<FormShape, JsonShape> {
    label: string;
    fields: Field[];
    filename(form: FormShape): MaybePromise<string>;
    data?(form: FormShape): MaybePromise<JsonShape>;
}
export declare class JsonCreatorPlugin<FormShape = any, FrontmatterShape = any> implements AddContentPlugin<FormShape> {
    __type: 'content-creator';
    name: AddContentPlugin<FormShape>['name'];
    fields: AddContentPlugin<FormShape>['fields'];
    filename: (form: FormShape) => MaybePromise<string>;
    data: (form: FormShape) => MaybePromise<FrontmatterShape>;
    constructor(options: CreateJsonButtonOptions<FormShape, FrontmatterShape>);
    onSubmit(form: FormShape, cms: TinaCMS): Promise<void>;
}
export {};
