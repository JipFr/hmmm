const { execSync } = require("child_process");
const fs = require("fs");

const level = {
	_version: "2.0.0",
	_events: [],
	_notes: [],
	_obstacles: [],
};

const info = {
	_version: "2.0.0",
	_songName: "JIPPIEEEE " + Date.now(),
	_songSubName: "",
	_songAuthorName: "Jip",
	_levelAuthorName: "Beat Sage",
	_beatsPerMinute: 120.0,
	_songTimeOffset: 0,
	_shuffle: 0.0,
	_shufflePeriod: 0.5,
	_previewStartTime: 1.0,
	_previewDuration: 30,
	_songFilename: "song.ogg",
	_coverImageFilename: "icon.png",
	_environmentName: "DefaultEnvironment",
	_allDirectionsEnvironmentName: "GlassDesertEnvironment",
	_difficultyBeatmapSets: [
		{
			_beatmapCharacteristicName: "Standard",
			_difficultyBeatmaps: [
				{
					_difficulty: "Normal",
					_difficultyRank: 3,
					_beatmapFilename: "Normal.dat",
					_noteJumpMovementSpeed: 10,
					_noteJumpStartBeatOffset: 0.0,
				},
			],
		},
	],
	_customData: {
		_editors: {
			_lastEditedBy: "beatsage",
			beatsage: {
				version: "2.0.0",
				id: "135de21770cc49f18d415a6086c2a4ba",
				events: ["DotBlocks", "Obstacles", "Bombs"],
			},
		},
	},
};

// ! Level generation
// Add obstacles
for (let i = 1; i < 20; i++) {
	level._obstacles.push({
		_time: 10 * i,
		_lineIndex: 0,
		_type: 1,
		_duration: 5,
		_width: 4,
	});
}

// Add notes
for (let i = 5; i < 200; i += 0.1) {
	level._notes.push({
		_time: 3 * i,
		_lineIndex: Math.floor((i * 3) % 4),
		_lineLayer: Math.floor((i * 3) % 4),
		_type: Math.floor(i % 2),
		_cutDirection: 8,
	});
}

fs.writeFileSync("dist/Normal.dat", JSON.stringify(level));
fs.writeFileSync("dist/Info.dat", JSON.stringify(info));

execSync(`cd dist && zip ../level-${Date.now()}.zip *`);
