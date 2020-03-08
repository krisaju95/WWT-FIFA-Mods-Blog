import { Component } from '@angular/core';
import { IconDefinition, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { WALoaderService } from '../../services/loader/wa-loader.service';
import { WARootScope } from '../../services/globals/wa-rootscope';
import { WAFeatureSwitches } from '../../constants/wa-feature-switches';

@Component({
    selector: 'ufm-wa-header',
    templateUrl: './wa-header.component.html',
    styleUrls: ['./wa-header.component.scss']
})

export class WAHeaderComponent {

    WAFeatureSwitches: any = WAFeatureSwitches;

    faSearch: IconDefinition = faSearch;

    faBars: IconDefinition = faBars;

    faTimes: IconDefinition = faTimes;

    loading: boolean = true;

    navbarOpened: boolean = false;

    constructor(
        private WALoaderService: WALoaderService,
        public WARootScope: WARootScope
    ) { }

    ngOnInit() {
        this.WALoaderService.pageLoadingStateChange.subscribe((state) => {
            const waitTime: number = state ? 0 : 1500;
            setTimeout(() => this.loading = state, waitTime);
        });
    }

    toggleNavbar(): void {
        this.navbarOpened = !this.navbarOpened;
    }

    routeToPage(): void {
        this.navbarOpened = false;
        this.WALoaderService.togglePageLoadingState(true);
    }
}