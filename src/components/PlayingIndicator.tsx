export const PlayingIndicator = () => (
	<div className="flex gap-[3px] items-end h-3">
	  <span className="w-[3px] h-full bg-red-500 animate-music-bar-1"></span>
	  <span className="w-[3px] h-[60%] bg-red-500 animate-music-bar-2"></span>
	  <span className="w-[3px] h-[80%] bg-red-500 animate-music-bar-3"></span>
	</div>
  );