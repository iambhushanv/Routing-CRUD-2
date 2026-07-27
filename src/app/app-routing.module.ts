import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashComponent } from './shared/components/home-dash/home-dash.component';
import { ProductsDashComponent } from './shared/components/products-dash/products-dash.component';
import { ProductFormComponent } from './shared/components/products-dash/product-form/product-form.component';
import { ProductDetailComponent } from './shared/components/products-dash/product-detail/product-detail.component';
import { FairsDashComponent } from './shared/components/fairs-dash/fairs-dash.component';
import { UsersDashComponent } from './shared/components/users-dash/users-dash.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { UserFormComponent } from './shared/components/users-dash/user-form/user-form.component';
import { UserDetailComponent } from './shared/components/users-dash/user-detail/user-detail.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/services/auth.guard';
import { CanDeactiveGuard } from './shared/services/can-deactive.guard';
import { UserRoleGuard } from './shared/services/user-role.guard';
import { ProductsResolver } from './shared/services/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeDashComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRoles: ['buyer', 'admin', 'superAdmin']
    }
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: 'products',
    component: ProductsDashComponent,
    canActivateChild: [AuthGuard, UserRoleGuard],
    data: {
      userRoles: ['buyer', 'admin', 'superAdmin']
    },
    resolve : {
      product : ProductsResolver
    },
    children: [
      {
        path: 'addProduct',
        component: ProductFormComponent,
        data: {
          userRoles: ['buyer', 'admin', 'superAdmin']
        }
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        data: {
          userRoles: ['buyer', 'admin', 'superAdmin']
        }
      },
      {
        path: ':id/edit',
        component: ProductFormComponent,
        canDeactivate: [CanDeactiveGuard],
        data: {
          userRoles: ['buyer', 'admin', 'superAdmin']
        }
      },
    ]
  },
  {
    path: 'fairs',
    component: FairsDashComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRoles: ['superAdmin']
    }
  },
  {
    path: 'users',
    component: UsersDashComponent,
    canActivateChild: [AuthGuard, UserRoleGuard],
    data: {
      userRoles: ['admin', 'superAdmin']
    },
    children: [
      {
        path: 'addUser',
        component: UserFormComponent,
        data: {
          userRoles: ['admin', 'superAdmin']
        }
      },
      {
        path: ':userId',
        component: UserDetailComponent,
        data: {
          userRoles: ['admin', 'superAdmin']
        }
      },
      {
        path: ':userId/edit',
        component: UserFormComponent,
        canDeactivate: [CanDeactiveGuard],
        data: {
          userRoles: ['admin', 'superAdmin']
        }
      },
    ]
  },

  {
    path: 'Page-Not-Found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'Page-Not-Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
