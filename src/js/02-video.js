import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');

const player = new Player(playerElement);

const saveTimeToLocalStorage = throttle(async () => {
    try {
        const currentTime = await player.getCurrentTime();
        localStorage.setItem('videoplayer-current-time', currentTime);
    } catch (error) {
        console.error('Error saving player time to local storage:', error);
    }
}, 1000);

player.on('timeupdate', saveTimeToLocalStorage);

window.addEventListener('DOMContentLoaded', async () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        try {
            await player.setCurrentTime(savedTime);
        } catch (error) {
            console.error('Error setting player time from local storage:', error);
        }
    }
});

