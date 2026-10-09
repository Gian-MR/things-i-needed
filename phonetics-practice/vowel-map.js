const vowels=[
    {s:'/i/',word:'beat',row:0,col:0},{s:'/ɪ/',word:'bit',row:1,col:0},
    {s:'/u/',word:'boot',row:0,col:3},{s:'/ʊ/',word:'foot',row:1,col:3},
    {s:'/e/',word:'bait',row:2,col:0},{s:'/ə/',word:'abbot',row:2,col:1},
    {s:'/o/',word:'boat',row:2,col:3},{s:'/ɝ/',word:'Bert',row:2,col:1,rhotic:true},
    {s:'/ɛ/',word:'bet',row:3,col:0},{s:'/ʌ/',word:'but',row:3,col:2},
    {s:'/ɔ/',word:'bought',row:3,col:3},{s:'/æ/',word:'bat',row:4,col:0},
    {s:'/ɑ/',word:'father',row:4,col:2},
    {s:'/aɪ/',word:'bite',glide:true},{s:'/aʊ/',word:'bout',glide:true},{s:'/ɔɪ/',word:'coit',glide:true}
  ];
  const heights=['Upper high','Lower high','Upper mid','Lower mid','Low'];
  const positions=['front, unrounded','central, unrounded','back, unrounded','back, rounded'];
  const glideSymbols=['/aɪ/','/aʊ/','/ɔɪ/'];
  let vowelOrder=[],vowelIndex=0,mapAnswered=false,mapScore=0,mapMissed=[];
  function shuffleVowels(){vowelOrder=vowels.map((_,i)=>i);for(let i=vowelOrder.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[vowelOrder[i],vowelOrder[j]]=[vowelOrder[j],vowelOrder[i]]}}
  function currentVowel(){return vowels[vowelOrder[vowelIndex]]}
  function buildMap(){const grid=$('map-grid');grid.innerHTML='';heights.forEach((height,row)=>{const label=document.createElement('div');label.className='row-label';label.textContent=height;grid.appendChild(label);positions.forEach((position,col)=>{const cell=document.createElement('button');cell.className='cell';cell.type='button';cell.setAttribute('aria-label',`${height}, ${position}`);cell.textContent='Place here';cell.onclick=()=>placeVowel(row,col,cell);grid.appendChild(cell)})})}
  function buildGlides(){const box=$('glide-choices');box.innerHTML='';glideSymbols.forEach(symbol=>{const button=document.createElement('button');button.className='glide';button.type='button';button.textContent=symbol;button.onclick=()=>chooseGlide(symbol,button);box.appendChild(button)})}
  function showVowel(){mapAnswered=false;const v=currentVowel();buildMap();buildGlides();$('map-count').textContent=`Vowel ${vowelIndex+1} of ${vowelOrder.length} · Score ${mapScore}`;$('mono-area').classList.toggle('hidden',!!v.glide);$('map-layout').classList.toggle('glide-mode',!!v.glide);$('glide-choices').classList.toggle('hidden',!v.glide);$('map-symbol').textContent=v.glide?v.word:v.s;$('map-word').textContent=v.glide?'Which diphthong is in this word?':`as in “${v.word}”`;$('map-feedback').textContent=v.glide?'Choose its IPA glide.':'Tap the matching square.';$('map-next').classList.add('hidden')}
  function revealAnswer(right,explanation){mapAnswered=true;if(right)mapScore++;else mapMissed.push(currentVowel().s);$('map-feedback').textContent=(right?'Correct! ':'Not quite. ')+explanation;$('map-count').textContent=`Vowel ${vowelIndex+1} of ${vowelOrder.length} · Score ${mapScore}`;$('map-next').textContent=vowelIndex===vowelOrder.length-1?'See map result →':'Next vowel →';$('map-next').classList.remove('hidden')}
  function placeVowel(row,col,cell){if(mapAnswered)return;const v=currentVowel(),right=row===v.row&&col===v.col;cell.classList.add(right?'right':'nope');const correct=$('map-grid').children[v.row*5+v.col+1];correct.classList.add('right');for(const button of $('map-grid').querySelectorAll('button'))button.disabled=true;const detail=`${v.s} in “${v.word}” is ${heights[v.row].toLowerCase()} and ${positions[v.col]}${v.rhotic?', with r-coloring':''}.`;revealAnswer(right,detail)}
  function chooseGlide(symbol,button){if(mapAnswered)return;const v=currentVowel(),right=symbol===v.s;button.classList.add(right?'right':'nope');for(const choice of $('glide-choices').children){choice.disabled=true;if(choice.textContent===v.s)choice.classList.add('right')}revealAnswer(right,`${v.word} contains ${v.s}, a glide between vowel positions.`)}
  function finishMap(){$('map-count').textContent='Map complete';$('map-symbol').textContent=`${mapScore} / ${vowelOrder.length}`;$('map-word').textContent='vowels correct';$('map-feedback').textContent=mapMissed.length?`Review these and try another shuffle: ${mapMissed.join(', ')}.`:'Perfect! You got every vowel and diphthong.';$('map-next').classList.add('hidden');$('mono-area').classList.add('hidden');$('map-layout').classList.add('glide-mode');$('glide-choices').classList.add('hidden')}
  $('map-next').onclick=()=>{if(vowelIndex<vowelOrder.length-1){vowelIndex++;showVowel()}else finishMap()};
  function restartMap(){vowelIndex=0;mapScore=0;mapMissed=[];shuffleVowels();showVowel()}
  $('map-restart').onclick=restartMap;
restartMap();
