import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Region } from '../models/region';

export class RegionData implements InMemoryDbService {
    createDb() {
        const regions: Region[] = [
            {
               name:'Europe'
            },
            {
              name:"Asia"
            }
        ];
        return {regions };
    }
}