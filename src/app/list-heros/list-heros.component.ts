import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-list-heros',
  templateUrl: './list-heros.component.html',
  styleUrls: ['./list-heros.component.css']
})
export class ListHerosComponent implements OnInit, OnChanges {
  constructor(private allApi: ApiService) {}


  @Input()  name: any;
  listUser: any = [];
  showToggle = false;
  display = false;
  userList: any = [];

  /**
   * OnInit Function
   */
  ngOnInit(): void {

    this.getHeroList();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes',changes)
  }
  /**
   * Get the List of heros using API
   */
  getHeroList = () => {
    this.allApi.getHerosList().subscribe
    ({
      next: (v) => {
      this.listUser = v,console.log("API details",this.listUser);
      this.userList = this.listUser['data']
    },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    })
    
  }

  toggle() {
    this.showToggle= !this.showToggle;
  }
}

