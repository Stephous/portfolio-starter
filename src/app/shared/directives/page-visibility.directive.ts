import { Directive, Input } from '@angular/core';

/**
 * Directive pour rendre un élément visible/invisible dynamiquement
 */
@Directive({
  selector: '[appPageVisibility]',
  standalone: true
})
export class PageVisibilityDirective {
  @Input() set appPageVisibility(condition: boolean) {
    if (condition) {
      this.element.style.display = 'flex';
    } else {
      this.element.style.display = 'none';
    }
  }

  private get element(): HTMLElement | null {
    return document.body.querySelector('[app-sidebar-root]')?.closest('[routeroutlet]') || document.body.querySelector('[app-sidebar-root]');
  }

  @Input() set routerOutlet(outlet: any) {
    if (outlet.active) {
      const sidebar = document.querySelector('[app-sidebar-root]');
      if (sidebar) {
        sidebar.style.display = 'block';
      }
    }
  }
}
