import { Component, OnInit } from '@angular/core';
import { PortflioService } from 'src/app/service/portflio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio=[{
    productName:'',
    description:''
  }]

  constructor(private portfolioservie:PortflioService) { }

  ngOnInit(): void {
    this.portfolioservie.getportfolio().subscribe((data)=>{
      this.portfolio = JSON.parse(JSON.stringify(data));
      console.log(this.portfolio);
    })
  }

}
