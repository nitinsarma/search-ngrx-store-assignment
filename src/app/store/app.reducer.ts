import { ActionReducerMap } from '@ngrx/store';

import { SearchImageState } from './search-image.reducer';

import { SavedImageState } from './saved-image.reducer';


export interface AppState {
  readonly searchImage: SearchImageState;
  readonly savedImage: SavedImageState;
}


