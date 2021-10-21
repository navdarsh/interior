import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../services/apiservice.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute,ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  images: any = [];
  // images = [1, 2, 3, 4].map((n) => `../../../assets/portfolio/${n}.jpg`);

  constructor(public apiservice: ApiserviceService,public config: NgbCarouselConfig,public activRoute: ActivatedRoute) {
    // console.log(activRoute.snapshot.data['result'])
    for (let i = 1; i <= 3; i++) {
      const url = `../../../assets/portfolio/${i}.jpg`;
      this.images.push(url);
    }
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiservice.getDetails().subscribe((res) => {
      console.log(res);
    });
  }
}
