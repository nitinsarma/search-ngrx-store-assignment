import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-image.service';
import { Subscription } from  'rxjs';
@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.scss']
})
export class SavedImagesComponent implements OnInit {
  favImage: any;
  editMode: boolean;
  listName: any;
  editListData: {name: '', description: '', imageUrl: ''};
  subscription: Subscription;
  editedItemIndex: number;
  constructor(private service:SearchServiceService) { }

  ngOnInit(): void {
     this.favImage = this.service.receiveData();
     this.favImage = [...new Set(this.favImage)];
     this.listName = {};
     
     this.subscription = this.service.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
         this.editListData = Object.assign({},this.favImage[index]);
          this.editListData={
            name: this.editListData.name,
            description: this.editListData.description,
            imageUrl: this.editListData.imageUrl
          }
        }
      );
  }
  
  downloadFav(i){
    this.toDataURL(this.favImage[i].imageUrl, function (dataUrl) {
    console.log(dataUrl)
    var a = document.createElement("a"); //Create <a>
    a.href = dataUrl; //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click();
  })
}
  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

editData(index: number){
  this.service.startedEditing.next(index);
}
updateList(obj: {}){
  console.log(this.editedItemIndex);
  console.log(obj);
  console.log(this.favImage);
  this.favImage[this.editedItemIndex] = Object.assign({}, obj);
  this.editMode = false;
}
}
