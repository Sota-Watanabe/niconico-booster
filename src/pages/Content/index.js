import { playbackControl } from './modules/playback-control';
import { playbackRateControl } from './modules/playback-rate-control';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

playbackControl();
playbackRateControl();
