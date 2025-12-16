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
import { CloudDownload, Pause, Play, RotateCcw, SkipBack, SkipForward } from "lucide-react";
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

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60).toString().padStart(2, "0");
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

	return (
		<div className="w-full max-w-xl color-anti-flash-white py-4 flex flex-col gap-6 rounded-xl">
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
				<button onClick={restart} className="p-2 rounded-full hover:bg-(--color-anti-flash-white-o25) transition-all">
					<RotateCcw size={32} />
				</button>
				<button onClick={() => skip(-10)} className="p-2 rounded-full hover:bg-(--color-anti-flash-white-o25) transition-all">
					<SkipBack size={32} />
				</button>
				<button onClick={togglePlay} className="p-2 rounded-full hover:bg-(--color-anti-flash-white-o25) transition-all">
					{isPlaying ? <Pause size={32} /> : <Play size={32} />}
				</button>
				<button onClick={() => skip(10)} className="p-2 rounded-full hover:bg-(--color-anti-flash-white-o25) transition-all">
					<SkipForward size={32} />
				</button>
				<a href={src} target="_blank" className="p-2 rounded-full hover:bg-(--color-anti-flash-white-o25) transition-all">
					<CloudDownload size={32} />
				</a>
			</div>
		</div>
	);
}


/* ----- EXPORT ----- */
export default AudioPlayer;
