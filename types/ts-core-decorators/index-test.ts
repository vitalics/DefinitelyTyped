/// <reference path="decorators/common/log.decorator.d.ts" />

import { Log } from './decorators/common/log.decorator';

@Log({ toConsole: true })
class Temp {
  constructor() {}

  someFn(test: number) {
    return test;
  }
}

const a = new Temp();
a.someFn(21);
