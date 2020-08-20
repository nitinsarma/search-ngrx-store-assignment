import { Component, OnInit, Inject} from '@angular/core';
import { SearchServiceService } from '../search-image.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";



@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {
  listName : any = "";
  list:string = "";
  newList:boolean = true;
  data:any;
  link:String;
  favImages : any;
  pageUrl: any;
  imageName: any;
  val1: any;
  display: boolean;
  list1: any;
  listValues: any = [];
  list2: any;
  lists = [];
  object: { name: any; imageUrl: any; description: any };
  showInput: boolean;
  favList: boolean;
  favLists: any[];
  constructor(private service :SearchServiceService,
    public snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<FavouriteComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
    this.data = data;
  this.pageUrl = data.user.name
  this.imageName = data.alt_description;


    console.log(data);
  }
 
  ngOnInit(): void {
    this.lists = this.service.receiveData() || [];
    if(this.lists.length != 0){
    this.favList = true;
    this.favLists = [...new Set(this.lists.map(x=>x.name))]
    }
    console.log(this.lists);
  }
  addSelected(){
    this.service.sendData(this.data)
    
  }
  

  addToFavourities(listName){
      console.log(this.list)
      this.object = {
                    "name":this.listName,
                    "imageUrl":this.data.urls.small,
                    "description": this.data.description || this.data.alt_description
                }
      this.service.sendData(this.object);
  }
  addToExisting(listName){
    console.log(listName)
    this.object = {
                    "name":listName,
                    "imageUrl":this.data.urls.small,
                    "description": this.data.description || this.data.alt_description
                }
    this.service.sendData(this.object);
  }
  addNewList(){
    this.showInput = true;
    this.newList = false;
  }  
 
}
