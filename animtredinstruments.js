/*
 * YTPMV Cartoon Midi v1.5.0
 * soundbank size 1.71 MB
 */

var AnimTredInstruments = (function() {
  var YCII = {
    DRUM_INFO: {
      "acoustic bass drum": ["AcousticBassDrum"],
      "side stick": ["SideStick"],
      "snare drum": ["SnareDrum"],
      "hand": ["HandClap"],
      "closed hi hat": ["ClosedHat"],
      "open hi hat": ["OpenHat"],
      "crash cymbal": ["Crash"],
      "low floor tom": ["Tom", -15],
      "high floor tom": ["Tom", -12],
      "low tom": ["Tom", -9],
      "low mid tom": ["Tom", 0],
      "hi mid tom": ["Tom", 4],
      "high tom": ["Tom", 8],
      "tambourine": ["Tambourine"],
      "cowbell": ["Cowbell"],
      "vibraslap": ["Vibraslap"],
      "hi bongo": ["Bongo", 4],
      "bongo": ["Bongo"],
      "mute conga": ["Conga"],
      "open conga": ["Conga", -4],
      "conga": ["Conga", -7],
      "timbale high": ["TimbaleHigh"],
      "timbale low": ["TimbaleLow"],
      "high agogo": ["Agogo"],
      "low agogo": ["Agogo", -5],
      "cabasa": ["Cabasa"],
      "short whistle": ["ShortWhistle"],
      "long whistle": ["LongWhistle"],
      "short guiro": ["GuiroShort"],
      "long guiro": ["GuiroLong"],
      "claves": ["Claves"],
      "wood": ["WoodBlock", 4],
      "low wood": ["WoodBlock"],
      "cuica": ["Cuica"],
      "low cuica": ["CuicaLow"],
      "mute triangle": ["Triangle", 0, 0.2],
      "triangle": ["Triangle"],
      "unknown_0": ["Unknown0"],
      "unknown_1": ["Unknown1"],
      "unknown_2": ["Unknown2"],
      "unknown_3": ["Unknown3"]
    },
    INSTRUMENT_INFO: {
      "piano": [[60, "Piano_C4", 0.1, null], [84, "Piano_C6", 0.1, null]],
      "electric piano": [[60, "ElectricPiano", 0.1, null]],
      "marimba": [[60, "Marimba_C4", 0.5, null], [84, "Marimba_C6", 0.5, null]],
      "vibraphone": [[60, "Vibraphone", 0.25, null]],
      "music box": [[60, "MusicBox", 0.5, null]],
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
      "tremolo-string-1": [[60, "TremoloString", 0.2, [0.09934, 0.64666]]],
      "tremolo-string-2": [[60, "TremoloString", 0.5, [0.09934, 0.64666], 0.5]],
      "tremolo-string-3": [[60, "TremoloString", 0.2, [0.09934, 0.64666], 0.2]],
      "pizzicato": [[60, "Pizzicato", 0.25, null]],
      "timpani": [[60, "Timpani", 0.25, null]],
      "choir": [[60, "Choir", 0.1, [0.386, 0.654]]],
      "voice-oohs": [[69, "VoiceOohs", 0.1, [0.08424, 0.08651]]],
      "synth-voice": [[59.8, "SynthVoice", 0.1, [0.18401, 0.1879]]],
      "orchestra hit": [[60, "OrchestraHit", 0.25, null]],
      "trumpet": [[60, "Trumpet", null, [0.236, 0.278]]],
      "trumbone": [[60, "Trumbone", null, [1.60053, 1.635]]],
      "saxophone": [[60, "Saxophone", null, [0.44307, 1.92369]]],
      "clarinet": [[60, "Clarinet", null, [0.27574, 0.29464]]],
      "bassoon": [[36, "Bassoon_C1", null, [0.084, 0.16]], [48, "Bassoon_C2", null, [0.08, 0.325]], [60, "Bassoon_C3", null, [0.067, 0.339]]],
      "flute": [[86, "Flute", null, [0.05069, 0.07277]]],
      "wooden flute": [[60, "WoodenFlute", null, [1.16056, 1.2029]]],
      "whistle": [[60, "Whistle", null, [1.13851, 1.35201]]],
      "synth lead": [[48, "SynthLead_C3", 0.1, [0.1, 1.5]], [60, "SynthLead_C4", 0.1, [0.1, 1.5]], [72, "SynthLead_C5", 0.1, [0.1, 1.5]], [84, "SynthLead_C6", 0.1, [0.1, 1.5]]],
      "synth pad": [[60, "SynthPad", 0.1, [1.55, 2]]],
      "synth-pad-2": [[60, "SynthPad", 1, [1.55, 2], 0, 0.5, 3]],
      "warm": [[60, "Warm_C4", 0.25, [0.63658, 0.8455]], [72, "Warm_C5", 0.25, [0.57448, 0.7529]]],
      "bowed": [[60, "Bowed_C4", 0.25, [0.63658, 0.8455]], [72, "Bowed_C5", 0.25, [0.57448, 0.7529]]],
      "metallic": [[60, "Metallic", 0.5, null]],
      "sitar": [[60, "OverdrivenGuitar", 1, [0.27618, 0.64141], 0, 0, 5]],
      "agogo": [[60, "Agogo_C4", 0.1, null]],
      "steel drum": [[60, "SteelDrum", 0.5, null]],
      "woodblock": [[63, "WoodBlock", null, null]],
      "taiko drum": [[60, "TaikoDrum", 0.25, null]],
      "melodic tom": [[62, "Tom", 0.1, null]],
      "synth drum": [[60, "SynthDrum", 0.25, null]],
      "reverse cymbal": [[60, "ReverseCymbal", null, null]]
    },
    MIDI_INSTRUMENT: [
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
      "tremolo-string-1", "tremolo-string-2", "tremolo-string-3", "tremolo-string-3",
      "choir", "choir", "synth-voice", "orchestra hit",
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
      "synth pad", "violin", "synth-pad-2", "choir",
      "vibraphone", "bowed", "choir", "harmonica",
      "sitar", "pizzicato", "bass", "bass",
      "marimba", "bassoon", "violin", "bassoon",
      "vibraphone", "agogo", "steel drum", "woodblock",
      "taiko drum", "melodic tom", "synth drum", "reverse cymbal",
      "electric guitar", "wooden flute", "steel drum", "wooden flute",
      "vibraphone", "steel drum", "choir", "steel drum"
    ],
    DRUMS_MIDI: [[
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
    ]],
    SOUNDBANKS: {
      "My little pony friendship is magic season 1 episode 18 _The Show Stoppers": {
        "Piano_C4": "instruments/the_show_stoppers_C4.wav",
        "Piano_C6": "instruments/the_show_stoppers_C6.wav"
      },
      "My Little Pony _ Friendship is Magic Season 1 Episode 17": {
        "Marimba_C4": "instruments/mlp-s1-fim-30_C4.wav",
        "Marimba_C6": "instruments/mlp-s1-fim-30_C6.wav"
      },
      "My Little Pony Friendship Is Magic Season 7 Episode 9": {
        "ElectricGuitar": "instruments/mlp-s7e9-e-guitar.wav",
        "OverdrivenGuitar": "instruments/mlp-24-guitar.wav"
      },
      "My Little Pony Season 5 Episode 9": {
        "Warm_C4": "instruments/mlp-fim-s5e9-750-warm-C4.wav",
        "Warm_C5": "instruments/mlp-fim-s5e9-750-warm-C5.wav",
        "Bowed_C4": "instruments/mlp-fim-s5e9-750-bowed-C4.wav",
        "Bowed_C5": "instruments/mlp-fim-s5e9-750-bowed-C5.wav",
        "Tom": "drums/mlp-s5e9-471-tom.wav",
        "SynthDrum": "instruments/mlp-s5e9-471-synth.wav",
        "Unknown1": "drums/mlp-s5e9-d.wav"
      },
      "My Little Pony Friendship Is Magic Season 2 Episode 13 Baby Cakes": {
        "SnareDrum": "drums/pinkie-pie-60.wav",
        "Crash": "drums/pinkie-pie-61.wav"
      },
      "MLP FIM_ - Season 6 - Episode 9 - The Saddle Row Review": {
        "HandClap": "drums/rainbowdash-applejack-handclap.wav"
      },
      "MLP FIM Season 7 Episode 13 - The Perfect Pear": {
        "Guitar": "instruments/mlp-pearbutter-guitar.wav"
      },
      "My Little Pony: Friendship is Magic - Season 4 Episode 3": {
        "ElectricPiano": "instruments/mlp-s4e3-820-1.wav",
        "ChurchOrgan": "instruments/mlp-s4e3-820-2.wav"
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
      "MLP FIM: Season 8 Episode 26": {
        "ReverseCymbal": "instruments/mlp-fim-s8e26-850.wav"
      },
      "My Little Pony Friendship is Magic season 2 episode 22 \"Hurricane Fluttershy\"": {
        "Saxophone": "instruments/mlp-fim-s2e22-953.wav"
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
        "Agogo_C4": "instruments/mlp-fim-s9e15-937-agogo.wav",
        "Agogo": "drums/mlp-fim-s9e15-937.wav"
      },
      "My Little Pony Friendship is Magic season 2 episode 19 \"Putting Your Hoof Down\"": {
        "Cowbell": "drums/mlp-s2e19-38.wav"
      },
      "My Little Pony friendship is magic season 2 episode 10 \"Secret of My Excess\"": {
        "Vibraphone": "instruments/mlp-fim-s2e10-49.wav"
      },
      "[1080p] My little Pony Friendship is Magic Season 6 Episode 14 The Cart Before the Ponies": {
        "Trumbone": "instruments/mlp-s6e14-915.wav"
      },
      "My Little Pony: friendship is magic | Swarm of the Century | FULL EPISODE | MLP": {
        "Trumpet": "instruments/mlp-swarm-od-the-century-1290.wav"
      },
      "The Mane Six Try to Be Friends Of the Yaks - MLP_ Friendship Is Magic [HD]": {
        "SideStick": "drums/The_Mane_Six_Try_to_Be_Friends_Of_the_Yaks-MLP_Friendship_Is_Magic_1.wav",
        "Unknown3": "drums/The_Mane_Six_Try_to_Be_Friends_Of_the_Yaks-MLP_Friendship_Is_Magic_2.wav"
      },
      "My Little Pony friendship is magic season 1 episode 23 The Cutie Mark Chronicles": {
        "VoiceOohs": "instruments/mlp-s1-e23-440-1.wav",
        "SynthVoice": "instruments/mlp-s1-e23-440-2.wav"
      },
      "Friendship is Randomly Musical 3 [REUPLOAD]": {
        "MusicBox": "instruments/pinkie-pie-14.wav",
      },
      "Friendship is Musical | Season 1 Episode 5-6": {
        "OrchestraHit": "instruments/ohmlp_01.wav"
      },
      "Friendship is Randomly Musical 8": {
        "Cuica": "drums/derpy-67-0.wav",
        "CuicaLow": "drums/derpy-67-1.wav"
      },
      "Friendship is Musical Season 2 First Half": {
        "Bass_C2": "instruments/daisy-143-C1.wav",
        "Bass_C3": "instruments/daisy-143-C2.wav"
      },
      "Friendship is Randomly Musical 5": {
        "Bassoon_C1": "instruments/pinkie-pie-77-C1.wav",
        "Bassoon_C2": "instruments/pinkie-pie-77-C2.wav",
        "Bassoon_C3": "instruments/pinkie-pie-77-C3.wav"
      },
      "Friendship is Musical | Season 1 Episode 13-14": {
        "SynthPad": "instruments/mlp-s1e13-fim-40.wav"
      },
      "Friendship is Musical | Season 5 (First Half)": {
        "Flute": "instruments/mlp-flute.wav"
      },
      "Friendship is Musical | Season 3": {
        "Pizzicato": "instruments/mlp-s3-scootaloo-168.wav",
        "SteelDrum": "instruments/mlp-s3-fim-5.wav",
        "AcousticBassDrum": "drums/pinkie-pie-83.wav"
      },
      "Friendship is Randomly Musical 1": {
        "WoodBlock": "drums/twilight-wood-67.wav"
      },
      "[Tridashie] Friendship is Randomly Musical 2 [REUPLOAD]": {
        "Triangle": "drums/applejack-30-0.wav"
      },
      "Friendship is Musical | Season 1 Episode 21-22": {
        "Choir": "instruments/mlp-fluttershy.wav",
        "SynthLead_C3": "instruments/mlp-s1e21-fim-3-sl-C3.wav",
        "SynthLead_C4": "instruments/mlp-s1e21-fim-3-sl-C4.wav",
        "SynthLead_C5": "instruments/mlp-s1e21-fim-3-sl-C5.wav",
        "SynthLead_C6": "instruments/mlp-s1e21-fim-3-sl-C6.wav"
      },
      "Daddy Pig Plays The Drums!  | Peppa Pig - Official Channel": {
        "TaikoDrum": "instruments/peppa-pig-drums-53.wav",
        "GuiroLong": "drums/peppa-pig-drums-63-0.wav",
        "GuiroShort": "drums/peppa-pig-drums-63-1.wav",
        "Unknown0": "drums/peppa-pig-drums-107.wav",
        "Bongo": "drums/peppa-pig-drums-30.wav",
        "Tambourine": "drums/peppa-pig-drums-51.wav"
      },
      "Peppa Pig - Musical Instruments (full episode)": {
        "Violin": "instruments/peppa-pig-mi-69-violin.wav",
        "Cello_C3": "instruments/peppa-pig-mi-69-cello_C3.wav",
        "Cello_C4": "instruments/peppa-pig-mi-69-cello_C4.wav",
        "TremoloString": "instruments/peppa-pig-mi-69-tm1.wav",
        "Metallic": "instruments/peppa-pig-mi-69-metallic.wav",
        "Timpani": "instruments/peppa-pig-mi-114.wav",
        "Accordion": "instruments/peppa-pig-mi-131-1.wav",
        "TangoAccordion": "instruments/peppa-pig-mi-131-2.wav"
      },
      "Whistling Competition Between Peppa Pig and Suzy Sheep": {
        "Whistle": "instruments/peppa-pig-w-4.wav"
      },
      "Peppa Pig Makes Music Instrument with Marbles | Peppa Pig Official Family Kids Cartoon": {
        "WoodenFlute": "instruments/peppa-pig-mmiwm-144.wav",
        "Conga": "drums/peppa-pig-mmiwm-64.wav"
      }
    }
  };
  var YCI_Info = (function(yci_info) {
    function ginst(arr) {
      var result = [];
      for (var i = 0; i < arr.length; i++) {
        var note = arr[i];
        var ratio = note[0];
        var resea = note[2] || 0;
        var loop = note[3];
        var res = [note[0] | 0, note[1], ratio, loop, resea];
        for (var j = 4; j < note.length; j++) {
          res.push(note[j]);
        }
        result.push(res);
      }
      return result;
    }
    function gdfg(obj, isDrum) {
      var c = 0;
      var o = [];
      var result = {};
      for (var key in obj) {
        var value = obj[key];
        o.push(isDrum ? value : ginst(value));
        result[key] = c++;
      }
      return [result, o];
    }
    var inst_info = gdfg(yci_info.INSTRUMENT_INFO, false);
    var midi_inst = [];
    for (var i = 0; i < yci_info.MIDI_INSTRUMENT.length; i++) {
      var note = yci_info.MIDI_INSTRUMENT[i];
      midi_inst.push(inst_info[0][note]);
    }
    var drum_info = gdfg(yci_info.DRUM_INFO, true);
    var midi_drum = [];
    for (var i = 0; i < yci_info.DRUMS_MIDI.length; i++) {
      var elist = yci_info.DRUMS_MIDI[i];
      if (elist) {
        var r = [];
        for (var j = 0; j < elist.length; j++) {
          var t = elist[j];
          r.push((t != null) ? drum_info[0][t] : null);
        }
        midi_drum.push(r);
      } else {
        midi_drum.push(null);
      }
    }
    return {
      INSTRUMENT_INFO: inst_info[1],
      MIDI_INSTRUMENT: midi_inst,
      DRUM_INFO: drum_info[1],
      DRUMS_MIDI: midi_drum,
      SOUNDBANKS: yci_info.SOUNDBANKS,
    };
  }(YCII));
  var INSTRUMENT_INFO = YCI_Info.INSTRUMENT_INFO;
  var MIDI_INSTRUMENT = YCI_Info.MIDI_INSTRUMENT;
  var DRUM_INFO = YCI_Info.DRUM_INFO;
  var DRUMS_MIDI = YCI_Info.DRUMS_MIDI;
  var SOUNDBANKS = YCI_Info.SOUNDBANKS;
  function getDrumSpan(program, pitch) {
    var DMO = DRUMS_MIDI[0];
    var DM = DRUMS_MIDI[program] || DMO;
    var drum = DM[pitch];
    if (drum == null) drum = DMO[pitch];
    if (drum == null) return;
    return DRUM_INFO[drum];
  }
  function getInstrumentSpan(program, pitch) {
    var inst = MIDI_INSTRUMENT[program];
    if (inst == null) return;
    var spans = INSTRUMENT_INFO[inst];
    if (!spans) return;
    var span = spans[0];
    for (var i = 1; i < spans.length; i++) {
      var s = spans[i];
      if (pitch >= s[0]) span = s;
    }
    return span;
  }
  var SoundbankLoader = function(url, needfiles) {
    this.url = url;
    this.progressSoundbank = false;
    this.needfiles = needfiles;
    this.result = null;
    this.requests = [];
  }
  SoundbankLoader.prototype.loadSoundbanks = function() {
    var _this = this;
    this.progressSoundbank = true;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var g = new Uint8Array(xhr.response);
      var o = 0;
      var result = {};
      var len = g[o++] + (g[o++] << 8) + (g[o++] << 16) + (g[o++] << 24);
      while(len--) {
        var slen = g[o++] + (g[o++] << 8) + (g[o++] << 16) + (g[o++] << 24);
        var sf = "";
        while(slen--) {
          sf += String.fromCharCode(g[o++]);
        }
        var dlen = g[o++] + (g[o++] << 8) + (g[o++] << 16) + (g[o++] << 24);
        result[sf] = g.subarray(o, o + dlen);
        o += dlen;
      }
      _this.result = result;
      _this.callback(); 
    };
    xhr.responseType = "arraybuffer";
    xhr.open("GET", this.url);
    xhr.send();
  }
  SoundbankLoader.prototype.callback = function() {
    if (this.result) {
      for (var i = 0; i < this.requests.length; i++) {
        var r = this.requests[i];
        var data = this.result[r[0]];
        var buffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.length);
        r[1](buffer);
      }
      this.requests = [];  
    }
  }
  SoundbankLoader.prototype.loadFile = function(name, callback) {
    if (this.needfiles) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        callback(xhr.response);
      };
      xhr.responseType = "arraybuffer";
      xhr.open("GET", this.needfiles + "/" + name);
      xhr.send();
    } else {
      this.requests.push([name, callback]);
      if (this.progressSoundbank) {
        this.callback();
      } else {
        this.loadSoundbanks();
      }
    }
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
      throw "WAVFile: bad file header";
    var lengthInHeader = this.readInt();
    if (this.getLength() != (lengthInHeader + 8)) 
      console.log("WAVFile: bad RIFF size; ignoring");
    var wavStr = this.readString(4);
    if (wavStr != "WAVE") 
      throw "WAVFile: not a WAVE file";
    return { lengthInHeader: lengthInHeader };
  }
  function decodeWav(audioContext, data) {
    var stepTable = [7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 21, 23, 25, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 130, 143, 157, 173, 190, 209, 230, 253, 279, 307, 337, 371, 408, 449, 494, 544, 598, 658, 724, 796, 876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066, 2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358, 5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899, 15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767];
    var indexTable = [-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8];
    var reader = new WavReader(data);
    reader.readReader();
    var formatChunk = reader.extractChunk("fmt ");
    if (formatChunk.getLength() < 16) 
      throw "WAVFile: format chunk is too small";
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
			if (formatChunk.getLength() < 20) throw "WAVFile: adpcm format chunk is too small";
			if (channels != 1) throw "WAVFile: adpcm supports only one channel (monophonic)";
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
      throw "Unexpected end of data";
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
      if (!(chuckId == "MTrk")) 
        throw "MTrk not found for track number " + (trackID + 1) + " - invalid MIDI file";
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
      var pulseCounterLength = 0;
      trackIndex = index;
      trackSize = _readBytes(4);
      _dataLength = trackSize + index;
      var step = function() {
        while ((index < _dataLength) && ((Date.now() - startTime) < 100)) {
          pulseCounter += _readVariableLength() || 0;
          event = _data[index++];
          if (event == 255) {
            switch (_data[index++]) {
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
              case 47:
                index = _dataLength;
                break;
              case 81:
                tempos.tick.push(pulseCounter);
                tempos.setting.push(_readBytes(_readVariableLength()));
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
              systemExclusive.fx.push(event - 240);
              systemExclusive.data.push(new Uint8Array(dat));
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
              }
            }
          }
          if (index < _dataLength) pulseCounterLength = pulseCounter;
        }
        var trackEnd = index < _dataLength;
        if (trackEnd) {
          return false;
        } else {
          if (index !== _dataLength) 
            throw "Track number " + (trackID + 1) + " has overrun - invalid MIDI file";
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
              velocity: noteVelocity
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
            pulseCounterLength: pulseCounterLength
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
            if (trackID < trackLength) {
              mp = readTrack();
              if (!mp) {
                gfd = false;
                trackID = trackLength;
              }
            } else gfd = false;
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
    this.tempoTracker = 0;
    this.textIndex = 0;
    this.programIndex = 0;
    this.controllerIndex = 0;
    this.pitchBendIndex = 0;
    this.sysExIndex = 0;
  }
  Track.prototype.resetNotes = function() {
    this.noteIndex = 0;
  }
  Track.prototype.getNote = function(_currentPulse, k) {
    var tickOn = this.noteQueue.tickOn;
    var len = tickOn.length;
    if (len > 0) {
      var count = k;
      var startIndex = this.noteIndex;
      var endIndex = this.noteIndex;
      while (this.noteIndex < len && _currentPulse >= tickOn[this.noteIndex]) {
        if (count) {
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
  function pitchForKey(midiKey) {
    return 440 * Math.pow(2, (midiKey - 69) / 12);
  }
  var Channel = function() {
    this.patch = 0;
    this.volume = 0;
    this.expression = 0;
    this.panning = 0;
    this.vibrato = 0;
    this.sustain = false;
    this.bend = 0;
    this.bendsense = 0;
    this.bendsense_lsb = 0;
    this.bendsense_msb = 0;
    this.lastlrpn = 0;
    this.lastmrpn = 0;
    this.nrpn = false;
    this.reset();
  }
  Channel.prototype.reset = function() {
    this.resetAllControllers();
    this.patch = 0;
    this.lastmrpn = 127;
    this.lastlrpn = 127;
    this.nrpn = false;
  }
  Channel.prototype.resetAllControllers = function() {
    this.volume = 100;
    this.panning = 64;
    this.resetAllControllers121();
  }
  Channel.prototype.resetAllControllers121 = function() {
    this.bend = 0;
    this.bendsense_msb = 2;
    this.bendsense_lsb = 0;
    this.updateBendSensitivity();
    this.expression = 127;
    this.sustain = false;
    this.vibrato = 0;
  }
  Channel.prototype.updateBendSensitivity = function() {
    var cent = this.bendsense_msb * 128 + this.bendsense_lsb;
    this.bendsense = cent * (1 / (128 * 8192));
  }
  var Pan = function(inputNode, leftGain, rightGain) {
    this.inputNode = inputNode;
    this.leftGain = leftGain;
    this.rightGain = rightGain;
  }
  Pan.prototype.setPan = function(p1) {
    var p = (p1 + 1) / 2;
    var leftVal = Math.cos(p * Math.PI / 2) / 0.7071067690849304;
    var rightVal = Math.sin(p * Math.PI / 2) / 0.7071067690849304;
    this.leftGain.gain.value = Math.max(0, leftVal);
    this.rightGain.gain.value = Math.max(0, rightVal);
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
  function setEndedFunc(te) {
    var endedFunction = function() {
      te.isStop = true;
    }
    te.endedFunction = endedFunction;
    te.source.addEventListener("ended", endedFunction);
  }
  function getNextTick(ticks, index, next) {
    return ((index < ticks.length) && (next == null || ticks[index] < next)) ? ticks[index] : null;
  }
  var audioContext = new AudioContext();
  var TRACKER_PROGRAM = 1;
  var TRACKER_CONTROLLER = 2;
  var TRACKER_PITCH = 3;
  var TRACKER_SYSEX = 4;
  var TRACKER_TEXT = 5;
  var Player = function() {
    this._debug = false;
    this.node = audioContext.createGain();
    this.node.gain.value = 1;
    this.node.connect(audioContext.destination);
    this.masterVolume = 1;
    this.duration = 0;
    this.oncleanup = null;
    this.onload = null;
    this.onerror = null;
    this.onprogress = null;
    this.onplaynote = null;
    this.onended = null;
    this.onreset = null;
    this.ontext = null;
    this.speed = 1;
    this.isEffect = true;
    this.isPaused = true;
    this.currentTime = 0;
    this.concurrencyCounter = 0;
    this.channels = [];
    this.notesPlayingChannel = new Array(16);
    for (var i = 0; i < 16; i++) {
      var gg = new Array(128);
      for (var i2 = 0; i2 < gg.length; i2++)
        gg[i2] = null;
      this.notesPlayingChannel[i] = gg;
      this.channels.push(new Channel());
    }
    this.trackQueue = [];
    this.formatType = 0;
    this.timeDivision = 500;
    this.currentPulse = 0;
    this.tempo = 0;
    this.tempoTick = 0;
    this.tempoTime = 0;
    this._currentTimeLast = 0;
    this._soundbankLoaded = 0;
    this._soundbank = {};
    this._date = this._getTime();
    this._startTime = 0;
    this._loader = null;
    this._panGainChannel = new Array(16);
    this._outputGainChannel = new Array(16);
    this._d = Date.now();
    this._d2 = 0;
    for (var i = 0; i < 16; i++) {
      var pan = this._createPan();
      this._panGainChannel[i] = pan;
      this._outputGainChannel[i] = pan.inputNode;
    }
    this.resetEffect();
    this._interval = setInterval(this._step.bind(this), 5);
  }
  Player.sountbankLoader = new SoundbankLoader("ytpmv_cartoon_soundbank.dat", "soundbank");
  Player.CONCURRENCY_LIMIT = 256;
  Player.prototype._getTime = function() {
    if (audioContext.state != "running") 
      this._d2 = Date.now() - this._d;
    return (audioContext.currentTime * 1000) + this._d2;
  }
  Player.prototype.resetEffect = function() {
    this.masterVolume = 1;
    for (var i = 0; i < 16; i++) {
      this.channels[i].reset();
    }
  }
  Player.prototype.cleanup = function() {
    this.stop();
    this.resetEffect();
    this.isPaused = true;
    this.duration = 0;
    this.trackQueue = [];
    this.tempo = 0;
    this.tempoTick = 0;
    this.tempoTime = 0;
    this.formatType = 0;
    this.timeDivision = 500;
    this.currentPulse = 0;
    this.currentTime = 0;
    this._currentTimeLast = 0;
    if (this._loader) 
      this._loader.stop();
    if (this.oncleanup) 
      this.oncleanup();
  }
  Player.prototype.resetTrack = function(isEffect) {
    this.tempo = 500000 / this.timeDivision;
    this.tempoTick = 0;
    this.tempoTime = 0;
    this.currentPulse = 0;
    for (var i = 0; i < this.trackQueue.length; i++) {
      this.trackQueue[i].reset();
      if (!isEffect) this.trackQueue[i].resetNotes();
    }
    if (this.onreset) this.onreset();
  }
  Player.prototype.setCurrentTime = function(s) {
    this.stopAllPlaying();
    if (this.currentTime == s) return;
    var h = Math.max(0, Math.min(this.duration, s));
    if (h > 0) {
      this.currentTime = h;
      this.setStartTime(h);
      this._stepUpdateTrack();
      for (var i = 0; i < this.trackQueue.length; i++) {
        this.trackQueue[i].getNote(this.currentPulse, 0);
      }
    } else {
      this.resetEffect();
      this.currentTime = 0;
      this._currentTimeLast = 0;
      this.setStartTime(0);
      this.resetTrack();
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
    callback(decodeWav(audioContext, new Uint8Array(k)));
  }
  Player.prototype._loadSoundFile = function(f, callback) {
    Player.sountbankLoader.loadFile(f, callback);
  }
  Player.prototype._loadSoundbankBuffer = function(s, f) {
    var _this = this;
    return function (callback) {
      _this._loadSoundFile(f, function (buffer) {
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
      this.currentTime = 0;
      this._currentTimeLast = 0;
      this.setStartTime(0);
      this.resetTrack();
    }
    this.isPaused = false;
    this.setStartTime(this.currentTime);
    if (this.currentTime >= this.duration) {
      this.resetEffect();
      this.currentTime = 0;
      this._currentTimeLast = 0;
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
    var inputNode = audioContext.createGain();
    var leftGain = audioContext.createGain();
    var rightGain = audioContext.createGain();
    var channelMerger = audioContext.createChannelMerger(2);
    inputNode.connect(leftGain);
    inputNode.connect(rightGain);
    leftGain.connect(channelMerger, 0, 0);
    rightGain.connect(channelMerger, 0, 1);
    channelMerger.connect(this.node);
    return new Pan(inputNode, leftGain, rightGain);
  }
  Player.prototype.playNote = function(n, infD) {
    if (n.type == 1) {
      var span = getInstrumentSpan(n.instrument - 1, n.pitch);
      if (!span) return;
      var buffer = this._soundbank[span[1]];
      if (!buffer) return;
      var source = audioContext.createBufferSource();
      var node = audioContext.createGain();
      source.buffer = buffer.buffer;
      var loop = span[3];
      if (loop) {
        source.loop = true;
        source.loopStart = loop[0];
        source.loopEnd = loop[1];
      }
      source.connect(node);
      source.playbackRate.value = pitchForKey(n.pitch) / pitchForKey(span[2]);
      var gain = node.gain;
      var volume = n.volume;
      gain.value = volume;
      var attackGain = audioContext.createGain();
      var releaseGain = audioContext.createGain();
      var releaseDuration = span[4] || 0;
      var attackEnd = span[5] || 0;
      var holdEnd = span[6] || 0;
      var decayEnd = span[7] || 0;
      var time = audioContext.currentTime;
      var duration = n.duration;
      if (attackEnd) {
        attackGain.gain.setValueAtTime(0, time);
        attackGain.gain.linearRampToValueAtTime(1, time + attackEnd);
        if (decayEnd) {
          attackGain.gain.linearRampToValueAtTime(1, time + holdEnd);
          attackGain.gain.linearRampToValueAtTime(0, time + decayEnd);
        }
      } else {
        attackGain.gain.setValueAtTime(1, time);
        if (decayEnd) {
          attackGain.gain.setValueAtTime(1, time + holdEnd);
          attackGain.gain.linearRampToValueAtTime(0, time + decayEnd);
        }
      }
      releaseGain.connect(this.node);
      attackGain.connect(releaseGain);
      node.connect(attackGain);
      function stop(t) {
        var releaseStart = audioContext.currentTime + (t || 0);
        var releaseEnd = releaseStart + releaseDuration;
        releaseGain.gain.setValueAtTime(1, releaseStart);
        releaseGain.gain.linearRampToValueAtTime(0.0001, releaseEnd);
        source.stop(releaseEnd);
      }
      releaseGain.gain.setValueAtTime(1, time);
      source.start(time, 0);
      stop(duration);
      return { source: source, node: node, stop: stop };
    } else if (n.type == 0) {
      var span = getDrumSpan(0, n.drum);
      if (!span) return;
      var buffer = this._soundbank[span[0]];
      if (!buffer) return;
      var source = audioContext.createBufferSource();
      var node = audioContext.createGain();
      var attackGain = audioContext.createGain();
      var time = audioContext.currentTime;
      var decayEnd = span[2] || 0;
      if (decayEnd) {
        attackGain.gain.setValueAtTime(1, time);
        attackGain.gain.linearRampToValueAtTime(0, time + decayEnd);
      }
      source.buffer = buffer.buffer;
      source.connect(node);
      source.playbackRate.value = pitchForKey(60 + (span[1] || 0)) / pitchForKey(60);
      attackGain.connect(this.node);
      node.connect(attackGain);
      var gain = node.gain;
      var volume = n.volume;
      gain.value = volume;
      source.start(time, 0);
      function stop() {
        source.stop(0);
      }
      return { source: source, node: node, stop: stop };
    }
  }
  Player.prototype._playNotes = function(program, pitch, volume, channel, trackNumber, tickOff, tickOn) {
    if (channel == 9) {
      var span = getDrumSpan(program, pitch);
      if (!span) return;
      var buffer = this._soundbank[span[0]];
      if (!buffer) return;
      var isStart = ((tickOff - tickOn) > 0) || this._getSustainPedalChannel(channel);
      var decayEnd = span[2] || 0;
      var te = {
        pitch: pitch,
        volume: volume,
        program: program,
        tickOn: tickOn,
        tickOff: tickOff,
        buffer: buffer.buffer,
        source: null,
        node: null,
        ended: !isStart,
        start: isStart,
        isPlay: false,
        isStop: false,
        attackEnd: 0,
        holdEnd: 0,
        decayEnd: decayEnd * 1000,
        envelopeVolume: 1,
        baseRatio: pitchForKey(60 + (0 - (span[1] || 0))),
        track: trackNumber,
        channel: channel,
      };
      this.notesPlayingChannel[channel][pitch] = te;
      this.concurrencyCounter++;
      if (this._debug) console.log(span, isStart);
    } else {
      var span = getInstrumentSpan(program, pitch);
      if (!span) return;
      var buffer = this._soundbank[span[1]];
      if (!buffer) return;
      var isStart = ((tickOff - tickOn) > 0) || this._getSustainPedalChannel(channel);
      var releaseDuration = span[4] || 0;
      var loop = span[3];
      var attackEnd = span[5] || 0;
      var holdEnd = span[6] || 0;
      var decayEnd = span[7] || 0;
      var te = {
        pitch: pitch,
        volume: volume,
        program: program,
        tickOn: tickOn,
        tickOff: tickOff,
        buffer: buffer.buffer,
        source: null,
        node: null,
        ended: false,
        start: isStart,
        isPlay: false,
        isStop: false,
        loop: loop,
        sustain: false,
        attackEnd: attackEnd * 1000,
        holdEnd: holdEnd * 1000,
        decayEnd: decayEnd * 1000,
        envelopeVolume: attackEnd ? 0 : 1,
        release: {
          duration: (isStart ? releaseDuration : 0) * 1000,
          ended: false
        },
        baseRatio: pitchForKey(span[2]),
        track: trackNumber,
        channel: channel,
      };
      this.notesPlayingChannel[channel][pitch] = te;
      this.concurrencyCounter++;
      if (this._debug) console.log(span[1], isStart);
    }
  }
  Player.prototype._getSustainPedalChannel = function(channel) {
    return this.channels[channel].sustain;
  }
  Player.prototype._getPanChannel = function(channel) {
    return (this.channels[channel].panning - 64) / 100;
  }
  Player.prototype._getVolumeChannel = function(channel) {
    return (this.channels[channel].volume * this.channels[channel].expression) / 12700;
  }
  Player.prototype._getPitch = function(channel) {
    if (channel == 9) return 0;
    return this.channels[channel].bend * this.channels[channel].bendsense;
  }
  Player.prototype._startNote = function(n) {
    if (this.isEffect && n.track) if (this._getSustainPedalChannel(n.channel)) n.sustain = true;
  }
  Player.prototype._updateEffectNote = function(note) {
    if (note.start && note.track) {
      var channel = note.channel;
      var _volume = note.volume / 127;
      var p = (channel == 9) ? 60 : note.pitch;
      var source = note.source;
      var node = note.node;
      var envelopeVolume = note.envelopeVolume;
      if (this.isEffect) {
        var _pitch = p + this._getPitch(channel);
        if (source) source.playbackRate.value = pitchForKey(_pitch) / note.baseRatio;
        var volumeEffect = _volume * this._getVolumeChannel(channel) * this.masterVolume;
        var volumeMixed = volumeEffect * volumeEffect;
        if (node) node.gain.value = volumeMixed * note.envelopeVolume;
      } else {
        if (source) source.playbackRate.value = pitchForKey(p) / note.baseRatio;
        if (node) node.gain.value = _volume * envelopeVolume;
      }
    }
  }
  Player.prototype._step = function() {
    this._tick();
  }
  Player.prototype._tick = function() {
    if (this.currentTime > this.duration && !this.isPaused) {
      this.currentTime = this.duration;
      this.setStartTime(this.duration);
      this.stopAllPlaying();
      this.isPaused = true;
      if (this.onended) this.onended();
    }
    this._currentTimeLast = this.currentTime;
    var isPlaying = !this.isPaused;
    if (isPlaying) {
      this.currentTime = ((this._date - this._startTime) * this.speed) / 1000;
      this._stepUpdateTrack();
    }
    this._stepUpdateEffect();
    this._stepNotesPlaying();
    if (isPlaying) {
      this._stepPlayingNote();
    }
    this._date = this._getTime();
  }
  Player.prototype._stepUpdateEffect = function() {
    for (var i = 0; i < 16; i++) {
      this._panGainChannel[i].setPan(this.isEffect ? this._getPanChannel(i) : 0);
    }
  }
  Player.prototype._stepUpdateTrack = function() {
    if (this._currentTimeLast != this.currentTime) {
      if (this.currentTime < this._currentTimeLast) {
        this.resetEffect();
        this.resetTrack(true);
        this._currentTimeLast = 0;
      }
    }
    this._stepUpdateTimeTracks(this.currentTime * 1000000);
    this._trackAllUpdate();
  }
  Player.prototype._trackAllUpdate = function() {
    while(true) {
      var resTT = null;
      var resTrack = null;
      var type = null;
      for (var i = 0; i < this.trackQueue.length; i++) {
        var track = this.trackQueue[i];
        var tt = getNextTick(track.programQueue.tick, track.programIndex, resTT);
        if (tt != null) {
          resTT = tt;
          resTrack = track;
          type = TRACKER_PROGRAM;
        }
        var tt = getNextTick(track.controllerQueue.tick, track.controllerIndex, resTT);
        if (tt != null) {
          resTT = tt;
          resTrack = track;
          type = TRACKER_CONTROLLER;
        }
        var tt = getNextTick(track.pitchBendQueue.tick, track.pitchBendIndex, resTT);
        if (tt != null) {
          resTT = tt;
          resTrack = track;
          type = TRACKER_PITCH;
        }
        var tt = getNextTick(track.systemExclusiveQueue.tick, track.sysExIndex, resTT);
        if (tt != null) {
          resTT = tt;
          resTrack = track;
          type = TRACKER_SYSEX;
        }
        var tt = getNextTick(track.textQueue.tick, track.textIndex, resTT);
        if (tt != null) {
          resTT = tt;
          resTrack = track;
          type = TRACKER_TEXT;
        }
      }
      if (resTrack && this.currentPulse >= resTT) {
        var _programQueue = resTrack.programQueue;
        var _pitchBendQueue = resTrack.pitchBendQueue;
        var _controllerQueue = resTrack.controllerQueue;
        var _textQueue = resTrack.textQueue;
        var _systemExclusiveQueue = resTrack.systemExclusiveQueue;
        switch (type) {
          case TRACKER_PROGRAM:
            this.realTime_PatchChange(_programQueue.channel[resTrack.programIndex] % 16, _programQueue.program[resTrack.programIndex]);
            resTrack.programIndex++;
            break;
          case TRACKER_PITCH:
            this.realTime_PitchBend(_pitchBendQueue.channel[resTrack.pitchBendIndex] % 16, _pitchBendQueue.pitch[resTrack.pitchBendIndex]);
            resTrack.pitchBendIndex++;
            break;
          case TRACKER_CONTROLLER:
            var channel = _controllerQueue.channel[resTrack.controllerIndex];
            var control = _controllerQueue.control[resTrack.controllerIndex];
            var value = _controllerQueue.value[resTrack.controllerIndex];
            this.realTime_Controller(channel % 16, control, value);
            resTrack.controllerIndex++;
            break;
          case TRACKER_SYSEX:
            var data = _systemExclusiveQueue.data[resTrack.sysExIndex];
            var fx = _systemExclusiveQueue.fx[resTrack.sysExIndex];
            this.realTime_SysEx(data, data.length, fx);
            resTrack.sysExIndex++;
            break;
          case TRACKER_TEXT:
            if (this.ontext) this.ontext(_textQueue.type[resTrack.textIndex], _textQueue.text[resTrack.textIndex]);
            resTrack.textIndex++;
            break;
        }
      } else {
        break;
      }
    }
  }
  Player.prototype._stepUpdateTimeTracks = function(time) {
    while (true) {
      var resTT = null;
      var resTrack = null;
      var resSetting = null;
      for (var i = 0; i < this.trackQueue.length; i++) {
        var track = this.trackQueue[i];
        var _tempoQueue = track.tempoQueue;
        if (track.tempoTracker < _tempoQueue.tick.length) {
          var tt = Math.max(_tempoQueue.tick[track.tempoTracker], this.tempoTick);
          if (resTT == null || tt < resTT) {
            resTT = tt;
            resSetting = _tempoQueue.setting[track.tempoTracker];
            resTrack = track;
          }
        }
      }
      var _currentPulse = this.tempoTick + ((time - this.tempoTime) / this.tempo);
      if (resTrack && _currentPulse >= resTT) {
        this.tempoTime += (resTT - this.tempoTick) * this.tempo;
        this.tempoTick = resTT;
        this.tempo = resSetting / this.timeDivision;
        resTrack.tempoTracker++;
      } else {
        this.currentPulse = _currentPulse;
        break;
      }
    }
  }
  Player.prototype.realTime_PatchChange = function(channel, value) {
    this.channels[channel].patch = value;
  }
  Player.prototype.realTime_Controller = function(channel, control, value) {
    switch (control) {
      case 1: // Modulation wheel (MSB)
        this.channels[channel].vibrato = value;
        break;
      case 6: // Data Entry (MSB)
        this.setRPN(channel, value, true);
        break;
      case 7: // Channel Volume (formerly Main Volume)
        this.channels[channel].volume = value;
        break;
      case 10: // Pan
        this.channels[channel].panning = value;
        break;
      case 11: // Expression Controller
        this.channels[channel].expression = value;
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
      case 32: // Bank Select (LSB)
        break;
      case 38: // Data entry (LSB)
        this.setRPN(channel, value, false);
        break;
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
        this.channels[channel].sustain = value >= 64;
        this._sustainingNotes(channel);
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
        this.channels[channel].lastlrpn = value;
        this.channels[channel].nrpn = true;
        break;
      case 99: // Non-Registered Parameter Number (MSB)
        this.channels[channel].lastmrpn = value;
        this.channels[channel].nrpn = true;
        break;
      case 100: // Registered Parameter Number LSB
        this.channels[channel].lastlrpn = value;
        this.channels[channel].nrpn = false;
        break;
      case 101: // Registered Parameter Number MSB
        this.channels[channel].lastmrpn = value;
        this.channels[channel].nrpn = false;
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
            if (channel == note.channel && note.sustain) note.ended = true;
          }
        }
        break;
      case 121:
        this.channels[channel].resetAllControllers121();
        this._sustainingNotes(channel);
        break;
      case 122: // Local control on/off
      case 124: // Omni mode off (+ all notes off)
      case 125: // Omni mode on (+ all notes off)
        break;
    }
  }
  Player.prototype.realTime_PitchBend = function(channel, value) {
    this.channels[channel].bend = value - 8192;
  }
  Player.prototype.realTime_SysEx = function(msg, size, fx) {
  }
  Player.prototype._sustainingNotes = function(channel) {
    var sustain = this.channels[channel].sustain;
    if (this.isEffect) {
      var _notesPlaying = this.notesPlayingChannel[channel];
      for (var i = 0; i < _notesPlaying.length; i++) {
        var note = _notesPlaying[i];
        if (!note) continue;
        if (sustain) {
          note.sustain = true;
        } else {
          note.sustain = false;
          if (this.currentPulse >= note.tickOff) {
            var release = note.release;
            if (release) {
              release.ended = true;
            } else {
              note.ended = true;
            }
          }
        }
      }
    }
  }
  Player.prototype.setRPN = function(channel, value, MSB) {
    var nrpn = this.channels[channel].nrpn ? 1 : 0;
    var addr = this.channels[channel].lastmrpn * 0x100 + this.channels[channel].lastlrpn;
    switch (addr + nrpn * 0x10000 + MSB * 0x20000) {
      case 0x0000 + 0*0x10000 + 1*0x20000: // Pitch-bender sensitivity
        this.channels[channel].bendsense_msb = value;
        this.channels[channel].updateBendSensitivity();
        break;
      case 0x0000 + 0*0x10000 + 0*0x20000: // Pitch-bender sensitivity LSB
        this.channels[channel].bendsense_lsb = value;
        this.channels[channel].updateBendSensitivity();
        break;
      case 0x0108 + 1*0x10000 + 1*0x20000: // Vibrato speed
        break;
      case 0x0109 + 1*0x10000 + 1*0x20000: // Vibrato depth
        break;
      case 0x010A + 1*0x10000 + 1*0x20000: // Vibrato delay in millisecons
        break;
      default:
        break;
    }
  }
  Player.prototype._noteStop = function(note) {
    if (note.isPlay) {
      if (note.source) {
        if (!note.isStop) {
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
      if (note.node) {
        note.node.disconnect();
        note.node = null;
      }
    }
    note.ended = true;
  }
  Player.prototype._stepPlayingNote = function() {
    var isPlay = false;
    for (var i = 0; i < this.trackQueue.length; i++) {
      var track = this.trackQueue[i];
      var _noteQueue = track.noteQueue;
      var notes = track.getNote(this.currentPulse, 1024);
      if (!notes) continue;
      if (this.isPaused) continue;
      var startIndex = notes[0];
      var endIndex = notes[1];
      for (var n = startIndex; n < endIndex; n++) {
        var channel = _noteQueue.channel[n];
        var program = this.channels[channel].patch;
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
            beats: ((tickOff - tickOn) * this.tempo) / 1000000,
            program: program,
            volume: volume,
            channel: channel
          });
        }
        var _notesplaying = this.notesPlayingChannel[channel];
        var h = _notesplaying[pitch];
        if (h) {
          var _release = h.release;
          if (!h.ended && (_release && !_release.ended) && !h.sustain) 
            if (h.tickOff >= tickOff && h.tickOff <= tickOn) 
              tickOff = Math.min(h.tickOff, tickOff);
          if (h.isPlay) this._noteStop(h);
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
            var node = audioContext.createGain();
            node.gain.value = 0;
            node.connect(this._outputGainChannel[channel]);
            var source = audioContext.createBufferSource();
            source.buffer = h.buffer;
            var loop = h.loop;
            if (loop) {
              source.loop = true;
              source.loopStart = loop[0];
              source.loopEnd = loop[1];
            }
            source.connect(h.node = node);
            h.source = source;
            this._startNote(h);
            this._updateEffectNote(h);
            if (!loop) setEndedFunc(h);
            source.start(audioContext.currentTime, 0);
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
          if (!("startTime" in note)) 
            note.startTime = this._date;
          var _date = this._date - note.startTime;
          var envelopeVolume = 1;
          if (_date < note.attackEnd) 
            envelopeVolume *= _date / note.attackEnd;
          if (note.decayEnd && (_date > note.holdEnd)) {
            if (_date < note.decayEnd) {
              envelopeVolume *= 1 - ((_date - note.holdEnd) / (note.decayEnd - note.holdEnd));
            } else {
              envelopeVolume *= 0;
            }
          }
          var _release = note.release;
          if (_release) {
            if (!note.sustain && (this.currentPulse >= note.tickOff)) _release.ended = true;
            else if (this.currentPulse < note.tickOn) note.ended = true;
            if (_release.ended) {
              if (!("startTime" in _release)) 
                _release.startTime = this._date;
              if (_release.duration) {
                envelopeVolume *= Math.max(0, 1 - ((this._date - _release.startTime) / _release.duration));
                if ((this._date - _release.startTime) >= _release.duration) 
                  note.ended = true;
              } else {
                note.ended = true;
              }
            }
          } else if (!note.sustain && (this.currentPulse >= note.tickOff) && note.isStop) {
            note.ended = true;
          }
          note.envelopeVolume = envelopeVolume;
          note.start = true;
          this._updateEffectNote(note);
        }
        if (note.ended) {
          this._noteStop(note);
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
      else console.log(e);
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
    while (true) {
      var resTT = null;
      var resTrack = null;
      var resValue = null;
      for (var i = 0; i < this.trackQueue.length; i++) {
        var _track = _tracks[i];
        var _tempoQueue = this.trackQueue[i].tempoQueue;
        if (_track.tempoIdx < _tempoQueue.tick.length) {
          var tt = Math.min(Math.max(_tempoQueue.tick[_track.tempoIdx], tempoTick), _pulseCounterLength);
          if (resTT == null || tt < resTT) {
            resValue = _tempoQueue.setting[_track.tempoIdx];
            resTT = tt;
            resTrack = i;
          }
        }
      }
      if (resTrack != null) {
        duration += (resTT - tempoTick) * tempo;
        tempoTick = resTT;
        tempo = resValue / this.timeDivision;
        _tracks[resTrack].tempoIdx++;
      } else {
        break;
      }
    }
    duration += (_pulseCounterLength - tempoTick) * tempo;
    return duration / 1000000;
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
    version: "v1.5"
  }
}());