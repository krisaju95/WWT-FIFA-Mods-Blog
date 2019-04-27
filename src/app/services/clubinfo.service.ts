import { Injectable } from '@angular/core';

const epl: string = 'Premier League';
const laliga: string = 'La Liga Santander';
const ligue1: string = 'Ligue 1 Conforama';
const seriaA: string = 'Serie A TIM';
const seriaB: string = 'Serie A';
const bundesliga: string = 'Bundesliga';
const superlig: string = 'Süper Lig';
const eredivisie: string = 'Eredivisie';
const aLeague: string = 'Australian Hyundai A-League';
const mexicanLiga: string = 'Mexican Liga MX';
const saudiLeague: string = 'Saudi Abdul L. Jameel League';
const chileanLeague: string = 'Chilian Campeonato Nacional';
const eflchampionship: string = 'EFL Championship';
const ligaNOS: string = 'Liga NOS';
const bundesliga2: string = '2. Bundesliga';
const laligasegunda: string = 'Liga Segunda';
const colombialiga: string = 'Colombia Liga Aguila';

@Injectable()
export class ClubInfoService {

	clubList: object = {
		"epl": {
			name: epl + " (England)",
			country: "England",
			countryCode: "ENG",
			clubs: {
				"arsenal": {
					name: "Arsenal F.C.",
					league: epl,
					country: "England"
				},
				"bournemouth": {
					name: "A.F.C. Bournemouth",
					league: epl,
					country: "England"
				},
				"brighton": {
					name: "Brighton & Hove Albion F.C.",
					league: epl,
					country: "England"
				},
				"burnley": {
					name: "Burnley F.C.",
					league: epl,
					country: "England"
				},
				"cardiff": {
					name: "Cardiff City F.C.",
					league: epl,
					country: "England"
				},
				"chelsea": {
					name: "Chelsea F.C.",
					league: epl,
					country: "England"
				},
				"crystalpalace": {
					name: "Crystal Palace F.C.",
					league: epl,
					country: "England"
				},
				"everton": {
					name: "Everton F.C.",
					league: epl,
					country: "England"
				},
				"fulham": {
					name: "Fulham F.C.",
					league: epl,
					country: "England"
				},
				"huddersfield": {
					name: "Huddersfield Town F.C.",
					league: epl,
					country: "England"
				},
				"leicester": {
					name: "Leicester City F.C.",
					league: epl,
					country: "England"
				},
				"liverpool": {
					name: "Liverpool F.C.",
					league: epl,
					country: "England"
				},
				"mancity": {
					name: "Manchester City F.C.",
					league: epl,
					country: "England"
				},
				"manutd": {
					name: "Manchester United F.C.",
					league: epl,
					country: "England"
				},
				"newcastle": {
					name: "Newcastle United F.C.",
					league: epl,
					country: "England"
				},
				"southampton": {
					name: "Southampton F.C.",
					league: epl,
					country: "England"
				},
				"tottenham": {
					name: "Tottenham Hotspur F.C.",
					league: epl,
					country: "England"
				},
				"watford": {
					name: "Watford F.C.",
					league: epl,
					country: "England"
				},
				"westham": {
					name: "West Ham United F.C.",
					league: epl,
					country: "England"
				},
				"wolves": {
					name: "Wolverhampton Wanderers F.C.",
					league: epl,
					country: "England"
				}
			}
		},
		"laliga": {
			name: laliga + " (Spain)",
			country: "Spain",
			countryCode: "ESP",
			clubs: {
				"alaves": {
					name: "Deportivo Alavés, S.A.D.",
					league: laliga,
					country: "Spain"
				},
				"athletic": {
					name: "Athletic Club de Bilbao",
					league: laliga,
					country: "Spain"
				},
				"atletico": {
					name: "Club Atlético de Madrid",
					league: laliga,
					country: "Spain"
				},
				"barcelona": {
					name: "Barcelona C.F.",
					league: laliga,
					country: "Spain"
				},
				"celta": {
					name: "Real Club Celta de Vigo",
					league: laliga,
					country: "Spain"
				},
				"eibar": {
					name: "Sociedad Deportiva Eibar",
					league: laliga,
					country: "Spain"
				},
				"espanyol": {
					name: "Real Club Espanyol",
					league: laliga,
					country: "Spain"
				},
				"getafe": {
					name: "Getafe C.F.",
					league: laliga,
					country: "Spain"
				},
				"girona": {
					name: "Girona C.F.",
					league: laliga,
					country: "Spain"
				},
				"huesca": {
					name: "Sociedad Deportiva Huesca",
					league: laliga,
					country: "Spain"
				},
				"leganes": {
					name: "Club Deportivo Leganés",
					league: laliga,
					country: "Spain"
				},
				"levante": {
					name: "Levante Unión Deportiva",
					league: laliga,
					country: "Spain"
				},
				"rayo": {
					name: "Rayo Vallecano",
					league: laliga,
					country: "Spain"
				},
				"realbetis": {
					name: "Real Betis Balompié",
					league: laliga,
					country: "Spain"
				},
				"realmadrid": {
					name: "Real Madrid C.F.",
					league: laliga,
					country: "Spain"
				},
				"realsociedad": {
					name: "Real Sociedad de Fútbol",
					league: laliga,
					country: "Spain"
				},
				"sevilla": {
					name: "Sevilla F.C.",
					league: laliga,
					country: "Spain"
				},
				"valencia": {
					name: "Valencia C.F.",
					league: laliga,
					country: "Spain"
				},
				"realvalladolid": {
					name: "Real Valladolid C.F.",
					league: laliga,
					country: "Spain"
				},
				"villarreal": {
					name: "Villarreal C.F.",
					league: laliga,
					country: "Spain"
				}
			}
		},
		"ligue1": {
			name: ligue1 + " (France)",
			country: "France",
			countryCode: "FRA",
			clubs: {
				"amiens": {
					name: "Amiens S.C.",
					league: ligue1,
					country: "France"
				},
				"angers": {
					name: "Angers S.C.",
					league: ligue1,
					country: "France"
				},
				"bordeaux": {
					name: "F.C. Bordeaux",
					league: ligue1,
					country: "France"
				},
				"caen": {
					name: "S.M. Caen",
					league: ligue1,
					country: "France"
				},
				"dijon": {
					name: "Dijon F.C.",
					league: ligue1,
					country: "France"
				},
				"guingamp": {
					name: "E.A. Guingamp",
					league: ligue1,
					country: "France"
				},
				"lille": {
					name: "L.O.S.C. Lille",
					league: ligue1,
					country: "France"
				},
				"lyon": {
					name: "Olympique Lyonnais",
					league: ligue1,
					country: "France"
				},
				"marseille": {
					name: "Olympique de Marseille",
					league: ligue1,
					country: "France"
				},
				"monaco": {
					name: "A.S. Monaco",
					league: ligue1,
					country: "France"
				},
				"montpellier": {
					name: "Montpellier H.S.C.",
					league: ligue1,
					country: "France"
				},
				"nantes": {
					name: "F.C. Nantes",
					league: ligue1,
					country: "France"
				},
				"nice": {
					name: "O.G.C. Nice",
					league: ligue1,
					country: "France"
				},
				"nimes": {
					name: "Nîmes Olympique",
					league: ligue1,
					country: "France"
				},
				"psg": {
					name: "Paris Saint-Germain F.C.",
					league: ligue1,
					country: "France"
				},
				"reims": {
					name: "Stade de Reims",
					league: ligue1,
					country: "France"
				},
				"rennes": {
					name: "Stade Rennais F.C.",
					league: ligue1,
					country: "France"
				},
				"saintetienne": {
					name: "A.S. Saint-Étienne",
					league: ligue1,
					country: "France"
				},
				"strasbourg": {
					name: "R.C. Strasbourg",
					league: ligue1,
					country: "France"
				},
				"toulouse": {
					name: "Toulouse F.C.",
					league: ligue1,
					country: "France"
				}
			}
		},
		"seriaA": {
			name: seriaA + " (Italy)",
			country: "Italy",
			countryCode: "ITA",
			clubs: {
				"atalanta": {
					name: "Atalanta B.C.",
					league: seriaA,
					country: "Italy"
				},
				"bologna": {
					name: "Bologna F.C.",
					league: seriaA,
					country: "Italy"
				},
				"cagliari": {
					name: "Cagliari Calcio",
					league: seriaA,
					country: "Italy"
				},
				"chievo": {
					name: "A.C. Chievo Verona",
					league: seriaA,
					country: "Italy"
				},
				"empoli": {
					name: "Empoli F.C.",
					league: seriaA,
					country: "Italy"
				},
				"fiorentina": {
					name: "A.C.F. Fiorentina",
					league: seriaA,
					country: "Italy"
				},
				"frosinone": {
					name: "Frosinone Calcio",
					league: seriaA,
					country: "Italy"
				},
				"genoa": {
					name: "Genoa F.C.",
					league: seriaA,
					country: "Italy"
				},
				"inter": {
					name: "F.C. Internazionale Milano",
					league: seriaA,
					country: "Italy"
				},
				"juventus": {
					name: "Juventus F.C.",
					league: seriaA,
					country: "Italy"
				},
				"lazio": {
					name: "S.S. Lazio",
					league: seriaA,
					country: "Italy"
				},
				"milan": {
					name: "A.C. Milan",
					league: seriaA,
					country: "Italy"
				},
				"napoli": {
					name: "S.S.C. Napoli",
					league: seriaA,
					country: "Italy"
				},
				"parma": {
					name: "Parma Calcio",
					league: seriaA,
					country: "Italy"
				},
				"roma": {
					name: "A.S. Roma",
					league: seriaA,
					country: "Italy"
				},
				"sampdoria": {
					name: "U.C. Sampdoria",
					league: seriaA,
					country: "Italy"
				},
				"sassuolo": {
					name: "U.S. Sassuolo",
					league: seriaA,
					country: "Italy"
				},
				"spal": {
					name: "S.P.A.L.",
					league: seriaA,
					country: "Italy"
				},
				"torino": {
					name: "Torino F.C.",
					league: seriaA,
					country: "Italy"
				},
				"udinese": {
					name: "Udinese Calcio",
					league: seriaA,
					country: "Italy"
				}
			}
		},
		"seriaB": {
			name: seriaB + " (Italy)",
			country: "Italy",
			countryCode: "ITA",
			clubs: {
				"benevento": {
					name: "Benevento",
					league: seriaB,
					country: "Italy"
				},
				"salernitana": {
					name: "Salernitana",
					league: seriaB,
					country: "Italy"
				}
			}
		},
		"bundesliga": {
			name: bundesliga + " (Germany)",
			country: "Germany",
			countryCode: "GER",
			clubs: {
				"dortmund": {
					name: "Borussia Dortmund",
					league: bundesliga,
					country: "Germany"
				},
				"fcaugsburg": {
					name: "F.C. Augsburg",
					league: bundesliga,
					country: "Germany"
				},
				"fcbayern": {
					name: "F.C. Bayern München",
					league: bundesliga,
					country: "Germany"
				},
				"rbleipzig": {
					name: "R.B. Leipzig",
					league: bundesliga,
					country: "Germany"
				}
			}
		},
		"superlig": {
			name: superlig + " (Turkey)",
			country: "Turkey",
			countryCode: "TUR",
			clubs: {
				"besiktas": {
					name: "Beşiktaş J.K.",
					league: superlig,
					country: "Turkey"
				}
			}
		},
		"eredivisie": {
			name: eredivisie + " (Netherlands)",
			country: "Netherlands",
			countryCode: "NLD",
			clubs: {
				"ajax": {
					name: "Ajax Amsterdam",
					league: eredivisie,
					country: "Netherlands"
				},
				"vitesse": {
					name: "Vitesse",
					league: eredivisie,
					country: "Netherlands"
				}
			}
		},
		"a-league": {
			name: aLeague + " (Australia)",
			country: "Australia",
			countryCode: "AUS",
			clubs: {
				"wellington": {
					name: "Wellington Phoenix",
					league: aLeague,
					country: "Australia"
				}
			}
		},
		"mexicanLiga": {
			name: mexicanLiga + " (Mexico)",
			country: "Mexico",
			countryCode: "MEX",
			clubs: {
				"clubleon": {
					name: "Club León",
					league: mexicanLiga,
					country: "Mexico"
				},
				"monterrey": {
					name: "Monterrey",
					league: mexicanLiga,
					country: "Mexico"
				},
				"pachuca": {
					name: "Pachuca",
					league: mexicanLiga,
					country: "Mexico"
				}
			}
		},
		"saudiLeague": {
			name: saudiLeague + " (Saudi Arabia)",
			country: "Saudi Arabia",
			countryCode: "SAU",
			clubs: {
				"alnassr": {
					name: "Al-Nassr",
					league: saudiLeague,
					country: "Saudi Arabia"
				}
			}
		},
		"chileanLeague": {
			name: chileanLeague + " (Chile)",
			country: "Chile",
			countryCode: "CHI",
			clubs: {
				"cdeverton": {
					name: "CD Everton de Viña del Mar",
					league: chileanLeague,
					country: "Chile"
				}
			}
		},
		"restOfWorld": {
			name: "Rest Of World",
			country: "Rest Of World",
			countryCode: "ROW",
			clubs: {
				"paok": {
					name: "PAOK",
					league: "Rest Of World",
					country: "Rest Of World"
				}
			}
		},
		"eflchampionship": {
			name: eflchampionship + '(England)',
			country: "England",
			countryCode: "ENG",
			clubs: {
				"derby": {
					name: "Derby County F.C.",
					league: eflchampionship,
					country: "England"
				},
				"westbrom": {
					name: "West Bromwich Albion F.C.",
					league: eflchampionship,
					country: "England"
				}
			}
		},
		"ligaNOS": {
			name: ligaNOS + '(Portugal)',
			country: "Portugal",
			countryCode: "POR",
			clubs: {
				"benfica": {
					name: "S.L. Benfica",
					league: ligaNOS,
					country: "Portugal"
				}
			}
		},
		"bundesliga2": {
			name: bundesliga2 + '(Germany)',
			country: "Germany",
			countryCode: "GER",
			clubs: {
				"bochum": {
					name: "V.F.L. Bochum",
					league: bundesliga2,
					country: "Germany"
				}
			}
		},
		"laligasegunda": {
			name: laligasegunda + '(Spain)',
			country: "Spain",
			countryCode: "ESP",
			clubs: {
				"cadiz": {
					name: "Cádiz F.C.",
					league: laligasegunda,
					country: "Spain"
				}
			}
		},
		"colombialiga": {
			name: colombialiga + '(Colombia)',
			country: "Colombia",
			countryCode: "COL",
			clubs: {
				"independientemedellin": {
					name: "Independiente Medellín",
					league: colombialiga,
					country: "Colombia"
				}
			}
		}
	}

	getClubList(): object {
		return this.clubList;
	}

	getLeagueInfo(leagueName: string): object {
		return this.clubList[leagueName];
	}

	getLeagueListKeys(): Array<string> {
		return Object.keys(this.clubList);
	}

	getClubInfo(leagueName: string, clubName: string): object {
		return ((this.getLeagueInfo(leagueName) || {})['clubs'] || {})[clubName];
	}

	getClubListKeys(leagueName: string): Array<string> {
		return Object.keys((this.clubList[leagueName] || {})['clubs']);
	}
}