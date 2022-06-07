import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import {  Observable } from "rxjs";
import { PostService } from "./post.service";

@Injectable()
export class PostsResolver implements Resolve<boolean> {
    constructor(private PostService: PostService) {}
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      return this.PostService.loaded$.pipe(
        mergMap((loaded) => {
          if (!loaded) {
            this.PostService.getAll();
          }
        }),
        first()
      );
    }
  }

function mergMap(arg0: (loaded: any) => void): import("rxjs").OperatorFunction<boolean, unknown> {
    throw new Error("Function not implemented.");
}
function first(): import("rxjs").OperatorFunction<unknown, boolean> {
  throw new Error("Function not implemented.");
}

