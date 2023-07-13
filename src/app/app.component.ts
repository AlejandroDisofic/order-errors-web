import { Component, OnInit } from '@angular/core';
import { OrderOdooOracleErrorsService } from 'src/app/services/order-odoo-oracle-errors.service';
import { IOrderOdooOracleError } from 'src/app/core/models/order-odoo-oracle-errors.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'order_error_app';
  public dataSource: any = [];
  public displayedColumns: string[] = [
    'order',
    'error_message',
  ];

  constructor(private orderOdooOracleErrorsService: OrderOdooOracleErrorsService) {}

  public ngOnInit() {
    this.orderOdooOracleErrorsService.getOrderErrors().subscribe((data) => {
      this.dataSource = new MatTableDataSource<any>(data);
    })
  }
}
