import { Component } from '@angular/core';
import * as Subject from 'rxjs/Subject';
import { WebcamImage } from 'ngx-webcam';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // latest snapshot
  title = 'MaskDetector';
  public webcamImage: WebcamImage = null;
  constructor(private httpClient: HttpClient) {

  }
  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.sendPostRequest();
  }
  sendPostRequest() {
    const body = this.webcamImage.imageAsDataUrl;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.httpClient.post("http://localhost:5000/api/Cart/apply-image",
      body, httpOptions).subscribe();
  }
}