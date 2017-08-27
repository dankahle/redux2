


export interface IINIT {
  value: string;
}

export interface IInitialize {
  initializing: boolean;
  initialized: boolean;
  level1: string;
  level2: string;
  level3: string;
  success: boolean;
  failure: any;
  init1: IINIT,
  init2: IINIT,
  init3: IINIT,
  init4: IINIT,
  init5: IINIT,
}

export const INITIALIZE_INITIAL_STATE: IInitialize = <IInitialize>{
}

