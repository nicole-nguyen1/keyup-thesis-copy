import React from 'react';
import Typography from '@material-ui/core/Typography';

const MultiLineParagraph = (props) => {
  let paragraph = [];
  let info;

  //Must put paragraphs into arrays to get proper spacing between paragraphs,
  //whereas with addresses, you do not want spacing between lines
  //The following logic takes care of all possible cases.
  if ((props.text).includes('\\n\\n')) {
    info = (props.text).split('\\n\\n');
    for (let line of info) {
      if (!line.includes('\\n')) {
        paragraph.push([line]);
      } else if (line.includes('\\n')) {
        paragraph.push(line.split('\\n'));
      }
    }
  } else if ((props.text).includes('\\n')) {
    paragraph = (props.text).split('\\n');
  } else {
    paragraph.push(props.text);
  }

  return (
    <div>
      {paragraph.map((section, index) => {
        if (Array.isArray(section)) {
          return (
            <div style={{ marginBottom: '8px' }} key={index}>
              {section.map((i, key) => {
                return <Typography key={key} style={{ whiteSpace: 'pre-wrap' }}>{i}</Typography>;
              })}
            </div>
          );
        } else {
          return <Typography key={index} style={{ whiteSpace: 'pre-wrap' }}>{section}</Typography>;
        }
      })}
    </div>
  );
};

export default MultiLineParagraph;