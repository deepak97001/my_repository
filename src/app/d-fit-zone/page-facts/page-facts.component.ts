import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-page-facts',
  templateUrl: './page-facts.component.html',
  styleUrls: ['./page-facts.component.scss']
})
export class PageFactsComponent implements OnInit {

  factsData: string[] = [];
  constructor(private readonly commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.getFacts().subscribe((e)=> {this.factsData = e});
  }

}
