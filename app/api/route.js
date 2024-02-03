import { NextResponse } from 'next/server';

async function getResponse(req) {
  console.log('API frame route called');
  return new NextResponse(`  
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="Interactive Audio Page">
        <meta property="og:description" content="Explore an interactive audio experience">
        <meta property="og:type" content="music.song">
        <meta property="og:audio" content="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
        <title>Interactive Audio Page</title>
    </head>
    <body>
        <h1>Interactive Audio Page</h1>
    
        <!-- Interactive Button -->
        <button id="playPauseButton" onclick="startAudio()">Play Audio</button>
    
        <!-- OpenGraph Audio Tag -->
        <audio id="audioPlayer" controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
            Your browser does not support the audio tag.
        </audio>
    
        <script>
            const audioPlayer = document.getElementById('audioPlayer');
            const playPauseButton = document.getElementById('playPauseButton');
            
            function startAudio() {
                audioPlayer.play().then(() => {
                    playPauseButton.textContent = 'Pause Audio';
                }).catch(error => {
                    console.error('Error starting audio playback:', error);
                });
            }

            playPauseButton.addEventListener('click', () => {
                if (audioPlayer.paused) {
                    startAudio();
                } else {
                    audioPlayer.pause();
                    playPauseButton.textContent = 'Play Audio';
                }
            });
        </script>
    </body>
    </html>
  `);
}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';