/*
 * YTPMV Cartoon Instruments v1.3.0
 * 
 * The YTPMV Cartoon Sounds My Little Pony & Peppa Pig
 * audio program used: Adobe Premiere & Adobe Audition & Audio Editor & Bandican & OBS Studio & Scratch 3
 * 
 * soundbank size 1.93 MB
 */

var AnimTredInstruments = (function() {
  var DRUM_INFO = {
    "acoustic bass drum": "AcousticBassDrum",
    "side stick": "SideStick",
    "snare drum": "SnareDrum",
    "hand": "HandClap",
    "closed hi hat": "ClosedHat",
    "open hi hat": "OpenHat",
    "crash cymbal": "Crash",
    "low floor tom": "TomC1",
    "high floor tom": "TomC2",
    "low tom": "TomC3",
    "low mid tom": "TomC4",
    "hi mid tom": "TomC5",
    "high tom": "TomC6",
    "tambourine": "Tambourine",
    "cowbell": "Cowbell",
    "vibraslap": "Vibraslap",
    "hi bongo": "BongoHi",
    "bongo": "BongoLow",
    "mute conga": "MuteConga",
    "open conga": "OpenConga",
    "conga": "Conga",
    "timbale high": "TimbaleHigh",
    "timbale low": "TimbaleLow",
    "high agogo": "HighAgogo",
    "low agogo": "LowAgogo",
    "cabasa": "Cabasa",
    "short whistle": "ShortWhistle",
    "long whistle": "LongWhistle",
    "short guiro": "GuiroShort",
    "long guiro": "GuiroLong",
    "claves": "Claves",
    "wood": "HiWoodBlock",
    "low wood": "LowWoodBlock",
    "cuica": "Cuica",
    "low cuica": "CuicaLow",
    "mute triangle": "MuteTriangle",
    "triangle": "Triangle",
    "unknown_0": "Unknown0",
    "unknown_1": "Unknown1",
    "unknown_2": "Unknown2",
    "unknown_3": "Unknown3"
  }
  var INSTRUMENT_INFO = {
    "piano": [[60, "Piano_C3", 0.1, null], [84, "Piano_C5", 0.1, null]],
    "electric piano": [[60, "ElectricPiano", 0.1, null]],
    "marimba": [[60, "Marimba_C3", 0.1, null], [84, "Marimba_C5", 0.1, null]],
    "vibraphone": [[60, "Vibraphone", 0.1, null]],
    "music box": [[60, "MusicBox", 0.25, null]],
    "tubular bells": [[60, "TubularBells", 2, null]],
    "organ": [[60, "Organ", 0.1, [1.35172, 2.4562]]],
    "church organ": [[60, "ChurchOrgan", 0.1, [0.14413, 0.15951]]],
    "accordion": [[60, "Accordion", null, [0.2295, 0.23333]]],
    "tango accordion": [[60, "TangoAccordion", null, [0.03518, 0.05462]]],
    "harmonica": [[60, "Harmonica", null, [0.22208, 0.24501]]],
    "guitar": [[60, "Guitar", 0.1, null]],
    "electric guitar": [[60, "ElectricGuitar", 0.1, null]],
    "overdriven guitar": [[60, "OverdrivenGuitar", null, [0.27618, 0.64141]]],
    "bass": [[36, "Bass_C2", 0.1, null], [48, "Bass_C3", 0.1, null]],
    "violin": [[60, "Violin", 0.2, [0.09934, 0.64666]]],
    "cello": [[60, "Cello_C3", 0.2, [0.65718, 1.24772]], [72, "Cello_C4", 0.2, [0.94187, 1.22214]]],
    "tremolo-string-1": [[60, "TremoloString1", 0.2, [0.09934, 0.64666]]],
    "tremolo-string-2": [[60, "TremoloString2", 0.2, [0.65001, 1.27384]]],
    "pizzicato": [[60, "Pizzicato", 0.25, null]],
    "timpani": [[60, "Timpani", 0.25, null]],
    "choir": [[60, "Choir", 0.1, [0.386, 0.654]]],
    "orchestra hit": [[60, "OrchestraHit", 0.25, null]],
    "trumpet": [[60, "Trumpet", null, [0.236, 0.278]]],
    "trumbone": [[60, "Trumbone", null, [1.60053, 1.635]]],
    "saxophone": [[60, "Saxophone", null, [0.44307, 1.92369]]],
    "clarinet": [[60, "Clarinet", null, [0.27574, 0.29464]]],
    "bassoon": [[36, "Bassoon_C1", null, [0.084, 0.16]], [48, "Bassoon_C2", null, [0.08, 0.325]], [60, "Bassoon_C3", null, [0.067, 0.339]]],
    "flute": [[60, "Flute", null, [1.85452, 4.09411]]],
    "wooden flute": [[60, "WoodenFlute", null, [1.16056, 1.2029]]],
    "whistle": [[60, "Whistle", null, [1.13851, 1.35201]]],
    "synth lead": [[48, "SynthLead_C2", 0.1, [0.1, 1.5]], [60, "SynthLead_C3", 0.1, [0.1, 1.5]], [72, "SynthLead_C4", 0.1, [0.1, 1.5]], [84, "SynthLead_C5", 0.1, [0.1, 1.5]]],
    "synth pad": [[60, "SynthPad", 0.1, [1.55, 2]]],
    "warm": [[60, "Warm_C3", 0.25, [0.63658, 0.8455]], [72, "Warm_C4", 0.25, [0.57448, 0.7529]]],
    "bowed": [[60, "Bowed_C3", 0.25, [0.63658, 0.8455]], [72, "Bowed_C4", 0.25, [0.57448, 0.7529]]],
    "metallic": [[60, "Metallic", 0.5, null]],
    "sitar": [[60, "Sitar", 0.8, null]],
    "agogo": [[60, "Agogo", null, null]],
    "steel drum": [[60, "SteelDrum", 0.25, null]],
    "taiko drum": [[60, "TaikoDrum", 0.25, null]],
    "melodic tom": [[60, "MelodicTom", 0.1, null]],
    "synth drum": [[60, "SynthDrum", 0.25, null]],
    "reverse cymbal": [[60, "ReverseCymbal", null, null]]
  }
  var SOUNDBANKS = {
    "My little pony friendship is magic season 1 episode 18 _The Show Stoppers": {
      "Piano_C3": "instruments/mlp-s1-89-C3.wav",
      "Piano_C5": "instruments/mlp-s1-89-C5.wav"
    },
    "My Little Pony _ Friendship is Magic Season 1 Episode 17": {
      "Marimba_C3": "instruments/mlp-s1-fim-30_C3.wav",
      "Marimba_C5": "instruments/mlp-s1-fim-30_C5.wav"
    },
    "My Little Pony Friendship Is Magic Season 7 Episode 9": {
      "OverdrivenGuitar": "instruments/mlp-24-1.wav",
      "ElectricGuitar": "instruments/mlp-s7e9-e-guitar.wav",
      "Sitar": "instruments/mlp-24-1-sitar.wav"
    },
    "Daddy Pig Plays The Drums!  | Peppa Pig - Official Channel": {
      "TaikoDrum": "instruments/peppa-pig-drums-53.wav",
      "GuiroLong": "drums/peppa-pig-drums-63-0.wav",
      "GuiroShort": "drums/peppa-pig-drums-63-1.wav",
      "Unknown0": "drums/peppa-pig-drums-107.wav",
      "BongoLow": "drums/peppa-pig-drums-30-0.wav",
      "BongoHi": "drums/peppa-pig-drums-30-1.wav",
      "Tambourine": "drums/peppa-pig-drums-51.wav"
    },
    "My Little Pony Season 5 Episode 9": {
      "Warm_C3": "instruments/mlp-fim-s5e9-750-1-C3.wav",
      "Warm_C4": "instruments/mlp-fim-s5e9-750-1-C4.wav",
      "Bowed_C3": "instruments/mlp-fim-s5e9-750-2-C3.wav",
      "Bowed_C4": "instruments/mlp-fim-s5e9-750-2-C4.wav",
      "MelodicTom": "instruments/mlp-s5e9-471-1.wav",
      "SynthDrum": "instruments/mlp-s5e9-471-2.wav",
      "TomC1": "drums/mlp-fim-s5e9-471-1.wav",
      "TomC2": "drums/mlp-fim-s5e9-471-2.wav",
      "TomC3": "drums/mlp-fim-s5e9-471-3.wav",
      "TomC4": "drums/mlp-fim-s5e9-471-4.wav",
      "TomC5": "drums/mlp-fim-s5e9-471-5.wav",
      "TomC6": "drums/mlp-fim-s5e9-471-6.wav",
      "Unknown1": "drums/mlp-fim-s5e9-d.wav"
    },
    "Pinkie the Babysitter (Baby Cakes) | MLP: FiM [HD]": {
      "SnareDrum": "drums/pinkie-pie-60.wav",
      "Crash": "drums/pinkie-pie-61.wav"
    },
    "Friendship is Randomly Musical 8": {
      "Cuica": "drums/derpy-67-0.wav",
      "CuicaLow": "drums/derpy-67-1.wav"
    },
    "When I'm Sweeping": {
      "HandClap": "drums/rainbowdash-applejack-handclap.wav"
    },
    "Friendship is Musical Season 2 First Half": {
      "Bass_C2": "instruments/daisy-143-C1.wav",
      "Bass_C3": "instruments/daisy-143-C2.wav"
    },
    "Bright Mac and Pear Butter's Love Story (The Perfect Pear) | MLP: FiM [HD]": {
      "Guitar": "instruments/mlp-pearbutter-193.wav"
    },
    "My Little Pony: Friendship is Magic - Season 4 Episode 3": {
      "ElectricPiano": "instruments/mlp-s4e3-820-1.wav",
      "ChurchOrgan": "instruments/mlp-s4e3-820-2.wav"
    },
    "Friendship is Randomly Musical 5": {
      "Bassoon_C1": "instruments/pinkie-pie-77-C1.wav",
      "Bassoon_C2": "instruments/pinkie-pie-77-C2.wav",
      "Bassoon_C3": "instruments/pinkie-pie-77-C3.wav"
    },
    "My Little Pony : Friendship is Magic Season 1 Episode 22": {
      "Organ": "instruments/mlp-s1e22-176.wav"
    },
    "My little pony-season 8 episode 10:The Break Up Breakdown": {
      "OpenHat": "drums/mlp-fim-s8e10-grass-398-1.wav",
      "ClosedHat": "drums/mlp-fim-s8e10-grass-398-2.wav",
      "Cabasa": "drums/mlp-fim-s8e10-grass-398-3.wav",
      "Unknown2": "drums/mlp-fim-s8e10-22-1.wav",
      "Vibraslap": "drums/mlp-fim-s8e10-22-2.wav"
    },
    "My Little Pony Friendship is Magic Season 5 Episode 6 Appleloosa's Most Wanted": {
      "Harmonica": "instruments/mlp-s5e6-235.wav"
    },
    "My Little Pony Friendship Is Magic Season 4 Episode 21 Testing, 1, 2, 3 HD": {
      "Clarinet": "instruments/mlp-fim-s4e21-282.wav"
    },
    "Peppa Pig - Musical Instruments (full episode)": {
      "Violin": "instruments/peppa-pig-mi-69-violin.wav",
      "Cello_C3": "instruments/peppa-pig-mi-69-cello_C3.wav",
      "Cello_C4": "instruments/peppa-pig-mi-69-cello_C4.wav",
      "TremoloString1": "instruments/peppa-pig-mi-69-tm1.wav",
      "TremoloString2": "instruments/peppa-pig-mi-69-tm2.wav",
      "Metallic": "instruments/peppa-pig-mi-69-metallic.wav",
      "Timpani": "instruments/peppa-pig-mi-114.wav",
      "Accordion": "instruments/peppa-pig-mi-131-1.wav",
      "TangoAccordion": "instruments/peppa-pig-mi-131-2.wav"
    },
    "Friendship is Musical | Season 1 Episode 13-14": {
      "SynthPad": "instruments/mlp-s1e13-fim-40.wav"
    },
    "Whistling Competition Between Peppa Pig and Suzy Sheep": {
      "Whistle": "instruments/peppa-pig-w-4.wav"
    },
    "MLP FIM: Season 8 Episode 26": {
      "ReverseCymbal": "instruments/mlp-fim-s8e26-850.wav"
    },
    "My Little Pony Friendship is Magic season 2 episode 22 \"Hurricane Fluttershy\"": {
      "Saxophone": "instruments/mlp-fim-s2e22-953.wav"
    },
    "Friendship is Musical | Season 5 (First Half)": {
      "Flute": "instruments/mlp-s5-117.wav"
    },
    "Friendship is Musical | Season 3": {
      "Pizzicato": "instruments/mlp-s3-applebloom-168.wav",
      "SteelDrum": "instruments/mlp-s3-fim-5.wav",
      "AcousticBassDrum": "drums/pinkie-pie-83.wav"
    },
    "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon": {
      "WoodenFlute": "instruments/peppa-pig-mmiwm-144.wav",
      "OpenConga": "drums/peppa-pig-mmiwm-64-0.wav",
      "MuteConga": "drums/peppa-pig-mmiwm-64-1.wav",
      "Conga": "drums/peppa-pig-mmiwm-64-2.wav"
    },
    "Friendship is Randomly Musical 1": {
      "HiWoodBlock": "drums/twilight-wood-67-0.wav",
      "LowWoodBlock": "drums/twilight-wood-67-1.wav"
    },
    "[Tridashie] Friendship is Randomly Musical 2 [REUPLOAD]": {
      "Triangle": "drums/applejack-30-0.wav",
      "MuteTriangle": "drums/applejack-30-1.wav"
    },
    "MLP-FiM S1E22 - A Bird in the Hoof": {
      "Claves": "drums/mlp-s1e22-30s.wav",
      "TubularBells": "instruments/mlp-s1e22-42.wav"
    },
    "My Little Pony_ Friendship is Magic _ The Return of Harmony Part 1 & 2 _ FULL EPISODE _ MLP": {
      "TimbaleHigh": "drums/mlp-return-harmony-27-50-1.wav",
      "TimbaleLow": "drums/mlp-return-harmony-27-50-2.wav"
    },
    "My Little Pony friendship is magic season 2 episode 7 \"May the Best Pet Win!\"": {
      "LongWhistle": "drums/mlp-fim-s2e7-425-0.wav",
      "ShortWhistle": "drums/mlp-fim-s2e7-425-1.wav"
    },
    "My Little Pony: FIM Season 9 Episode 15 (2,4,6 Greaaat)": {
      "Agogo": "instruments/mlp-fim-s9e15-937-agogo.wav",
      "HighAgogo": "drums/mlp-fim-s9e15-937-0.wav",
      "LowAgogo": "drums/mlp-fim-s9e15-937-1.wav"
    },
    "Friendship is Musical | Season 1 Episode 21-22": {
      "Choir": "instruments/mlp-fim-s1-fluttershy-1.wav",
      "SynthLead_C2": "instruments/mlp-s1e21-fim-3-C2.wav",
      "SynthLead_C3": "instruments/mlp-s1e21-fim-3-C3.wav",
      "SynthLead_C4": "instruments/mlp-s1e21-fim-3-C4.wav",
      "SynthLead_C5": "instruments/mlp-s1e21-fim-3-C5.wav"
    },
    "My Little Pony Friendship is Magic season 2 episode 19 \"Putting Your Hoof Down\"": {
      "Cowbell": "drums/mlp-s2e19-38.wav"
    },
    "My Little Pony friendship is magic season 2 episode 10 \"Secret of My Excess\"": {
      "Vibraphone": "instruments/mlp-fim-s2e10-49.wav"
    },
    "Friendship is Randomly Musical 3 [REUPLOAD]": {
      "MusicBox": "instruments/pinkie-pie-14.wav",
    },
    "Friendship is Musical | Season 1 Episode 5-6": {
      "OrchestraHit": "instruments/mlp-s1-fim-109.wav"
    },
    "[1080p] My little Pony Friendship is Magic Season 6 Episode 14 The Cart Before the Ponies": {
      "Trumbone": "instruments/mlp-s6e14-915.wav"
    },
    "My Little Pony: friendship is magic | Swarm of the Century | FULL EPISODE | MLP": {
      "Trumpet": "instruments/mlp-swarm-od-the-century-1290.wav"
    },
    "The Mane Six Try to Be Friends Of the Yaks - MLP_ Friendship Is Magic [HD]": {
      "SideStick": "drums/The_Mane_Six_Try_to_Be_Friends_Of_the_Yaks-MLP_Friendship_Is_Magic_1.wav",
      "Unknown3": "drums/The_Mane_Six_Try_to_Be_Friends_Of_the_Yaks-MLP_Friendship_Is_Magic_2.wav",
    }
  }
  var MIDI_INSTRUMENT = [
    "piano", "piano", "piano", "piano",
    "electric piano", "electric piano", "piano", "piano",
    "marimba", "vibraphone", "music box", "vibraphone",
    "marimba", "marimba", "tubular bells", "guitar",
    "organ", "organ", "organ", "church organ",
    "organ", "accordion", "harmonica", "tango accordion",
    "guitar", "guitar", "electric guitar", "electric guitar",
    "electric guitar", "overdriven guitar", "overdriven guitar", "overdriven guitar",
    "bass", "bass", "bass", "bass",
    "bass", "bass", "bass", "bass",
    "violin", "violin", "cello", "cello",
    "tremolo-string-1", "pizzicato", "bass", "timpani",
    "tremolo-string-1", "tremolo-string-2", "tremolo-string-1", "tremolo-string-1",
    "choir", "choir", "choir", "orchestra hit",
    "trumpet", "trumpet", "trumpet", "trumpet",
    "trumbone", "trumpet", "trumpet", "trumpet",
    "saxophone", "saxophone", "saxophone", "saxophone",
    "bassoon", "clarinet", "bassoon", "clarinet",
    "flute", "flute", "wooden flute", "wooden flute",
    "wooden flute", "wooden flute", "whistle", "wooden flute",
    "synth lead", "synth lead", "wooden flute", "synth lead",
    "synth lead", "choir", "synth lead", "synth lead",
    "synth pad", "warm", "synth pad", "choir",
    "bowed", "metallic", "choir", "tremolo-string-2",
    "synth pad", "violin", "synth pad", "choir",
    "vibraphone", "bowed", "choir", "harmonica",
    "sitar", "pizzicato", "bass", "bass",
    "marimba", "bassoon", "violin", "bassoon",
    "vibraphone", "agogo", "steel drum", "marimba",
    "taiko drum", "melodic tom", "synth drum", "reverse cymbal",
    "electric guitar", "wooden flute", "steel drum", "wooden flute",
    "vibraphone", "steel drum", "choir", "steel drum"
  ];
  var DRUMS_MIDI = [[
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
    "unknown_2",
    "unknown_1",
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
    "tambourine",
    null,
    "unknown_0",
    null,
    null
  ], null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, 
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "unknown_3"
  ]];
  var soundbank_assets = {"instruments/daisy-143-C1.wav":"5b82f2943554194b4845b19cdfb53e8e.wav","instruments/daisy-143-C2.wav":"c15ea41de185dc3db1a7692bd203eaf4.wav","instruments/mlp-24-1.wav":"cee852d2ad120bb58ab693f1393f21f4.wav","instruments/mlp-24-1-sitar.wav":"fb082795cd6cbedce87cf9b11f96b182.wav","instruments/mlp-fim-s1-fluttershy-1.wav":"b857b64ec7b6aa0f2aa544f4d16628aa.wav","instruments/mlp-fim-s2e10-49.wav":"aa33f6c14e25c84c714d4694b7d28d8c.wav","instruments/mlp-fim-s2e22-953.wav":"050460f1155e9f7c20f3f5ef0817a694.wav","instruments/mlp-fim-s4e21-282.wav":"b4aa02278b01c7e0316d3431181027ce.wav","instruments/mlp-fim-s5e9-750-1-C3.wav":"a0f250b0545da3b91096a323cba2b9d4.wav","instruments/mlp-fim-s5e9-750-1-C4.wav":"eecd2c23544c0d696a6354de85d6dd5d.wav","instruments/mlp-fim-s5e9-750-2-C3.wav":"0795db3d998b2ade5938a503cb66a249.wav","instruments/mlp-fim-s5e9-750-2-C4.wav":"b867845cda0f6b64f9872543004b80e1.wav","instruments/mlp-fim-s8e26-850.wav":"d34f2e283f16163c40ceaa0f2a62daa7.wav","instruments/mlp-fim-s9e15-937-agogo.wav":"3f0e6e12b3f0631bfb98eb71cde85115.wav","instruments/mlp-pearbutter-193.wav":"1bcf34397a2864c6d3edeb84df86220c.wav","instruments/mlp-s1-89-C3.wav":"5996e03a2936c062775f7b65feea4306.wav","instruments/mlp-s1-89-C5.wav":"3de435c82d356209ca7206adef01d893.wav","instruments/mlp-s1e13-fim-40.wav":"23e466d7866c3c98f3c3c82ce12073ac.wav","instruments/mlp-s1e21-fim-3-C2.wav":"d213faa1361ad45b256b297ac47eb109.wav","instruments/mlp-s1e21-fim-3-C3.wav":"a87c1d76df3d671583babf04df18f880.wav","instruments/mlp-s1e21-fim-3-C4.wav":"278395913f05700df5dd4e753d00d172.wav","instruments/mlp-s1e21-fim-3-C5.wav":"42a22d198fb154d716878b7677533c52.wav","instruments/mlp-s1e22-42.wav":"56f494efdcf232dcb6411882ef49d98e.wav","instruments/mlp-s1e22-176.wav":"bfa0bffa5f30025604d92decbc6fda94.wav","instruments/mlp-s1-fim-30_C3.wav":"2779ca5545b5a0b7f2e8cbbc84cd16f7.wav","instruments/mlp-s1-fim-30_C5.wav":"33c43a1cba1ca096e18c4d409a0563ec.wav","instruments/mlp-s1-fim-109.wav":"f05c5fb5e399c2cd554d6bcfa36c0b2f.wav","instruments/mlp-s3-applebloom-168.wav":"8b85323c69622176e1755bbabd16be89.wav","instruments/mlp-s3-fim-5.wav":"5cb1200f45f1caa0490e5352d8f75ba3.wav","instruments/mlp-s4e3-820-1.wav":"b34033853ebd232730fa85ac9234aac3.wav","instruments/mlp-s4e3-820-2.wav":"2d6038cc3cd52d140b725782a8bea359.wav","instruments/mlp-s5-117.wav":"ee9839505c99a4a6152a9cfc8dba4068.wav","instruments/mlp-s5e6-235.wav":"bd10c2befdc530c7d88c1613eea70277.wav","instruments/mlp-s5e9-471-1.wav":"47ddba8d0ca8f8e1ab1cce6b7fee31cb.wav","instruments/mlp-s5e9-471-2.wav":"f4dd77eefd10c887fb570b5a66e8ad9f.wav","instruments/mlp-s6e14-915.wav":"dc2bf92cc83aba8aea21ec912653557c.wav","instruments/mlp-s7e9-e-guitar.wav":"4eb78c8eb5282f1c67785efe642812bb.wav","instruments/mlp-swarm-od-the-century-1290.wav":"7bcfec35b237684bc8d69ce453d2e67d.wav","instruments/peppa-pig-drums-53.wav":"245e1bc4d3a38d83f7a1b9cf4ff51883.wav","instruments/peppa-pig-mi-69-cello_C3.wav":"ff39120289f8d519182615c5b1c7265b.wav","instruments/peppa-pig-mi-69-cello_C4.wav":"ee542ff3e8a719001061d210415708a0.wav","instruments/peppa-pig-mi-69-metallic.wav":"db1a9e6359a0b7c828abc608de65dca2.wav","instruments/peppa-pig-mi-69-tm1.wav":"5497c174430dcb1e4ce0818fe8ced061.wav","instruments/peppa-pig-mi-69-tm2.wav":"4bd3bbebe295b6011fb2efe63ea3ef99.wav","instruments/peppa-pig-mi-69-violin.wav":"b99f6be970cb5a60ea984ee04efc4539.wav","instruments/peppa-pig-mi-114.wav":"8cef50261497964c53c6e1ebd62c7cb6.wav","instruments/peppa-pig-mi-131-1.wav":"02188b1980dfa2651e7cce7b77d87351.wav","instruments/peppa-pig-mi-131-2.wav":"bc96217c24b92aecb405f89dc8bd2f3d.wav","instruments/peppa-pig-mmiwm-144.wav":"ba31847d76b6461df9ba624c791e2cf3.wav","instruments/peppa-pig-w-4.wav":"b1ca63a3c4c9cc581e06ff8a7d72ebcd.wav","instruments/pinkie-pie-14.wav":"78b50b9f7df3d8f68e70d2914fac7132.wav","instruments/pinkie-pie-77-C1.wav":"791a45a476bf7ecacb8363e8f81e2aea.wav","instruments/pinkie-pie-77-C2.wav":"887539356a977186daa71761c2c97229.wav","instruments/pinkie-pie-77-C3.wav":"85c9af622ab13b666602b2822b862b55.wav","drums/applejack-30-0.wav":"ed9f5c1ebb95082c19ebd57d5be59e6b.wav","drums/applejack-30-1.wav":"fc4f6f51992e3e419fa66e448a50ec3e.wav","drums/derpy-67-0.wav":"e48032612451c1e678363499c0e023b4.wav","drums/derpy-67-1.wav":"ac1a1ebb37d1fa87561476976ea89c3a.wav","drums/mlp-fim-s2e7-425-0.wav":"04fa24c29a117a2d909e07e7a74f97a8.wav","drums/mlp-fim-s2e7-425-1.wav":"92b26c0e47f8a95f114b4ff08acd2835.wav","drums/mlp-fim-s5e9-471-1.wav":"e20b55562446f56167f5d26035125556.wav","drums/mlp-fim-s5e9-471-2.wav":"c20de13cc85190f59001a36b6aed1742.wav","drums/mlp-fim-s5e9-471-3.wav":"ef8cd405f636fbabb30bebba560baadf.wav","drums/mlp-fim-s5e9-471-4.wav":"51331e135568075ecf75049487ecfc0c.wav","drums/mlp-fim-s5e9-471-5.wav":"acd82df4915591ee8bcd9026ed1aa65f.wav","drums/mlp-fim-s5e9-471-6.wav":"9d4ffbcb021f7aeceea4177b8f2f9af4.wav","drums/mlp-fim-s5e9-d.wav":"5356699be9ab729b323248e46525c788.wav","drums/mlp-fim-s8e10-22-1.wav":"83a7ec40b819c15433cb9fb01595ac90.wav","drums/mlp-fim-s8e10-22-2.wav":"baaef28005d09557cdaaf5c4b8ef6b0d.wav","drums/mlp-fim-s8e10-grass-398-1.wav":"9650a1ce06f6974d0d87583953abb996.wav","drums/mlp-fim-s8e10-grass-398-2.wav":"13436060385e9f56699f470002f684e3.wav","drums/mlp-fim-s8e10-grass-398-3.wav":"e0fa4372dd8bf3f5084c7c59c36f297f.wav","drums/mlp-fim-s9e15-937-0.wav":"3bc5dae42f67462a1a404c5f530578b5.wav","drums/mlp-fim-s9e15-937-1.wav":"e4240fac108d6cedef2b01c5660a9a5e.wav","drums/mlp-return-harmony-27-50-1.wav":"8fc789e80accd98fcec5ef1fe411f7cf.wav","drums/mlp-return-harmony-27-50-2.wav":"da1f3d2b8017bc113d9ae357b44c722f.wav","drums/mlp-s1e22-30s.wav":"dd90a36929cf81d7104f912deff65d91.wav","drums/mlp-s2e19-38.wav":"0842c85c0b1fc9439205098d841f210d.wav","drums/peppa-pig-drums-30-0.wav":"3b37d2a34f57c7acd9646a3c950e8c0e.wav","drums/peppa-pig-drums-30-1.wav":"48715f091b5b0a36764461a176502823.wav","drums/peppa-pig-drums-51.wav":"3a2d348e5ab245aebf88a50180637668.wav","drums/peppa-pig-drums-63-0.wav":"e85165b49bfdad8d51f3260f27757eb5.wav","drums/peppa-pig-drums-63-1.wav":"8ff02219c2392a87b63676f4440400e5.wav","drums/peppa-pig-drums-107.wav":"635d445ed1028a0bf8241572b226b922.wav","drums/peppa-pig-mmiwm-64-0.wav":"c5cd516ed67b208e304d9044a0ad282c.wav","drums/peppa-pig-mmiwm-64-1.wav":"cd0e1f9fa28be1201c4bf65fa029372b.wav","drums/peppa-pig-mmiwm-64-2.wav":"1ff7a7155734aba5c8dd55cb8da2ab63.wav","drums/pinkie-pie-60.wav":"6e45138fe315db0b1fd5382fb2719205.wav","drums/pinkie-pie-61.wav":"926d64ca0212e16f105ea73f22799996.wav","drums/pinkie-pie-83.wav":"ded22a9f4d9577ebf7c9ee6fe2f5533c.wav","drums/rainbowdash-applejack-handclap.wav":"e5895ae1ab8019a14c092dd8282b7888.wav","drums/The_Mane_Six_Try_to_Be_Friends_Of_the_Yaks-MLP_Friendship_Is_Magic_1.wav":"d4cc798a8569aa21c7bc70e42ab0cba9.wav","drums/The_Mane_Six_Try_to_Be_Friends_Of_the_Yaks-MLP_Friendship_Is_Magic_2.wav":"336611bd335cb6a5cdc441813ca39006.wav","drums/twilight-wood-67-0.wav":"6ab6ba1221266dbeac014ad0ccb65e48.wav","drums/twilight-wood-67-1.wav":"aa13954cc2451ed74df97582b888410a.wav"};
  function getDrumSpan(program, pitch) {
      var DMO = DRUMS_MIDI[0];
      var DM = DRUMS_MIDI[program] || DMO;
      var drum = DM[pitch] || DMO[pitch];
      if (!drum) return;
      return DRUM_INFO[drum];
  }
  function getInstrumentSpan(program, pitch) {
    var inst = MIDI_INSTRUMENT[program];
    if (!inst) return;
    var spans = INSTRUMENT_INFO[inst];
    if (!spans) return;
    var span = spans[0];
    for (var i = 1; i < spans.length; i++) {
      var s = spans[i];
      if (pitch >= s[0]) span = s;
    }
    return span;
  }
  var WavReader = function(data) {
    this.data = data;
    this.position = 0;
  }
  WavReader.prototype.readInt = function() {
    var val1 = this.data[this.position++];
    var val2 = this.data[this.position++];
    var val3 = this.data[this.position++];
    var val4 = this.data[this.position++];
    return ((((val4 << 24) + (val3 << 16)) + (val2 << 8)) + val1) | 0;
  }
  WavReader.prototype.readUnsignedInt = function() {
    var val1 = this.data[this.position++];
    var val2 = this.data[this.position++];
    var val3 = this.data[this.position++];
    var val4 = this.data[this.position++];
    return ((((val4 << 24) + (val3 << 16)) + (val2 << 8)) + val1) >>> 0;
  }
  WavReader.prototype.readShort = function() {
    var val1 = this.data[this.position++];
    var val2 = this.data[this.position++];
    return (((val2 << 8) + val1) << 16) >> 16;
  }
  WavReader.prototype.readUnsignedShort = function() {
    var val1 = this.data[this.position++];
    var val2 = this.data[this.position++];
    return ((val2 << 8) + val1) >>> 0;
  }
  WavReader.prototype.readSub = function(len) {
    var result = this.data.subarray(this.position, this.position + len);
    this.position += len;
    return result;
  }
  WavReader.prototype.readString = function(length) {
    var str = "";
    for (var i = 0; i < length; i++) 
      str += String.fromCharCode(this.data[this.position++]);
    return str;
  }
  WavReader.prototype.bytesAvailable = function() {
    return this.data.length - this.position;
  }
  WavReader.prototype.getLength = function() {
    return this.data.length;
  }
  WavReader.prototype.getData = function() {
    return this.data;
  }
  WavReader.prototype.extractChunk = function(desiredType) {
    this.position = 12;
    while (this.bytesAvailable() > 8) {
      var chunkType = this.readString(4);
      var chunkSize = this.readUnsignedInt();
      if (chunkType == desiredType) 
        return new WavReader(this.readSub(chunkSize));
      this.position += chunkSize;
    }
    return null;
  }
  WavReader.prototype.readReader = function() {
    var riffStr = this.readString(4);
    if (riffStr != "RIFF") 
      throw new Error("WAVFile: bad file header");
    var lengthInHeader = this.readInt();
    if (this.getLength() != (lengthInHeader + 8)) 
      console.log("WAVFile: bad RIFF size; ignoring");
    var wavStr = this.readString(4);
    if (wavStr != "WAVE") 
      throw new Error("WAVFile: not a WAVE file");
    return { lengthInHeader: lengthInHeader };
  }
  function decodeWav(audioContext, data) {
    var stepTable = [7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767];
    var indexTable = [-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8];
    var reader = new WavReader(data);
    reader.readReader();
    var formatChunk = reader.extractChunk("fmt ");
    if (formatChunk.getLength() < 16) 
      throw new Error("WAVFile: format chunk is too small");
    var encoding = formatChunk.readUnsignedShort();
    var channels = formatChunk.readUnsignedShort();
    var rate = formatChunk.readUnsignedInt();
    var bytesPerSecond = formatChunk.readUnsignedInt();
    var blockAlignment = formatChunk.readUnsignedShort();
    var bitsPerSample = formatChunk.readUnsignedShort();
    var adpcmBlockSize = 0;
    var compressedData = reader.extractChunk("data").data;
    var sampleCount = 0;
    if (encoding == 17) {
			if (formatChunk.getLength() < 20) throw Error("WAVFile: adpcm format chunk is too small");
			if (channels != 1) throw Error("WAVFile: adpcm supports only one channel (monophonic)");
			formatChunk.position += 2;
      var samplesPerBlock = formatChunk.readUnsignedShort();
      adpcmBlockSize = ((samplesPerBlock - 1) / 2) + 4;
      var factChunk = reader.extractChunk("fact");
      if ((factChunk != null) && (factChunk.length == 4)) {
				sampleCount = factChunk.readUnsignedInt();
      } else {
				sampleCount = 2 * compressedData.length;
      }
    } else {
      sampleCount = (compressedData.length / 2) | 0;
    }
    var resD = audioContext.createBuffer(channels, sampleCount, rate);
    var lData = resD.getChannelData(0);
    var sidx = 0;
    var lidx = 0;
    if (encoding == 17) {
      var sample = 0;
      var index = 0;
      var step = 0;
      var code = 0;
      var delta = 0;
      var lastByte = -1;
      while (true) {
        if (((sidx % adpcmBlockSize) == 0) && (lastByte < 0)) {
          if ((compressedData.length - sidx) <= 0) break;
          sample = (((compressedData[sidx++] + (compressedData[sidx++] << 8)) << 16) >> 16);
          index = compressedData[sidx++];
          sidx++;
          if (index > 88) index = 88;
          lData[lidx++] = sample / 32767;
        } else {
          if (lastByte < 0) {
            if ((compressedData.length - sidx) <= 0) break;
            lastByte = compressedData[sidx++];
            code = lastByte & 0xF;
          } else {
            code = (lastByte >> 4) & 0xF;
            lastByte = -1;
          }
          step = stepTable[index];
          delta = 0;
          if (code & 4) delta += step;
          if (code & 2) delta += step >> 1;
          if (code & 1) delta += step >> 2;
          delta += step >> 3;
          index += indexTable[code];
          if (index > 88) index = 88;
          if (index < 0) index = 0;
          sample += (code & 8) ? -delta : delta;
          if (sample > 32767) sample = 32767;
          if (sample < -32768) sample = -32768;
          lData[lidx++] = sample / 32767;
        }
      }
    } else {
      while (sidx < compressedData.length) {
        lData[lidx++] = (((compressedData[sidx++] + (compressedData[sidx++] << 8)) << 16) >> 16) / 32767;
      }
    }
    return resD;
  }
  function loaderMidiData(midiData) {
    var _data = new Uint8Array(midiData);
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
        } else 
          return value + temp;
      }
      throw new Error("Unexpected end of input");
    }
    var _readUTFBytes = function(byteCount) {
      var value = "";
      var count = byteCount;
      while (count--)
        value += String.fromCharCode(_data[index++]);
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
        if (chunkType == desiredType) return [index, chunkSize];
        index += chunkSize;
      }
    }
    var originalIndex = index;
    var tracks = [];
    var trackID = 0;
    var trackIndex = 0;
    var trackSize = 0;
    var startTime = Date.now();
    var formatType = 0;
    var trackLength = 0;
    var timeDivision = 0;
    var read = function() {
      var midID = _readUTFBytes(4);
      switch(midID) {
        case "RIFF":
          var lengthInHeader = _readInt();
          if (dataLengthOriginal != (lengthInHeader + 8)) console.log("bad RIFF size; ignoring");
          if (_readUTFBytes(4) !== "RMID") throw "Invalid RMI file";
          var cdata = _extractChunk('data');
          if (cdata) {
            originalIndex = cdata[0];
            dataLengthOriginal = cdata[1];
          } else {
            throw "RMI Missing Data";
          }
          break;
      }
      index = originalIndex;
      midID = _readUTFBytes(4);
      if (midID !== "MThd") throw "Invalid MIDI file: " + midID;
      if (_readBytes(4) !== 6) throw "Invalid MIDI file";
      formatType = _readBytes(2);
      trackLength = _readBytes(2);
      timeDivision = _readBytes(2);
    }
    var readTrack = function() {
      _dataLength = dataLengthOriginal;
      var chuckId = _readUTFBytes(4);
      if (!(chuckId == "MTrk")) throw "MTrk not found for track number " + (trackID + 1) + " - invalid MIDI file";
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
      trackIndex = index;
      trackSize = _readBytes(4);
      _dataLength = trackSize + index;
      var step = function() {
        while ((index < _dataLength) && ((Date.now() - startTime) < 100)) {
          pulseCounter += _readVariableLength() || 0;
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
              for (var i = 0; i < ii; i++) dat.push(_data[index++]);
              systemExclusive.tick.push(pulseCounter);
              systemExclusive.data.push(dat);
              systemExclusive.fx.push(event - 240);
            } else {
              if (event > 127) {
                midiChannel = event % 16;
                eventTypeValue = event - midiChannel;
              } else {
                index--;
              }
              parameter1 = _data[index++];
              if (!(eventTypeValue == 192 || eventTypeValue == 208)) parameter2 = _data[index++];
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
                  throw "Unknown event" + ((event > 127) ? "" : " (running)") + ":" + event;
              }
            }
          }
        }
        var trackEnd = index < _dataLength;
        if (trackEnd) {
          return false;
        } else {
          if (index !==  _dataLength) throw "Track number " + (trackID + 1) + " has overrun - invalid MIDI file"; 
          return true;
        }
      }
      return function() {
        var mEnd = step();
        if (mEnd) {
          tracks.push({
            notes: {
              channel: noteChannel,
              pitch: notePitch,
              tickOff: noteTickOff,
              tickOn: noteTickOn,
              velocity: noteVelocity,
            },
            tempos: tempos,
            pitchBends: pitchBends,
            controllers: controllers,
            texts: texts,
            keyPressure: keyPressure,
            channelPressure: channelPressure,
            programs: programs,
            timeSignature: timeSignature,
            keySignature: keySignature,
            systemExclusive: systemExclusive,
            pulseCounterLength: pulseCounter
          });    
          return true;
        } else {
          return false;
        }
      }
    }
    var mp = null;
    var mInterval = null;
    var minfo = {};
    var isRunning = false;
    var state = 0;
    var fstep = function() {
      startTime = Date.now();
      if (!isRunning) return;
      try {
        if (state == 0) {
          read();
          state = 1;
        }
        var gfd = true;
        while(gfd) {
          if (mp) {
            var a = mp();
            if (a) {
              mp = null;
              trackID++;
            } else gfd = false;
          } else {
            if (trackID < trackLength) mp = readTrack();
            else gfd = false;
          }
        }
      } catch(e) {
        if (isRunning) {
          isRunning = false;
          clearInterval(mInterval);  
        }
        if (minfo.onerror) minfo.onerror(e);
        return;
      }
      if (trackID < trackLength) {
        if (minfo.onprogress && isRunning) minfo.onprogress((index - trackIndex) / trackSize, trackID, trackLength);
      } else {
        isRunning = false;
        clearInterval(mInterval);
        if (minfo.onload) minfo.onload({tracks: tracks, timeDivision: timeDivision, formatType: formatType});
      }
    };
    minfo.start = function() {
      if (!isRunning) {
        isRunning = true;
        mInterval = setInterval(fstep, 20);
      }
    }
    minfo.stop = function() {
      if (isRunning) {
        isRunning = false;
        clearInterval(mInterval);
      }
    }
    return minfo;
  }
  var Track = function(trackID, data) {
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
      for (var index = 0; index < 16; index++)
        lasts[index] = null;
      this.programQueue.last = [];
      for (var index = 0; index < this.programQueue.tick.length; index++) {
        var _g = this.programQueue.channel[index];
        this.programQueue.last.push(lasts[_g]);
        lasts[_g] = index;
      }
    }
    if (!("last" in this.controllerQueue)) {
      var lasts = new Array(2048);
      for (var index = 0; index < 2048; index++)
        lasts[index] = null;
      this.controllerQueue.last = [];
      for (var index = 0; index < this.controllerQueue.tick.length; index++) {
        var _g = this.controllerQueue.control[index] + (128 * this.controllerQueue.channel[index]);
        this.controllerQueue.last.push(lasts[_g]);
        lasts[_g] = index;
      }
    }
    if (!("last" in this.pitchBendQueue)) {
      var lasts = new Array(16);
      for (var index = 0; index < 16; index++)
        lasts[index] = null;
      this.pitchBendQueue.last = [];
      for (var index = 0; index < this.pitchBendQueue.tick.length; index++) {
        var _g = this.pitchBendQueue.channel[index];
        this.pitchBendQueue.last.push(lasts[_g]);
        lasts[_g] = index;
      }
    }
    if (!("last" in this.keyPressureQueue)) {
      var lasts = new Array(16);
      for (var index = 0; index < 16; index++)
        lasts[index] = null;
      this.keyPressureQueue.last = [];
      for (var index = 0; index < this.keyPressureQueue.tick.length; index++) {
        var _g = this.keyPressureQueue.channel[index];
        this.keyPressureQueue.last.push(lasts[_g]);
        lasts[_g] = index;
      }
    }
    if (!("last" in this.channelPressureQueue)) {
      var lasts = new Array(16);
      for (var index = 0; index < 16; index++)
        lasts[index] = null;
      this.channelPressureQueue.last = [];
      for (var index = 0; index < this.channelPressureQueue.tick.length; index++) {
        var _g = this.channelPressureQueue.channel[index];
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
    };
  }
  Track.prototype.reset = function() {
    this.noteIndex = 0;
    this.controllerIndex = 0;
    this.pitchBendIndex = 0;
    this.tempoTracker = 0;
    this.programIndex = 0;
  }
  Track.prototype.update = function(mse) {
    var _t = mse.currentPulse;
    var pitchBendChannel = mse.pitchBendChannel;
    var programChannel = mse.programChannel;
    if (this.pitchBendQueue.tick.length > 0) {
      while (this.pitchBendIndex < this.pitchBendQueue.tick.length && _t >= this.pitchBendQueue.tick[this.pitchBendIndex]) {
        pitchBendChannel[this.pitchBendQueue.channel[this.pitchBendIndex]] = ((this.pitchBendQueue.pitch[this.pitchBendIndex] / 8192) - 1);
        this.pitchBendIndex++;
      }
      this.pitchBendIndex--;
      while (this.pitchBendIndex >= 0 && _t < this.pitchBendQueue.tick[this.pitchBendIndex]) {
        var last = this.pitchBendQueue.last[this.pitchBendIndex];
        if (last == null) 
          pitchBendChannel[this.pitchBendQueue.channel[this.pitchBendIndex]] = 0;
        else 
          pitchBendChannel[this.pitchBendQueue.channel[last]] = (this.pitchBendQueue.pitch[last] / 8192) - 1;
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
        if (last == null) 
          programChannel[this.programQueue.channel[this.programIndex]] = 0;
        else 
          programChannel[this.programQueue.channel[last]] = this.programQueue.program[last];
        
        this.programIndex--;
      }
      this.programIndex++;
    }
    if (this.controllerQueue.tick.length > 0) {
      while ((this.controllerIndex < this.controllerQueue.tick.length) && (_t >= this.controllerQueue.tick[this.controllerIndex])) {
        var channel = this.controllerQueue.channel[this.controllerIndex];
        var control = this.controllerQueue.control[this.controllerIndex];
        var value = this.controllerQueue.value[this.controllerIndex];
        mse._setController(channel, control, value, false);
        this.controllerIndex++;
      }
      this.controllerIndex--;
      while ((this.controllerIndex >= 0) && (_t < this.controllerQueue.tick[this.controllerIndex])) {
        var last = this.controllerQueue.last[this.controllerIndex];
        if (last == null) {
          var channel = this.controllerQueue.channel[this.controllerIndex];
          var control = this.controllerQueue.control[this.controllerIndex];
          mse._setController(channel, control, null);
        } else {
          var channel = this.controllerQueue.channel[last];
          var control = this.controllerQueue.control[last];
          var value = this.controllerQueue.value[last];
          mse._setController(channel, control, value);
        }
        this.controllerIndex--;
      }
      this.controllerIndex++;
    }
  }
  Track.prototype.getNote = function(_currentPulse, mute, k) {
    var tickOn = this.noteQueue.tickOn;
    var len = tickOn.length;
    if (len > 0) {
      var count = k;
      var startIndex = this.noteIndex;
      var endIndex = this.noteIndex;
      while (this.noteIndex < len && _currentPulse >= tickOn[this.noteIndex]) {
        if (!mute && count) {
          count--;
          endIndex++;
        }
        this.noteIndex++;
      }
      this.noteIndex--;
      while (this.noteIndex >= 0 && _currentPulse < tickOn[this.noteIndex]) 
        this.noteIndex--;
      this.noteIndex++;
      return [startIndex, endIndex];
    } else {
      return null;
    }
  }
  function allCallbackLoader(prs, fun1, funend) {
    var count = prs.length;
    if (count == 0) 
      funend();
    else 
      for (var i = 0; i < prs.length; i++) 
        prs[i](function() {
          fun1();
          count--;
          if (count == 0) 
            funend();
        });
  }
  function fillArray(arr, val) {
    for (var i = 0; i < arr.length; i++) 
      arr[i] = val;
  }
  function setEndedFunc(te) {
    te.endedFunction = function () {
      te.ended = true;
      te.isStop = true;
    }
  }
  var Controller = function() {
    this.modulationChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.volumeChannel = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.expressionChannel = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    this.panChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.dataEntryMSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    this.dataEntryLSB = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
    this.registeredParameterMSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.registeredParameterLSBchannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.sustainPedalChannel = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  }
  Controller.prototype.reset = function() {
    fillArray(this.modulationChannel, 0);
    fillArray(this.volumeChannel, 1);
    fillArray(this.expressionChannel, 1);
    fillArray(this.panChannel, 0);
    fillArray(this.dataEntryMSB, 2);
    fillArray(this.dataEntryLSB, 2);
    fillArray(this.registeredParameterMSBchannel, 0);
    fillArray(this.registeredParameterLSBchannel, 0);
    fillArray(this.sustainPedalChannel, false);
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
    this.onload = null;
    this.onerror = null;
    this.onprogress = null;
    this.oncleanup = null;
    this.speed = 1;
    this.isEffect = true;
    this.isPaused = true;
    this.currentTime = 0;
    this.concurrencyCounter = 0;
    this.programChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.notesPlayingChannel = new Array(16);
    for (var i = 0; i < 16; i++) {
      var gg = new Array(128);
      for (var i2 = 0; i2 < gg.length; i2++)
        gg[i2] = null;
      this.notesPlayingChannel[i] = gg;
    }
    this.trackQueue = [];
    this.formatType = 0;
    this.currentPulse = 0;
    this.tempo = 0;
    this.controller = new Controller();
    this._date = this._getTime();
    this._tempoTick = 0;
    this._tempoTime = 0;
    this._currentTimeLast = 0;
    this._soundbankLoaded = 0;
    this._soundbank = {};
    this._startTime = 0;
    this._loader = null;
    this._frameStart = Date.now();
    this._panGainChannel = new Array(16);
    this._outputGainChannel = new Array(16);
    this._d = Date.now();
    this._d2 = 0;
    for (var i = 0; i < 16; i++) {
      this._panGainChannel[i] = this._createPan();
      this._outputGainChannel[i] = this._panGainChannel[i].inputNode;
    }
    this.resetEffect();
    this._interval = setInterval(this._step.bind(this), 5);
  }
  Player.CONCURRENCY_LIMIT = 256;
  Player.prototype._getTime = function() {
    if (this.audioContext.state != "running") 
      this._d2 = Date.now() - this._d;
    return (this.audioContext.currentTime * 1000) + this._d2;
  }
  Player.prototype.resetEffect = function() {
    this.resetController();
    this.programChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.pitchBendChannel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  Player.prototype.resetController = function() {
    this.controller.reset();
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
    if (this._loader) 
      this._loader.stop();
    if (this.oncleanup) 
      this.oncleanup();
  }
  Player.prototype.resetTrack = function() {
    this.tempo = 500000 / this.timeDivision;
    this._tempoTick = 0;
    this._tempoTime = 0;
    this.currentPulse = 0;
    for (var i = 0; i < this.trackQueue.length; i++) 
      this.trackQueue[i].reset();
  }
  Player.prototype.setCurrentTime = function(s) {
    this.muteMusicr = true;
    this.stopAllPlaying();
    if (this.currentTime == s) return;
    var h = Math.max(0, Math.min(this.duration, s));
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
      for (var i = 0; i < this.trackQueue.length; i++) {
        this.trackQueue[i].getNote(this.currentPulse, true);
      }
    }
  }
  Player.prototype.setStartTime = function(s) {
    this._startTime = (this._date - ((s / this.speed) * 1000));
  }
  Player.prototype.setSpeed = function(s) {
    this.speed = s;
    this.setStartTime(this.currentTime);
  }
  Player.prototype._decodeAudio = function(k, callback) {
    callback(decodeWav(this.audioContext, new Uint8Array(k)));
  }
  Player.prototype._loadSoundFile = function(f, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(xhr.response);
    };
    xhr.responseType = "arraybuffer";
    xhr.open("GET", "soundbank/" + f);
    xhr.send();
  }
  Player.prototype._loadSoundAsset = function(f, callback) {
    var vs1 = soundbank_assets[f];
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(xhr.response);
    };
    xhr.responseType = "arraybuffer";
    xhr.open("GET", "https://assets.scratch.mit.edu/internalapi/asset/" + vs1 + "/get/");
    xhr.send();
  }
  Player.prototype._loadSoundbankBuffer = function(s, f) {
    var _this = this;
    return function (callback) {
      _this._loadSoundAsset(f, function (buffer) {
        _this._decodeAudio(buffer, function (audioBuffer) {
          _this._soundbank[s] = {
            data: new Uint8Array(buffer),
            buffer: audioBuffer,
            fileName: f
          };
          callback();
        });
      });
    };
  }
  Player.prototype.loadSoundbank = function(callback2) {
    var _this = this;
    var promises = [];
    this._soundbankLoaded = 0;
    var SOUNDBANK_FILES = {};
    for (var soundbankTitle in SOUNDBANKS) {
      var st = SOUNDBANKS[soundbankTitle];
      for (var filePath in st) {
        SOUNDBANK_FILES[filePath] = st[filePath];
      }
    }
    for (var filePath in SOUNDBANK_FILES) {
      if (!this._soundbank[filePath]) {
        this._soundbankLoaded++;
        promises.push(this._loadSoundbankBuffer(filePath, SOUNDBANK_FILES[filePath]));
      }
    }
    _this.onprogress && _this.onprogress("loaded instruments " + _this._soundbankLoaded);
    allCallbackLoader(promises, function () {
      if (_this.onprogress) {
        _this.onprogress("loaded instruments " + _this._soundbankLoaded);
      }
      _this._soundbankLoaded -= 1;
    }, function () {
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
    this._date = this._getTime();
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
    for (var c = 0; c < 16; c++) {
      var _notesPlaying = this.notesPlayingChannel[c];
      for (var i = 0; i < _notesPlaying.length; i++) 
        if (_notesPlaying[i])
          _notesPlaying[i].ended = true;
    }
  }
  Player.prototype.stop = function() {
    this._date = this._getTime();
    this.isPaused = true;
    this.currentTime = 0;
    this.setStartTime(0);
    this.resetTrack();
    this.stopAllPlaying();
  }
  Player.prototype.pause = function() {
    this._date = this._getTime();
    this.isPaused = true;
    this.setStartTime(this.currentTime);
    this.stopAllPlaying();
  }
  Player.prototype.getNoteLength = function() {
    var t = 0;
    for (var i = 0; i < this.trackQueue.length; i++)
      t += this.trackQueue[i].noteQueue.tickOn.length;
    return t;
  }
  Player.prototype.getNoteTracker = function() {
    var t = 0;
    for (var i = 0; i < this.trackQueue.length; i++)
      t += this.trackQueue[i].noteIndex;
    return t;
  }
  Player.prototype.getTempoLength = function() {
    var t = 0;
    for (var i = 0; i < this.trackQueue.length; i++)
      t += this.trackQueue[i].tempoQueue.tick.length;
    return t;
  }
  Player.prototype.getTempoTracker = function() {
    var t = 0;
    for (var i = 0; i < this.trackQueue.length; i++)
      t += this.trackQueue[i].tempoTracker;
    return t;
  }
  Player.prototype.getSoundBankSize = function() {
    var t = 0;
    for (var name in this._soundbank)
      t += this._soundbank[name].data.length;
    return t;
  }
  Player.prototype.getPulseCounterLength = function() {
    var _pulseCounterLength = 0;
    for (var i = 0; i < this.trackQueue.length; i++) {
      var len = this.trackQueue[i].pulseCounterLength;
      if (len > _pulseCounterLength)
        _pulseCounterLength = len;
    }
    return _pulseCounterLength;
  }
  Player.prototype._createPan = function() {
    var inputNode = this.audioContext.createGain();
    var leftGain = this.audioContext.createGain();
    var rightGain = this.audioContext.createGain();
    var channelMerger = this.audioContext.createChannelMerger(2);
    inputNode.connect(leftGain);
    inputNode.connect(rightGain);
    leftGain.connect(channelMerger, 0, 0);
    rightGain.connect(channelMerger, 0, 1);
    channelMerger.connect(this.node);
    return {
      inputNode: inputNode,
      leftGain: leftGain,
      rightGain: rightGain
    }
  }
  Player.prototype.playNote = function(n) {
    if (n.type == 1) {
      var span = getInstrumentSpan(n.instrument - 1, n.pitch);
      if (!span) return;
      var buffer = this._soundbank[span[1]];
      if (!buffer) return;
      var source = this.audioContext.createBufferSource();
      var node = this.audioContext.createGain();
      source.buffer = buffer.buffer;
      var loop = span[3];
      if (loop) {
        source.loop = true;
        source.loopStart = loop[0];
        source.loopEnd = loop[1];
      }
      source.connect(node);
      source.playbackRate.value = Math.pow(2, ((n.pitch - span[0]) / 12));
      var gain = node.gain;
      var volume = n.volume;
      gain.value = volume;
      var releaseGain = this.audioContext.createGain();
      var releaseDuration = span[2];
      if (releaseDuration == null) releaseDuration = 0.01;
      var releaseStart = this.audioContext.currentTime + n.duration;
      var releaseEnd = releaseStart + releaseDuration;
      releaseGain.gain.setValueAtTime(1, releaseStart);
      releaseGain.gain.linearRampToValueAtTime(0.0001, releaseEnd);
      node.connect(releaseGain);
      releaseGain.connect(this.node);
      source.start(this.audioContext.currentTime, 0);
      source.stop(releaseEnd);
      return { source: source, node: node };
    } else if (n.type == 0) {
      var span = getDrumSpan(0, n.drum);
      if (!span) return;
      var buffer = this._soundbank[span];
      if (!buffer) return;
      var source = this.audioContext.createBufferSource();
      var node = this.audioContext.createGain();
      source.buffer = buffer.buffer;
      source.connect(node);
      node.connect(this.node);
      var gain = node.gain;
      var volume = n.volume;
      gain.value = volume;
      source.start();
      return { source: source, node: node };
    }
  }
  Player.prototype._playNotes = function(program, pitch, volume, channel, trackNumber, tickOff, tickOn) {
    if (channel == 9) {
      var span = getDrumSpan(program, pitch);
      if (!span) return;
      var buffer = this._soundbank[span];
      if (!buffer) return;
      var isStart = (tickOff - tickOn) > 0;
      var _volume = volume / 127;
      var te = {
        _pitch: pitch,
        _volume: volume,
        _program: program,
        buffer: buffer.buffer,
        source: null,
        ended: !isStart,
        start: isStart,
        isPlay: false,
        isStop: false,
        note: null,
        nodeOn: tickOn,
        nodeOff: tickOff,
        volume: _volume,
        releaseGainVolume: 1,
        pitch: 0,
        track: trackNumber,
        channel: channel
      };
      this.notesPlayingChannel[channel][pitch] = te;
      this.concurrencyCounter++;
      if (this._debug) console.log(span, isStart);
    } else {
      var span = getInstrumentSpan(program, pitch);
      if (!span) return;
      var buffer = this._soundbank[span[1]];
      if (!buffer) return;
      var _pitch = pitch - span[0];
      var _volume = (volume / 127);
      var isStart = (tickOff - tickOn) > 0;
      var releaseDuration = span[2];
      if (releaseDuration == null || !isStart) 
        releaseDuration = 0.01;
      var loop = span[3];
      var te = {
        _pitch: pitch,
        _volume: volume,
        _program: program,
        ended: false,
        source: null,
        note: null,
        buffer: buffer.buffer,
        loop: loop,
        setDurationInf: false,
        isStop: false,
        isPlay: false,
        releaseGainVolume: 1,
        start: isStart,
        release: {
          duration: releaseDuration * 1000,
          ended: false,
        },
        volume: _volume,
        pitch: _pitch,
        nodeOff: tickOff,
        nodeOn: tickOn,
        track: trackNumber,
        channel: channel
      };
      this.notesPlayingChannel[channel][pitch] = te;
      this.concurrencyCounter++;
      if (this._debug) console.log(span[1], isStart);
    }
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
    if (channel == 9) return 0;
    var pitch = this.pitchBendChannel[channel] * this.controller.dataEntryMSB[channel];
    return pitch;
  }
  Player.prototype._startNote = function(n) {
    if (this.isEffect && n.track) if (this._getSustainPedalChannel(n.channel)) n.setDurationInf = true;
  }
  Player.prototype._updateEffectNote = function(note) {
    if (note.start) {
      if (this.isEffect && note.track) {
        var _pitch = (note.pitch + this._getPitch(note.channel));
        var rateSpeed = Math.pow(2, (_pitch / 12));
        if (note.source) note.source.playbackRate.value = rateSpeed;
        var volumeEffect = Math.min(note.volume * this._getVolumeChannel(note.channel), 1.27);
        var volumeOld = (Math.pow(5, volumeEffect) - 1.0) / 4; // Normal
        note.note.gain.value = volumeOld * note.releaseGainVolume;
      } else {
        if (note.source) note.source.playbackRate.value = Math.pow(2, note.pitch / 12);
        note.note.gain.value = note.volume * note.releaseGainVolume;
        note.duration = note.dur;
      }
    }
  }
  Player.prototype._step = function() {
    this.DateTime = (Date.now() - this._frameStart) / 1000;
    if (this.currentTime > this.duration && !this.isPaused) {
      this.currentTime = this.duration;
      this.setStartTime(this.duration);
      for (var c = 0; c < 16; c++) {
        var _notesPlaying = this.notesPlayingChannel[c];
        for (var i = 0; i < _notesPlaying.length; i++) {
          var dn = _notesPlaying[i];
          if (dn) dn.ended = true;
        }
      }
      if (this.onended) this.onended();
      this.isPaused = true;
    }
    this._currentTimeLast = this.currentTime;
    if (!this.isPaused && !this.muteMusicr) this.currentTime = Math.round((this._date - this._startTime) * this.speed) / 1000;
    this._stepUpdateTrack();
    this._stepUpdateEffect();
    this._stepNotesPlaying();
    this._stepPlayingNote();
    if (this.muteMusicr) this.muteMusicr = false;
    this._date = this._getTime();
    this._frameStart = Date.now();
  }
  Player.prototype._stepUpdateEffect = function() {
    for (var i = 0; i < 16; i++) {
      var pan = this._panGainChannel[i];
      var p1 = (this.isEffect ? this._getPanChannel(i) : 0);
      var p = ((p1 * 100) + 100) / 200;
      var leftVal = Math.cos(p * Math.PI / 2);
      var rightVal = Math.sin(p * Math.PI / 2);
      pan.rightGain.gain.value = Math.max(rightVal / 0.7071067690849304, 0);
      pan.leftGain.gain.value = Math.max(leftVal / 0.7071067690849304, 0);
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
          _currentTimeLast += 10000;
        }
      } else if (_currentTime < _currentTimeLast) {
        while (true) {
          if (_currentTime < _currentTimeLast) {
            this._stepUpdateTimeTrack(_currentTimeLast, -1);
          } else {
            _currentTimeLast = _currentTime;
            this._stepUpdateTimeTrack(_currentTimeLast, -1);
            break;
          }
          _currentTimeLast -= 10000;
        }
      }
    }
  }
  Player.prototype._trackAllUpdate = function() {
    for (var i = 0; i < this.trackQueue.length; i++)
      this.trackQueue[i].update(this);
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
        } else if (h < 0) {
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
            _currentPulse = (this._tempoTick + ((g - this._tempoTime) / this.tempo));
          }
          track.tempoTracker++;
        }
      }
      this.currentPulse = (this._tempoTick + ((g - this._tempoTime) / this.tempo));
    }
    this._trackAllUpdate();
  }
  Player.prototype._setController = function(channel, control, value) {
    switch (control) {
      case 1: // Modulation wheel (MSB)
        if (value == null) 
          this.controller.modulationChannel[channel] = 0;
        else 
          this.controller.modulationChannel[channel] = value / 200;
        break;
      case 6: // Data Entry (MSB)
        if (value == null) 
          this.controller.dataEntryMSB[channel] = 2;
        else 
          this.controller.dataEntryMSB[channel] = value;
        break;
      case 7: // Channel Volume (formerly Main Volume)
        if (value == null) 
          this.controller.volumeChannel[channel] = 1;
        else 
          this.controller.volumeChannel[channel] = value / 100;
        break;
      case 10: // Pan
        if (value == null) 
          this.controller.panChannel[channel] = 0;
        else 
          this.controller.panChannel[channel] = (value - 64) / 100;
        break;
      case 11: // Expression Controller
        if (value == null) 
          this.controller.expressionChannel[channel] = 1;
        else 
          this.controller.expressionChannel[channel] = value / 127;
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
        if (value == null) 
          this.controller.dataEntryLSB[channel] = 2;
        else 
          this.controller.dataEntryLSB[channel] = value;
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
        if (value == null)
          this.controller.sustainPedalChannel[channel] = false;
        else 
          this.controller.sustainPedalChannel[channel] = value > 0;
        if (this.isEffect) {
          var _notesPlaying = this.notesPlayingChannel[channel];
          for (var i = 0; i < _notesPlaying.length; i++) {
            var note = _notesPlaying[i];
            if (!note) continue;
            if (channel == note.channel) {
              if (this.controller.sustainPedalChannel[channel]) {
                note.setDurationInf = true;
              } else {
                note.setDurationInf = false;
                if (this.currentPulse >= note.nodeOff) {
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
        this.controller.registeredParameterLSBchannel[channel] = value || 0;
        break;
      case 101: // Registered Parameter Number MSB
        this.controller.registeredParameterMSBchannel[channel] = value || 0;
        break;
      case 120: // All Sound Off
      case 126: // Poly mode on/off (+ all notes off)
      case 127: // Poly mode on (incl mono=off +all notes off)
        if (this.isEffect) {
          var _notesPlaying = this.notesPlayingChannel[channel];
          for (var i = 0; i < _notesPlaying.length; i++) {
            var note = _notesPlaying[i];
            if (!note) continue;
            if (channel == note.channel) note.ended = true;
          }
        }
        break;
      case 123: // All notes off
        if (this.isEffect) {
          var _notesPlaying = this.notesPlayingChannel[channel];
          for (var i = 0; i < _notesPlaying.length; i++) {
            var note = _notesPlaying[i];
            if (!note) continue;
            if (channel == note.channel && note.setDurationInf) note.ended = true;
          }
        }
        break;
      case 121:
        //this.resetController();
        break;
      case 122: // Local control on/off
      case 124: // Omni mode off (+ all notes off)
      case 125: // Omni mode on (+ all notes off)
        break;
    }
  }
  Player.prototype._noteStop = function(note, isEnded) {
    if (note.isPlay) {
      if (note.source) {
        if ((!note.isStop) && !isEnded) {
          note.source.stop(0);
          note.isStop = true;
        }
        if (note.endedFunction) {
          note.source.removeEventListener("ended", note.endedFunction);
          note.endedFunction = null;
        }
        note.source.disconnect();
        note.source = null;
      }
      if (note.note) {
        note.note.disconnect();
        note.note = null;
      }
    }
    note.ended = true;
  }
  Player.prototype._stepPlayingNote = function() {
    var isPlay = false;
    for (var i = 0; i < this.trackQueue.length; i++) {
      var track = this.trackQueue[i];
      var _noteQueue = track.noteQueue;
      var notes = track.getNote(this.currentPulse, this.muteMusicr, 1024);
      if (!notes) continue;
      if (this.isPaused) continue;
      var startIndex = notes[0];
      var endIndex = notes[1];
      for (var n = startIndex; n < endIndex; n++) {
        var channel = _noteQueue.channel[n];
        var program = this.programChannel[channel];
        var tickOff = _noteQueue.tickOff[n];
        var tickOn = _noteQueue.tickOn[n];
        var pitch = _noteQueue.pitch[n];
        var volume = _noteQueue.velocity[n];
        if (volume < 2) continue;
        if (this.concurrencyCounter >= Player.CONCURRENCY_LIMIT) 
          continue;
        if (this.onplaynote) {
          this.onplaynote({
            pitch: pitch,
            dur: ((tickOff - tickOn) * this.tempo) / 1000000,
            program: program,
            volume: (volume / 127),
            channel: channel
          });
        }
        var _notesplaying = this.notesPlayingChannel[channel];
        var h = _notesplaying[pitch];
        if (h) {
          var _release = h.release;
          if (!h.ended && _release && !_release.ended && !h.setDurationInf) {
            var j = Math.min(h.nodeOff, tickOff);
            if (h.nodeOff >= tickOff && h.nodeOff <= tickOn) 
              tickOff = j;
          }
          if (h.isPlay) this._noteStop(h, false);
          _notesplaying[pitch] = null;
          this.concurrencyCounter--;
        }
        this._playNotes(program, pitch, volume, channel, track.trackNumber, tickOff, tickOn);
        isPlay = true;
      }
    }
    if (isPlay) {
      for (var channel = 0; channel < 16; channel++) {
        var _notesPlaying = this.notesPlayingChannel[channel];
        for (var i = 0; i < _notesPlaying.length; i++) {
          var h = _notesPlaying[i];
          if (!h) continue;
          if (!h.isPlay) {
            var node = this.audioContext.createGain();
            node.gain.value = 0;
            node.connect(this._outputGainChannel[channel]);
            var source = this.audioContext.createBufferSource();
            source.buffer = h.buffer;
            var loop = h.loop;
            if (loop) {
              source.loop = true;
              source.loopStart = loop[0];
              source.loopEnd = loop[1];
            }
            source.connect(h.note = node);
            h.source = source;
            this._startNote(h);
            this._updateEffectNote(h);
            setEndedFunc(h);
            source.addEventListener("ended", h.endedFunction);
            source.start(this.audioContext.currentTime, 0);
            h.isPlay = true;
          }
        }
      }   
    }
  }
  Player.prototype._stepNotesPlaying = function() {
    for (var channel = 0; channel < 16; channel++) {
      var _notesPlaying = this.notesPlayingChannel[channel];
      for (var i = 0; i < _notesPlaying.length; i++) {
        var note = _notesPlaying[i];
        if (!note) continue;
        if (!note.ended) {
          var _release = note.release;
          if (_release) {
            if (!note.setDurationInf && (this.currentPulse >= note.nodeOff)) _release.ended = true;
            else if (this.currentPulse < note.nodeOn) note.ended = true;
            if (_release.ended) {
              if (!("startTime" in _release)) 
                _release.startTime = this._date;
              if (_release.duration) {
                note.releaseGainVolume = Math.max(0, 1 - ((this._date - _release.startTime) / _release.duration));
                if ((this._date - _release.startTime) >= _release.duration) 
                  note.ended = true;
              } else {
                note.ended = true;
              }
            }
          }
          note.start = true;
          this._updateEffectNote(note);
        }
        if (note.ended) {
          this._noteStop(note, true);
          this.concurrencyCounter--;
          _notesPlaying[i] = null;
        }
      }
    }
  }
  Player.prototype.loadMid = function(data) {
    this.cleanup();
    var loadedTime = Date.now();
    var _this = this;
    if (_this.onprogress) 
      _this.onprogress("reading midi");
    var mp = loaderMidiData(data);
    mp.onload = function (result) {
      _this._loader = null;
      _this.loadedTime = Date.now() - loadedTime;
      _this._init(result);
      if (_this.onload) 
        _this.onload();
    }
    mp.onerror = function(e) {
      _this._loader = null;
      if (_this.onerror) 
        _this.onerror(e);
    }
    mp.onprogress = function(r, a, b) {
      if (_this.onprogress) 
        _this.onprogress("processing track " + a + " / " + b + " " + Math.round(r * 100) + "%");
    }
    _this._loader = mp;
    mp.start();
  }
  Player.prototype.toJSON = function() {
    var tracks = [];
    for (var i = 0; i < this.trackQueue.length; i++) 
      tracks.push(this.trackQueue[i].toJSON());
    return {
      tracks: tracks,
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
      if (len > _pulseCounterLength) 
        _pulseCounterLength = len;
      _tracks.push({
        tempoIdx: 0
      });
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
          _currentPulse = tempoTick + ((time - duration) / tempo);
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
    for (var i = 0; i < tracks.length; i++) 
      this.trackQueue.push(new Track(i + 1, tracks[i]));
    this.tempo = 500000 / data.timeDivision;
    this.duration = this.getDuration();
    this.resetTrack();
  }
  Player.prototype.loadMidiFromData = function(data) {
    this.cleanup();
    this._init(data);
    if (this.onload) this.onload();
  }
  return {
    Player: Player,
    getDrumSpan: getDrumSpan,
    getInstrumentSpan: getInstrumentSpan,
    MIDI_INSTRUMENT: MIDI_INSTRUMENT,
    DRUMS_MIDI: DRUMS_MIDI,
    DRUM_INFO: DRUM_INFO,
    INSTRUMENT_INFO: INSTRUMENT_INFO,
    SOUNDBANKS: SOUNDBANKS,
    formats: ["mid", "rmi", "midi"],
    version: "v1.3.0"
  }
}());