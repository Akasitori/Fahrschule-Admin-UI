import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AktualisierterSchueler, NeuerSchueler, Schueler, Schuelers } from "../../entities/schueler/schueler";
import { SchuelerService } from "../../infrastructure/schueler/schueler.service";

@Injectable({
    providedIn: 'root'
})

export class SchuelerFacade
{
  constructor(private schuelerService: SchuelerService){}

    private schuelersOhneZuordnungSubject = new BehaviorSubject<Schuelers>({value:[]});
    public schuelersOhneZuordnung$ = this.schuelersOhneZuordnungSubject.asObservable();

    private schuelersMitZuordnungSubject = new BehaviorSubject<Schuelers>({value:[]});
    public schuelersMitZuordnung$ = this.schuelersMitZuordnungSubject.asObservable();

    getAllSchueler(){
      this.schuelerService.getAllSchueler().subscribe({
        next: data => {
          const schuelersOhneZuordnung: Schuelers = { value: data.value.filter(schueler => schueler.lehrerId === null) };
          const schuelersMitZuordnung: Schuelers = { value: data.value.filter(schueler => schueler.lehrerId !== null) };
    
          console.log(schuelersOhneZuordnung);
          console.log(schuelersMitZuordnung);

          this.schuelersOhneZuordnungSubject.next(schuelersOhneZuordnung);
          this.schuelersMitZuordnungSubject.next(schuelersMitZuordnung);
        }
      });
    }

    /*************************************************************/

    private schuelerByIdSubject = new BehaviorSubject<Schueler | null>(null);
    public schuelerById$ = this.schuelerByIdSubject.asObservable();

    getSchuelerById(id: string){
      this.schuelerService.getSchuelerById(id).subscribe({
        next: data => {
            this.schuelerByIdSubject.next(data)
        }
      });
    }

    /*************************************************************/

    private createNewSchuelerSubject = new BehaviorSubject<NeuerSchueler|null>(null);
    public createNewSchueler$ = this.createNewSchuelerSubject.asObservable();

    createNewSchueler(schueler: NeuerSchueler){
      this.schuelerService.createNewSchueler(schueler).subscribe({
        next: data => {
          this.createNewSchuelerSubject.next(data);
        }
      });
    }


    private updateSchuelerSubject = new BehaviorSubject<AktualisierterSchueler | null>(null);
    public updatedSchueler$ = this.updateSchuelerSubject.asObservable();

    updateByAdminSchueler(resource: AktualisierterSchueler): void {
        this.schuelerService.updateByAdminSchueler(resource).subscribe({
            next: (data) => {
                this.updateSchuelerSubject.next(data);
            }
        })
    }

    private deleteSchuelerByIdSubject = new BehaviorSubject<Schueler|null>(null);
    public deleteSchuelerById$ = this.deleteSchuelerByIdSubject.asObservable();

    deleteSchuelerById(id: string): void {
        this.schuelerService.deleteSchuelerById(id).subscribe({
            next: (data) => {
                this.deleteSchuelerByIdSubject.next(data);
            }
        });
    }
}  