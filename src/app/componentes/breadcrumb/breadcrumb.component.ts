import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { IBreadCrumb } from './breadcrumb.interface';
import { filter, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: IBreadCrumb[]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  }

  ngOnInit() {
    // ... implementation of ngOnInit
  }

  /**
   * Recursively build breadcrumb according to activated route.
   * @param route
   * @param url
   * @param breadcrumbs
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumb[] = []): IBreadCrumb[] {
    // ... implementation of buildBreadCrumb
  }
}