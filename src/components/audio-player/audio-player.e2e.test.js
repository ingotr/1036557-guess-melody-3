import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AudioPlayer from "./audio-player.jsx";

configure({adapter: new Adapter()});

const mock = {
  song: {
    src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`
  }
};

it(`AudioPlayer play button be pressed`, () => {
  const {song} = mock;

  const onPlayButtonHandler = jest.fn();
  const audioPlayer = shallow(
      <AudioPlayer
        isPlaying={true}
        onPlayButtonClick={onPlayButtonHandler}
        src={song.src}
      />
  );

  const playButton = audioPlayer.find(`button.track__button--play`);

  playButton.props().onClick();

  expect(onPlayButtonHandler.mock.calls.length).toBe(1);
});

it(`AudioPlayer pause button be pressed`, () => {
  const {song} = mock;

  const onPauseButtonHandler = jest.fn();
  const audioPlayer = shallow(
      <AudioPlayer
        isPlaying={false}
        onPlayButtonClick={onPauseButtonHandler}
        src={song.src}
      />
  );

  const pauseButton = audioPlayer.find(`button.track__button--pause`);

  pauseButton.props().onClick();

  expect(onPauseButtonHandler.mock.calls.length).toBe(1);
});
