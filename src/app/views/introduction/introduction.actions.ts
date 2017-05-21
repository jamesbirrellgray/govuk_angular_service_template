import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class IntroductionActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';

  increment(): Action {
    return { type: IntroductionActions.INCREMENT };
  }

  decrement(): Action {
    return { type: IntroductionActions.DECREMENT };
  }
}