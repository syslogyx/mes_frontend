import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  public config: PerfectScrollbarConfigInterface = {};
  // This is for Notifications
  notifications: Object[] = [
    {
      round: 'notifications',
      icon: 'ti-bell',
      title: 'New HR Coil Planned',
      subject: 'KUND038K',
      time: '30/07/2019 9:30 AM'
    },
    {
      round: 'notifications',
      icon: 'ti-bell',
      title: 'Its time to change shear',
      subject: 'KUND038K',
      time: '30/07/2019 9:30 AM'
    },
    {
      round: 'notifications',
      icon: 'ti-bell',
      title: 'Campaign Changed',
      subject: 'KUND038K',
      time: '30/07/2019 9:30 AM'
    },
    {
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Launch Admin',
      subject: 'Just see the my new admin!',
      time: '30/07/2019 9:30 AM'
    },
    {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '30/07/2019 9:10 AM'
    },
    {
      round: 'round-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '30/07/2019 9:08 AM'
    },
    {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '30/07/2019 9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/website/profile_thumbnail.png',
      status: 'online',
      from: 'CPL',
      subject: 'CPL is under maintenance',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/website/profile_thumbnail.png',
      status: 'busy',
      from: 'CPL',
      subject: 'CPL is under maintenance',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/website/profile_thumbnail.png',
      status: 'busy',
      from: 'CPL',
      subject: 'CPL is under maintenance',
      time: '9:30 AM'
    }
  ];
}
