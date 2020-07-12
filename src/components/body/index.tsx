import * as React from 'react';
import './index.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export const BodyComponent = () => {
  const testString = `
    interface testJson = {
      'a' : 1,
      'b' : 2,
      'c' : 'string'
      'd' : [x,y,z]
    }
  `;
  return (
    <div className="body_container">
      <div className="box_header">box header</div>
      <div className="box_container">
        <div className="left_box">
          <SyntaxHighlighter language="typescript" style={tomorrowNight} showLineNumbers>
            {testString}
          </SyntaxHighlighter>
        </div>
        <div className="center_box">world2</div>
        <div className="right_box">world3</div>
      </div>
    </div>
  );
};
