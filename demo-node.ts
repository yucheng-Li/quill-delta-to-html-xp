var QuillDeltaToHtmlConverter = require('./src/QuillDeltaToHtmlConverter')
   .QuillDeltaToHtmlConverter;

var ops = [
   {
      insert: '对接啊三',
   },
   {
      attributes: {
         bold: true,
      },
      insert: '六九等卢卡',
   },
   {
      insert: '斯的撒对接卢卡斯\n',
   },
   {
      insert: {
         mention: {
            index: '0',
            denotationChar: '@',
            id: '1',
            value: 'John Doe',
         },
      },
   },
   {
      insert: ' djksaldj',
   },
   {
      insert: {
         mention: {
            index: '1',
            denotationChar: '#',
            id: '4',
            value: 'Patrik Sjölin 2',
         },
      },
   },
   {
      insert: ' \n的撒对接啊上课的',
   },
   {
      attributes: {
         header: 1,
      },
      insert: '\n',
   },
   {
      insert: 'ddjsakldj\n\n',
   },
   {
      insert: {
         image:
            'https://s.xiaopeng.com/bbs/uploaded/20230315/media_202303151446_575_file_w_1242@h_621.png',
      },
   },
   {
      insert: '\n',
   },
   {
      insert: {
         video:
            'https://xps02.xiaopeng.com/cms/material/video/2023/01-06/video_20230106135720_85074.mp4',
      },
   },
   {
      insert: '\n',
   },
];

var converter = new QuillDeltaToHtmlConverter(ops);

converter.renderCustomWith((op: any) => {
   const data = op.insert.value;
   if (data.denotationChar === '#') {
      return data.denotationChar + data.value + '#';
   }
   return data.denotationChar + data.value;
});
var html = converter.convert();

console.log(html);
