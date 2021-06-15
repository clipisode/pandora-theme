import {
  GetElementsFn,
  OriginY,
  TextAlign,
  VideoSource,
} from "@clipisode/theme";

export const getElements: GetElementsFn = (answer) => {
  const WIDTH = 720;
  const HEIGHT = 1280;
  const SPACING = 25;
  const YOYOMIN = 5.0;
  const TITLEDURATION = 1.5;
  const ENDINGCLIPDURATION = 6.9;

  const nameRectProps = {
    x: 0,
    y: HEIGHT - 210,
    width: WIDTH,
    height: 100,
    color: "#000000",
  };

  const titleAnimations = [
    {
      startAt: TITLEDURATION - 0.5,
      endAt: TITLEDURATION - 0.1,
      field: "alpha",
      from: 1.0,
      to: 0.0,
    },
    {
      startAt: TITLEDURATION - 0.1,
      endAt: TITLEDURATION,
      field: "alpha",
      from: 0.0,
      to: 0.0,
    },
  ];

  const nameTextProps = {
    fontName: "OpenSans-Regular",
    fontSize: 44,
    lineHeight: 48,
    textAlign: TextAlign.Center,
    x: SPACING,
    y: HEIGHT - 140,
    originY: OriginY.Center,
    width: WIDTH - SPACING * 2,
    height: 100,
    color: "#FFFFFF",
  };

  return [
    {
      type: "frame",
      name: "frame.reply.first",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        videoKey: answer.reply.clip.id,
        position: "first",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      // reply video ending frame fix
      type: "frame",
      name: "frame.reply.last",
      startAt: 2 + answer.reply.clip.duration - 0.5,
      endAt: 2 + answer.reply.clip.duration,
      props: {
        videoKey: answer.reply.clip.id,
        position: "last",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "video",
      name: "video.reply",
      videoKey: answer.reply.clip.id,
      source: VideoSource.Clip,
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + answer.reply.clip.duration,
      props: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      // answer video ending frame fix
      type: "frame",
      name: "frame.answer.last",
      startAt:
        TITLEDURATION + answer.reply.clip.duration + answer.clip.duration - 0.5,
      endAt:
        TITLEDURATION +
        answer.reply.clip.duration +
        answer.clip.duration + 0.2,
      props: {
        videoKey: answer.clip.id,
        position: "last",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
      animations: [
        {
          startAt: answer.clip.duration,
          endAt: answer.clip.duration + 0.2,
          field: "alpha",
          from: 1.0,
          to: 0.0,
        },
      ],
    },
    {
      type: "video",
      name: "video.answer",
      videoKey: answer.clip.id,
      source: VideoSource.Clip,
      startAt: TITLEDURATION + answer.reply.clip.duration,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
    {
      type: "image",
      name: "title.fade",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        imageKey: "title-fade.png",
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
        alpha: 1,
      },
      animations: titleAnimations,
    },
    {
      type: "image",
      name: "title.image",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        imageKey: "title.png",
        x: 0,
        y: 0,
        width: WIDTH,
        height: 240,
        alpha: 1,
      },
      animations: titleAnimations,
    },
    {
      type: "image",
      name: "title.sponsor",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        imageKey: "capital-one-logo-white.png",
        x: WIDTH - 230,
        y: HEIGHT - 120,
        width: 180,
        height: 65,
        alpha: 1,
      },
      animations: titleAnimations,
    },
    {
      type: "text",
      name: "title.featuring",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        value: "FEATURING",
        color: "#FFFFFF",
        fontName: "OpenSans-Bold",
        fontSize: 24,
        lineHeight: 36,
        textAlign: TextAlign.Center,
        x: SPACING,
        y: 220,
        width: 280,
        height: 54,
        alpha: 1,
      },
      animations: titleAnimations,
    },
    {
      type: "text",
      name: "title.host",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        value: answer.clip.displayName,
        color: "#FFFFFF",
        fontName: "OpenSans-Regular",
        fontSize: 40,
        lineHeight: 40,
        textAlign: TextAlign.Center,
        x: SPACING,
        y: 260,
        width: 280,
        height: 54,
        alpha: 1,
      },
      animations: titleAnimations,
    },
    {
      type: "text",
      name: "title.presented",
      startAt: 0,
      endAt: TITLEDURATION,
      props: {
        value: "PRESENTED BY",
        color: "#FFFFFF",
        fontName: "OpenSans-Bold",
        fontSize: 24,
        lineHeight: 36,
        textAlign: TextAlign.Center,
        x: WIDTH - 230,
        y: HEIGHT - 160,
        width: 180,
        height: 54,
        alpha: 1,
      },
      animations: titleAnimations,
    },
    {
      type: "image",
      name: "combination.icon",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        imageKey: "icon-blue.png",
        alpha: 0.8,
        x: 575,
        y: 50,
        width: 90,
        height: 90,
      },
      animations:
        answer.reply.clip.duration + answer.clip.duration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 1.0,
                field: "alpha",
                from: 0,
                to: 0.8,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.0,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 0.8,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.5,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.5,
                endAt: TITLEDURATION + 1.0,
                field: "alpha",
                from: 0,
                to: 0.8,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "width",
                from: 0,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "height",
                from: 0,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "x",
                from: 620,
                to: 575,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 0.8,
                field: "y",
                from: 95,
                to: 50,
              },

              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "width",
                from: 90,
                to: 100,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "height",
                from: 90,
                to: 100,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "x",
                from: 575,
                to: 570,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 0.9,
                field: "y",
                from: 50,
                to: 45,
              },

              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "width",
                from: 100,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "height",
                from: 100,
                to: 90,
              },
              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "x",
                from: 570,
                to: 575,
              },
              {
                startAt: TITLEDURATION + 0.9,
                endAt: TITLEDURATION + 1.0,
                field: "y",
                from: 45,
                to: 50,
              },

              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.0,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                field: "width",
                from: 90,
                to: 100,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.0,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                field: "height",
                from: 90,
                to: 100,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.0,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                field: "x",
                from: 575,
                to: 570,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.0,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                field: "y",
                from: 50,
                to: 45,
              },

              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                field: "width",
                from: 100,
                to: 90,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                field: "height",
                from: 100,
                to: 90,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                field: "x",
                from: 570,
                to: 575,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.9,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                field: "y",
                from: 45,
                to: 50,
              },

              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                field: "width",
                from: 90,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                field: "height",
                from: 90,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                field: "x",
                from: 575,
                to: 620,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                field: "y",
                from: 50,
                to: 95,
              },

              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.0,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.5,
                field: "alpha",
                from: 0.8,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.5,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "gradient",
      name: "question.fade",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + answer.reply.clip.duration,
      props: {
        alpha: 1,
        rVal: 54,
        gVal: 104,
        bVal: 255,
        ...nameRectProps,
      },
      animations:
        answer.reply.clip.duration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.8,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.8,
                endAt: TITLEDURATION + 1.6,
                field: "alpha",
                from: 0,
                to: 1,
              },
            ],
    },
    {
      type: "text",
      name: "question.name",
      startAt: TITLEDURATION,
      endAt: TITLEDURATION + answer.reply.clip.duration,
      props: {
        alpha: 1,
        value: answer.reply.clip.displayName,
        ...nameTextProps,
      },
      animations:
        answer.reply.clip.duration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.2,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration - 0.2,
                endAt: TITLEDURATION + answer.reply.clip.duration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION,
                endAt: TITLEDURATION + 0.2,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + 0.2,
                endAt: TITLEDURATION + 1.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration - 1.4,
                endAt: TITLEDURATION + answer.reply.clip.duration - 0.2,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration - 0.2,
                endAt: TITLEDURATION + answer.reply.clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      // TODO: convert to a Snapchat story-style stripe
      type: "gradient",
      name: "answer.fade",
      startAt: TITLEDURATION + answer.reply.clip.duration,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        alpha: 1,
        rVal: 54,
        gVal: 104,
        bVal: 255,
        ...nameRectProps,
      },
      animations:
        answer.clip.duration < YOYOMIN
          ? [
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.4,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.6,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.8,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "text",
      name: "answer.name",
      startAt: TITLEDURATION + answer.reply.clip.duration,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        alpha: 1,
        value: answer.clip.displayName,
        ...nameTextProps,
      },
      animations:
        answer.clip.duration < YOYOMIN
          ? [
              {
                startAt: TITLEDURATION + answer.reply.clip.duration,
                endAt: TITLEDURATION + answer.reply.clip.duration + 0.2,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 1,
                to: 0,
              },
            ]
          : [
              {
                startAt: TITLEDURATION + answer.reply.clip.duration,
                endAt: TITLEDURATION + answer.reply.clip.duration + 0.2,
                field: "alpha",
                from: 0,
                to: 0,
              },
              {
                startAt: TITLEDURATION + answer.reply.clip.duration + 0.2,
                endAt: TITLEDURATION + answer.reply.clip.duration + 1.4,
                field: "alpha",
                from: 0,
                to: 1,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  1.4,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                field: "alpha",
                from: 1,
                to: 0,
              },
              {
                startAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration -
                  0.2,
                endAt:
                  TITLEDURATION +
                  answer.reply.clip.duration +
                  answer.clip.duration,
                field: "alpha",
                from: 0,
                to: 0,
              },
            ],
    },
    {
      type: "rect",
      name: "ending.shade",
      startAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration - 0.25,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      props: {
        color: "#000000",
        alpha: 0.0,
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
      animations: [
        {
          startAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration - 0.25,
          endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
          field: "alpha",
          from: 0.0,
          to: 1.0,
        },
      ],
    },
    {
      type: "video",
      name: "ending.bumper",
      videoKey: "ending-2021.mp4",
      source: VideoSource.Theme,
      startAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration,
      endAt: TITLEDURATION + answer.reply.clip.duration + answer.clip.duration + ENDINGCLIPDURATION,
      props: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
      },
    },
  ];
};
