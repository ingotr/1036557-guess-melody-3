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

it(`AudioPlayer play/pause button be pressed`, () => {
  const {song} = mock;
  const buttonHandler = jest.fn();

  const audioPlayer = shallow(
      <AudioPlayer
        isPlaying={true}
        onPlayButtonClick={()=>{}}
        src={song.src}
      />
  );

  const button = audioPlayer.find(`.track__button`);

  button.simulate(`click`, buttonHandler({target: false}));

  expect(buttonHandler.mock.calls.length).toBe(1);
});
