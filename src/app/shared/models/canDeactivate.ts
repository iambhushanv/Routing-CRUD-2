import { Observable } from "rxjs";

export interface IcanActivate{
    canDeactive : () => boolean | Observable<boolean> | Promise<boolean>
}