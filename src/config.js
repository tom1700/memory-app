define(function () {
    const config = {
        active: 'bodyParts',
        bodyParts: {
            lessonName: 'Body parts',
            horizontalAmount: 4,
            subFolder: 'example',
            tiles: [
                {
                    name: 'eye',
                    imageSrc: 'eye.png',
                    audioSrc: 'ear.mp3',
                },
                {
                    name: 'ear',
                    imageSrc: 'ear.png',
                    audioSrc: 'ear.mp3',
                },
                {
                    name: 'hand',
                    imageSrc: 'hand.png',
                    audioSrc: 'ear.mp3',
                },
                {
                    name: 'nose',
                    imageSrc: 'nose.png',
                    audioSrc: 'ear.mp3',
                },
                {
                    name: 'shoulder',
                    imageSrc: 'shoulder.gif',
                    audioSrc: 'ear.mp3',
                },
                {
                    name: 'knee',
                    imageSrc: 'knee.png',
                    audioSrc: 'ear.mp3',
                },
            ]
        }
    };

    return config[config.active];
});
