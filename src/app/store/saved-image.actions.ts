import { Action } from '@ngrx/store';
import { SavedImage } from './saved-image.model';

export const SAVED_IMAGE = 'Save Image';
export const SAVED_IMAGE_DONE = 'Save Image Done';

export enum SavedImageActionTypes {
    SAVED_IMAGE = 'Save Image',
    SAVED_IMAGE_DONE = 'Save Image Done'
  }
  
  export class LoadSavedImageAction implements Action {
    readonly type = SavedImageActionTypes.SAVED_IMAGE
    constructor(public payload: string) { }
    
  }
  export class SavedImageSuccessAction implements Action {
    readonly type = SavedImageActionTypes.SAVED_IMAGE_DONE
  
    constructor(public payload: {}) { }
  }
  

  export type SavedImageActions = LoadSavedImageAction | SavedImageSuccessAction;