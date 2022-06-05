import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Futurama Characters';

constructor(updates: SwUpdate) {
    updates.versionUpdates.subscribe(evt => {
      switch (evt.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version: ${evt.version.hash}`);
          break;
        case 'VERSION_READY':
          console.log(`Current app version: ${evt.currentVersion.hash}`);
          console.log(`New app version ready for use: ${evt.latestVersion.hash}`);
          break;
        case 'VERSION_INSTALLATION_FAILED':
          console.log(`Failed to install app version '${evt.version.hash}': ${evt.error}`);
          break;
      }
    });
  }

//  constructor( private swUpdate: SwUpdate) {}

// ngOnInit() {
//       if (this.swUpdate.isEnabled) {
//         this.swUpdate.available.subscribe(() => {
//           if(confirm("You're using an old version of the control panel. Want to update?")) {
//             window.location.reload();
//           }
//         });
//       }
//     }


}

