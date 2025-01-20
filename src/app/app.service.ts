import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly apiUrl = 'http://localhost:3000/data'; // URL del servidor Express

  constructor(private http: HttpClient) {}

  /**
   * Obtiene los datos encriptados desde el servidor.
   * @returns Observable con los datos encriptados.
   */
  getEncryptedData(): Observable<{ name: string; phone: string }[]> {
    return this.http.get<{ name: string; phone: string }[]>(`${this.apiUrl}/encript`);
  }

  /**
   * Obtiene los datos desencriptados desde el servidor.
   * @returns Observable con los datos desencriptados.
   */
  getDecryptedData(): Observable<{ name: string; phone: string }[]> {
    return this.http.get<{ name: string; phone: string }[]>(`${this.apiUrl}/decript`);
  }
}
