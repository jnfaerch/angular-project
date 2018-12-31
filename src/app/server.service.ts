import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://ng-http-assignment.firebaseio.com/data.json',
        //     servers,
        //     {headers: headers});
        return this.http.put('https://ng-http-assignment.firebaseio.com/data.json',
            servers,
            {headers: headers});
    }

    getServers() {
        return this.http.get('https://ng-http-assignment.firebaseio.com/data.json')
            .pipe(map(
                (response: any) => {
                    const data = response.json();
                    for (const server of data) {
                        console.log(server.name.substr(0, 8));
                        if (server.name.substr(0, 8) !== 'FETCHED_') {
                            server.name = 'FETCHED_' + server.name;
                        }
                    }
                    return data;
                }
            ));
    }
}
