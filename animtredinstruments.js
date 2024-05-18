"use strict";
/*
YTPMV Cartoon Instruments v1.2

the YTPMV Cartoon Sounds My Little Pony & Peppa Pig
program used: Adobe Premiere & Adobe Audition & Audio Editor & Bandican & OBS Studio & Scratch 3 & Visual Studo Code & Sublime 3 & Sublime 4

soundbank size 10MB

Made in Peru

(c) 2024, THandPEPeerTDP
*/
var AnimTredInstruments = (function() {
	var DRUM_INFO = {
		"snare drum": {name: "SnareDrum"},
		"crash cymbal": {name: "Crash"},
		"low floor tom": {name: "Tom_C1"},
		"high floor tom": {name: "Tom_C2"},
		"low tom": {name: "Tom_C3"},
		"low mid tom": {name: "Tom_C4"},
		"hi mid tom": {name: "Tom_C5"},
		"high tom": {name: "Tom_C6"},
		"claves_1": {name: "Unknown_0"},
		"bongo": {name: "Bongo_low"},
		"long guiro": {name: "Guiro_long"},
		"short guiro": {name: "Guiro_short"},
		"hi bongo": {name: "Bongo_hi"},
		"cuica": {name: "Cuica"},
		"low cuica": {name: "Cuica_low"},
		"hand": {name: "HandClap"},
		"tambourine": {name: "Tambourine"},
		"open hi hat": {name: "OpenHat"},
		"closed hi hat": {name: "ClosedHat"},
		"vibraslap": {name: "Vibraslap"},
		"claves": {name: "Claves"},
		"acoustic bass drum": {name: "AcousticBassDrum"},
		"open conga": {name: "OpenConga"},
		"mute conga": {name: "MuteConga"},
		"wood": {name: "HiWoodBlock"},
		"low wood": {name: "LowWoodBlock"},
		"timbale high": {name: "Timbale_High"},
		"timbale low": {name: "Timbale_Low"},
		"triangle": {name: "Triangle"},
		"mute triangle": {name: "MuteTriangle"},
		"long whistle": {name: "LongWhistle"},
		"short whistle": {name: "ShortWhistle"},
		"high agogo": {name: "HighAgogo"},
		"low agogo": {name: "LowAgogo"},
		"conga": {name: "Conga"},
		"cabasa": {name: "Cabasa"},
		"cowbell": {name: "Cowbell"},
		"side stick": {name: "SideStick"},
	}
	var INSTRUMENT_INFO = {
		"piano": [
			{top: 60, name: "Piano_C3", releaseTime: 0.1},
			{top: 84, name: "Piano_C5", releaseTime: 0.1},
		],
		"electric guitar": [{top: 60, name: "ElectricGuitar", releaseTime: 0.1}],
		"overdriven guitar": [{top: 60, name: "OverdrivenGuitar", loop: true, loopStart: 0.5, loopEnd: 0.91136}],
		"sitar": [{top: 60, name: "Sitar", releaseTime: 0.8}],
		"melodic tom": [{top: 60, name: "MelodicTom", releaseTime: 0.1 }],
		"synth drum": [{top: 60, name: "SynthDrum", releaseTime: 0.25}],
		"taiko drum": [{top: 60, name: "TaikoDrum", releaseTime: 0.25}],
		"warm": [
			{top: 60, name: "Warm_C3", loop: true, loopStart: 2.5, loopEnd: 5, releaseTime: 0.25},
			{top: 72, name: "Warm_C4", loop: true, loopStart: 1.7, loopEnd: 2.5, releaseTime: 0.25},
		],
		"bowed": [
			{top: 60, name: "Bowed_C3", loop: true, loopStart: 2.5, loopEnd: 5, releaseTime: 0.25},
			{top: 72, name: "Bowed_C4", loop: true, loopStart: 1.7, loopEnd: 2.5, releaseTime: 0.25},
		],
		"guitar": [{top: 60, name: "Guitar", releaseTime: 0.1}],
		"bass": [
			{top: 36, name: "Bass_C2", releaseTime: 0.1},
			{top: 48, name: "Bass_C3", releaseTime: 0.1}
		],
		"electric piano": [{top: 60, name: "ElectricPiano", releaseTime: 0.1}],
		"church organ": [{top: 60, name: "ChurchOrgan", loop: true, loopStart: 0.1, loopEnd: 0.59300, releaseTime: 0.1}],
		"bassoon": [
			{top: 36, name: "Bassoon_C1", loop: true, loopStart: 0.084, loopEnd: 0.160},
			{top: 48, name: "Bassoon_C2", loop: true, loopStart: 0.080, loopEnd: 0.325},
			{top: 60, name: "Bassoon_C3", loop: true, loopStart: 0.067, loopEnd: 0.339},
		],
		"organ": [{top: 60, name: "Organ", loop: true, loopStart: 2.14, loopEnd: 3.12, releaseTime: 0.1 }],
		"harmonica": [{top: 60, name: "Harmonica", loop: true, loopStart: 0.22208, loopEnd: 0.24501}],
		"clarinet": [{top: 60, name: "Clarinet", loop: true, loopStart: 0.52, loopEnd: 0.77}],
		"violin": [{top: 60, name: "Violin", releaseTime: 0.2, loop: true, loopStart: 1.26, loopEnd: 2}],
		"cello": [
			{top: 60, name: "Cello_C3", releaseTime: 0.2, loop: true, loopStart: 1.26, loopEnd: 2},
			{top: 72, name: "Cello_C4", releaseTime: 0.2, loop: true, loopStart: 1.26, loopEnd: 2}
		],
		"tremolo-string-1": [{top: 60, name: "TremoloString1", releaseTime: 0.2, loop: true, loopStart: 1.26, loopEnd: 2}],
		"tremolo-string-2": [{top: 60, name: "TremoloString2", releaseTime: 0.2, loop: true, loopStart: 1.26, loopEnd: 2}],
		"metallic": [{top: 60, name: "Metallic", releaseTime: 0.5}],
		"timpani": [{top: 60, name: "Timpani", releaseTime: 0.25}],
		"accordion": [{top: 60, name: "Accordion", loop: true, loopStart: 0.22950, loopEnd: 0.23333}],
		"synth pad": [{top: 60, name: "SynthPad", loop: true, loopStart: 1.55, loopEnd: 2, releaseTime: 0.1}],
		"whistle": [{top: 60, name: "Whistle", loop: true, loopStart: 1.13851, loopEnd: 1.35201}],
		"reverse cymbal": [{top: 60, name: "ReverseCymbal"}],
		"saxophone": [{top: 60, name: "Saxophone", loop: true, loopStart: 0.44307, loopEnd: 1.92369}],
		"flute": [{top: 60, name: "Flute", loop: true, loopStart: 1.85452, loopEnd: 4.09411}],
		"steel drum": [{top: 60, name: "SteelDrum", releaseTime: 0.25}],
		"pizzicato": [{top: 60, name: "Pizzicato", releaseTime: 0.25}],
		"wooden flute": [{top: 60, name: "WoodenFlute", loop: true, loopStart: 1.16056, loopEnd: 1.20290}],
		"agogo": [{top: 60, name: "Agogo"}],
		"choir": [
			{top: 60, name: "Choir", loop: true, releaseTime: 0.1, loopStart: 0.386, loopEnd: 0.654}
		],
		"synth lead": [
			{top: 48, name: "SynthLead_C2", loop: true, loopStart: 0.1, loopEnd: 1.5, releaseTime: 0.1},
			{top: 60, name: "SynthLead_C3", loop: true, loopStart: 0.1, loopEnd: 1.5, releaseTime: 0.1},
			{top: 72, name: "SynthLead_C4", loop: true, loopStart: 0.1, loopEnd: 1.5, releaseTime: 0.1},
			{top: 84, name: "SynthLead_C5", loop: true, loopStart: 0.1, loopEnd: 1.5, releaseTime: 0.1},
		],
		"vibraphone": [{top: 60, name: "Vibraphone", releaseTime: 0.1}],
		"music box": [{top: 60, name: "MusicBox", releaseTime: 0.25}],
		"marimba": [
			{top: 60, name: "Marimba_C3", releaseTime: 0.1},
			{top: 84, name: "Marimba_C5", releaseTime: 0.1},
		],
		"orchestra hit": [{top: 60, name: "OrchestraHit", releaseTime: 0.25}],
		"trumpet": [{top: 60, name: "Trumpet", loop: true, loopStart: 1.60053, loopEnd: 1.63500}],
		"trumbone": [{top: 60, name: "Trumbone", loop: true, loopStart: 0.236, loopEnd: 0.278}],
	}
	var SOUNDBANK_FILES = {
		// My little pony friendship is magic season 1 episode 18 _The Show Stoppers
		// https://youtube.com/watch?v=qVTGbB7i8iw
		// 11:27
		"Piano_C3": "instruments/mlp-s1-89-C3.wav",
		"Piano_C5": "instruments/mlp-s1-89-C5.wav",

		// My Little Pony _ Friendship is Magic Season 1 Episode 17
		// https://youtube.com/watch?v=YppmFQboQ-s
		// 13:02
		"Marimba_C3": "instruments/mlp-s1-fim-30_C3.wav",
		"Marimba_C5": "instruments/mlp-s1-fim-30_C5.wav",

		// My Little Pony Friendship Is Magic Season 7 Episode 9
		// https://youtube.com/watch?v=ttQuB6IJcek
		"OverdrivenGuitar": "instruments/mlp-24-1.wav",
		"ElectricGuitar": "instruments/mlp-s7e9-e-guitar.wav",

		// Daddy Pig Plays The Drums!  | @Peppa Pig - Official Channel
		// https://youtu.be/aHEhixFSt-0
		"TaikoDrum": "instruments/peppa-pig-drums-53.wav",
		"Guiro_long": "drums/peppa-pig-drums-63-0.wav",
		"Guiro_short": "drums/peppa-pig-drums-63-1.wav",
		"Unknown_0": "drums/peppa-pig-drums-107.wav",
		"Bongo_low": "drums/peppa-pig-drums-30-0.wav",
		"Bongo_hi": "drums/peppa-pig-drums-30-1.wav",
		"Tambourine": "drums/peppa-pig-drums-51.wav",

		// My Little Pony Season 5 Episode 9
		// https://youtube.com/watch?v=lzpUO8-Xowk
		"Warm_C3": "instruments/mlp-fim-s5e9-750-1-C3.wav",
		"Warm_C4": "instruments/mlp-fim-s5e9-750-1-C4.wav",
		"Bowed_C3": "instruments/mlp-fim-s5e9-750-2-C3.wav",
		"Bowed_C4": "instruments/mlp-fim-s5e9-750-2-C4.wav",
		"MelodicTom": "instruments/mlp-s5e9-471-1.wav",
		"SynthDrum": "instruments/mlp-s5e9-471-2.wav",
		"Tom_C1": "drums/mlp-fim-s5e9-471-1.wav",
		"Tom_C2": "drums/mlp-fim-s5e9-471-2.wav",
		"Tom_C3": "drums/mlp-fim-s5e9-471-3.wav",
		"Tom_C4": "drums/mlp-fim-s5e9-471-4.wav",
		"Tom_C5": "drums/mlp-fim-s5e9-471-5.wav",
		"Tom_C6": "drums/mlp-fim-s5e9-471-6.wav",

		// Pinkie the Babysitter (Baby Cakes) | MLP: FiM [HD]
		// https://youtu.be/TJ6w9LRH7ts
		"SnareDrum": "drums/pinkie-pie-60.wav",
		"Crash": "drums/pinkie-pie-61.wav",

		// Friendship is Randomly Musical 8
		// https://youtu.be/JQtbvAmwYVI
		"Cuica": "drums/derpy-67-0.wav",
		"Cuica_low": "drums/derpy-67-1.wav",

		// When I'm Sweeping
		// https://youtu.be/u9l9F2H1yn0
		"HandClap": "drums/rainbowdash-applejack-handclap.wav",

		// Friendship is Musical Season 2 First Half
		// https://youtu.be/yqYQoVwFn4E?t=143
		"Bass_C2": "instruments/daisy-143-C1.wav",
		"Bass_C3": "instruments/daisy-143-C2.wav",

		// Bright Mac and Pear Butter's Love Story (The Perfect Pear) | MLP: FiM [HD]
		// https://youtu.be/Flv6_BrwPVU?t=193
		"Guitar": "instruments/mlp-pearbutter-193.wav",

		// My Little Pony: Friendship is Magic - Season 4 Episode 3
		// https://youtu.be/oqaH8rTKu8M?t=820
		"ElectricPiano": "instruments/mlp-s4e3-820-1.wav",
		"ChurchOrgan": "instruments/mlp-s4e3-820-2.wav",

		// Friendship is Randomly Musical 5
		// https://youtu.be/uoHPvvPGcAw?t=77
		"Bassoon_C1": "instruments/pinkie-pie-77-C1.wav",
		"Bassoon_C2": "instruments/pinkie-pie-77-C2.wav",
		"Bassoon_C3": "instruments/pinkie-pie-77-C3.wav",

		// My Little Pony : Friendship is Magic Season 1 Episode 22
		// https://youtu.be/csuoJQH6Axs?t=176
		"Organ": "instruments/mlp-s1e22-176.wav",

		// My little pony-season 8 episode 10:The Break Up Breakdown
		// https://youtu.be/S3sIFvA2b-U
		"OpenHat": "drums/mlp-fim-s8e10-grass-398-1.wav",
		"ClosedHat": "drums/mlp-fim-s8e10-grass-398-2.wav",
		"Claves": "drums/mlp-fim-s8e10-22-1.wav",
		"Vibraslap": "drums/mlp-fim-s8e10-22-2.wav",

		// My Little Pony Friendship is Magic Season 5 Episode 6 Appleloosa's Most Wanted
		// 3:55
		// https://youtube.com/watch?v=T-rHg4xmKAo
		"Harmonica": "instruments/mlp-s5e6-235.wav",

		// My Little Pony Friendship Is Magic Season 4 Episode 21 Testing, 1, 2, 3 HD
		// https://youtu.be/RGIFQn8rlXw?t=282
		"Clarinet": "instruments/mlp-fim-s4e21-282.wav",

		// Peppa Pig - Musical Instruments (full episode)
		// https://youtu.be/n4gsHAH_q6s
		"Violin": "instruments/peppa-pig-mi-69-violin.wav",
		"Cello_C3": "instruments/peppa-pig-mi-69-cello_C3.wav",
		"Cello_C4": "instruments/peppa-pig-mi-69-cello_C4.wav",
		"TremoloString1": "instruments/peppa-pig-mi-69-tm1.wav",
		"TremoloString2": "instruments/peppa-pig-mi-69-tm2.wav",
		"Metallic": "instruments/peppa-pig-mi-69-metallic.wav",
		"Timpani": "instruments/peppa-pig-mi-114.wav",
		"Accordion": "instruments/peppa-pig-mi-131.wav",

		// Friendship is Musical | Season 1 Episode 13-14
		// https://youtu.be/QHOjFbbbrXQ?t=40
		"SynthPad": "instruments/mlp-s1e13-fim-40.wav",

		// Whistling Competition Between Peppa Pig and Suzy Sheep
		// https://youtu.be/9ptrXeS7CaE?t=4
		"Whistle": "instruments/peppa-pig-w-4.wav",

		// MLP FIM: Season 8 Episode 26
		// https://youtu.be/u5Cbd92uQ80?t=850
		"ReverseCymbal": "instruments/mlp-fim-s8e26-850.wav",

		// My Little Pony Friendship is Magic season 2 episode 22 "Hurricane Fluttershy"
		// https://youtu.be/YK7vf0OkmRQ?t=953
		"Saxophone": "instruments/mlp-fim-s2e22-953.wav",

		// Friendship is Musical | Season 5 (First Half)
		// https://youtu.be/5pcCX7904d4?t=117
		"Flute": "instruments/mlp-s5-117.wav",

		// Friendship is Musical | Season 3
		// https://youtu.be/7WFZEuvZG0s
		"Pizzicato": "instruments/mlp-s3-applebloom-168.wav",
		"SteelDrum": "instruments/mlp-s3-fim-5.wav",
		"AcousticBassDrum": "drums/pinkie-pie-83.wav",

		// Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon
		// https://youtu.be/eGb3Edtrm1s
		"WoodenFlute": "instruments/peppa-pig-mmiwm-144.wav",
		"OpenConga": "drums/peppa-pig-mmiwm-64-0.wav",
		"MuteConga": "drums/peppa-pig-mmiwm-64-1.wav",
		"Conga": "drums/peppa-pig-mmiwm-64-2.wav",

		// Friendship is Randomly Musical 1
		// https://youtube.com/watch?v=nX1WTsUjCLM&t=67s
		"HiWoodBlock": "drums/twilight-wood-67-0.wav",
		"LowWoodBlock": "drums/twilight-wood-67-1.wav",

		// [Tridashie] Friendship is Randomly Musical 2 [REUPLOAD]
		// https://youtu.be/y7ho58raWac?t=30
		"Triangle": "drums/applejack-30-0.wav",
		"MuteTriangle": "drums/applejack-30-1.wav",

		// MLP-FiM S1E22 - A Bird in the Hoof
		// https://youtube.com/watch?v=YN34_LDX45M
		"SideStick": "drums/mlp-s1e22-30s.wav",

		// My Little Pony_ Friendship is Magic _ The Return of Harmony Part 1 & 2 _ FULL EPISODE _ MLP
		// https://youtube.com/watch?v=-tnXN5cnbas
		"Timbale_High": "drums/mlp-return-harmony-27-50-1.wav",
		"Timbale_Low": "drums/mlp-return-harmony-27-50-2.wav",

		// My Little Pony friendship is magic season 2 episode 7 "May the Best Pet Win!"
		// https://youtu.be/GpSNka9ft-w?t=425
		"LongWhistle": "drums/mlp-fim-s2e7-425-0.wav",
		"ShortWhistle": "drums/mlp-fim-s2e7-425-1.wav",

		// My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)
		// https://youtu.be/MluslXu-Pnk?t=937
		"Agogo": "instruments/mlp-fim-s9e15-937-agogo.wav",
		"HighAgogo": "drums/mlp-fim-s9e15-937-0.wav",
		"LowAgogo": "drums/mlp-fim-s9e15-937-1.wav",

		// Friendship is Musical | Season 1 Episode 21-22
		// https://youtu.be/UZRoOAzI3wo
		"Choir": "instruments/mlp-fim-s1-fluttershy-1.wav",
		"SynthLead_C2": "instruments/mlp-s1e21-fim-3-C2.wav",
		"SynthLead_C3": "instruments/mlp-s1e21-fim-3-C3.wav",
		"SynthLead_C4": "instruments/mlp-s1e21-fim-3-C4.wav",
		"SynthLead_C5": "instruments/mlp-s1e21-fim-3-C5.wav",

		// My Little Pony Friendship is Magic season 2 episode 19 "Putting Your Hoof Down"
		// https://youtu.be/qjhL0p3dHwM?t=38
		"Cowbell": "drums/mlp-s2e19-38.wav", // [Fixed]

		// My little pony season 8 episode 4(Fake it 'Til you make it)
		// https://youtu.be/HGK7o5TVVF4?t=1300
		"Cabasa": "drums/mlp-s8e4-1300.wav",

		// My Little Pony friendship is magic season 2 episode 10 "Secret of My Excess"
		// https://youtu.be/m9xyYfih99Q?t=49
		"Vibraphone": "instruments/mlp-fim-s2e10-49.wav",

		// Friendship is Randomly Musical 3 [REUPLOAD]
		// https://youtu.be/rG5ukrHNqE4?t=14
		"MusicBox": "instruments/pinkie-pie-14.wav",

		// Friendship is Musical | Season 1 Episode 5-6
		// https://youtu.be/EXrDap-pIdk?t=109
		"OrchestraHit": "instruments/mlp-s1-fim-109.wav",

		// [1080p] My little Pony Friendship is Magic Season 6 Episode 14 The Cart Before the Ponies
		// https://youtu.be/8pKhEvZRW34?t=915
		"Trumpet": "instruments/mlp-s6e14-915_01.wav",

		// My Little Pony: friendship is magic | Swarm of the Century | FULL EPISODE | MLP
		// https://youtu.be/ZEzgWjBMfzM?t=1290
		"Trumbone": "instruments/mlp-swarm-od-the-century-1290.wav",

		// My Little Pony _ Friendship is Magic Season 1 Episode 14
		// at 4:14
		// https://youtube.com/watch?v=kEc4xjNGoag
		"Sitar": "instruments/mlp-s1e14-414.wav"
	}
	var MIDI_INSTRUMENT = [
		"piano", "piano", "piano", "piano",
		"electric piano", "electric piano", "piano", "piano",
		"marimba", "vibraphone", "music box", "vibraphone",
		"marimba", "marimba", "vibraphone", "guitar",
		"organ", "organ", "organ", "church organ",
		"organ", "accordion", "harmonica", "accordion",
		"guitar", "guitar", "electric guitar", "electric guitar",
		"electric guitar", "overdriven guitar", "overdriven guitar", "overdriven guitar",
		"bass", "bass", "bass", "bass",
		"bass", "bass", "bass", "bass",
		"violin", "violin", "cello", "cello",
		"tremolo-string-1", "pizzicato", "bass", "timpani",
		"tremolo-string-1", "tremolo-string-2", "tremolo-string-1", "tremolo-string-1",
		"choir", "choir", "choir", "orchestra hit",
		"trumbone", "trumbone", "trumbone", "trumbone",
		"trumpet", "trumbone", "trumbone", "trumbone",
		"saxophone", "saxophone", "saxophone", "saxophone",
		"bassoon", "clarinet", "bassoon", "clarinet",
		"flute", "flute", "wooden flute", "wooden flute",
		"wooden flute", "wooden flute", "whistle", "wooden flute",
		"synth lead", "synth lead", "wooden flute", "synth lead",
		"synth lead", "choir", "synth lead", "synth lead",
		"synth pad", "warm", "synth pad", "choir",
		"bowed", "metallic", "choir", "tremolo-string-2",
		"synth pad", "violin", "wooden flute", "choir",
		"vibraphone", "bowed", "choir", "harmonica",
		"sitar", "pizzicato", "bass", "bass",
		"marimba", "bassoon", "violin", "bassoon",
		"vibraphone", "agogo", "steel drum", "marimba",
		"taiko drum", "melodic tom", "synth drum", "reverse cymbal",
		"electric guitar", "wooden flute", "steel drum", "wooden flute",
		"vibraphone", "steel drum", "choir", "steel drum"
	];
	var DRUMS_MIDI = [
		null, null, null, null, null, null, null,
		null, null, null, null, null, null, null,
		null, null, null, null, null, null, null,
		null, null, null, null, null, null, 

		"acoustic bass drum",
		"open hi hat",
		null,
		null,
		"claves",
		null,
		"claves",
		null,
		
		"acoustic bass drum",
		"acoustic bass drum",
		"side stick",
		"snare drum",
		"hand",
		"snare drum",
		"low floor tom",
		"closed hi hat",
		"high floor tom",
		"closed hi hat",
		"low tom",
		"open hi hat",
		"low mid tom",
		"hi mid tom",
		"crash cymbal",
		"high tom",
		"open hi hat",
		"crash cymbal",
		"tambourine",
		"tambourine",
		"crash cymbal",
		"cowbell",
		"crash cymbal",
		"vibraslap",
		"open hi hat",
		"hi bongo",
		"bongo",
		"mute conga",
		"open conga",
		"conga",
		"timbale high",
		"timbale low",
		"high agogo",
		"low agogo",
		"cabasa",
		"cabasa",
		"short whistle",
		"long whistle",
		"short guiro",
		"long guiro",
		"claves",
		"wood",
		"low wood",
		"cuica",
		"low cuica",
		"mute triangle",
		"triangle",
		"cabasa",
		"cabasa",
		null,
		"claves_1",
		null,
		null
	];
	var soundbank_assets = {};

	(function() {
		var instrumentSounds = [{"name": "daisy-143-C1","assetId": "0d1b93e80d5e129c0d194b6e27cc4096","dataFormat": "wav","rate": 48000,"sampleCount": 240000,"md5ext": "0d1b93e80d5e129c0d194b6e27cc4096.wav"},{"name": "mlp-24-1","assetId": "c16aced44399d59a26ca50834e4f1f1d","dataFormat": "wav","rate": 48000,"sampleCount": 46081,"md5ext": "c16aced44399d59a26ca50834e4f1f1d.wav"},{"name": "daisy-143-C2","assetId": "b6b7eb496d8becd38d3b5e0ff91508af","dataFormat": "wav","rate": 48000,"sampleCount": 144000,"md5ext": "b6b7eb496d8becd38d3b5e0ff91508af.wav"},{"name": "mlp-applebloom-89-C4","assetId": "62dc5adcfb1f7790daaf98470fe30d9c","dataFormat": "wav","rate": 48000,"sampleCount": 73200,"md5ext": "62dc5adcfb1f7790daaf98470fe30d9c.wav"},{"name": "mlp-applebloom-89-C5","assetId": "4aaf5f10eda78f397b06868e90ed8371","dataFormat": "wav","rate": 48000,"sampleCount": 36582,"md5ext": "4aaf5f10eda78f397b06868e90ed8371.wav"},{"name": "mlp-fim-s1-fluttershy-1","assetId": "d99c741cbd79a2d5766f052b6d78cc38","dataFormat": "wav","rate": 48000,"sampleCount": 31619,"md5ext": "d99c741cbd79a2d5766f052b6d78cc38.wav"},{"name": "mlp-fim-s2e10-49","assetId": "cb1100d9a0ca1ce4e222def208856377","dataFormat": "wav","rate": 48000,"sampleCount": 212833,"md5ext": "cb1100d9a0ca1ce4e222def208856377.wav"},{"name": "mlp-fim-s2e22-953","assetId": "34048216db9312a45be97077da12d3e4","dataFormat": "wav","rate": 48000,"sampleCount": 96000,"md5ext": "34048216db9312a45be97077da12d3e4.wav"},{"name": "mlp-fim-s4e21-282","assetId": "b71946ab50faca683beda4595123df38","dataFormat": "wav","rate": 48000,"sampleCount": 37702,"md5ext": "b71946ab50faca683beda4595123df38.wav"},{"name": "mlp-fim-s5e9-750-1","assetId": "6b680ba852bc116f78601bd6a42ad87f","dataFormat": "wav","rate": 48000,"sampleCount": 242203,"md5ext": "6b680ba852bc116f78601bd6a42ad87f.wav"},{"name": "mlp-fim-s5e9-750-1-C3","assetId": "6b680ba852bc116f78601bd6a42ad87f","dataFormat": "wav","rate": 48000,"sampleCount": 242203,"md5ext": "6b680ba852bc116f78601bd6a42ad87f.wav"},{"name": "mlp-fim-s5e9-750-1-C4","assetId": "ad7cba109a0fad279154450d94800b21","dataFormat": "wav","rate": 48000,"sampleCount": 121099,"md5ext": "ad7cba109a0fad279154450d94800b21.wav"},{"name": "mlp-fim-s5e9-750-2","assetId": "841e263e3a41459cf47c900d5ea0fed1","dataFormat": "wav","rate": 48000,"sampleCount": 242203,"md5ext": "841e263e3a41459cf47c900d5ea0fed1.wav"},{"name": "mlp-fim-s5e9-750-2-C3","assetId": "53a055b2a0bc2bf0255cdc5bcabd0c52","dataFormat": "wav","rate": 48000,"sampleCount": 242203,"md5ext": "53a055b2a0bc2bf0255cdc5bcabd0c52.wav"},{"name": "mlp-fim-s5e9-750-2-C4","assetId": "9cdc2cd5a17a3614ca6fbb39c255d6b4","dataFormat": "wav","rate": 48000,"sampleCount": 121100,"md5ext": "9cdc2cd5a17a3614ca6fbb39c255d6b4.wav"},{"name": "mlp-fim-s8e26-850","assetId": "f1900ebd94fbc8fb401b8e5f197750da","dataFormat": "wav","rate": 48000,"sampleCount": 119667,"md5ext": "f1900ebd94fbc8fb401b8e5f197750da.wav"},{"name": "mlp-fim-s9e15-937-agogo","assetId": "c72af7a397817080468a6dda808b2f97","dataFormat": "wav","rate": 48000,"sampleCount": 15120,"md5ext": "c72af7a397817080468a6dda808b2f97.wav"},{"name": "mlp-pearbutter-193","assetId": "170e1b56fa481ffb3947887e30676ab6","dataFormat": "wav","rate": 48000,"sampleCount": 72053,"md5ext": "170e1b56fa481ffb3947887e30676ab6.wav"},{"name": "mlp-s1-89-C3","assetId": "5e5e523a3894f113db87096d41b1ab04","dataFormat": "wav","rate": 48000,"sampleCount": 101176,"md5ext": "5e5e523a3894f113db87096d41b1ab04.wav"},{"name": "mlp-s1-89-C5","assetId": "d08cf60867cd78b296bbe7b6b8b07832","dataFormat": "wav","rate": 48000,"sampleCount": 25293,"md5ext": "d08cf60867cd78b296bbe7b6b8b07832.wav"},{"name": "mlp-s1e13-fim-40","assetId": "ae2f518b2593e9966ba1dd750cf410bd","dataFormat": "wav","rate": 48000,"sampleCount": 96000,"md5ext": "ae2f518b2593e9966ba1dd750cf410bd.wav"},{"name": "mlp-s1e14-414","assetId": "cff6167b38adea61fb95cc083508f366","dataFormat": "wav","rate": 48000,"sampleCount": 112112,"md5ext": "cff6167b38adea61fb95cc083508f366.wav"},{"name": "mlp-s1e21-fim-3-C2","assetId": "fcc03249801c1593e408491cac639a8d","dataFormat": "wav","rate": 48000,"sampleCount": 74282,"md5ext": "fcc03249801c1593e408491cac639a8d.wav"},{"name": "mlp-s1e21-fim-3-C3","assetId": "898dac455a77645d7f74a9e2c4082200","dataFormat": "wav","rate": 48000,"sampleCount": 74282,"md5ext": "898dac455a77645d7f74a9e2c4082200.wav"},{"name": "mlp-s1e21-fim-3-C4","assetId": "0c6d094b2b59dbd57829cfc4cf7d26ba","dataFormat": "wav","rate": 48000,"sampleCount": 74282,"md5ext": "0c6d094b2b59dbd57829cfc4cf7d26ba.wav"},{"name": "mlp-s1e21-fim-3-C5","assetId": "3770d9935ab961c6eaf8b25a58581a52","dataFormat": "wav","rate": 48000,"sampleCount": 74282,"md5ext": "3770d9935ab961c6eaf8b25a58581a52.wav"},{"name": "mlp-s1e22-176","assetId": "07e339211ac04ee9da89038f0e42414b","dataFormat": "wav","rate": 48000,"sampleCount": 152497,"md5ext": "07e339211ac04ee9da89038f0e42414b.wav"},{"name": "mlp-s1-fim-30","assetId": "c609455a42c25793b5fa54c172fa9980","dataFormat": "wav","rate": 48000,"sampleCount": 65859,"md5ext": "c609455a42c25793b5fa54c172fa9980.wav"},{"name": "mlp-s1-fim-30_C5","assetId": "e1975fd06239ea68435c6ec1e12a0b26","dataFormat": "wav","rate": 48000,"sampleCount": 16463,"md5ext": "e1975fd06239ea68435c6ec1e12a0b26.wav"},{"name": "mlp-s1-fim-30_C3","assetId": "c609455a42c25793b5fa54c172fa9980","dataFormat": "wav","rate": 48000,"sampleCount": 65859,"md5ext": "c609455a42c25793b5fa54c172fa9980.wav"},{"name": "mlp-s1-fim-109","assetId": "1f702ded8069828bded6aa97f5e4bd93","dataFormat": "wav","rate": 48000,"sampleCount": 41667,"md5ext": "1f702ded8069828bded6aa97f5e4bd93.wav"},{"name": "mlp-s3-applebloom-168","assetId": "9cac8790bbc6222b85306507d716e15b","dataFormat": "wav","rate": 48000,"sampleCount": 53860,"md5ext": "9cac8790bbc6222b85306507d716e15b.wav"},{"name": "mlp-s3-fim-5","assetId": "e063e23ca9e693a176e95ec75655699b","dataFormat": "wav","rate": 48000,"sampleCount": 92353,"md5ext": "e063e23ca9e693a176e95ec75655699b.wav"},{"name": "mlp-s4e3-820-1","assetId": "f8df20f605e0a4fca65eff7d384a41b8","dataFormat": "wav","rate": 48000,"sampleCount": 149713,"md5ext": "f8df20f605e0a4fca65eff7d384a41b8.wav"},{"name": "mlp-s4e3-820-2","assetId": "78236d8d071aedc9ed1017cf63f47b21","dataFormat": "wav","rate": 48000,"sampleCount": 36519,"md5ext": "78236d8d071aedc9ed1017cf63f47b21.wav"},{"name": "mlp-s5-117","assetId": "dbd1924f19f2ac438e16d974081be19b","dataFormat": "wav","rate": 48000,"sampleCount": 199980,"md5ext": "dbd1924f19f2ac438e16d974081be19b.wav"},{"name": "mlp-s5e6-235","assetId": "e403fbd202dc8eec84e3bc1a3ac8a2fc","dataFormat": "wav","rate": 48000,"sampleCount": 14154,"md5ext": "e403fbd202dc8eec84e3bc1a3ac8a2fc.wav"},{"name": "mlp-s5e9-471-1","assetId": "483a72cc422c92a0100b057a5e7a632e","dataFormat": "wav","rate": 48000,"sampleCount": 9426,"md5ext": "483a72cc422c92a0100b057a5e7a632e.wav"},{"name": "mlp-s5e9-471-2","assetId": "97f1317984ea2370a66075677191285e","dataFormat": "wav","rate": 48000,"sampleCount": 16996,"md5ext": "97f1317984ea2370a66075677191285e.wav"},{"name": "mlp-s6e14-915","assetId": "9bf158fa8ad89b9d9214f16ec7f0fefa","dataFormat": "wav","rate": 48000,"sampleCount": 128931,"md5ext": "9bf158fa8ad89b9d9214f16ec7f0fefa.wav"},{"name": "mlp-s6e14-915_01","assetId": "5b27bf730c485bc01a91f0f96d8a0dfe","dataFormat": "wav","rate": 48000,"sampleCount": 81252,"md5ext": "5b27bf730c485bc01a91f0f96d8a0dfe.wav"},{"name": "mlp-swarm-od-the-century-1290","assetId": "1962bb72779d5f3688f362dc287fafa4","dataFormat": "wav","rate": 48000,"sampleCount": 13766,"md5ext": "1962bb72779d5f3688f362dc287fafa4.wav"},{"name": "mlp-s7e9-e-guitar","assetId": "aaf38041260526a9344ca85b2abbbdb0","dataFormat": "wav","rate": 48000,"sampleCount": 80400,"md5ext": "aaf38041260526a9344ca85b2abbbdb0.wav"},{"name": "peppa-pig-drums-53","assetId": "aaf24557edb702afd970528eecf98cd8","dataFormat": "wav","rate": 48000,"sampleCount": 17714,"md5ext": "aaf24557edb702afd970528eecf98cd8.wav"},{"name": "peppa-pig-mi-69-cello_C3","assetId": "8acf2e9bccb6f789f54b54242cf73246","dataFormat": "wav","rate": 48000,"sampleCount": 98935,"md5ext": "8acf2e9bccb6f789f54b54242cf73246.wav"},{"name": "peppa-pig-mi-69-cello_C4","assetId": "3895a69e2412a9786cea28d5e1a2cbe2","dataFormat": "wav","rate": 48000,"sampleCount": 98487,"md5ext": "3895a69e2412a9786cea28d5e1a2cbe2.wav"},{"name": "peppa-pig-mi-69-metallic","assetId": "cb61f66ea52b5cbe65ed98d3ec471cc3","dataFormat": "wav","rate": 48000,"sampleCount": 243840,"md5ext": "cb61f66ea52b5cbe65ed98d3ec471cc3.wav"},{"name": "peppa-pig-mi-69-tm1","assetId": "371b8f39f49f24345e72461c05c84985","dataFormat": "wav","rate": 48000,"sampleCount": 98306,"md5ext": "371b8f39f49f24345e72461c05c84985.wav"},{"name": "peppa-pig-mi-69-tm2","assetId": "89b858396b73db37240c2ae6a9981523","dataFormat": "wav","rate": 48000,"sampleCount": 95760,"md5ext": "89b858396b73db37240c2ae6a9981523.wav"},{"name": "peppa-pig-mi-69-violin","assetId": "b1f45f4a0b869894e243d1472cb95256","dataFormat": "wav","rate": 48000,"sampleCount": 97347,"md5ext": "b1f45f4a0b869894e243d1472cb95256.wav"},{"name": "peppa-pig-mi-114","assetId": "beeb4904c9d4bc097ac5c29f2f2d5c79","dataFormat": "wav","rate": 48000,"sampleCount": 5929,"md5ext": "beeb4904c9d4bc097ac5c29f2f2d5c79.wav"},{"name": "peppa-pig-mi-131","assetId": "c8a7bffe7ccdd01f10f6552720fae584","dataFormat": "wav","rate": 48000,"sampleCount": 13074,"md5ext": "c8a7bffe7ccdd01f10f6552720fae584.wav"},{"name": "peppa-pig-mmiwm-144","assetId": "4bc790e28d214be8d59ad3f835cbac55","dataFormat": "wav","rate": 48000,"sampleCount": 58321,"md5ext": "4bc790e28d214be8d59ad3f835cbac55.wav"},{"name": "peppa-pig-w-4","assetId": "01ce02bd6fb2750b89105e7a19db0f26","dataFormat": "wav","rate": 48000,"sampleCount": 70887,"md5ext": "01ce02bd6fb2750b89105e7a19db0f26.wav"},{"name": "pinkie-pie-14","assetId": "821b78a4929ffece67e7939fc095804d","dataFormat": "wav","rate": 48000,"sampleCount": 40320,"md5ext": "821b78a4929ffece67e7939fc095804d.wav"},{"name": "pinkie-pie-77-C1","assetId": "eb853a2b8d3c3a2a1c27067595d914e5","dataFormat": "wav","rate": 48000,"sampleCount": 16495,"md5ext": "eb853a2b8d3c3a2a1c27067595d914e5.wav"},{"name": "pinkie-pie-77-C2","assetId": "f5a61bb5d391542647d28bf453dcb653","dataFormat": "wav","rate": 48000,"sampleCount": 16495,"md5ext": "f5a61bb5d391542647d28bf453dcb653.wav"},{"name": "pinkie-pie-77-C3","assetId": "7e381bb8bd3c0a893db063c1049f214c","dataFormat": "wav","rate": 48000,"sampleCount": 16495,"md5ext": "7e381bb8bd3c0a893db063c1049f214c.wav"}];
		var soundDrums = [{"name": "applejack-30-0","assetId": "9f7c6c5874d49acf0e7c91121b34a1c6","dataFormat": "wav","rate": 48000,"sampleCount": 31301,"md5ext": "9f7c6c5874d49acf0e7c91121b34a1c6.wav"},{"name": "applejack-30-1","assetId": "30e99f8c835da33d643aeec206e75930","dataFormat": "wav","rate": 48000,"sampleCount": 5973,"md5ext": "30e99f8c835da33d643aeec206e75930.wav"},{"name": "derpy-67-0","assetId": "99d9d2e9a812c705a4e95f4d8ddb6d18","dataFormat": "wav","rate": 48000,"sampleCount": 11918,"md5ext": "99d9d2e9a812c705a4e95f4d8ddb6d18.wav"},{"name": "derpy-67-1","assetId": "cd13884edc3089d8260076aa05d23012","dataFormat": "wav","rate": 48000,"sampleCount": 8508,"md5ext": "cd13884edc3089d8260076aa05d23012.wav"},{"name": "mlp-fim-s2e7-425-0","assetId": "f7852c1c375e26d10b0b363ffb1979cc","dataFormat": "wav","rate": 48000,"sampleCount": 13109,"md5ext": "f7852c1c375e26d10b0b363ffb1979cc.wav"},{"name": "mlp-fim-s2e7-425-1","assetId": "9aa1eafd5f2c94ed0499cbd7e809ef3d","dataFormat": "wav","rate": 48000,"sampleCount": 4560,"md5ext": "9aa1eafd5f2c94ed0499cbd7e809ef3d.wav"},{"name": "mlp-fim-s5e9-471-1","assetId": "3399eb36378337faf44d314a5a651408","dataFormat": "wav","rate": 48000,"sampleCount": 12871,"md5ext": "3399eb36378337faf44d314a5a651408.wav"},{"name": "mlp-fim-s5e9-471-2","assetId": "f70c072f11e62ae5bd35970859c87c5c","dataFormat": "wav","rate": 48000,"sampleCount": 11679,"md5ext": "f70c072f11e62ae5bd35970859c87c5c.wav"},{"name": "mlp-fim-s5e9-471-3","assetId": "3fb828bd185c7421ed744498f75fa202","dataFormat": "wav","rate": 48000,"sampleCount": 10080,"md5ext": "3fb828bd185c7421ed744498f75fa202.wav"},{"name": "mlp-fim-s5e9-471-4","assetId": "c870a6759cee410a140fe4fab6104307","dataFormat": "wav","rate": 48000,"sampleCount": 6167,"md5ext": "c870a6759cee410a140fe4fab6104307.wav"},{"name": "mlp-fim-s5e9-471-5","assetId": "2be8b42451c252edd02fbfe606eb98b1","dataFormat": "wav","rate": 48000,"sampleCount": 5959,"md5ext": "2be8b42451c252edd02fbfe606eb98b1.wav"},{"name": "mlp-fim-s5e9-471-6","assetId": "2250ba9a0fb985b915256d4cb5835b96","dataFormat": "wav","rate": 48000,"sampleCount": 5006,"md5ext": "2250ba9a0fb985b915256d4cb5835b96.wav"},{"name": "mlp-fim-s8e10-22-1","assetId": "7ccd83d420bdd72483ffd5f1abfef04b","dataFormat": "wav","rate": 48000,"sampleCount": 2503,"md5ext": "7ccd83d420bdd72483ffd5f1abfef04b.wav"},{"name": "mlp-fim-s8e10-22-2","assetId": "8fcc94298787f1372cd142e187740ab0","dataFormat": "wav","rate": 48000,"sampleCount": 31104,"md5ext": "8fcc94298787f1372cd142e187740ab0.wav"},{"name": "mlp-fim-s8e10-grass-398-1","assetId": "c1f9eef2ee8ecedea708c522e0f4d1a6","dataFormat": "wav","rate": 48000,"sampleCount": 14705,"md5ext": "c1f9eef2ee8ecedea708c522e0f4d1a6.wav"},{"name": "mlp-fim-s8e10-grass-398-2","assetId": "9f85b321b9205333a9ec2f8128a5b6f4","dataFormat": "wav","rate": 48000,"sampleCount": 4148,"md5ext": "9f85b321b9205333a9ec2f8128a5b6f4.wav"},{"name": "mlp-fim-s9e15-937-0","assetId": "31ab82c3bf8858ee34c511339229f19e","dataFormat": "wav","rate": 48000,"sampleCount": 5692,"md5ext": "31ab82c3bf8858ee34c511339229f19e.wav"},{"name": "mlp-fim-s9e15-937-1","assetId": "fa445e68b9af5e588078f14834f6a38b","dataFormat": "wav","rate": 48000,"sampleCount": 7680,"md5ext": "fa445e68b9af5e588078f14834f6a38b.wav"},{"name": "mlp-return-harmony-27-50-1","assetId": "2205c1eaf7f96e490fbdafef73c03561","dataFormat": "wav","rate": 48000,"sampleCount": 10017,"md5ext": "2205c1eaf7f96e490fbdafef73c03561.wav"},{"name": "mlp-return-harmony-27-50-2","assetId": "349d2ef36b389a9c48da8a68a689b546","dataFormat": "wav","rate": 48000,"sampleCount": 16622,"md5ext": "349d2ef36b389a9c48da8a68a689b546.wav"},{"name": "mlp-s1e22-30s","assetId": "cff73474842dbe09a95e5110c60fbcda","dataFormat": "wav","rate": 48000,"sampleCount": 1634,"md5ext": "cff73474842dbe09a95e5110c60fbcda.wav"},{"name": "mlp-s2e19-38","assetId": "eefb720113242147defcb054a4829886","dataFormat": "wav","rate": 48000,"sampleCount": 10410,"md5ext": "eefb720113242147defcb054a4829886.wav"},{"name": "mlp-s8e4-1300","assetId": "c89506c8330f14a1d9e16a5ac693db4f","dataFormat": "wav","rate": 48000,"sampleCount": 7799,"md5ext": "c89506c8330f14a1d9e16a5ac693db4f.wav"},{"name": "peppa-pig-drums-30-0","assetId": "f18374afe00393160b4235ad3cdbb649","dataFormat": "wav","rate": 48000,"sampleCount": 20461,"md5ext": "f18374afe00393160b4235ad3cdbb649.wav"},{"name": "peppa-pig-drums-30-1","assetId": "7334f34398c5e092ee6b52aef1b6c890","dataFormat": "wav","rate": 48000,"sampleCount": 17236,"md5ext": "7334f34398c5e092ee6b52aef1b6c890.wav"},{"name": "peppa-pig-drums-51","assetId": "9137c7a96e11188a413f34fc025b0694","dataFormat": "wav","rate": 48000,"sampleCount": 17714,"md5ext": "9137c7a96e11188a413f34fc025b0694.wav"},{"name": "peppa-pig-drums-63-0","assetId": "ce178258dec095389867cb4a5db790f5","dataFormat": "wav","rate": 48000,"sampleCount": 11440,"md5ext": "ce178258dec095389867cb4a5db790f5.wav"},{"name": "peppa-pig-drums-63-1","assetId": "edf4bdc71ae1dbe24d96c8237b9ee426","dataFormat": "wav","rate": 48000,"sampleCount": 2535,"md5ext": "edf4bdc71ae1dbe24d96c8237b9ee426.wav"},{"name": "peppa-pig-drums-107","assetId": "9a681348c98056490d188d51b6e2e610","dataFormat": "wav","rate": 48000,"sampleCount": 2535,"md5ext": "9a681348c98056490d188d51b6e2e610.wav"},{"name": "peppa-pig-mmiwm-64-0","assetId": "edcd0b732a06b7b7b3ad7795cf02a124","dataFormat": "wav","rate": 48000,"sampleCount": 2783,"md5ext": "edcd0b732a06b7b7b3ad7795cf02a124.wav"},{"name": "peppa-pig-mmiwm-64-1","assetId": "3e95586bf69523e68d2d03299cd86ce2","dataFormat": "wav","rate": 48000,"sampleCount": 1490,"md5ext": "3e95586bf69523e68d2d03299cd86ce2.wav"},{"name": "peppa-pig-mmiwm-64-2","assetId": "11ec7ad0bcc6a0ef79000ebca16cf26d","dataFormat": "wav","rate": 48000,"sampleCount": 3506,"md5ext": "11ec7ad0bcc6a0ef79000ebca16cf26d.wav"},{"name": "pinkie-pie-60","assetId": "d14e6a191de6410ba1dca66f81644110","dataFormat": "wav","rate": 48000,"sampleCount": 10306,"md5ext": "d14e6a191de6410ba1dca66f81644110.wav"},{"name": "pinkie-pie-61","assetId": "19f0c0cc55cc638eafae54883603f710","dataFormat": "wav","rate": 48000,"sampleCount": 102630,"md5ext": "19f0c0cc55cc638eafae54883603f710.wav"},{"name": "pinkie-pie-83","assetId": "7c2479bc3b5715801c11e7aad2db3eb4","dataFormat": "wav","rate": 48000,"sampleCount": 4530,"md5ext": "7c2479bc3b5715801c11e7aad2db3eb4.wav"},{"name": "rainbowdash-applejack-handclap","assetId": "dca71845caccb50335f139871b184ed2","dataFormat": "wav","rate": 48000,"sampleCount": 5959,"md5ext": "dca71845caccb50335f139871b184ed2.wav"},{"name": "twilight-wood-67-0","assetId": "aaf142d98d679d36a9ee679ea2dbc5c4","dataFormat": "wav","rate": 48000,"sampleCount": 5721,"md5ext": "aaf142d98d679d36a9ee679ea2dbc5c4.wav"},{"name": "twilight-wood-67-1","assetId": "0228d446ea67cc75c318d42cb2c28222","dataFormat": "wav","rate": 48000,"sampleCount": 6879,"md5ext": "0228d446ea67cc75c318d42cb2c28222.wav"}];
		for (let i = 0; i < instrumentSounds.length; i++) {
			const inst = instrumentSounds[i];
			soundbank_assets["instruments/" + inst.name + "." + inst.dataFormat] = (inst.assetId + "." + inst.dataFormat);
		}
		for (let i2 = 0; i2 < soundDrums.length; i2++) {
			const drum = soundDrums[i2];
			soundbank_assets["drums/" + drum.name + "." + drum.dataFormat] = (drum.assetId + "." + drum.dataFormat);
		}
	}());

	const ASSET_URL = 'https://assets.scratch.mit.edu/internalapi/asset/$md5ext/get/';

	var parseMidiData = function(midiInfo) {
		var _data = new Uint8Array(midiInfo.data);
		var dataLengthOriginal = _data.length;
		var _dataLength = _data.length;
		var index = 0;
		var _readVariableLength = function() {
			var value = 0;
			while (index < _dataLength) {
				var temp = _data[index++];
				if (temp & 0x80) {
					value += (temp - 0x80);
					value <<= 7;
				} else {
					return value + temp;
				}
			}
			throw new Error("Unexpected end of input");
		}
		var _readUTFBytes = function(byteCount) {
			var value = "";
			var count = byteCount;
			while (count--) {
				value += String.fromCharCode(_data[index++]);
			}
			return value;
		}
		var _readBytes = function(byteCount) {
			var value = 0;
			var count = byteCount;
			while (count--) {
				value <<= 8;
				value += _data[index++];
			}
			return value;
		}
		var _readInt = function() {
			var val1 = _data[index++];
			var val2 = _data[index++];
			var val3 = _data[index++];
			var val4 = _data[index++];
			return val1 + (val2 << 8) + (val3 << 16) + (val4 << 24);
		}
		var _extractChunk = function (desiredType) {
			index = 12;
			while ((dataLengthOriginal - index) > 8) {
				var chunkType = _readUTFBytes(4);
				var chunkSize = _readBytes(4);
				if (chunkType == desiredType) {
					return [index, chunkSize];
				}
				index += chunkSize;
			}
		}
		var originalIndex = index;
		var midID = _readUTFBytes(4);
		switch(midID) {
			case "RIFF":
				// Support RIFF
				const lengthInHeader = _readInt();
				if (dataLengthOriginal != (lengthInHeader + 8)) {
					console.log("bad RIFF size; ignoring");
				}
				if (_readUTFBytes(4) !== "RMID") {
					throw new Error("Invalid RMI file");
				}
				var cdata = _extractChunk('data');
				if (cdata) {
					originalIndex = cdata[0];
					dataLengthOriginal = cdata[1];
				} else {
					throw new Error("Invalid RMI file");
				}
				break;
			case "MThd":
				break;
			default:
				throw new Error("Invalid MIDI file: " + midID);
		}
		index = originalIndex;
		midID = _readUTFBytes(4);
		if (midID !== "MThd") {
			throw new Error("Invalid MIDI file:" + midID);
		}
		if (_readBytes(4) !== 6) {
			throw new Error("Invalid MIDI file");
		}
		var formatType = _readBytes(2);
		var trackLength = _readBytes(2);
		var timeDivision = _readBytes(2);
		var tracks = [];
		var trackID = 0;
		while (trackID < trackLength) {
			var _dataLength = dataLengthOriginal;
			var chuckId = _readUTFBytes(4);
			if (!(chuckId == "MTrk")) {
				throw new Error("MTrk not found for track number " + (trackID + 1) + " - invalid MIDI file");
			}
			var tempos = {};
			var texts = {};
			var keyPressure = {};
			var channelPressure = {};
			var pitchBends = {};
			var controllers = {};
			var programs = {};
			var timeSignature = {};
			var keySignature = {};
			var systemExclusive = {};
			var notesOn = [];
			var pulseCounter = 0;
			var eventTypeValue = 0;
			var midiChannel = 0;
			var event = 0;
			var parameter1 = 0;
			var parameter2 = 0;
			tempos.setting = [];
			tempos.tick = [];
			texts.tick = [];
			texts.type = [];
			texts.text = [];
			keyPressure.tick = [];
			keyPressure.channel = [];
			keyPressure.key = [];
			channelPressure.tick = [];
			channelPressure.channel = [];
			channelPressure.value = [];
			pitchBends.channel = [];
			pitchBends.tick = [];
			pitchBends.pitch = [];
			controllers.channel = [];
			controllers.tick = [];
			controllers.control = [];
			controllers.value = [];
			programs.tick = [];
			programs.channel = [];
			programs.program = [];
			timeSignature.tick = [];
			timeSignature.numerator = [];
			timeSignature.denominator = [];
			keySignature.tick = [];
			keySignature.type = [];
			keySignature.value = [];
			systemExclusive.tick = [];
			systemExclusive.data = [];
			systemExclusive.fx = [];
			var noteChannel = [];
			var notePitch = [];
			var noteTickOff = [];
			var noteTickOn = [];
			var noteVelocity = [];
			_dataLength = _readBytes(4) + index;
			while (index < _dataLength) {
				pulseCounter += _readVariableLength();
				event = _data[index++];
				if (event == 255) {
					switch (_data[index++]) {
						case 47:
							index = _dataLength;
							break;
						case 81:
							tempos.tick.push(pulseCounter);
							tempos.setting.push(_readBytes(_readVariableLength()));
							break;
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
						case 6:
						case 7:
							texts.tick.push(pulseCounter);
							texts.type.push(_data[index - 1]);
							texts.text.push(_readUTFBytes( _readVariableLength()));
							break;
						case 88:
							timeSignature.tick.push(pulseCounter);
							timeSignature.numerator.push(_data[index++]);
							timeSignature.denominator.push(_data[index++]);
							index -= 2;
							var ii = _readVariableLength();
							index += ii;
							break;
						case 89:
							keySignature.tick.push(pulseCounter);
							keySignature.value.push(_data[index++]);
							keySignature.type.push(_data[index++]);
							index -= 2;
							var ii = _readVariableLength();
							index += ii;
							break;
						default:
							var ii = _readVariableLength();
							index += ii;
					}
				} else {
					if (event > 239) {
						var ii = _readVariableLength();
						var dat = [];
						for (var i = 0; i < ii; i++) {
							dat.push(_data[index++]);
						}
						systemExclusive.tick.push(pulseCounter);
						systemExclusive.data.push(dat);
						systemExclusive.fx.push(event - 240);
					} else {
						if (event > 127) {
							midiChannel = event % 16;
							eventTypeValue = (event - midiChannel);
						} else {
							index--;
						}
						parameter1 = _data[index++];
						if (!(eventTypeValue == 192 || eventTypeValue == 208)) {
							parameter2 = _data[index++];
						}
						switch (eventTypeValue) {
							case 128:
								var i = notesOn.length;
								while (i--) {
									if (parameter1 == notePitch[i] && midiChannel == noteChannel[i] && notesOn[i] == true) {
										noteTickOff[i] = pulseCounter;
										notesOn[i] = false;
										break;
									}
								}
								break;
							case 144:
								if (parameter2 > 0) {
									noteTickOn.push(pulseCounter);
									noteTickOff.push(pulseCounter);
									noteChannel.push(midiChannel);
									notePitch.push(parameter1);
									noteVelocity.push(parameter2);
									notesOn.push(true);
								} else {
									var i = notesOn.length;
									while (i--) {
										if (parameter1 == notePitch[i] && midiChannel == noteChannel[i] && notesOn[i] == true) {
											noteTickOff[i] = pulseCounter;
											notesOn[i] = false;
											break;
										}
									}
								}
								break;
							case 160:
								keyPressure.tick.push(pulseCounter);
								keyPressure.channel.push(midiChannel);
								keyPressure.key.push(parameter1);
								break;
							case 176:
								controllers.tick.push(pulseCounter);
								controllers.channel.push(midiChannel);
								controllers.control.push(parameter1);
								controllers.value.push(parameter2);
								break;
							case 192:
								programs.tick.push(pulseCounter);
								programs.channel.push(midiChannel);
								programs.program.push(parameter1);
								break;
							case 208:
								channelPressure.tick.push(pulseCounter);
								channelPressure.channel.push(midiChannel);
								channelPressure.value.push(parameter1);
								break;
							case 224:
								pitchBends.tick.push(pulseCounter);
								pitchBends.channel.push(midiChannel);
								pitchBends.pitch.push(parameter2 * 128 + parameter1);
								break;
							default:
								throw new Error("Unknown event" + ((event > 127) ? "" : " (running)") + ":" + event);
						}
					}
				}
			}
			if (index !==  _dataLength) {
				throw new Error("Track number " + (trackID + 1) + " has overrun - invalid MIDI file");
			}
			tracks.push({
				notes: {
					channel: noteChannel,
					pitch: notePitch,
					tickOff: noteTickOff,
					tickOn: noteTickOn,
					velocity: noteVelocity,
				},
				tempos,
				pitchBends,
				controllers,
				texts,
				keyPressure,
				channelPressure,
				programs,
				timeSignature,
				keySignature,
				systemExclusive,
				pulseCounterLength: pulseCounter
			});
			trackID++;
		}
		if (midiInfo.onload) midiInfo.onload({tracks, timeDivision, formatType});
	}
	var Track = function(mse, trackID, data) {
		this.mse = mse;
		this.currentPulse = 0;
		this.trackNumber = trackID;
		this.noteQueue = data.notes || [];
		this.tempoQueue = data.tempos || [];
		this.textQueue = data.texts || [];
		this.keyPressureQueue = data.keyPressure || [];
		this.channelPressureQueue = data.channelPressure || [];
		this.controllerQueue = data.controllers || [];
		this.timeSignatureQueue = data.timeSignature || [];
		this.keySignatureQueue = data.keySignature || [];
		this.systemExclusiveQueue = data.systemExclusive || [];
		this.pulseCounterLength = data.pulseCounterLength;
		this.pitchBendQueue = data.pitchBends || [];
		this.programQueue = data.programs || [];
		this._initLast();
	}
	Track.prototype._initLast = function() {
		if (!("last" in this.programQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.programQueue.last = [];
			for (let index = 0; index < this.programQueue.tick.length; index++) {
				const _g = this.programQueue.channel[index];
				this.programQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.controllerQueue)) {
			var lasts = new Array(2048);
			for (let index = 0; index < 2048; index++) {
				lasts[index] = null;
			}
			this.controllerQueue.last = [];
			for (let index = 0; index < this.controllerQueue.tick.length; index++) {
				const _g = this.controllerQueue.control[index] + (128 * this.controllerQueue.channel[index]);
				this.controllerQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.pitchBendQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.pitchBendQueue.last = [];
			for (let index = 0; index < this.pitchBendQueue.tick.length; index++) {
				const _g = this.pitchBendQueue.channel[index];
				this.pitchBendQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.keyPressureQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.keyPressureQueue.last = [];
			for (let index = 0; index < this.keyPressureQueue.tick.length; index++) {
				const _g = this.keyPressureQueue.channel[index];
				this.keyPressureQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
		if (!("last" in this.channelPressureQueue)) {
			var lasts = new Array(16);
			for (let index = 0; index < 16; index++) {
				lasts[index] = null;
			}
			this.channelPressureQueue.last = [];
			for (let index = 0; index < this.channelPressureQueue.tick.length; index++) {
				const _g = this.channelPressureQueue.channel[index];
				this.channelPressureQueue.last.push(lasts[_g]);
				lasts[_g] = index;
			}
		}
	}
	Track.prototype.toJSON = function() {
		return {
			notes: this.noteQueue,
			tempos: this.tempoQueue,
			texts: this.textQueue,
			keyPressure: this.keyPressureQueue,
			channelPressure: this.channelPressureQueue,
			programs: this.programQueue,
			controllers: this.controllerQueue,
			pitchBends: this.pitchBendQueue,
			timeSignature: this.timeSignatureQueue,
			keySignature: this.keySignatureQueue,
			systemExclusive: this.systemExclusiveQueue,
			pulseCounterLength: this.pulseCounterLength
		}
	}
	Track.prototype.reset = function() {
		this.tempo = 500000 / this.mse.timeDivision;
		this.noteIndex = 0;
		this.controllerIndex = 0;
		this.pitchBendIndex = 0;
		this.tempoTracker = 0;
		this.programIndex = 0;
	}
	Track.prototype.update = function() {
		var _t = this.mse.currentPulse;
		var programChannel = this.mse.programChannel;
		if (this.pitchBendQueue.tick.length > 0) {
			while (this.pitchBendIndex < this.pitchBendQueue.tick.length && _t >= this.pitchBendQueue.tick[this.pitchBendIndex]) {
				this.mse.pitchBendChannel[this.pitchBendQueue.channel[this.pitchBendIndex]] = ((this.pitchBendQueue.pitch[this.pitchBendIndex] / 8192) - 1);
				this.pitchBendIndex++;
			}
			this.pitchBendIndex--;
			while (this.pitchBendIndex >= 0 && _t < this.pitchBendQueue.tick[this.pitchBendIndex]) {
				var last = this.pitchBendQueue.last[this.pitchBendIndex];
				if (last == null) {
					this.mse.pitchBendChannel[this.pitchBendQueue.channel[this.pitchBendIndex]] = 0;
				} else {
					this.mse.pitchBendChannel[this.pitchBendQueue.channel[last]] = (this.pitchBendQueue.pitch[last] / 8192) - 1;
				}
				this.pitchBendIndex--;
			}
			this.pitchBendIndex++;
		}
		if (this.programQueue.tick.length > 0) {
			while (this.programIndex < this.programQueue.tick.length && _t >= this.programQueue.tick[this.programIndex]) {
				programChannel[this.programQueue.channel[this.programIndex]] = this.programQueue.program[this.programIndex];
				this.programIndex++;
			}
			this.programIndex--;
			while (this.programIndex >= 0 && _t < this.programQueue.tick[this.programIndex]) {
				var last = this.programQueue.last[this.programIndex];
				if (last == null) {
					programChannel[this.programQueue.channel[this.programIndex]] = 0;
				} else {
					programChannel[this.programQueue.channel[last]] = this.programQueue.program[last];
				}
				this.programIndex--;
			}
			this.programIndex++;
		}
		if (this.controllerQueue.tick.length > 0) {
			while ((this.controllerIndex < this.controllerQueue.tick.length) && (_t >= this.controllerQueue.tick[this.controllerIndex])) {
				var channel = this.controllerQueue.channel[this.controllerIndex];
				var control = this.controllerQueue.control[this.controllerIndex];
				var value = this.controllerQueue.value[this.controllerIndex];
				this.setController(channel, control, value, false);
				this.controllerIndex++;
			}
			this.controllerIndex--;
			while ((this.controllerIndex >= 0) && (_t < this.controllerQueue.tick[this.controllerIndex])) {
				var last = this.controllerQueue.last[this.controllerIndex];
				if (last == null) {
					var channel = this.controllerQueue.channel[this.controllerIndex];
					var control = this.controllerQueue.control[this.controllerIndex];
					var value = this.controllerQueue.value[this.controllerIndex];
					this.setController(channel, control, value, true);
				} else {
					var channel = this.controllerQueue.channel[last];
					var control = this.controllerQueue.control[last];
					var value = this.controllerQueue.value[last];
					this.setController(channel, control, value, false);
				}
				this.controllerIndex--;
			}
			this.controllerIndex++;
		}
	}
	Track.prototype.setController = function(channel, control, value, isEnd) {
		var mse = this.mse;
		switch (control) {
			case 1: // Modulation wheel (MSB)
				mse.controller.modulationChannel[channel] = value / 200;
				if (isEnd) {
					mse.controller.modulationChannel[channel] = 0;
				}
				break;
			case 6: // Data Entry (MSB)
				mse.controller.dataEntryMSB[channel] = value;
				break;
			case 7: // Channel Volume (formerly Main Volume)
				mse.controller.volumeChannel[channel] = value / 100;
				if (isEnd) {
					mse.controller.volumeChannel[channel] = 1;
				}
				break;
			case 10: // Pan
				mse.controller.panChannel[channel] = (value - 64) / 100;
				if (isEnd) {
					mse.controller.panChannel[channel] = 0;
				}
				break;
			case 11: // Expression Controller
				mse.controller.expressionChannel[channel] = value / 127;
				if (isEnd) {
					mse.controller.expressionChannel[channel] = 1;
				}
				break;
			case 0: // Bank Select (MSB)
			case 2: // Breath control (MSB)
			case 4: // Foot controller (MSB)
			case 5: // Portamento time (MSB)
			case 8: // Balance (MSB)
			case 12: // Effect control 1 (MSB)
			case 13: // Effect control 2 (MSB)
			case 16: // General Purpose Controller #1 (MSB)
			case 17: // General Purpose Controller #2 (MSB)
			case 18: // General Purpose Controller #3 (MSB)
			case 19: // General Purpose Controller #4 (MSB)
				break;
			case 38: // Data entry (LSB)
				mse.controller.dataEntryLSB[channel] = value;
				break;
			case 32: // Bank Select (LSB)
			case 33: // Modulation wheel (LSB)
			case 34: // Breath control (LSB)
			case 36: // Foot controller (LSB)
			case 37: // Portamento time (LSB)
			case 39: // Channel Volume (formerly Main Volume) (LSB)
			case 40: // Balance (LSB)
			case 42: // Pan (LSB)
			case 43: // Expression Controller (LSB)
			case 44: // Effect control 1 (LSB)
			case 45: // Effect control 2 (LSB)
			case 48: // General Purpose Controller #1 (LSB)
			case 49: // General Purpose Controller #2 (LSB)
			case 50: // General Purpose Controller #3 (LSB)
			case 51: // General Purpose Controller #4 (LSB)
				break;
			case 64:
				mse.controller.sustainPedalChannel[channel] = value > 0;
				if (isEnd) {
					mse.controller.sustainPedalChannel[channel] = false;
				}
				if (mse.isEffect) {
					var _notesPlaying = mse.notesPlayingChannel[channel];
					for (let i = 0; i < _notesPlaying.length; i++) {
						const note = _notesPlaying[i];
						if (!note) {
							continue;
						}
						if (channel == note.channel) {
							if (mse.controller.sustainPedalChannel[channel]) {
								note.setDurationInf = true;
							} else {
								note.setDurationInf = false;
								if (mse.currentPulse >= note.nodeOff) {
									if (note.release && !note.release.ended) {
										note.release.ended = true;
									} else {
										note.ended = true;
									}
								}
							}
						}
					}
				}
				break;
			case 65: // Portamento on/off
			case 66: // Sustenuto on/off
			case 67: // Soft pedal on/off
			case 68: // Legato Footswitch
			case 69: // Hold 2
				break;
			case 70: // Sound Controller 1 (Sound Variation) (LSB)
			case 71: // Sound Controller 2 (Timbre) (LSB)
			case 72: // Sound Controller 3 (Release Time) (LSB)
			case 73: // Sound Controller 4 (Attack Time) (LSB)
			case 74: // Sound Controller 5 (Brightness) (LSB)
			case 75: // Sound Controller 6 (LSB)
			case 76: // Sound Controller 7 (LSB)
			case 77: // Sound Controller 8 (LSB)
			case 78: // Sound Controller 9 (LSB)
			case 79: // Sound Controller 10 (LSB)
			case 80: // General Purpose Controller #5 (LSB)
			case 81: // General Purpose Controller #6 (LSB)
			case 82: // General Purpose Controller #7 (LSB)
			case 83: // General Purpose Controller #8 (LSB)
			case 84: // Portamento Control
			case 91: // Effects 1 Depth (LSB)
			case 92: // Effects 2 Depth (LSB)
			case 93: // Effects 3 Depth (LSB)
			case 94: // Effects 4 Depth (LSB)
			case 95: // Effects 5 Depth (LSB)
				break;
			case 96: // Data entry +1
			case 97: // Data entry -1
				break;
			case 98: // Non-Registered Parameter Number (LSB)
			case 99: // Non-Registered Parameter Number (MSB)
				break;
			case 100: // Registered Parameter Number LSB
				mse.controller.registeredParameterLSBchannel[channel] = value;
				break;
			case 101: // Registered Parameter Number MSB
				mse.controller.registeredParameterMSBchannel[channel] = value;
				break;
			case 120: // All Sound Off
			case 126: // Poly mode on/off (+ all notes off)
			case 127: // Poly mode on (incl mono=off +all notes off)
				if (mse.isEffect) {
					var _notesPlaying = mse.notesPlayingChannel[channel];
					for (let i = 0; i < _notesPlaying.length; i++) {
						const note = _notesPlaying[i];
						if (!note) continue;
						if (channel == note.channel) {
							note.ended = true;
						}
					}
				}
				break;
			case 123: // All notes off
				if (mse.isEffect) {
					var _notesPlaying = mse.notesPlayingChannel[channel];
					for (let i = 0; i < _notesPlaying.length; i++) {
						const note = _notesPlaying[i];
						if (!note) continue;
						if (channel == note.channel && note.setDurationInf) {
							note.ended = true;
						}
					}
				}
				break;
			case 121:
				//mse.resetController();
				break;
			case 122: // Local control on/off
			case 124: // Omni mode off (+ all notes off)
			case 125: // Omni mode on (+ all notes off)
				break;
		}
	}
	Track.prototype.getNote = function(mute, k) {
		const ids = [];
		var count = k;
		const tickOn = this.noteQueue.tickOn;
		const len = tickOn.length;
		const _currentPulse = this.mse.currentPulse;
		if (len > 0) {
			while (this.noteIndex < len && _currentPulse >= tickOn[this.noteIndex]) {
				if (!mute && count) {
					ids.push(this.noteIndex);
					count--;
				}
				this.noteIndex++;
			}
			this.noteIndex--;
			while (this.noteIndex >= 0 && _currentPulse < tickOn[this.noteIndex]) {
				this.noteIndex--;
			}
			this.noteIndex++;
		}
		return ids;
	}
	var allCallbackLoader = function(prs, fun1, funend) {
		var count = prs.length;
		if (count == 0) {
			funend();
		} else {
			for (let i = 0; i < prs.length; i++) {
				const pr = prs[i];
				pr(function() {
					fun1();
					count--;
					if (count == 0) {
						funend();
					}
				});
			}	
		}
	}
	var Player = function() {
		this._debug = false;
		this.audioContext = new AudioContext();
		this.node = this.audioContext.createGain();
		this.node.gain.value = 1;
		this.node.connect(this.audioContext.destination);
		this.duration = 0;
		this.muteMusicr = false;
		this.DateTime = 0;
		this.onplaynote = null;
		this.onended = null;
		this.onprogress = null;
		this.onload = null;
		this.oncleanup = null;
		this.speed = 1;
		this.isEffect = true;
		this.isPaused = true;
		this.currentTime = 0;
		this.programChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.notesPlayingChannel = new Array(16);
		for (var i = 0; i < 16; i++) {
			var gg = new Array(128);
			for (let i2 = 0; i2 < gg.length; i2++) {
				gg[i2] = null;
			}
			this.notesPlayingChannel[i] = gg;
		}
		this.trackQueue = [];
		this.formatType = 0;
		this.currentPulse = 0;
		this.tempo = 0;
		this._tempoTick = 0;
		this._tempoTime = 0;
		this._currentTimeLast = 0;
		this._soundbankLoaded = 0;
		this._soundbank = {};
		this._startTime = 0;
		this.date = Date.now();
		this._frameStart = Date.now();
		this._interval = setInterval(this._step.bind(this), 5);
		this._panGainChannel = new Array(16);
		this._outputGainChannel = new Array(16);
		for (var i = 0; i < 16; i++) {
			this._panGainChannel[i] = this._createPan(this.node);
			this._outputGainChannel[i] = this._panGainChannel[i].inputNode;
		}
		this.resetEffect();
	}
	Player.prototype.resetEffect = function() {
		this.resetController();
		this.programChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.pitchBendChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	Player.prototype.resetController = function() {
		this.controller = {};
		this.controller.modulationChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.controller.volumeChannel = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		this.controller.expressionChannel = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
		this.controller.panChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.controller.dataEntryMSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
		this.controller.dataEntryLSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
		this.controller.registeredParameterMSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.controller.registeredParameterLSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.controller.sustainPedalChannel = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
	}
	Player.prototype.cleanup = function() {
		this.stop();
		this.resetEffect();
		this.isPaused = true;
		this.duration = 0;
		this.trackQueue = [];
		this.tempo = 0;
		this._tempoTick = 0;
		this._tempoTime = 0;
		this.currentPulse = 0;
		this.currentTime = 0;
		this._currentTimeLast = 0;
		if (this.oncleanup) {
			this.oncleanup();
		}
	}
	Player.prototype.resetTrack = function() {
		this.tempo = 500000 / this.timeDivision;
		this._tempoTick = 0;
		this._tempoTime = 0;
		this.currentPulse = 0;
		for (let i = 0; i < this.trackQueue.length; i++) {
			var track = this.trackQueue[i];
			track.reset();
		}
	}
	Player.prototype.setCurrentTime = function(s) {
		this.muteMusicr = true;
		this.stopAllPlaying();
		if (this.currentTime == s) return;
		const h = Math.max(0, Math.min(this.duration, s));
		if (h <= 0) {
			this.resetEffect();
			this.muteMusicr = false;
			this.currentTime = 0;
			this._currentTimeLast = 0;
			this.setStartTime(0);
			this.resetTrack();
		} else {
			this.currentTime = Math.round(h * 1000) / 1000;
			this.setStartTime(this.currentTime);
			this._stepUpdateTrack();
			for (let i = 0; i < this.trackQueue.length; i++) {
				const track = this.trackQueue[i];
				if (!track) continue;
				track.getNote(true);
			}
		}
	}
	Player.prototype.setStartTime = function(s) {
		this._startTime = (this.date - ((s / this.speed) * 1000));
	}
	Player.prototype.setSpeed = function(s) {
		this.speed = s;
		this.setStartTime(this.currentTime);
	}
	Player.prototype._decodeAudio = function(k, callback) {
		var _this = this;
		_this.audioContext.decodeAudioData(k, function(buffer) {
			callback(buffer);
		}, function(err2) {
			console.log("Could not decode audio: " + err2);
		})
	}
	Player.prototype._loadSoundFile = function(f, callback) {
		var vs1 = ASSET_URL.replace('$md5ext', soundbank_assets[f]);
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			callback(xhr.response);
		}
		xhr.responseType = "arraybuffer";
		xhr.open("GET", vs1);
		xhr.send();
	}
	Player.prototype._loadSoundbankBuffer = function(s, f) {
		var _this = this;
		return function(callback) {
			_this._loadSoundFile(f, function(buffer) {
				_this._decodeAudio(buffer.slice(0), function(audioBuffer) {
					_this._soundbank[s] = {
						data: new Uint8Array(buffer),
						buffer: audioBuffer
					};
					callback();
				});
			});
		};
	}
	Player.prototype.loadSoundbank = function(callback2) {
		var _this = this;
		const promises = [];
		this._soundbankLoaded = 0;
		for (const filePath in SOUNDBANK_FILES) {
			if (!this._soundbank[filePath]) {
				this._soundbankLoaded++;
				const l = this._loadSoundbankBuffer(filePath, SOUNDBANK_FILES[filePath]);
				promises.push(l);
			}
		}
		_this.onprogress && _this.onprogress("loaded instruments " + _this._soundbankLoaded);
		allCallbackLoader(promises, function() {
			if (_this.onprogress) {
				_this.onprogress("loaded instruments " + _this._soundbankLoaded);
			}
			_this._soundbankLoaded -= 1;
		}, function() {
			if (_this.onprogress) {
				_this.onprogress("");
			}
			callback2();
		});
	}
	Player.prototype.setVolume = function(v) {
		this.node.gain.value = v;
	}
	Player.prototype.play = function() {
		this.date = Date.now();
		if (this.currentTime <= 0) {
			this.resetEffect();
			this.muteMusicr = false;
			this.currentTime = 0;
			this._currentTimeLast = 0;
			this.setStartTime(0);
			this.resetTrack();
		}
		this.isPaused = false;
		this.setStartTime(this.currentTime);
		if (this.currentTime >= this.duration) {
			this.currentTime = 0;
			this.setStartTime(0);
			this.resetTrack();
		}
	}
	Player.prototype.stopAllPlaying = function() {
		for (let c = 0; c < 16; c++) {
			const _notesPlaying = this.notesPlayingChannel[c];
			for (var i = 0; i < _notesPlaying.length; i++) {
				if (_notesPlaying[i]) {
					_notesPlaying[i].ended = true;
				}
			}
		}
	}
	Player.prototype.stop = function() {
		this.date = Date.now();
		this.isPaused = true;
		this.currentTime = 0;
		this.setStartTime(0);
		this.resetTrack();
		this.stopAllPlaying();
	}
	Player.prototype.pause = function() {
		this.date = Date.now();
		this.isPaused = true;
		this.setStartTime(this.currentTime);
		this.stopAllPlaying();
	}
	Player.prototype.getNoteLength = function() {
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].noteQueue.tickOn.length;
		}
		return t;
	}
	Player.prototype.getNoteTracker = function() {
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].noteIndex;
		}
		return t;
	}
	Player.prototype.getTempoLength = function() {
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].tempoQueue.tick.length;
		}
		return t;
	}
	Player.prototype.getTempoTracker = function() {
		var t = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			t += this.trackQueue[i].tempoTracker;
		}
		return t;
	}
	Player.prototype.getSoundBankSize = function() {
		var t = 0;
		for (var name in this._soundbank) {
			t += this._soundbank[name].data.length;
		}
		return t;
	}
	Player.prototype.getPulseCounterLength = function() {
		var _pulseCounterLength = 0;
		for (var i = 0; i < this.trackQueue.length; i++) {
			var len = this.trackQueue[i].pulseCounterLength;
			if (len > _pulseCounterLength) {
				_pulseCounterLength = len;
			}
		}
		return _pulseCounterLength;
	}
	Player.prototype._createPan = function(input) {
		var inputNode = this.audioContext.createGain();
		var leftGain = this.audioContext.createGain();
		var rightGain = this.audioContext.createGain();
		var channelMerger = this.audioContext.createChannelMerger(2);
		inputNode.connect(leftGain);
		inputNode.connect(rightGain);
		leftGain.connect(channelMerger, 0, 0);
		rightGain.connect(channelMerger, 0, 1);
		channelMerger.connect(input);
		return {inputNode, leftGain, rightGain};
	}
	Player.prototype.playNote = function(n) {
		if (n.type == 1) {
			var inst = MIDI_INSTRUMENT[n.instrument - 1];
			if (!inst) return;
			var spans = INSTRUMENT_INFO[inst];
			var span = spans[0];
			for (let i = 1; i < spans.length; i++) {
				const s = spans[i];
				if (n.pitch >= s.top) {
					span = s;
				}
			}
			if (!span) return;
			const buffer = this._soundbank[span.name];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			source.buffer = buffer.buffer;
			if (source.loop = span.loop) {
				source.loopStart = span.loopStart;
				source.loopEnd = span.loopEnd;
			}
			source.connect(node);
			source.playbackRate.value = Math.pow(2, ((n.pitch - span.top) / 12));
			const gain = node.gain;
			var volume = n.volume;
			gain.value = volume;
			const releaseGain = this.audioContext.createGain();
			var releaseDuration = span.releaseTime;
			if (typeof releaseDuration === "undefined") {
				releaseDuration = 0.01;
			}
			const releaseStart = this.audioContext.currentTime + n.duration;
			const releaseEnd = releaseStart + releaseDuration;
			releaseGain.gain.setValueAtTime(1, releaseStart);
			releaseGain.gain.linearRampToValueAtTime(0.0001, releaseEnd);
			node.connect(releaseGain);
			releaseGain.connect(this.node);
			source.start();
			source.stop(releaseEnd);
			return {source, node};
		} else if (n.type == 0) {
			var drum = DRUMS_MIDI[n.drum];
			if (!drum) return;
			var span = DRUM_INFO[drum];
			if (!span) return;
			const buffer = this._soundbank[span.name];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			source.buffer = buffer.buffer;
			source.connect(node);
			node.connect(this.node);
			const gain = node.gain;
			var volume = n.volume;
			gain.value = volume;
			source.start();
			return {source, node};
		}
	}
	Player.prototype._playNotes = function(n) {
		const id = (n[1] + (n[0] * 128)) + (n[3] * 16384);
		if (n[3] == 9) {
			const drum = DRUMS_MIDI[n[1]];
			if (!drum) return;
			const span = DRUM_INFO[drum];
			if (!span) return;
			const buffer = this._soundbank[span.name];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			node.gain.value = 0;
			source.buffer = buffer.buffer;
			source.connect(node);
			node.connect(this._outputGainChannel[n[3]]);
			const isStart = (n[5] - n[6]) > 0;
			const volume = (n[2] / 127);
			var te = {
				_pitch: n[1],
				_volume: n[2],
				_program: n[0],
				id: id,
				ended: !isStart,
				start: isStart,
				note: node,
				nodeOn: n[6],
				nodeOff: n[5],
				volume: volume,
				releaseGainVolume: 1,
				pitch: 0,
				source: source,
				track: n[4],
				channel: n[3]
			};
			te.endedFunction = function() {
				te.ended = true;
			}
			source.addEventListener("ended", te.endedFunction);
			this._startNote(te);
			this._updateEffectNote(te);
			source.start();
			this._addChannelPlaying(n[3], n[1], te);
			if (this._debug) {
				console.log(span.name, isStart);
			}
		} else {
			const inst = MIDI_INSTRUMENT[n[0]];
			if (!inst) return;
			var spans = INSTRUMENT_INFO[inst];
			if (!spans) return;
			var span = spans[0];
			for (let i = 1; i < spans.length; i++) {
				const s = spans[i];
				if (n[1] >= s.top) {
					span = s;
				}
			}
			if (!span) return;
			const buffer = this._soundbank[span.name];
			if (!buffer) return;
			const source = this.audioContext.createBufferSource();
			const node = this.audioContext.createGain();
			source.buffer = buffer.buffer;
			if (source.loop = span.loop) {
				source.loopStart = span.loopStart;
				source.loopEnd = span.loopEnd;
			}
			source.connect(node);
			const pitch = n[1] - span.top;
			source.playbackRate.value = Math.pow(2, (pitch / 12));
			const gain = node.gain;
			const volume = (n[2] / 127);
			const isStart = (n[5] - n[6]) > 0;
			gain.value = 0;
			node.connect(this._outputGainChannel[n[3]]);
			var releaseDuration = span.releaseTime;
			if (typeof releaseDuration === "undefined" || !isStart) {
				releaseDuration = 0.01;
			}
			var te = {
				_pitch: n[1],
				_volume: n[2],
				_program: n[0],
				id: id,
				ended: false,
				source: source,
				note: node,
				setDurationInf: false,
				releaseGainVolume: 1,
				start: isStart,
				release: {
					duration: releaseDuration * 1000,
					ended: false,
				},
				volume: volume,
				pitch: pitch,
				nodeOff: n[5],
				nodeOn: n[6],
				track: n[4],
				channel: n[3]
			}
			te.endedFunction = function() {
				te.ended = true;
			}
			source.addEventListener("ended", te.endedFunction);
			this._startNote(te);
			this._updateEffectNote(te);
			source.start();
			this._addChannelPlaying(n[3], n[1], te);
			if (this._debug) {
				console.log(span.name, isStart);
			}
		}
	}
	Player.prototype._addChannelPlaying = function(c, n, note) {
		this.notesPlayingChannel[c][n] = note;
	}
	Player.prototype._getSustainPedalChannel = function(channel) {
		return this.controller.sustainPedalChannel[channel];
	}
	Player.prototype._getPanChannel = function(channel) {
		return this.controller.panChannel[channel];
	}
	Player.prototype._getVolumeChannel = function(channel) {
		return this.controller.volumeChannel[channel] * this.controller.expressionChannel[channel];
	}
	Player.prototype._getPitch = function(channel) {
		if (channel == 9) {
			return 0;
		}
		var pitch = this.pitchBendChannel[channel] * this.controller.dataEntryMSB[channel];
		return pitch;
	}
	Player.prototype._startNote = function(n) {
		if (this.isEffect && n.track) {
			if (this._getSustainPedalChannel(n.channel)) {
				n.setDurationInf = true;
			}
		}
	}
	Player.prototype._updateEffectNote = function(note) {
		if (note.start) {
			if (this.isEffect && note.track) {
				const _pitch = (note.pitch + this._getPitch(note.channel));
				var rateSpeed = Math.pow(2, (_pitch / 12));
				note.source.playbackRate.value = rateSpeed;
				const volumeEffect = Math.min((note.volume * this._getVolumeChannel(note.channel)), 1.27);
				const volumeOld = ((Math.pow(5, volumeEffect) - 1) / 4); // Normal
				note.note.gain.value = (volumeOld * note.releaseGainVolume);
			} else {
				var rateSpeed = Math.pow(2, (note.pitch / 12));
				note.source.playbackRate.value = rateSpeed;
				note.note.gain.value = (note.volume * note.releaseGainVolume);
				note.duration = note.dur;
			}
		}
	}
	Player.prototype._step = function() {
		this.DateTime = (Date.now() - this._frameStart) / 1000;
		if (this.currentTime > this.duration && !this.isPaused) {
			this.currentTime = this.duration;
			this.setStartTime(this.duration);
			for (let c = 0; c < 16; c++) {
				const _notesPlaying = this.notesPlayingChannel[c];
				for (var i = 0; i < _notesPlaying.length; i++) {
					var dn = _notesPlaying[i];
					if (dn) dn.ended = true;
				}
			}
			if (this.onended) this.onended();
			this.isPaused = true;
		}
		this._currentTimeLast = this.currentTime;
		if (!this.isPaused && !this.muteMusicr) {
			this.currentTime = Math.round((this.date - this._startTime) * this.speed) / 1000;
		}
		this._stepUpdateTrack();
		this._stepUpdateEffect();
		this._stepNotesPlaying();
		this._stepPlayingNote();
		if (this.muteMusicr) {
			this.muteMusicr = false;
		}
		this.date = Date.now();
		this._frameStart = Date.now();
	}
	Player.prototype._stepUpdateEffect = function() {
		for (let i = 0; i < 16; i++) {
			const pan = this._panGainChannel[i];
			const p1 = (this.isEffect ? this._getPanChannel(i) : 0);
			const p = ((p1 * 100) + 100) / 200;
			const leftVal = Math.cos(p * Math.PI / 2);
			const rightVal = Math.sin(p * Math.PI / 2);
			pan.rightGain.gain.value = rightVal;
			pan.leftGain.gain.value = leftVal;
		}
	}
	Player.prototype._stepUpdateTrack = function() {
		if (this._currentTimeLast == this.currentTime) {
			this._trackAllUpdate();
		} else {
			var _currentTimeLast = this._currentTimeLast * 1000000;
			var _currentTime = this.currentTime * 1000000;
			if (_currentTime > _currentTimeLast) {
				while (true) {
					if (_currentTime > _currentTimeLast) {
						this._stepUpdateTimeTrack(_currentTimeLast, 1);
					} else {
						_currentTimeLast = _currentTime;
						this._stepUpdateTimeTrack(_currentTimeLast, 1);
						break;
					}
					_currentTimeLast += 100000;
				}
			} else {
				if (_currentTime < _currentTimeLast) {
					while (true) {
						if (_currentTime < _currentTimeLast) {
							this._stepUpdateTimeTrack(_currentTimeLast, -1);
						} else {
							_currentTimeLast = _currentTime;
							this._stepUpdateTimeTrack(_currentTimeLast, -1);
							break;
						}
						_currentTimeLast -= 100000;
					}
				}
			}
		}
	}
	Player.prototype._trackAllUpdate = function() {
		for (var i = 0; i < this.trackQueue.length; i++) {
			this.trackQueue[i].update();
		}
	}
	Player.prototype._stepUpdateTimeTrack = function(g, h) {
		if (h !== 0) {
			var _currentPulse = 0;
			for (var i = 0; i < this.trackQueue.length; i++) {
				var track = this.trackQueue[i];
				var _tempoQueue = track.tempoQueue;
				_currentPulse = (this._tempoTick + ((g - this._tempoTime) / this.tempo));
				if (h > 0) {
					while (track.tempoTracker < _tempoQueue.tick.length && _currentPulse >= _tempoQueue.tick[track.tempoTracker]) {
						this._tempoTime += (_tempoQueue.tick[track.tempoTracker] - this._tempoTick) * this.tempo;
						this._tempoTick = _tempoQueue.tick[track.tempoTracker];
						this.tempo = _tempoQueue.setting[track.tempoTracker] / this.timeDivision;
						_currentPulse = (this._tempoTick + ((g - this._tempoTime) / this.tempo));
						track.tempoTracker++;
					}
				} else {
					if (h < 0) {
						track.tempoTracker--;
						while (track.tempoTracker >= 0 && _currentPulse < _tempoQueue.tick[track.tempoTracker]) {
							track.tempoTracker--;
							if (track.tempoTracker >= 0) {
								this.tempo = _tempoQueue.setting[track.tempoTracker] / this.timeDivision;
								this._tempoTime += (_tempoQueue.tick[track.tempoTracker] - this._tempoTick) * this.tempo;
								this._tempoTick = _tempoQueue.tick[track.tempoTracker];
							} else {
								this.tempo = 500000 / this.timeDivision;
								this._tempoTime = 0;
								this._tempoTick = 0;
							}
							_currentPulse = (this._tempoTick + ((g - this._tempoTime) / this.tempo))
						}
						track.tempoTracker++;
					}
				}
			}
			this.currentPulse = (this._tempoTick + ((g - this._tempoTime) / this.tempo));
		}
		this._trackAllUpdate();
	}
	Player.prototype._noteStop = function(note) {
		if (note.source) {
			note.source.removeEventListener("ended", note.endedFunction);
			note.source.disconnect();
			note.source = null;
		}
		if (note.note) {
			note.note.disconnect();
			note.note = null;
		}
		note.ended = true;
	}
	Player.prototype._stepPlayingNote = function() {
		for (let i = 0; i < this.trackQueue.length; i++) {
			const track = this.trackQueue[i];
			const _noteQueue = track.noteQueue;
			const notes = track.getNote(this.muteMusicr, 200);
			if (this.isPaused) continue;
			for (var i1 = 0; i1 < notes.length; i1++) {
				const n = notes[i1];
				const channel = _noteQueue.channel[n];
				const program = this.programChannel[channel];
				const tickOff = _noteQueue.tickOff[n];
				const tickOn = _noteQueue.tickOn[n];
				const pitch = _noteQueue.pitch[n];
				const volume = _noteQueue.velocity[n];
				if (volume < 2) continue;
				if (this.onplaynote) {
					if (channel == 9) {
						this.onplaynote({
							drum: pitch,
							volume: (volume / 127),
							channel: channel,
							type: 0
						});
					} else {
						this.onplaynote({
							pitch: pitch,
							dur: ((tickOff - tickOn) * this.tempo) / 1000000,
							instrument: program + 1,
							volume: (volume / 127),
							channel: channel,
							type: 1
						});
					}
				}
				//if (!this.node.gain.value) continue;
				var g = [program, pitch, volume, channel, track.trackNumber, tickOff, tickOn];
				if (true) {
					var _notesplaying = this.notesPlayingChannel[channel];
					var _hn = _notesplaying[pitch];
					if (_hn) {
						var h = _hn;
						var _release = h.release;
						if (!h.ended && _release && !_release.ended && !h.setDurationInf) {
							var j = Math.min(h.nodeOff, g[5]);
							if (h.nodeOff >= g.nodeOff && h.nodeOff <= g[6]) {
								g[5] = j;
							}
						}
						this._noteStop(h);
						_notesplaying[pitch] = null;
					}
				}
				this._playNotes(g);
			}
		}
	}
	Player.prototype._stepNotesPlaying = function() {
		for (let channel = 0; channel < 16; channel++) {
			const _notesPlaying = this.notesPlayingChannel[channel];
			for (let i = 0; i < _notesPlaying.length; i++) {
				var note = _notesPlaying[i];
				if (!note) continue;
				if (!note.ended) {
					note.start = true;
					var _release = note.release;
					if (_release) {
						if (!note.setDurationInf && (this.currentPulse >= note.nodeOff)) {
							_release.ended = true;
						} else {
							if (this.currentPulse < note.nodeOn) {
								note.ended = true;
							}
						}
						if (_release.ended) {
							if (!("startTime" in _release)) {
								_release.startTime = this.date;
							}
							if (_release.duration) {
								note.releaseGainVolume = Math.max(0, (1 - ((this.date - _release.startTime) / _release.duration)));
								if ((this.date - _release.startTime) >= _release.duration) {
									note.ended = true;
								}
							} else {
								note.ended = true;
							}
						}
					}
					this._updateEffectNote(note);
				}
				if (note.ended) {
					this._noteStop(note);
					_notesPlaying[i] = null;
				}
			}
		}
	}
	Player.prototype.loadMid = function(data) {
		this.cleanup();
		var loadedTime = Date.now();
		var _this = this;
		parseMidiData({
			data: data,
			onload: function(result) {
				_this.loadedTime = Date.now() - loadedTime;
				_this._init(result);
				if (_this.onload) {
					_this.onload();
				}
			}
		});
	}
	Player.prototype.toJSON = function() {
		var tracks = [];
		for (var i = 0; i < this.trackQueue.length; i++) {
			tracks.push(this.trackQueue[i].toJSON());
		}
		return {
			tracks,
			timeDivision: this.timeDivision,
			formatType: this.formatType,
			duration: this.duration
		}
	}
	Player.prototype.getDuration = function() {
		var duration = 0;
		var _pulseCounterLength = 0;
		var _tracks = [];
		for (var i = 0; i < this.trackQueue.length; i++) {
			var len = this.trackQueue[i].pulseCounterLength;
			if (len > _pulseCounterLength) {
				_pulseCounterLength = len;
			}
			_tracks.push({
				tempoIdx: 0
			})
		}
		var tempoTick = 0;
		var tempo = 500000 / this.timeDivision;
		var time = 0;
		var tempoLen = this.getTempoLength();
		var tempoIdx = 0;
		while (tempoIdx < tempoLen) {
			var _currentPulse = 0;
			for (var i = 0; i < _tracks.length; i++) {
				var _tempoQueue = this.trackQueue[i].tempoQueue;
				_currentPulse = (tempoTick + ((time - duration) / tempo));
				while (_tracks[i].tempoIdx < _tempoQueue.tick.length && _currentPulse >= _tempoQueue.tick[_tracks[i].tempoIdx]) {
					duration += (_tempoQueue.tick[_tracks[i].tempoIdx] - tempoTick) * tempo;
					tempoTick = _tempoQueue.tick[_tracks[i].tempoIdx];
					tempo = _tempoQueue.setting[_tracks[i].tempoIdx] / this.timeDivision;
					_currentPulse = (tempoTick + ((time - duration) / tempo));
					_tracks[i].tempoIdx++;
					tempoIdx++;
				}
			}
			time += 100000;
		}
		duration += (_pulseCounterLength - tempoTick) * tempo;
		return Math.floor(duration / 1000) / 1000;
	}
	Player.prototype._init = function(data) {
		this.currentTime = 0;
		var tracks = data.tracks;
		this.trackQueue = [];
		this.timeDivision = data.timeDivision;
		this.formatType = data.formatType;
		for (var i = 0; i < tracks.length; i++) {
			this.trackQueue.push(new Track(this, i + 1, tracks[i]));
		}
		this.tempo = 500000 / data.timeDivision;
		this.duration = this.getDuration();
		this.resetTrack();
	}
	Player.prototype.loadMidiFromData = function(data) {
		this.cleanup();
		this._init(data);
		if (this.onload) {
			this.onload();
		}
	}
	return {
		Player,
		MIDI_INSTRUMENT,
		DRUMS_MIDI,
		DRUM_INFO,
		INSTRUMENT_INFO,
		SOUNDBANK_FILES,
		formats: ["mid", "rmi", "midi"],
		version: "v1.2"
	}
}());