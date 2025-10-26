// Music Categories
const musicCategories = {
    'Pop': { color: '#ff6b6b', icon: '🎵' },
    'Rock': { color: '#4ecdc4', icon: '🎸' },
    'Hip-Hop': { color: '#45b7d1', icon: '🎤' },
    'Electronic': { color: '#96ceb4', icon: '🎧' },
    'Jazz': { color: '#feca57', icon: '🎷' },
    'Classical': { color: '#ff9ff3', icon: '🎼' },
    'Country': { color: '#54a0ff', icon: '🤠' },
    'R&B': { color: '#5f27cd', icon: '💜' },
    'Reggae': { color: '#00d2d3', icon: '🌴' },
    'Blues': { color: '#ff9f43', icon: '🎵' },
    'Folk': { color: '#10ac84', icon: '🌿' },
    'Indie': { color: '#ee5a24', icon: '🎨' },
    'Alternative': { color: '#c44569', icon: '⚡' },
    'Ambient': { color: '#8b5cf6', icon: '🌌' },
    'Funk': { color: '#f39c12', icon: '🕺' },
    'Soul': { color: '#e74c3c', icon: '💫' },
    'Punk': { color: '#2c2c54', icon: '⚡' },
    'Metal': { color: '#40407a', icon: '🤘' },
    'Gospel': { color: '#706fd3', icon: '⛪' },
    'World': { color: '#f8b500', icon: '🌍' }
};

