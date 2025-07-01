import { Routes } from '@angular/router';
import { MyProfil } from './my-profil/my-profil';
import { Onboarding } from './onboarding/onboarding';
import { Keyboard } from './keyboard/keyboard';
import { PhoneNumber } from './phone-number/phone-number';
import { Icons } from './icons/icons';
import { Contacts } from './contacts/contacts';

export const routes: Routes = [
    {path: 'my-profil', component: MyProfil},
    {path: '', component:Onboarding },
    {path: 'keyboard', component:Keyboard },
    {path: 'phone-number', component:PhoneNumber},
    {path: 'icons', component:Icons},
    {path: 'contacts', component:Contacts},
];
