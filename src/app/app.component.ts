import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';

@Component({
    selector: 'app-root',    
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false,
    // imports: [HeaderComponent, UserComponent, TasksComponent]
    // when switching to not standalone mode, the imports are not needed
    // because the components are already imported in the app.module.ts
    // and are available in the app.component.ts    
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
