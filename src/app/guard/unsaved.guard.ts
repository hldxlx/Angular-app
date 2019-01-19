import {CanDeactivate} from "@angular/router";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
/**
 * Created by cyb on 2019/1/19.
 */
//确保用户执行保存操作才能离开当前页面
export class UnsavedGuard implements CanDeactivate<HeroDetailComponent>{
  canDeactivate(component:HeroDetailComponent){
    return window.confirm("你还没有保存");
  }
}
