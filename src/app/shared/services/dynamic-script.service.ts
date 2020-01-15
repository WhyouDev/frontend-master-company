import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'DataTablesJpa',                src: `${environment.assets_url}assets/plugins/jquery/jquery.min.js`},
  { name: 'DataTables',                   src: `${environment.assets_url}assets/backend/plugins/data-tables/jquery.datatables.min.js` },
  { name:'Bootstrap',                src:`${environment.assets_url}assets/backend/lib/bootstrap/js/bootstrap.min.js`},
  { name:'DcJqaccordion',                src:`${environment.assets_url}assets/Backend/lib/jquery.dcjqaccordion.2.7.js`},
  { name:'ScrollTo',                src:`${environment.assets_url}assets/Backend/lib/jquery.scrollTo.min.js`},
  { name:'NiceScroll',                src:`${environment.assets_url}assets/Backend/lib/jquery.nicescroll.js`},
  { name:'Sparkline',                src:`${environment.assets_url}assets/Backend/lib/jquery.sparkline.js`},
  { name:'Gritter',                src:`${environment.assets_url}assets/Backend/lib/gritter/js/jquery.gritter.js`},
  { name:'Common',                src:`${environment.assets_url}assets/Backend/lib/common-scripts.js`},
  { name:'Sparkline',                src:`${environment.assets_url}assets/Backend/lib/sparkline-chart.jslib/sparkline-chart.js`},
  { name:'Zabuto',                src:`${environment.assets_url}assets/Backend/lib/zabuto_calendar.js`},
  { name:'ChartMaster',                src:`${environment.assets_url}assets/Backend/lib/chart-master/Chart.js`}

];

 
declare var document: any;

@Injectable()

export class DynamicScriptLoaderService {

  private scripts: any = {};

  constructor() {

    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.        src
      };
    });
   }
   load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.       src = this.scripts[name].       src;
        if (script.readyState) {  //IE
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  //Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

  
}
