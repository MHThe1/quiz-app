import React from 'react';

const AudioPlayer = ({ src, onEnded }) => {
    const audioRef = React.useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('ended', onEnded);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', onEnded);
            }
        };
    }, [onEnded]);

    return <audio ref={audioRef} src={src} preload="auto" />;
};

export default AudioPlayer;
