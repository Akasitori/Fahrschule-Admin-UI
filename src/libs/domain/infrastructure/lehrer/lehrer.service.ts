import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AktualisierterLehrer, Lehrer, Lehrers, NeuerLehrer } from "../../entities/lehrer/lehrer";

@Injectable({
    providedIn: 'root'
})

export class LehrerService{

    constructor(
        private httpClient: HttpClient
    ){}

    getAllLehrer(): Observable<Lehrers>{
        const url = ["https://localhost:7148", 'lehrer'].join('/');
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.get<Lehrers>(url,requestOptions);
    }

    getLehrerById(id: string): Observable<Lehrer>{
        const url = ["https://localhost:7148", 'lehrer', 'getLehrerById', id].join('/');
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.get<Lehrer>(url,requestOptions);
    }

    createNewLehrer(resource: NeuerLehrer){
        const url = ["https://localhost:7148", 'lehrer', 'createLehrer'].join('/');
        const body = resource;
        const headers = new HttpHeaders().set('Application', 'application/json');
        const requestOptions = { headers };
        return this.httpClient.post<NeuerLehrer>(url, body, requestOptions);
    }

    updateByAdminLehrer(resource: AktualisierterLehrer){
        const url = ["https://localhost:7148", 'lehrer', 'UpdateByAdminLehrer'].join('/');
        const body = resource;
        const headers = new HttpHeaders().set('Application', 'application/json');
        const requestOptions = { headers };
        return this.httpClient.put<AktualisierterLehrer>(url, body, requestOptions);
    }

    deleteLehrerById(id: string): Observable<Lehrer>{
        const url = ["https://localhost:7148", 'lehrer', 'deleteLehrerById', id].join('/');
        const headers = new HttpHeaders().set('Application','application/json');
        const requestOptions = {headers};
        return this.httpClient.delete<Lehrer>(url,requestOptions);
    }
}

