import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HomePageModule } from './home/app.module';
import { BlogPageModule } from './blog/app.module';

import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component'

@NgModule({
	declarations: [
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		HomePageModule,
		BlogPageModule
	],
	providers: [],
	exports: [
		HomePageModule,
		BlogPageModule
	]
})

export class AppBodyModule { }