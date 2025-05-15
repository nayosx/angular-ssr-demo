import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component implements OnInit{

  data = inject(DataService);
  resultEncripted: any = [];

  ngOnInit(): void {
    this.data.getEncryptedData().subscribe((data) => {
      console.log('Data encriptada:', data);
      this.resultEncripted = data;
    });
  }

}