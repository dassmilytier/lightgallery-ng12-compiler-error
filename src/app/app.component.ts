import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import Zoom from "lightgallery/plugins/zoom";
import Video from "lightgallery/plugins/video";
import { InitDetail } from "lightgallery/lg-events";
import { LightGallery } from "lightgallery/lightgallery";
import { LightGallerySettings } from "lightgallery/lg-settings";
import Thumbnail from "lightgallery/plugins/thumbnail";
import { BehaviorSubject } from "rxjs";
import { GalleryItem } from "lightgallery/lg-utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  title = 'lightgallery-ng12-compiler-error';

  settings: LightGallerySettings = {
    counter: false,
    download: false,
    plugins: [Zoom, Video, Thumbnail],
    animateThumb: true,
    thumbnail: true
  };
  images = new BehaviorSubject<{ downloadURL: string }[]>([]);
  @ViewChild('lightgallery')
  lightGallery!: LightGallery;
  delay = async (ms: number) => new Promise(res => setTimeout(res, ms));

  async ngAfterViewInit(): Promise<void> {

    await this.delay(2000);
    this.images.next(
      [
        {
          downloadURL: '/assets/images/Bild1.png',
        },
        {
          downloadURL: '/assets/images/honda-civic-tourer-11.jpg',
        }
      ]
    );
    this.images.subscribe(async images => {
      const _imageList: GalleryItem[] = images.map(image => {
        return {src: image.downloadURL, thumb: image.downloadURL};
      }) as GalleryItem[];
      this.lightGallery.refresh(_imageList);
    })
  }

  galleryOnInit(detail: InitDetail): void {
    this.lightGallery = detail.instance;
  }
}
