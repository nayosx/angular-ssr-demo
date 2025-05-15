import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss'
})
export class Page2Component implements OnInit {

  data = inject(DataService);

  resultDecripted: any = [];

  ngOnInit(): void {

    this.data.getDecryptedData().subscribe((data) => {
      console.log('Data desencriptada:', data);
      this.resultDecripted = data;
    });
    
  }

}
