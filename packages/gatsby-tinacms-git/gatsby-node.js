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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_git_1 = require("@tinacms/api-git");
exports.onCreateDevServer = function (_a, options) {
    var app = _a.app;
    var pathToRepo = options.pathToRepo, pathToContent = options.pathToContent, gitRemote = options.gitRemote, sshKey = options.sshKey, routerOptions = __rest(options, ["pathToRepo", "pathToContent", "gitRemote", "sshKey"]);
    var repo = new api_git_1.Repo(pathToRepo, pathToContent);
    // NOTE: Environment variables are always interpreted as strings. If TINA_CEE is set to anything, this will evaluate as true
    if (process.env.TINA_CEE !== undefined) {
        api_git_1.configureGitRemote(repo, gitRemote, sshKey);
    }
    app.use('/___tina', api_git_1.router(repo, routerOptions));
};
