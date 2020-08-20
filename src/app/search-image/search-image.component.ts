import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchServiceService } from '../search-image.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FavouriteComponent } from '../favourite/favourite.component';
import { AppState } from '../store/app.reducer';
import { SearchImage } from '../store/search-image.model';
import {LoadSearchAction, SearchImageSuccessAction } from '../store/search-image.actions';

@Component({
  selector: 'app-search-image',
  templateUrl: 'search-image.component.html',
  styleUrls: ['search-image.component.scss']
})
export class SearchImageComponent implements OnInit {
  searchImage: Observable<Array<SearchImage>>;
  favImage = [];
  image:any;
  display: boolean = false;
  isDisable: boolean = true;

  constructor(private service :SearchServiceService,
    private dialog: MatDialog,
    private store: Store<AppState>) { 
   
  }

  ngOnInit() {
    this.searchImage = this.store.select(store => store.searchImage.list);
    //console.log(this.searchImage);
    this.store.dispatch(new LoadSearchAction(''));

  }

  search(query) {
    this.store.dispatch(new SearchImageSuccessAction(query));
   this.service.getSearchResult(query).subscribe(result =>{
    this.searchImage = result["results"];
    console.log(this.searchImage);
    })
    }
    addToFav(i):void {
      this.isDisable = false;
      const dialogRef=this.dialog.open(FavouriteComponent , {   
          width:'500px',
          height:'500px',
          panelClass: 'my-dialog',
          data:this.searchImage[i]
          
      });
      dialogRef.afterClosed().subscribe(result=> {
        console.log(result)
      });
  }  
  }


