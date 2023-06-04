import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  expandContent = true;
  transactions!: Transaction[];
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.apiService.getTransactions().subscribe((response: any) => {
      this.transactions = response;
    }, (error: HttpErrorResponse) => {
      console.log('error :', error);
    });
  }
}
