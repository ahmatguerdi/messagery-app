import { Routes } from '@angular/router';
import { MyProfil } from './my-profil/my-profil';
import { Onboarding } from './onboarding/onboarding';
import { Keyboard } from './keyboard/keyboard';
import { PhoneNumber } from './phone-number/phone-number';
import { Icons } from './icons/icons';
<<<<<<< HEAD
import { Contacts } from './contacts/contacts';
=======
import { Stupename } from './stupename/stupename';
import { Message } from './message/message';
>>>>>>> 5c6f4e6 (initial commit)

export const routes: Routes = [
    {path: 'my-profil', component: MyProfil},
    {path: '', component:Onboarding },
    {path: 'keyboard', component:Keyboard },
    {path: 'phone-number', component:PhoneNumber},
    {path: 'icons', component:Icons},
<<<<<<< HEAD
    {path: 'contacts', component:Contacts},
=======
    {path: 'stupename', component:Stupename},
    {path: 'message', component:Message},
>>>>>>> 5c6f4e6 (initial commit)
];
