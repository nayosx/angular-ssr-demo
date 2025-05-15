import { Routes } from '@angular/router';
import { Page2Component } from './pages/page2/page2.component';
import { Page1Component } from './pages/page1/page1.component';

export const routes: Routes = [
    {
        path: 'page1',
        component: Page1Component
    },
    {
        path: 'page2',
        component: Page2Component
    },
];
