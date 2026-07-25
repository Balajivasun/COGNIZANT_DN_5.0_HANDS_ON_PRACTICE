import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

// Comment: Component-level providers create a new service instance scoped to this component hierarchy
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  providers: [NotificationService],
  template: `
    <div class="notify">
      Scoped Notification Instance ID: {{ notificationService.getNotificationId() }}
    </div>
  `,
  styles: [`
    .notify { background: #fef9e7; border: 1px solid #f1c40f; padding: 10px; border-radius: 4px; margin: 10px 0; }
  `]
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}
}
