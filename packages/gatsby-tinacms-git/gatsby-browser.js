"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var git_client_1 = require("@tinacms/git-client");
exports.onClientEntry = function () {
    if (!window.tinacms) {
        throw new Error(ERROR_TINACMS_NOT_FOUND);
    }
    var _a = window.location, protocol = _a.protocol, hostname = _a.hostname, port = _a.port;
    var baseUrl = protocol + "//" + hostname + (port != '80' ? ":" + port : '') + "/___tina";
    var client = new git_client_1.GitClient(baseUrl);
    window.tinacms.registerApi('git', client);
    window.tinacms.media.store = new git_client_1.GitMediaStore(client);
};
var ERROR_TINACMS_NOT_FOUND = "`window.tinacms` not found\n\n1. Make sure to add `gatsby-plugin-tinacms` to your `gatsby-config.js`\n2. Make sure `gatsby-tinacms-git` is a sub-plugin of `gatsby-plugin-tinacms`\n\n{\n  resolve: \"gatsby-plugin-tinacms\",\n  options: {\n    plugins: [\n      \"gatsby-tinacms-git\",\n    ]\n  }\n}\n\n";
