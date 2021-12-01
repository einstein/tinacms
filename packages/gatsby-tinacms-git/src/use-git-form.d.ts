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
import { Form, FormOptions, WatchableFormValue } from 'tinacms';
export interface GitNode {
    fileRelativePath: string;
}
export interface GitFormOptions<File extends GitNode> extends Partial<FormOptions<File>> {
    format(file: File): string;
    parse(content: string): File;
}
export declare function useGitForm<N extends GitNode>(node: N, options: GitFormOptions<N>, watch: WatchableFormValue): [N, Form, boolean];
