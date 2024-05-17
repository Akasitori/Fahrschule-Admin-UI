import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AktualisierterLehrer, Lehrer, Lehrers, NeuerLehrer } from "../../entities/lehrer/lehrer";
import { LehrerService } from "../../infrastructure/lehrer/lehrer.service";

@Injectable({
    providedIn: "root"
})

export class LehrerFacade{

    constructor(
        private lehrerService: LehrerService
    ){}

    private lehrerListSubject = new BehaviorSubject<Lehrers>({value:[]})
    public lehrerList$ = this.lehrerListSubject.asObservable();

    getAllLehrer(): void {
        this.lehrerService.getAllLehrer().subscribe({
            next: (data) => {
                this.lehrerListSubject.next(data);
            }
        });
    }

    /*******************************************/

    private lehrerByIdSubject = new BehaviorSubject<Lehrer|null>(null);
    public lehrerById$ = this.lehrerByIdSubject.asObservable();

    getLehrerById(id: string): void {
        this.lehrerService.getLehrerById(id).subscribe({
            next: (data) => {
                this.lehrerByIdSubject.next(data);
            }
        });
    }

    /*******************************************/

    private createNewLehrerSubject = new BehaviorSubject<NeuerLehrer|null>(null);
    public createNewLehrer$ = this.createNewLehrerSubject.asObservable();

    createNewLehrer(resource: NeuerLehrer): void{
        this.lehrerService.createNewLehrer(resource).subscribe({
            next: (data) => {
                this.createNewLehrerSubject.next(data);
            }
        });
    } 
 
    /*******************************************/

    private updateLehrerSubject = new BehaviorSubject<AktualisierterLehrer|null>(null);
    public updateLehrer$ = this.updateLehrerSubject.asObservable();

    updateByAdminLehrer(resource: AktualisierterLehrer): void{
        this.lehrerService.updateByAdminLehrer(resource).subscribe({
            next: (data) => {
                this.updateLehrerSubject.next(data);
            }
        });
    }

    /*******************************************/

    private deleteLehrerByIdSubject = new BehaviorSubject<Lehrer|null>(null);
    public deleteLehrerById$ = this.lehrerByIdSubject.asObservable();

    deleteLehrerById(id: string): void {
        this.lehrerService.deleteLehrerById(id).subscribe({
            next: (data) => {
                this.deleteLehrerByIdSubject.next(data);
            }
        });
    }
}