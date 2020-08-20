import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from  'rxjs';
import { SearchImage } from './store/search-image.model';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  storeArray= [];
  storeImage: any;
  startedEditing = new Subject<number>();
  constructor(private http:HttpClient) { }
 
  getSearchResult(data:string){
  return this.http.get
  <Array<SearchImage>>("https://api.unsplash.com/search/photos?query="+data+"&client_id=sbBsGrbZ5dCT1jmiVOXRh5aulWC20_qfWM-s2L5mJ-U");

  }
  sendData(obj:any){
    this.storeArray.push(obj)
      this.storeImage=this.storeArray;
    }
  
  receiveData():any{
      return this.storeImage;
    }
    getListData(index: number) {
        return this.storeArray[index];
      }
}

  