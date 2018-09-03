import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'site-ad-placeholder',
	templateUrl: './ad.placeholder.html',
	styleUrls: ['./ad.placeholder.scss']
})

export class AdPlaceholderComponent {

	constructor(
		private http: HttpClient
	) { }

	@Input() adZone: number;
	@Input() theme: string;
	@Input() removeMargins: boolean;

	adBlockerUsed: boolean = false;

	adZoneMap: Object = {
		1: "1443",
		2: "1472",
		3: "3092"
	}

	ngAfterViewInit() {
		this.loadAd()
			.then(() => {
				//
			})
			.catch(() => {
				this.adBlockerUsed = true;
			});
	}

	loadAd(): Promise<any> {
		let scriptPromise = new Promise((resolve, reject) => {
			let script = document.createElement('script');
			let randpubc = Math.floor((Math.random() * 100000) + 1);
			script.onload = resolve;
			script.onerror = reject;
			script.async = true;
			script.src = '//cdn.adclerks.com/core/ad2/10179/' + this.adZoneMap[this.adZone] + '?r=' + randpubc;

			try {
				document.body.appendChild(script);
			}
			catch(e) {
				this.adBlockerUsed = true;
			}
		});
		return scriptPromise;
	};
}