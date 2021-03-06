/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ContainerModule } from "inversify";
import { LanguageServerContribution } from "@theia/languages/lib/node";
import { RubyContribution } from './ruby-contribution';

export default new ContainerModule(bind => {
    bind(RubyContribution).toSelf().inSingletonScope();
    bind(LanguageServerContribution).toService(RubyContribution);
});