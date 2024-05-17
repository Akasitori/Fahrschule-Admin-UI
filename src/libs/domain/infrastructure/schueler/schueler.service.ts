import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AktualisierterSchueler, NeuerSchueler, Schueler, Schuelers } from "src/libs/domain/entities/schueler/schueler";
import { ConfigService } from "src/shared/utility-services/config/config";

@Injectable({
    providedIn: 'root'
  })
export class SchuelerService{


    constructor(
        private httpClient: HttpClient,
    ){}

    getAllSchueler(): Observable<Schuelers>{
        const url = ["https://localhost:7148", 'schueler'].join('/');
        const headers = new HttpHeaders().set('Application', 'application/json');
        const requestOptions = { headers };
        return this.httpClient.get<Schuelers>(url, requestOptions);
    }

    getSchuelerById(id: string): Observable<Schueler>{
        const url = ["https://localhost:7148", 'schueler', 'getSchuelerById', id].join('/');
        const headers = new HttpHeaders().set('Application', 'application/json');
        const requestOptions = { headers };
        return this.httpClient.get<Schueler>(url, requestOptions);
    }

    createNewSchueler(resource: NeuerSchueler){
        const url = ["https://localhost:7148", 'schueler', 'createSchueler'].join('/');
        const body = resource;
        const headers = new HttpHeaders().set('Application', 'application/json');
        const requestOptions = { headers };
        return this.httpClient.post<Schueler>(url, body, requestOptions);
    }

    updateByAdminSchueler(resource: AktualisierterSchueler){
        const url = ["https://localhost:7148", 'schueler', 'updateSchuelerByAdmin'].join('/');
        const body = resource;
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.put<AktualisierterSchueler>(url, body, requestOptions);
    }

    deleteSchuelerById(id: string): Observable<Schueler>{
        const url = ["https://localhost:7148", 'schueler', 'deleteSchuelerById', id].join('/');
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.delete<Schueler>(url,requestOptions);
    }

}