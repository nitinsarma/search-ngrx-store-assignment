import { Action } from '@ngrx/store';
import {SavedImageActions, SavedImageActionTypes} from "./saved-image.actions";
//import { SearchImage } from './search-image.model';
 
export interface SavedImageState {
    list: []

  }
  
  
  const initialState: SavedImageState = {
    list: []

  };
    


export function searchImageReducer(
    state: SavedImageState = initialState, 
    action: SavedImageActions
    ) {
        switch (action.type){
            case SavedImageActionTypes.SAVED_IMAGE:{
               
                return {
                    ...state,
                    searchQuery: action.payload
                  
                }
            }
            case SavedImageActionTypes.SAVED_IMAGE_DONE:{
               
                return {
                    ...state,
                    list: action.payload
                  
                }
            }
            
            default:
                return state;
        }
}