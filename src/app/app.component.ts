import { Component } from '@angular/core';
import Zoom from "lightgallery/plugins/zoom";
import Video from "lightgallery/plugins/video";
import { InitDetail } from "lightgallery/lg-events";
import { LightGallery } from "lightgallery/lightgallery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lightgallery-ng12-compiler-error';
  settings = {
    counter: false,
    download: false,
    plugins: [Zoom, Video],
  };
  private lightGallery!: LightGallery;

  galleryOnInit(detail: InitDetail): void {
    this.lightGallery = detail.instance;
  }
}
