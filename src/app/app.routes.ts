import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {'path': 'home', 'title' : 'Home', component:HomeComponent},
    {'path': 'about', 'title': 'About', component:AboutComponent},
    {'path': 'contact', 'title': 'Contact', component:ContactComponent},
    {'path': '', redirectTo: '/home', pathMatch: 'full'},
    {'path': '**', component: PagenotfoundComponent},
    {'path': 'blog', 'title': 'Blog', component:BlogComponent}

];
