import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFinderService {

  constructor(private http: HttpClient) { }

  public getDataAsyncOldWay(filePath: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(filePath, {responseType: 'text'}).subscribe(
        res => console.log(res))
        }
      )
    }

    public async getDataAsync(filePath: string) {
     return await this.http.get(filePath, {responseType: 'text'}).toPromise();
    }
}

