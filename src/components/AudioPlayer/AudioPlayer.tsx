/*
	Authors:
	>> Clément Lacroix - { clacroix2@etu.uqac.cq }
	>> Lucas Aubriet - { laubriet@etu.uqac.cq }
	>> Martin Vidal - { mvidal@etu.uqac.cq }
	>> Nathan TIROLF - { ntirolf@etu.uqac.cq }
	>> Romane Lesueur - { rlesueur@etu.uqac.cq }

	(„• ֊ •„)❤  <  Have a good day !
	--U-----U------------------------
*/


/* ----- IMPORTS ----- */
import { CloudDownload, Pause, Play, RotateCcw, SkipBack, SkipForward, Volume, Volume1, Volume2, VolumeOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";


/* ----- PROPS ----- */
type AudioPlayerProps = {
	src: string;
};


/* ----- COMPONENT ----- */
const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }: AudioPlayerProps) => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const progressBarRef = useRef<HTMLDivElement | null>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

	const togglePlay = () => {
		const audio = audioRef.current;
		if (!audio) return;

		if (isPlaying) audio.pause();
		else audio.play();

		setIsPlaying(!isPlaying);
	};

	const restart = () => {
		if (!audioRef.current) return;
		audioRef.current.currentTime = 0;
		setCurrentTime(0);
	};

	const skip = (amount: number) => {
		if (!audioRef.current) return;
		audioRef.current.currentTime += amount;
	};

	const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!progressBarRef.current || !audioRef.current) return;

		const rect = progressBarRef.current.getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const ratio = clickX / rect.width;

		audioRef.current.currentTime = ratio * duration;
	};

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const update = () => setCurrentTime(audio.currentTime);
		const loaded = () => setDuration(audio.duration);

		audio.addEventListener("timeupdate", update);
		audio.addEventListener("loadedmetadata", loaded);

		return () => {
			audio.removeEventListener("timeupdate", update);
			audio.removeEventListener("loadedmetadata", loaded);
		};
	}, []);

	useEffect(() => {
		if (audioRef.current) audioRef.current.volume = volume;
	}, [volume]);

	return (
		<div className="w-full max-w-xl text-white py-4 flex flex-col gap-6 rounded-xl">
			<audio ref={audioRef} src={src} preload="metadata" />

			<div className="flex justify-between items-center gap-4 textStyle-text opacity-80">
				<div>{formatTime(currentTime)}</div>
				<div
					ref={progressBarRef}
					className="w-full h-2 background-dark-green rounded cursor-pointer relative"
					onClick={handleProgressClick}
				>
					<div
						className="h-2 background-mountain-meadow rounded"
						style={{ width: `${(currentTime / duration) * 100}%` }}
					/>
				</div>
				<div>{formatTime(duration)}</div>
			</div>


			<div className="flex justify-around items-center gap-4">
				<button onClick={restart} className="">
					<RotateCcw size={32} />
				</button>
				<button onClick={() => skip(-10)} className="">
					<SkipBack size={32} />
				</button>
				<button onClick={togglePlay} className="">
					{isPlaying ? <Pause size={32} /> : <Play size={32} />}
				</button>
				<button onClick={() => skip(10)} className="">
					<SkipForward size={32} />
				</button>
				<button>
					<CloudDownload size={32} />
				</button>
				{/* <div className="flex items-center gap-2 ml-auto">
					<div onClick={() => setVolume(0)}>
						{volume == 0 ? <VolumeOff /> : <Volume2 />}
					</div>
					<input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e) => setVolume(Number(e.target.value))} />
				</div> */}
			</div>
		</div>
	);
}

export default AudioPlayer;
