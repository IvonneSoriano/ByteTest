import { Component, OnInit } from '@angular/core';
import Dynamsoft from 'dwt';
import { WebTwain } from 'dwt/dist/types/WebTwain';

@Component({
  selector: 'app-scan-docs',
  templateUrl: './scan-docs.component.html',
  styleUrls: ['./scan-docs.component.scss']
})
export class ScanDocsComponent implements OnInit {

  constructor() { }

  DWObject: WebTwain = null;
Dynamsoft_OnReady() {
    this.DWObject = Dynamsoft.WebTwainEnv.GetWebTwain(this.containerId);
}

  ngOnInit(): void {

    Dynamsoft.WebTwainEnv.Containers = [{
      WebTwainId: 'dwtObject',
      ContainerId: this.containerId,
      Width: '300px',
      Height: '400px'
  }];
  Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', () => {
      this.Dynamsoft_OnReady();
  });
  Dynamsoft.WebTwainEnv.ProductKey = 't0134mQIAACUCqucO5jKNA6bL8Rud4pdj04jxHCzVfPG2q3Gq+NLiF7EofTaf0nl3TT6w9KJvLmUMXBSzl8AA2T+z4CHM0IXBlkV8lG6uMVzMno1Ug48+B8qDzbDByNjkufAzO/fztIYNRsammwdBf8+dAko1D/0ZNhgZm5rnbcj56H2IF/1ignA=';
  Dynamsoft.WebTwainEnv.ResourcesPath = 'assets/dwt-resources';
  Dynamsoft.WebTwainEnv.Load();
  }
  containerId = "dwtcontrolContainer";

  acquireImage() {
    this.DWObject.AcquireImage();
}

}