// Music Library - Expanded with 1000+ songs across all categories
const musicLibrary = {
    songs: [
        {
            id: 1,
            title: "Summer Breeze",
            artist: "Acoustic Dreams",
            album: "Chill Vibes",
            duration: "3:45",
            artwork: "https://picsum.photos/seed/music1/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            id: 2,
            title: "Night Drive",
            artist: "Electronic Pulse",
            album: "Urban Nights",
            duration: "4:12",
            artwork: "https://picsum.photos/seed/music2/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            id: 3,
            title: "Morning Coffee",
            artist: "Jazz Collective",
            album: "Easy Morning",
            duration: "3:28",
            artwork: "https://picsum.photos/seed/music3/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            id: 4,
            title: "Workout Energy",
            artist: "Beat Masters",
            album: "Gym Sessions",
            duration: "3:55",
            artwork: "https://picsum.photos/seed/music4/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
            id: 5,
            title: "Focus Flow",
            artist: "Ambient Sounds",
            album: "Deep Work",
            duration: "5:20",
            artwork: "https://picsum.photos/seed/music5/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
            id: 6,
            title: "Sunset Dreams",
            artist: "Chill Wave",
            album: "Evening Vibes",
            duration: "4:03",
            artwork: "https://picsum.photos/seed/music6/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        },
        {
            id: 7,
            title: "City Lights",
            artist: "Urban Beats",
            album: "Metropolitan",
            duration: "3:37",
            artwork: "https://picsum.photos/seed/music7/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
        },
        {
            id: 8,
            title: "Ocean Waves",
            artist: "Nature Sounds",
            album: "Relaxation",
            duration: "4:48",
            artwork: "https://picsum.photos/seed/music8/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        },
        {
            id: 9,
            title: "Midnight Groove",
            artist: "Smooth Operators",
            album: "Late Night Sessions",
            duration: "4:25",
            artwork: "https://picsum.photos/seed/music9/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        },
        {
            id: 10,
            title: "Electric Dreams",
            artist: "Synth Wave",
            album: "Neon Lights",
            duration: "3:52",
            artwork: "https://picsum.photos/seed/music10/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
        },
        {
            id: 11,
            title: "Autumn Rain",
            artist: "Peaceful Melodies",
            album: "Seasons",
            duration: "4:18",
            artwork: "https://picsum.photos/seed/music11/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            id: 12,
            title: "Power Up",
            artist: "Gym Warriors",
            album: "Beast Mode",
            duration: "3:42",
            artwork: "https://picsum.photos/seed/music12/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            id: 13,
            title: "Starlight Serenade",
            artist: "Romantic Strings",
            album: "Love Songs",
            duration: "4:56",
            artwork: "https://picsum.photos/seed/music13/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            id: 14,
            title: "Bass Drop",
            artist: "DJ Thunderstorm",
            album: "Club Bangers",
            duration: "3:33",
            artwork: "https://picsum.photos/seed/music14/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
            id: 15,
            title: "Mountain Peak",
            artist: "Adventure Tunes",
            album: "Wild Expeditions",
            duration: "5:02",
            artwork: "https://picsum.photos/seed/music15/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
            id: 16,
            title: "Jazz Nights",
            artist: "Blue Note Trio",
            album: "Smooth Jazz",
            duration: "4:38",
            artwork: "https://picsum.photos/seed/music16/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        },
        {
            id: 17,
            title: "Digital Horizon",
            artist: "Future Bass",
            album: "Tomorrow's Sound",
            duration: "3:47",
            artwork: "https://picsum.photos/seed/music17/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
        },
        {
            id: 18,
            title: "Tropical Paradise",
            artist: "Island Vibes",
            album: "Beach Life",
            duration: "4:15",
            artwork: "https://picsum.photos/seed/music18/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        },
        {
            id: 19,
            title: "Winter Wonderland",
            artist: "Frost & Snow",
            album: "Cold Days",
            duration: "3:58",
            artwork: "https://picsum.photos/seed/music19/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        },
        {
            id: 20,
            title: "Rhythm Nation",
            artist: "The Groove Masters",
            album: "Funk Collection",
            duration: "4:22",
            artwork: "https://picsum.photos/seed/music20/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
        },
        {
            id: 21,
            title: "Cosmic Journey",
            artist: "Space Explorers",
            album: "Galaxy Dreams",
            duration: "5:45",
            artwork: "https://picsum.photos/seed/music21/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            id: 22,
            title: "Street Racing",
            artist: "Turbo Beats",
            album: "High Octane",
            duration: "3:29",
            artwork: "https://picsum.photos/seed/music22/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            id: 23,
            title: "Mystic Forest",
            artist: "Nature's Symphony",
            album: "Earth Sounds",
            duration: "4:51",
            artwork: "https://picsum.photos/seed/music23/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            id: 24,
            title: "Neon Tokyo",
            artist: "Cyber Punk",
            album: "Future City",
            duration: "3:41",
            artwork: "https://picsum.photos/seed/music24/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
            id: 25,
            title: "Piano Reflection",
            artist: "Classical Moments",
            album: "Timeless",
            duration: "5:12",
            artwork: "https://picsum.photos/seed/music25/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
            id: 26,
            title: "Desert Storm",
            artist: "Rock Legends",
            album: "Heavy Riffs",
            duration: "4:05",
            artwork: "https://picsum.photos/seed/music26/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        },
        {
            id: 27,
            title: "Sunrise Meditation",
            artist: "Zen Masters",
            album: "Inner Peace",
            duration: "6:20",
            artwork: "https://picsum.photos/seed/music27/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
        },
        {
            id: 28,
            title: "Dance Floor Fire",
            artist: "Party Starters",
            album: "Night Club Hits",
            duration: "3:36",
            artwork: "https://picsum.photos/seed/music28/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        },
        {
            id: 29,
            title: "Acoustic Sunrise",
            artist: "Folk Wanderers",
            album: "Country Roads",
            duration: "4:44",
            artwork: "https://picsum.photos/seed/music29/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        },
        {
            id: 30,
            title: "Thunder Strike",
            artist: "Metal Gods",
            album: "Maximum Volume",
            duration: "3:55",
            artwork: "https://picsum.photos/seed/music30/400",
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
        }
    ],
    playlists: [
        {
            id: 1,
            title: "Chill Vibes",
            description: "Relax and unwind with these smooth tracks",
            artwork: "https://picsum.photos/seed/playlist1/400",
            songs: [1, 3, 6, 8]
        },
        {
            id: 2,
            title: "Workout Mix",
            description: "High energy beats to keep you moving",
            artwork: "https://picsum.photos/seed/playlist2/400",
            songs: [2, 4, 7]
        },
        {
            id: 3,
            title: "Focus Music",
            description: "Stay concentrated and productive",
            artwork: "https://picsum.photos/seed/playlist3/400",
            songs: [5, 8, 3]
        },
        {
            id: 4,
            title: "Evening Jazz",
            description: "Smooth jazz for your evening",
            artwork: "https://picsum.photos/seed/playlist4/400",
            songs: [3, 6, 8]
        },
        {
            id: 5,
            title: "Urban Nights",
            description: "Late night city vibes",
            artwork: "https://picsum.photos/seed/playlist5/400",
            songs: [2, 7, 6]
        },
        {
            id: 6,
            title: "Morning Motivation",
            description: "Start your day right",
            artwork: "https://picsum.photos/seed/playlist6/400",
            songs: [1, 4, 7]
        }
    ]
};

// Generate expanded music library with 1000+ songs
function generateExpandedMusicLibrary() {
    const genres = Object.keys(musicCategories);
    const artists = [
        'The Soundwaves', 'Digital Dreams', 'Neon Nights', 'Electric Pulse', 'Crystal Clear',
        'Midnight Vibes', 'Urban Beats', 'Cosmic Harmony', 'Retro Waves', 'Future Bass',
        'Chill Collective', 'Ambient Souls', 'Jazz Masters', 'Rock Legends', 'Pop Stars',
        'Hip Hop Heroes', 'Electronic Wizards', 'Classical Virtuosos', 'Country Kings',
        'R&B Royalty', 'Reggae Rulers', 'Blues Brothers', 'Folk Friends', 'Indie Icons',
        'Alternative Artists', 'Ambient Angels', 'Funk Masters', 'Soul Sisters', 'Punk Pioneers',
        'Metal Gods', 'Gospel Greats', 'World Warriors', 'Acoustic Artists', 'Synthetic Sounds',
        'Vocal Virtuosos', 'Instrumental Icons', 'Beat Makers', 'Melody Masters', 'Rhythm Rulers'
    ];
    
    const songTitles = [
        'Midnight Dreams', 'Electric Storm', 'Golden Hour', 'Silver Lining', 'Diamond Dust',
        'Ocean Waves', 'Mountain Peak', 'City Lights', 'Desert Wind', 'Forest Echo',
        'Summer Rain', 'Winter Snow', 'Spring Bloom', 'Autumn Leaves', 'Starlight',
        'Moonbeam', 'Sunrise', 'Sunset', 'Twilight', 'Dawn',
        'Thunder', 'Lightning', 'Fire', 'Ice', 'Water',
        'Earth', 'Air', 'Spirit', 'Soul', 'Heart',
        'Love', 'Hope', 'Dream', 'Vision', 'Reality',
        'Fantasy', 'Magic', 'Mystery', 'Adventure', 'Journey',
        'Destination', 'Journey', 'Path', 'Road', 'Way',
        'Freedom', 'Liberty', 'Peace', 'Harmony', 'Balance',
        'Energy', 'Power', 'Strength', 'Courage', 'Bravery',
        'Victory', 'Success', 'Triumph', 'Achievement', 'Accomplishment',
        'Celebration', 'Party', 'Festival', 'Carnival', 'Parade',
        'Dance', 'Rhythm', 'Beat', 'Groove', 'Flow',
        'Melody', 'Harmony', 'Chorus', 'Verse', 'Bridge',
        'Intro', 'Outro', 'Solo', 'Duet', 'Ensemble',
        'Symphony', 'Concerto', 'Sonata', 'Etude', 'Prelude',
        'Fugue', 'Canon', 'Round', 'Chant', 'Hymn',
        'Anthem', 'Ballad', 'Lullaby', 'Serenade', 'Nocturne',
        'Waltz', 'Tango', 'Samba', 'Rumba', 'Cha-cha',
        'Swing', 'Jive', 'Foxtrot', 'Quickstep', 'Paso Doble',
        'Blues', 'Jazz', 'Swing', 'Bebop', 'Cool Jazz',
        'Hard Bop', 'Free Jazz', 'Fusion', 'Smooth Jazz', 'Acid Jazz',
        'Rock', 'Pop', 'Hip Hop', 'Rap', 'R&B',
        'Soul', 'Funk', 'Disco', 'House', 'Techno',
        'Trance', 'Ambient', 'Chillout', 'Downtempo', 'Trip Hop',
        'Drum and Bass', 'Dubstep', 'Trap', 'Future Bass', 'Progressive',
        'Alternative', 'Indie', 'Punk', 'Metal', 'Grunge',
        'Emo', 'Screamo', 'Hardcore', 'Post-Hardcore', 'Metalcore',
        'Death Metal', 'Black Metal', 'Thrash Metal', 'Power Metal', 'Progressive Metal',
        'Symphonic Metal', 'Folk Metal', 'Viking Metal', 'Pagan Metal', 'Celtic Metal',
        'Gothic Metal', 'Doom Metal', 'Stoner Metal', 'Sludge Metal', 'Drone Metal',
        'Industrial Metal', 'Nu Metal', 'Rap Metal', 'Funk Metal', 'Alternative Metal',
        'Country', 'Bluegrass', 'Folk', 'Celtic', 'World Music',
        'Reggae', 'Ska', 'Rocksteady', 'Dub', 'Dancehall',
        'Soca', 'Calypso', 'Mento', 'Ragga', 'Lovers Rock',
        'Roots Reggae', 'Dub Poetry', 'Ragga Muffin', 'Digital Dancehall', 'Ragga Jungle',
        'Classical', 'Baroque', 'Renaissance', 'Medieval', 'Romantic',
        'Impressionist', 'Modern', 'Contemporary', 'Avant-garde', 'Experimental',
        'Minimalist', 'Post-minimalist', 'Spectral', 'Microtonal', 'Aleatoric',
        'Serial', 'Twelve-tone', 'Atonal', 'Polytonal', 'Bitonal',
        'Modal', 'Tonal', 'Chromatic', 'Diatonic', 'Pentatonic',
        'Hexatonic', 'Heptatonic', 'Octatonic', 'Whole Tone', 'Chromatic Scale'
    ];
    
    const albums = [
        'Digital Dreams', 'Electric Nights', 'Neon Vibes', 'Cosmic Journey', 'Urban Legends',
        'Midnight Sessions', 'Dawn Chorus', 'Sunset Serenade', 'Starlight Symphony', 'Moonlight Sonata',
        'Thunder Storm', 'Lightning Strike', 'Fire Dance', 'Ice Palace', 'Water World',
        'Earth Song', 'Air Waves', 'Spirit Guide', 'Soul Search', 'Heart Beat',
        'Love Story', 'Hope Springs', 'Dream Catcher', 'Vision Quest', 'Reality Check',
        'Fantasy Land', 'Magic Kingdom', 'Mystery Tour', 'Adventure Time', 'Journey Home',
        'Destination Unknown', 'Path Finder', 'Road Trip', 'Way Forward', 'Freedom Song',
        'Liberty Bell', 'Peace Pipe', 'Harmony Hall', 'Balance Beam', 'Energy Field',
        'Power Play', 'Strength Training', 'Courage Under Fire', 'Bravery Award', 'Victory Lap',
        'Success Story', 'Triumph Over Adversity', 'Achievement Unlocked', 'Accomplishment Award', 'Celebration Time',
        'Party Animal', 'Festival Fever', 'Carnival Ride', 'Parade Float', 'Dance Floor',
        'Rhythm Section', 'Beat Box', 'Groove Machine', 'Flow State', 'Melody Maker',
        'Harmony Hall', 'Chorus Line', 'Verse Chorus Verse', 'Bridge Over Troubled Water', 'Intro Outro',
        'Solo Performance', 'Duet Partners', 'Ensemble Cast', 'Symphony Orchestra', 'Concerto Grosso',
        'Sonata Form', 'Etude Collection', 'Prelude and Fugue', 'Fugue State', 'Canon in D',
        'Round and Round', 'Chant Response', 'Hymn Book', 'Anthem for a New Generation', 'Ballad of the Brave',
        'Lullaby for Sleep', 'Serenade in Moonlight', 'Nocturne in Black', 'Waltz of the Flowers', 'Tango Argentino',
        'Samba de Janeiro', 'Rumba Cubana', 'Cha-cha-cha', 'Swing Time', 'Jive Talkin',
        'Foxtrot Oscar', 'Quickstep', 'Paso Doble', 'Blues Brothers', 'Jazz Masters',
        'Swing Kings', 'Bebop Babies', 'Cool Cats', 'Hard Bop', 'Free Jazz',
        'Fusion Confusion', 'Smooth Operator', 'Acid Test', 'Rock Solid', 'Pop Star',
        'Hip Hop Heroes', 'Rap Attack', 'R&B Royalty', 'Soul Sisters', 'Funk Masters',
        'Disco Inferno', 'House Party', 'Techno Tribe', 'Trance Dance', 'Ambient Dreams',
        'Chillout Zone', 'Downtempo', 'Trip Hop', 'Drum and Bass', 'Dubstep Revolution',
        'Trap Music', 'Future Bass', 'Progressive Rock', 'Alternative Facts', 'Indie Spirit',
        'Punk Rock', 'Metal Head', 'Grunge Monkey', 'Emo Kid', 'Screamo Queen',
        'Hardcore Punk', 'Post-Hardcore', 'Metalcore', 'Death Metal', 'Black Metal',
        'Thrash Metal', 'Power Metal', 'Progressive Metal', 'Symphonic Metal', 'Folk Metal',
        'Viking Metal', 'Pagan Metal', 'Celtic Metal', 'Gothic Metal', 'Doom Metal',
        'Stoner Metal', 'Sludge Metal', 'Drone Metal', 'Industrial Metal', 'Nu Metal',
        'Rap Metal', 'Funk Metal', 'Alternative Metal', 'Country Roads', 'Bluegrass',
        'Folk Tales', 'Celtic Cross', 'World Music', 'Reggae Roots', 'Ska Revival',
        'Rocksteady', 'Dub Plate', 'Dancehall Queen', 'Soca Party', 'Calypso King',
        'Mento Music', 'Ragga Muffin', 'Lovers Rock', 'Roots Reggae', 'Dub Poetry',
        'Ragga Muffin', 'Digital Dancehall', 'Ragga Jungle', 'Classical Gas', 'Baroque and Roll',
        'Renaissance Man', 'Medieval Times', 'Romantic Era', 'Impressionist Art', 'Modern Times',
        'Contemporary Art', 'Avant-garde', 'Experimental Music', 'Minimalist Approach', 'Post-minimalist',
        'Spectral Analysis', 'Microtonal Music', 'Aleatoric Composition', 'Serial Music', 'Twelve-tone',
        'Atonal Music', 'Polytonal Harmony', 'Bitonal Chords', 'Modal Jazz', 'Tonal Center',
        'Chromatic Scale', 'Diatonic Harmony', 'Pentatonic Scale', 'Hexatonic Mode', 'Heptatonic Scale',
        'Octatonic Scale', 'Whole Tone Scale', 'Chromatic Fantasy'
    ];
    
    const expandedSongs = [];
    let songId = 31; // Start after existing songs
    
    // Generate 1000+ songs across all genres
    for (let i = 0; i < 1000; i++) {
        const genre = genres[Math.floor(Math.random() * genres.length)];
        const artist = artists[Math.floor(Math.random() * artists.length)];
        const title = songTitles[Math.floor(Math.random() * songTitles.length)];
        const album = albums[Math.floor(Math.random() * albums.length)];
        
        // Generate realistic duration (2:00 to 6:00)
        const minutes = Math.floor(Math.random() * 4) + 2;
        const seconds = Math.floor(Math.random() * 60);
        const duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        expandedSongs.push({
            id: songId++,
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            duration: duration,
            artwork: `https://picsum.photos/seed/song${songId}/400`,
            audioUrl: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(songId % 10) + 1}.mp3`
        });
    }
    
    // Add genre-based playlists
    const genrePlaylists = genres.map((genre, index) => ({
        id: 100 + index,
        title: `${genre} Collection`,
        description: `The best ${genre.toLowerCase()} tracks`,
        artwork: `https://picsum.photos/seed/${genre.toLowerCase()}/400`,
        songs: expandedSongs
            .filter(song => song.genre === genre)
            .slice(0, 20)
            .map(song => song.id)
    }));
    
    // Add the expanded songs to the library
    musicLibrary.songs = [...musicLibrary.songs, ...expandedSongs];
    musicLibrary.playlists = [...musicLibrary.playlists, ...genrePlaylists];
}

// Initialize expanded music library
generateExpandedMusicLibrary();

// Player State
let playerState = {
    currentSong: null,
    isPlaying: false,
    isShuffle: false,
    repeatMode: 'off', // 'off', 'all', 'one'
    volume: 0.7,
    currentPlaylist: [],
    currentIndex: 0
};

// User Data (stored in localStorage)
let userData = {
    likedSongs: [],
    userPlaylists: [],
    currentView: 'home', // 'home', 'search', 'library', 'liked'
    isAuthenticated: false,
    currentUser: null
};

// Load user data from localStorage
function loadUserData() {
    const saved = localStorage.getItem('soundwaveUserData');
    if (saved) {
        userData = JSON.parse(saved);
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('soundwaveUserData', JSON.stringify(userData));
}

// Authentication Functions
function showAuthModal() {
    const modal = document.getElementById('authModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideAuthModal() {
    const modal = document.getElementById('authModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showSignInForm() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
}

function showSignUpForm() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

function signIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple authentication (in real app, this would be server-side)
    const users = JSON.parse(localStorage.getItem('soundwaveUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        userData.isAuthenticated = true;
        userData.currentUser = user;
        saveUserData();
        updateUserButton();
        hideAuthModal();
        alert(`Welcome back, ${user.name}!`);
    } else {
        alert('Invalid email or password');
    }
}

function signUp() {
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('soundwaveUsers') || '[]');
    
    if (users.find(u => u.email === email)) {
        alert('Email already exists');
        return;
    }
    
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem('soundwaveUsers', JSON.stringify(users));
    
    userData.isAuthenticated = true;
    userData.currentUser = newUser;
    saveUserData();
    updateUserButton();
    hideAuthModal();
    alert(`Welcome to Soundwave, ${name}!`);
}

function signOut() {
    userData.isAuthenticated = false;
    userData.currentUser = null;
    saveUserData();
    updateUserButton();
    alert('Signed out successfully');
}

function updateUserButton() {
    const userBtn = document.getElementById('userBtn');
    const userBtnText = document.getElementById('userBtnText');
    
    if (userData.isAuthenticated) {
        userBtnText.textContent = userData.currentUser.name;
        userBtn.onclick = signOut;
    } else {
        userBtnText.textContent = 'Sign In';
        userBtn.onclick = showAuthModal;
    }
}

// DOM Elements
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const likeBtn = document.getElementById('likeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeBtn = document.getElementById('volumeBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const playerTitle = document.getElementById('playerTitle');
const playerArtist = document.getElementById('playerArtist');
const playerArtwork = document.getElementById('playerArtwork');
// Search input removed - search now handled by navigation

// Initialize App
function init() {
    loadUserData();
    updateUserButton();
    loadAllMusic();
    setupEventListeners();
    setupNavigationListeners();
    setupAuthListeners();
    updateSidebarPlaylists();
    audioPlayer.volume = playerState.volume;
}

// Load All Music
function loadAllMusic() {
    const container = document.getElementById('allMusicList');
    const songs = musicLibrary.songs;
    
    container.innerHTML = songs.map((song, index) => `
        <div class="song-row" onclick="playSong(${song.id})">
            <div class="song-number">${index + 1}</div>
            <div class="song-play-btn"><i class="fas fa-play"></i></div>
            <img src="${song.artwork}" alt="${song.title}" class="song-thumbnail">
            <div class="song-title-artist">
                <div class="song-name">${song.title}</div>
                <div class="song-artist-name">${song.artist}</div>
            </div>
            <div class="song-album">${song.album}</div>
            <div class="song-duration">${song.duration}</div>
            ${song.genre ? `<div class="song-genre">${song.genre}</div>` : ''}
        </div>
    `).join('');
}

// Load Category Browser for Search
function loadCategoryBrowser() {
    const container = document.getElementById('categoryBrowser');
    const genres = Object.keys(musicCategories);
    
    container.innerHTML = genres.map(genre => {
        const genreSongs = musicLibrary.songs.filter(song => song.genre === genre);
        return `
            <div class="category-card" onclick="filterByGenre('${genre}')" style="background: linear-gradient(135deg, ${musicCategories[genre].color}, ${musicCategories[genre].color}88)">
                <div class="category-card-content">
                    <div class="category-icon-large">${musicCategories[genre].icon}</div>
                    <div class="category-info">
                        <h3>${genre}</h3>
                        <p>${genreSongs.length} songs</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Load Featured Playlists
function loadFeaturedPlaylists() {
    const container = document.getElementById('featuredPlaylists');
    const playlists = musicLibrary.playlists.slice(0, 6);
    
    container.innerHTML = playlists.map(playlist => `
        <div class="card" onclick="playPlaylist(${playlist.id})">
            <img src="${playlist.artwork}" alt="${playlist.title}" class="card-image">
            <div class="card-title">${playlist.title}</div>
            <div class="card-description">${playlist.description}</div>
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
    `).join('');
}

// Load Popular Songs
function loadPopularSongs() {
    const container = document.getElementById('songsList');
    const songs = musicLibrary.songs;
    
    container.innerHTML = songs.map((song, index) => `
        <div class="song-row" onclick="playSong(${song.id})">
            <div class="song-number">${index + 1}</div>
            <div class="song-play-btn"><i class="fas fa-play"></i></div>
            <img src="${song.artwork}" alt="${song.title}" class="song-thumbnail">
            <div class="song-title-artist">
                <div class="song-name">${song.title}</div>
                <div class="song-artist-name">${song.artist}</div>
            </div>
            <div class="song-album">${song.album}</div>
            <div class="song-duration">${song.duration}</div>
        </div>
    `).join('');
}

// Load Recently Played
function loadRecentlyPlayed() {
    const container = document.getElementById('recentlyPlayed');
    const albums = musicLibrary.songs.slice(0, 6);
    
    container.innerHTML = albums.map(song => `
        <div class="card" onclick="playSong(${song.id})">
            <img src="${song.artwork}" alt="${song.title}" class="card-image">
            <div class="card-title">${song.title}</div>
            <div class="card-description">${song.artist}</div>
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
    `).join('');
}

// Play Song
function playSong(songId) {
    const song = musicLibrary.songs.find(s => s.id === songId);
    if (!song) return;
    
    playerState.currentSong = song;
    playerState.currentPlaylist = musicLibrary.songs;
    playerState.currentIndex = musicLibrary.songs.findIndex(s => s.id === songId);
    
    updatePlayerUI(song);
    audioPlayer.src = song.audioUrl;
    audioPlayer.play();
    playerState.isPlaying = true;
    updatePlayButton();
}

// Play Playlist
function playPlaylist(playlistId) {
    const playlist = musicLibrary.playlists.find(p => p.id === playlistId);
    if (!playlist) return;
    
    playerState.currentPlaylist = playlist.songs.map(songId => 
        musicLibrary.songs.find(s => s.id === songId)
    );
    playerState.currentIndex = 0;
    
    const firstSong = playerState.currentPlaylist[0];
    playerState.currentSong = firstSong;
    
    updatePlayerUI(firstSong);
    audioPlayer.src = firstSong.audioUrl;
    audioPlayer.play();
    playerState.isPlaying = true;
    updatePlayButton();
}

// Update Player UI
function updatePlayerUI(song) {
    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;
    playerArtwork.src = song.artwork;
    document.title = `${song.title} - ${song.artist} | Soundwave`;
    
    // Update like button state
    const icon = likeBtn.querySelector('i');
    if (userData.likedSongs.includes(song.id)) {
        icon.className = 'fas fa-heart';
        likeBtn.classList.add('active');
    } else {
        icon.className = 'far fa-heart';
        likeBtn.classList.remove('active');
    }
}

// Update Play Button
function updatePlayButton() {
    const icon = playBtn.querySelector('i');
    if (playerState.isPlaying) {
        icon.className = 'fas fa-pause';
    } else {
        icon.className = 'fas fa-play';
    }
}

// Play/Pause Toggle
function togglePlay() {
    if (!playerState.currentSong) return;
    
    if (playerState.isPlaying) {
        audioPlayer.pause();
        playerState.isPlaying = false;
    } else {
        audioPlayer.play();
        playerState.isPlaying = true;
    }
    updatePlayButton();
}

// Previous Song
function playPrevious() {
    if (playerState.currentPlaylist.length === 0) return;
    
    playerState.currentIndex--;
    if (playerState.currentIndex < 0) {
        playerState.currentIndex = playerState.currentPlaylist.length - 1;
    }
    
    const song = playerState.currentPlaylist[playerState.currentIndex];
    playerState.currentSong = song;
    updatePlayerUI(song);
    audioPlayer.src = song.audioUrl;
    if (playerState.isPlaying) {
        audioPlayer.play();
    }
}

// Next Song
function playNext() {
    if (playerState.currentPlaylist.length === 0) return;
    
    if (playerState.isShuffle) {
        playerState.currentIndex = Math.floor(Math.random() * playerState.currentPlaylist.length);
    } else {
        playerState.currentIndex++;
        if (playerState.currentIndex >= playerState.currentPlaylist.length) {
            playerState.currentIndex = 0;
        }
    }
    
    const song = playerState.currentPlaylist[playerState.currentIndex];
    playerState.currentSong = song;
    updatePlayerUI(song);
    audioPlayer.src = song.audioUrl;
    if (playerState.isPlaying) {
        audioPlayer.play();
    }
}

// Toggle Shuffle
function toggleShuffle() {
    playerState.isShuffle = !playerState.isShuffle;
    shuffleBtn.classList.toggle('active', playerState.isShuffle);
}

// Toggle Repeat
function toggleRepeat() {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(playerState.repeatMode);
    playerState.repeatMode = modes[(currentIndex + 1) % modes.length];
    
    repeatBtn.classList.toggle('active', playerState.repeatMode !== 'off');
    
    const icon = repeatBtn.querySelector('i');
    if (playerState.repeatMode === 'one') {
        icon.className = 'fas fa-redo';
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i><span style="font-size: 10px; position: absolute; bottom: 2px;">1</span>';
    } else {
        repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
    }
}

// Toggle Like
function toggleLike() {
    if (!playerState.currentSong) return;
    
    const songId = playerState.currentSong.id;
    const icon = likeBtn.querySelector('i');
    
    if (userData.likedSongs.includes(songId)) {
        // Unlike
        userData.likedSongs = userData.likedSongs.filter(id => id !== songId);
        icon.className = 'far fa-heart';
        likeBtn.classList.remove('active');
    } else {
        // Like
        userData.likedSongs.push(songId);
        icon.className = 'fas fa-heart';
        likeBtn.classList.add('active');
    }
    
    saveUserData();
    
    // Refresh view if on liked songs page
    if (userData.currentView === 'liked') {
        showLikedSongs();
    }
}

// Update Progress Bar
function updateProgress() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressFill.style.width = `${progress}%`;
    progressBar.value = progress;
    
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    durationEl.textContent = formatTime(audioPlayer.duration);
}

// Format Time
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Seek
function seek(e) {
    const percent = e.target.value;
    const time = (percent / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
}

// Update Volume
function updateVolume(e) {
    playerState.volume = e.target.value / 100;
    audioPlayer.volume = playerState.volume;
    updateVolumeIcon();
}

// Update Volume Icon
function updateVolumeIcon() {
    const icon = volumeBtn.querySelector('i');
    if (playerState.volume === 0) {
        icon.className = 'fas fa-volume-mute';
    } else if (playerState.volume < 0.5) {
        icon.className = 'fas fa-volume-down';
    } else {
        icon.className = 'fas fa-volume-up';
    }
}

// Toggle Mute
function toggleMute() {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeSlider.value = 0;
        playerState.volume = 0;
    } else {
        audioPlayer.volume = 0.7;
        volumeSlider.value = 70;
        playerState.volume = 0.7;
    }
    updateVolumeIcon();
}

// Search Functionality - Now handled by navigation
function showSearchPage() {
    userData.currentView = 'search';
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <section class="section">
            <h2>Browse by Genre</h2>
            <div class="category-browser" id="categoryBrowser"></div>
        </section>
        <section class="section">
            <h2>All Playlists</h2>
            <div class="card-grid" id="allPlaylists"></div>
        </section>
    `;
    loadCategoryBrowser();
    loadAllPlaylists();
    updateActiveNav('search');
}

// Load All Playlists
function loadAllPlaylists() {
    const container = document.getElementById('allPlaylists');
    const playlists = musicLibrary.playlists;
    
    container.innerHTML = playlists.map(playlist => `
        <div class="card" onclick="playPlaylist(${playlist.id})">
            <img src="${playlist.artwork}" alt="${playlist.title}" class="card-image">
            <div class="card-title">${playlist.title}</div>
            <div class="card-description">${playlist.description}</div>
            <div class="play-overlay">
                <i class="fas fa-play"></i>
            </div>
        </div>
    `).join('');
}

// Show Search View
function showSearchView(query) {
    userData.currentView = 'search';
    
    const filteredSongs = musicLibrary.songs.filter(song => 
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query) ||
        (song.genre && song.genre.toLowerCase().includes(query))
    );
    
    const filteredPlaylists = musicLibrary.playlists.filter(playlist =>
        playlist.title.toLowerCase().includes(query) ||
        playlist.description.toLowerCase().includes(query)
    );
    
    // Check if query matches a genre
    const matchingGenres = Object.keys(musicCategories).filter(genre => 
        genre.toLowerCase().includes(query.toLowerCase())
    );
    
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <section class="section">
            <h2>Search Results for "${query}"</h2>
            ${matchingGenres.length > 0 ? `
            <div class="category-filters">
                <h3>Genres</h3>
                <div class="category-chips">
                    ${matchingGenres.map(genre => `
                        <div class="category-chip" style="background-color: ${musicCategories[genre].color}" onclick="filterByGenre('${genre}')">
                            <span class="category-icon">${musicCategories[genre].icon}</span>
                            <span class="category-name">${genre}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        </section>
        ${filteredPlaylists.length > 0 ? `
        <section class="section">
            <h2>Playlists</h2>
            <div class="card-grid">
                ${filteredPlaylists.map(playlist => `
                    <div class="card" onclick="playPlaylist(${playlist.id})">
                        <img src="${playlist.artwork}" alt="${playlist.title}" class="card-image">
                        <div class="card-title">${playlist.title}</div>
                        <div class="card-description">${playlist.description}</div>
                        <div class="play-overlay">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
        ` : ''}
        ${filteredSongs.length > 0 ? `
        <section class="section">
            <h2>Songs (${filteredSongs.length} results)</h2>
            <div class="songs-list">
                ${filteredSongs.slice(0, 50).map((song, index) => `
                    <div class="song-row" onclick="playSong(${song.id})">
                        <div class="song-number">${index + 1}</div>
                        <div class="song-play-btn"><i class="fas fa-play"></i></div>
                        <img src="${song.artwork}" alt="${song.title}" class="song-thumbnail">
                        <div class="song-title-artist">
                            <div class="song-name">${song.title}</div>
                            <div class="song-artist-name">${song.artist}</div>
                        </div>
                        <div class="song-album">${song.album}</div>
                        <div class="song-duration">${song.duration}</div>
                        ${song.genre ? `<div class="song-genre">${song.genre}</div>` : ''}
                    </div>
                `).join('')}
            </div>
            ${filteredSongs.length > 50 ? `<p style="color: var(--text-subdued); text-align: center; margin-top: 16px;">Showing first 50 results. Use search to narrow down results.</p>` : ''}
        </section>
        ` : '<section class="section"><p style="color: var(--text-subdued);">No results found.</p></section>'}
    `;
}

// Filter by Genre
function filterByGenre(genre) {
    const genreSongs = musicLibrary.songs.filter(song => song.genre === genre);
    const contentArea = document.querySelector('.content-area');
    
    contentArea.innerHTML = `
        <section class="section">
            <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
                <div style="width: 200px; height: 200px; background: ${musicCategories[genre].color}; display: flex; align-items: center; justify-content: center; border-radius: 8px;">
                    <span style="font-size: 80px;">${musicCategories[genre].icon}</span>
                </div>
                <div>
                    <p style="font-size: 12px; font-weight: 700;">GENRE</p>
                    <h1 style="font-size: 48px; font-weight: 900; margin: 8px 0;">${genre}</h1>
                    <p style="color: var(--text-subdued);">${genreSongs.length} songs</p>
                </div>
            </div>
            ${genreSongs.length > 0 ? `
                <div class="songs-list">
                    ${genreSongs.map((song, index) => `
                        <div class="song-row" onclick="playSong(${song.id})">
                            <div class="song-number">${index + 1}</div>
                            <div class="song-play-btn"><i class="fas fa-play"></i></div>
                            <img src="${song.artwork}" alt="${song.title}" class="song-thumbnail">
                            <div class="song-title-artist">
                                <div class="song-name">${song.title}</div>
                                <div class="song-artist-name">${song.artist}</div>
                            </div>
                            <div class="song-album">${song.album}</div>
                            <div class="song-duration">${song.duration}</div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="color: var(--text-subdued); text-align: center; margin-top: 40px;">No songs found in this genre.</p>'}
        </section>
    `;
}

// Setup Event Listeners
function setupEventListeners() {
    // Player Controls
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', playPrevious);
    nextBtn.addEventListener('click', playNext);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    likeBtn.addEventListener('click', toggleLike);
    
    // Audio Events
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('ended', () => {
        if (playerState.repeatMode === 'one') {
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else if (playerState.repeatMode === 'all' || playerState.currentIndex < playerState.currentPlaylist.length - 1) {
            playNext();
        } else {
            playerState.isPlaying = false;
            updatePlayButton();
        }
    });
    
    // Progress Bar
    progressBar.addEventListener('input', seek);
    
    // Volume
    volumeSlider.addEventListener('input', updateVolume);
    volumeBtn.addEventListener('click', toggleMute);
    
    // Search functionality now handled by navigation
    
    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            togglePlay();
        }
    });
}

// Setup Authentication Event Listeners
function setupAuthListeners() {
    // User button
    document.getElementById('userBtn').addEventListener('click', showAuthModal);
    
    // Modal close buttons
    document.getElementById('closeAuthModal').addEventListener('click', hideAuthModal);
    document.getElementById('closeEqualizerModal').addEventListener('click', () => {
        document.getElementById('equalizerModal').style.display = 'none';
    });
    
    // Form toggle buttons
    document.getElementById('showSignUp').addEventListener('click', showSignUpForm);
    document.getElementById('showSignIn').addEventListener('click', showSignInForm);
    
    // Form submit buttons
    document.getElementById('signInBtn').addEventListener('click', signIn);
    document.getElementById('signUpBtn').addEventListener('click', signUp);
    
    // Equalizer button
    document.getElementById('equalizerBtn').addEventListener('click', () => {
        document.getElementById('equalizerModal').style.display = 'flex';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const authModal = document.getElementById('authModal');
        const equalizerModal = document.getElementById('equalizerModal');
        if (e.target === authModal) hideAuthModal();
        if (e.target === equalizerModal) equalizerModal.style.display = 'none';
    });
}

// Navigation Functions
function showHome() {
    userData.currentView = 'home';
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <section class="section">
            <h2>All Music</h2>
            <div class="songs-list" id="allMusicList"></div>
        </section>
    `;
    loadAllMusic();
    updateActiveNav('home');
}

function showLibrary() {
    userData.currentView = 'library';
    const contentArea = document.querySelector('.content-area');
    
    const allPlaylists = [...musicLibrary.playlists, ...userData.userPlaylists];
    
    contentArea.innerHTML = `
        <section class="section">
            <h2>Your Library</h2>
            ${allPlaylists.length > 0 ? `
                <div class="card-grid">
                    ${allPlaylists.map(playlist => `
                        <div class="card" onclick="viewPlaylistDetails(${playlist.id}, ${playlist.isUserPlaylist || false})">
                            <img src="${playlist.artwork}" alt="${playlist.title}" class="card-image">
                            <div class="card-title">${playlist.title}</div>
                            <div class="card-description">${playlist.description}</div>
                            <div class="play-overlay" onclick="event.stopPropagation(); playPlaylist(${playlist.id});">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="color: var(--text-subdued);">No playlists yet. Create your first playlist!</p>'}
        </section>
    `;
    updateActiveNav('library');
}

function showLikedSongs() {
    userData.currentView = 'liked';
    const contentArea = document.querySelector('.content-area');
    
    const likedSongs = userData.likedSongs.map(id => 
        musicLibrary.songs.find(s => s.id === id)
    ).filter(s => s);
    
    contentArea.innerHTML = `
        <section class="section">
            <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
                <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #5e48e8, #c44891); display: flex; align-items: center; justify-content: center; border-radius: 8px;">
                    <i class="fas fa-heart" style="font-size: 80px; color: white;"></i>
                </div>
                <div>
                    <p style="font-size: 12px; font-weight: 700;">PLAYLIST</p>
                    <h1 style="font-size: 48px; font-weight: 900; margin: 8px 0;">Liked Songs</h1>
                    <p style="color: var(--text-subdued);">${likedSongs.length} songs</p>
                </div>
            </div>
            ${likedSongs.length > 0 ? `
                <div class="songs-list">
                    ${likedSongs.map((song, index) => `
                        <div class="song-row" onclick="playSong(${song.id})">
                            <div class="song-number">${index + 1}</div>
                            <div class="song-play-btn"><i class="fas fa-play"></i></div>
                            <img src="${song.artwork}" alt="${song.title}" class="song-thumbnail">
                            <div class="song-title-artist">
                                <div class="song-name">${song.title}</div>
                                <div class="song-artist-name">${song.artist}</div>
                            </div>
                            <div class="song-album">${song.album}</div>
                            <div class="song-duration">${song.duration}</div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="color: var(--text-subdued); text-align: center; margin-top: 40px;">No liked songs yet. Like songs by clicking the heart icon!</p>'}
        </section>
    `;
    updateActiveNav('liked');
}

function createPlaylist() {
    const playlistName = prompt('Enter playlist name:');
    if (!playlistName) return;
    
    const newPlaylist = {
        id: Date.now(),
        title: playlistName,
        description: 'Created by you',
        artwork: `https://picsum.photos/seed/userplaylist${Date.now()}/400`,
        songs: [],
        isUserPlaylist: true
    };
    
    userData.userPlaylists.push(newPlaylist);
    saveUserData();
    updateSidebarPlaylists();
    
    alert(`Playlist "${playlistName}" created!`);
    showLibrary();
}

function updateSidebarPlaylists() {
    const playlistsContainer = document.querySelector('.playlists');
    const allPlaylists = [...musicLibrary.playlists.slice(0, 4), ...userData.userPlaylists];
    
    playlistsContainer.innerHTML = allPlaylists.map(playlist => `
        <div class="playlist-item" onclick="viewPlaylistDetails(${playlist.id}, ${playlist.isUserPlaylist || false})">
            ${playlist.title}
        </div>
    `).join('');
}

function viewPlaylistDetails(playlistId, isUserPlaylist) {
    const playlist = isUserPlaylist 
        ? userData.userPlaylists.find(p => p.id === playlistId)
        : musicLibrary.playlists.find(p => p.id === playlistId);
    
    if (!playlist) return;
    
    const playlistSongs = playlist.songs.map(songId => 
        musicLibrary.songs.find(s => s.id === songId)
    ).filter(s => s);
    
    const contentArea = document.querySelector('.content-area');
    contentArea.innerHTML = `
        <section class="section">
            <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px;">
                <img src="${playlist.artwork}" alt="${playlist.title}" style="width: 200px; height: 200px; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
                <div>
                    <p style="font-size: 12px; font-weight: 700;">PLAYLIST</p>
                    <h1 style="font-size: 48px; font-weight: 900; margin: 8px 0;">${playlist.title}</h1>
                    <p style="color: var(--text-subdued);">${playlist.description} • ${playlistSongs.length} songs</p>
                    <button onclick="playPlaylist(${playlist.id})" style="margin-top: 16px; padding: 12px 32px; background: var(--primary-color); border: none; border-radius: 500px; color: #000; font-weight: 700; cursor: pointer; font-size: 14px;">
                        <i class="fas fa-play"></i> PLAY
                    </button>
                </div>
            </div>
            ${playlistSongs.length > 0 ? `
                <div class="songs-list">
                    ${playlistSongs.map((song, index) => `
                        <div class="song-row" onclick="playSong(${song.id})">
                            <div class="song-number">${index + 1}</div>
                            <div class="song-play-btn"><i class="fas fa-play"></i></div>
                            <img src="${song.artwork}" alt="${song.title}" class="song-thumbnail">
                            <div class="song-title-artist">
                                <div class="song-name">${song.title}</div>
                                <div class="song-artist-name">${song.artist}</div>
                            </div>
                            <div class="song-album">${song.album}</div>
                            <div class="song-duration">${song.duration}</div>
                        </div>
                    `).join('')}
                </div>
            ` : '<p style="color: var(--text-subdued); text-align: center; margin-top: 40px;">No songs in this playlist yet.</p>'}
        </section>
    `;
}

function updateActiveNav(view) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const navMap = {
        'home': 0,
        'search': 1,
        'library': 2,
        'create': 3,
        'liked': 4
    };
    
    const navItems = document.querySelectorAll('.nav-item');
    if (navMap[view] !== undefined && navItems[navMap[view]]) {
        navItems[navMap[view]].classList.add('active');
    }
}

function setupNavigationListeners() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems[0]?.addEventListener('click', (e) => {
        e.preventDefault();
        showHome();
    });
    
    navItems[1]?.addEventListener('click', (e) => {
        e.preventDefault();
        showSearchPage();
    });
    
    navItems[2]?.addEventListener('click', (e) => {
        e.preventDefault();
        showLibrary();
    });
    
    navItems[3]?.addEventListener('click', (e) => {
        e.preventDefault();
        createPlaylist();
    });
    
    navItems[4]?.addEventListener('click', (e) => {
        e.preventDefault();
        showLikedSongs();
    });
}

// Initialize on load
window.addEventListener('DOMContentLoaded', init);
