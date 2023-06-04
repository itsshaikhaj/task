import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  detailsArray: any[] = [];
  imagePaths: any = {
    balance: './../../../assets/icons/wallet.png',
    income: './../../../assets/icons/piggy-bank.svg',
    savings: './../../../assets/icons/savings.svg',
    expenses: './../../../assets/icons/expense.svg'
  };

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.apiService.getDetails().subscribe((response: any) => {
      const data = Object.entries(response).map(([key, value]) => ({
        key,
        value,
        imagePath: this.imagePaths[key] || ''
      }));
      this.detailsArray = data;
    }, (error: HttpErrorResponse) => {
      console.log('error :', error);
    });
  }

}
