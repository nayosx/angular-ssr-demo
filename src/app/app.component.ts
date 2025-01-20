import { Component, inject, OnInit } from '@angular/core';
import { DataService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  data = inject(DataService);
  resultEncripted: any = [];
  resultDecripted: any = [];

  ngOnInit(): void {
    this.data.getEncryptedData().subscribe((data) => {
      console.log('Data encriptada:', data);
      this.resultEncripted = data;
    });

    this.data.getDecryptedData().subscribe((data) => {
      console.log('Data desencriptada:', data);
      this.resultDecripted = data;
    });
  }
  title = 'awesomeapp';
}
