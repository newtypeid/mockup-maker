import * as React from 'react';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { TextAreaEvent } from '../../shared/types/common';
import './index.scss';

export const BodyComponent = () => {
  const [inputString, setString] = useState('');

  const onChangeTextArea = (e: TextAreaEvent): void => {
    setString(e.target.value);
  };

  return (
    <div className="body_container">
      <div className="box_header">box header</div>
      <div className="box_container">
        <div className="left_box">
          <textarea value={inputString} onChange={onChangeTextArea} />
        </div>
        <div className="center_box">world2</div>
        <div className="right_box">
          <SyntaxHighlighter language="typescript" style={tomorrowNight} showLineNumbers>
            {inputString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};
