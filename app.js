const DEFAULT_UNITS = [
  {id:'coord',name:'평면좌표',color:'#568cf4',enabled:true},
  {id:'line',name:'직선의 방정식',color:'#3fb6a0',enabled:true},
  {id:'circle',name:'원의 방정식',color:'#ff806d',enabled:true},
  {id:'move',name:'도형의 이동',color:'#9a78e8',enabled:true},
  {id:'set',name:'집합',color:'#efb83f',enabled:true},
  {id:'prop',name:'명제',color:'#ee7189',enabled:true},
  {id:'func',name:'함수',color:'#4ba6d8',enabled:true},
  {id:'rational',name:'유리함수·무리함수',color:'#53a56a',enabled:true}
];

const DEFAULT_FORMULAS = [
  ['coord','두 점 사이의 거리','d = √{(x₂-x₁)²+(y₂-y₁)²}','두 점 A(x₁,y₁), B(x₂,y₂) 사이의 거리','A(1,2), B(4,6)이면 d=5'],
  ['coord','선분의 내분점','P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))','P가 AB를 m:n으로 내분할 때','A(0,0), B(6,3)을 1:2로 내분하면 P(2,1)'],
  ['coord','선분의 외분점','P = ((mx₂-nx₁)/(m-n), (my₂-ny₁)/(m-n))','P가 AB를 m:n으로 외분하고 m≠n일 때','A(0,0), B(3,3)을 2:1로 외분하면 P(6,6)'],
  ['coord','중점 좌표','M = ((x₁+x₂)/2, (y₁+y₂)/2)','선분 AB의 가운데 점','A(1,3), B(5,7)의 중점은 (3,5)'],
  ['coord','삼각형의 무게중심','G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)','세 꼭짓점의 좌표가 주어졌을 때','(0,0),(3,0),(0,6)의 무게중심은 (1,2)'],
  ['line','직선의 기울기','m = (y₂-y₁)/(x₂-x₁)','x₁≠x₂인 두 점을 지나는 직선','(1,2),(3,6)을 지나는 직선의 기울기는 2'],
  ['line','점과 기울기로 나타낸 직선','y-y₁ = m(x-x₁)','기울기 m이고 (x₁,y₁)을 지날 때','기울기 2, (1,3)을 지나면 y-3=2(x-1)'],
  ['line','두 점을 지나는 직선','(y-y₁)/(y₂-y₁) = (x-x₁)/(x₂-x₁)','x₁≠x₂, y₁≠y₂인 두 점이 주어질 때','(0,1),(2,5)를 지나면 y-1=2x'],
  ['line','절편형 직선','x/a + y/b = 1','x절편 a, y절편 b이고 a,b≠0일 때','절편이 2,3이면 x/2+y/3=1'],
  ['line','평행 조건','m₁ = m₂','서로 다른 두 직선이 평행할 때','y=2x+1과 y=2x-3은 평행'],
  ['line','수직 조건','m₁m₂ = -1','두 직선의 기울기가 존재하고 서로 수직일 때','기울기 2인 직선에 수직인 직선의 기울기는 -1/2'],
  ['line','점과 직선 사이의 거리','d = |ax₁+by₁+c|/√(a²+b²)','점 (x₁,y₁)과 직선 ax+by+c=0 사이 거리','원점과 3x+4y-10=0 사이 거리는 2'],
  ['circle','원의 표준형','(x-a)²+(y-b)² = r²','중심 (a,b), 반지름 r인 원','중심 (2,-1), 반지름 3이면 (x-2)²+(y+1)²=9'],
  ['circle','원의 일반형 중심과 반지름','x²+y²+Ax+By+C=0, 중심=(-A/2,-B/2)','A²+B²-4C>0일 때 원','x²+y²-4x+6y-12=0의 중심은 (2,-3)'],
  ['circle','원과 직선의 위치 관계','d<r: 두 점, d=r: 접함, d>r: 만나지 않음','원의 중심에서 직선까지 거리 d와 반지름 r 비교','d=3, r=3이면 직선은 원에 접한다'],
  ['circle','원의 접선 조건','(x₁-a)(x-x₁)+(y₁-b)(y-y₁)=0','원 위의 점 (x₁,y₁)에서 그은 접선','x²+y²=25 위 (3,4)에서 접선은 3x+4y=25'],
  ['circle','두 원의 중심거리','d = √{(a₂-a₁)²+(b₂-b₁)²}','중심이 (a₁,b₁),(a₂,b₂)인 두 원','중심 (0,0),(3,4)의 거리는 5'],
  ['move','x축 대칭이동','(x,y) → (x,-y)','도형을 x축에 대하여 대칭이동','(2,3)은 (2,-3)으로 이동'],
  ['move','y축 대칭이동','(x,y) → (-x,y)','도형을 y축에 대하여 대칭이동','(2,3)은 (-2,3)으로 이동'],
  ['move','원점 대칭이동','(x,y) → (-x,-y)','도형을 원점에 대하여 대칭이동','(2,3)은 (-2,-3)으로 이동'],
  ['move','직선 y=x 대칭이동','(x,y) → (y,x)','도형을 직선 y=x에 대하여 대칭이동','(2,3)은 (3,2)로 이동'],
  ['move','평행이동','(x,y) → (x+p,y+q)','x축 방향 p, y축 방향 q만큼 이동','(1,2)를 (3,-1)만큼 이동하면 (4,1)'],
  ['move','그래프의 평행이동','f(x,y)=0 → f(x-p,y-q)=0','도형을 x축 방향 p, y축 방향 q만큼 이동','y=x²을 오른쪽 2만큼 옮기면 y=(x-2)²'],
  ['set','합집합','A∪B = {x | x∈A 또는 x∈B}','A 또는 B 중 적어도 하나에 속하는 원소','A={1,2}, B={2,3}이면 A∪B={1,2,3}'],
  ['set','교집합','A∩B = {x | x∈A 그리고 x∈B}','A와 B에 모두 속하는 원소','A={1,2}, B={2,3}이면 A∩B={2}'],
  ['set','차집합','A-B = A∩Bᶜ','A에는 속하고 B에는 속하지 않는 원소','A={1,2,3}, B={2,3}이면 A-B={1}'],
  ['set','드모르간 법칙 ①','(A∪B)ᶜ = Aᶜ∩Bᶜ','합집합의 여집합을 구할 때','전체가 {1,2,3}, A={1}, B={2}이면 양변 모두 {3}'],
  ['set','드모르간 법칙 ②','(A∩B)ᶜ = Aᶜ∪Bᶜ','교집합의 여집합을 구할 때','두 집합의 공통부분이 아닌 영역 전체'],
  ['set','합집합의 원소 수','n(A∪B)=n(A)+n(B)-n(A∩B)','유한집합 A, B의 합집합 원소 수','5+4-2=7개'],
  ['set','세 집합 합집합의 원소 수','n(A∪B∪C)=n(A)+n(B)+n(C)-n(A∩B)-n(B∩C)-n(C∩A)+n(A∩B∩C)','유한집합 세 개의 합집합 원소 수','각 교집합을 빼고 세 집합 공통부분은 다시 더한다'],
  ['set','부분집합의 개수','부분집합: 2ⁿ개, 진부분집합: 2ⁿ-1개','원소가 n개인 집합','원소 3개인 집합의 부분집합은 8개'],
  ['prop','명제의 부정','~p: p가 아니다','명제 p의 참·거짓을 반대로 할 때','p: x>3의 부정은 x≤3'],
  ['prop','조건의 부정','~(p∧q)=~p∨~q, ~(p∨q)=~p∧~q','그리고/또는이 있는 조건을 부정할 때','x>1이고 x<3의 부정은 x≤1 또는 x≥3'],
  ['prop','명제의 역·이·대우','역 q→p, 이 ~p→~q, 대우 ~q→~p','명제 p→q가 주어졌을 때','대우는 원래 명제와 항상 참·거짓이 같다'],
  ['prop','필요조건과 충분조건','p→q이면 p는 q의 충분조건, q는 p의 필요조건','두 조건의 포함 관계를 판단할 때','x=2이면 x²=4이므로 x=2는 충분조건'],
  ['prop','필요충분조건','p↔q ⇔ (p→q)∧(q→p)','두 조건이 서로 충분조건이자 필요조건일 때','x가 짝수 ⇔ x²이 짝수 (정수 x)'],
  ['prop','귀류법','p를 부정해 모순 ⇒ p는 참','직접 증명이 어려운 명제를 증명할 때','√2가 유리수라고 가정해 모순을 보인다'],
  ['prop','산술평균·기하평균','(a+b)/2 ≥ √(ab)','a≥0, b≥0이며 등호는 a=b일 때','a+b=10이면 ab≤25'],
  ['func','함숫값','y=f(x)','정의역의 x에 함숫값이 하나씩 대응할 때','f(x)=2x+1이면 f(3)=7'],
  ['func','합성함수','(g∘f)(x)=g(f(x))','f의 치역이 g의 정의역에 포함될 때','f(x)=x+1, g(x)=2x이면 (g∘f)(x)=2x+2'],
  ['func','항등함수','I(x)=x','정의역의 모든 원소를 자기 자신에 대응','f∘I=I∘f=f'],
  ['func','역함수 관계','f⁻¹(f(x))=x, f(f⁻¹(x))=x','f가 일대일대응일 때','f(x)=2x+1이면 f⁻¹(x)=(x-1)/2'],
  ['func','역함수 그래프','y=f⁻¹(x)는 y=f(x)를 y=x에 대칭','역함수가 존재할 때','(a,b)가 f 위의 점이면 (b,a)는 f⁻¹ 위의 점'],
  ['func','일대일함수','f(x₁)=f(x₂) ⇒ x₁=x₂','서로 다른 입력이 서로 다른 출력에 대응','y=2x+1은 실수 전체에서 일대일함수'],
  ['rational','유리함수 기본형','y = a/x (a≠0)','x≠0이고 반비례 관계일 때','a=6이면 x=2에서 y=3'],
  ['rational','유리함수 평행이동형','y = a/(x-p)+q','점근선이 x=p, y=q이고 a≠0일 때','y=2/(x-1)+3의 점근선은 x=1, y=3'],
  ['rational','유리함수 대칭 중심','y=a/(x-p)+q의 중심은 (p,q)','분수함수 그래프의 대칭 중심을 찾을 때','y=1/(x+2)-1의 중심은 (-2,-1)'],
  ['rational','무리함수 기본형','y = √(ax+b)','ax+b≥0인 범위에서 정의','y=√(x-2)의 정의역은 x≥2'],
  ['rational','무리함수 평행이동형','y = √(a(x-p))+q','근호 안이 0 이상인 x에서 정의','y=√(x-3)+2의 시작점은 (3,2)'],
  ['rational','무리식 제곱 시 주의','√A = B ⇒ A=B² 그리고 B≥0','무리방정식에서 양변을 제곱할 때','√(x+1)=x-1이면 반드시 x≥1 확인']
].map((f,i)=>({id:'f'+(i+1),unit:f[0],name:f[1],formula:f[2],condition:f[3],example:f[4]}));

const STORAGE_KEY='gongsikon_v1';
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const clone=x=>JSON.parse(JSON.stringify(x));
let state=loadState();
let currentView='home', formulaFilter='all', cardIndex=0, cardDeck=[], quizType='mixed', quizQuestions=[], quizIndex=0, quizScore=0, quizAnswered=false;

function loadState(){
  try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));if(saved&&saved.version===1)return saved}catch(e){}
  return {version:1,units:clone(DEFAULT_UNITS),formulas:clone(DEFAULT_FORMULAS),favorites:[],learned:[],wrong:{},attempts:0,correct:0,theme:'light'};
}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));renderStats()}
function enabledFormulas(){const on=new Set(state.units.filter(u=>u.enabled).map(u=>u.id));return state.formulas.filter(f=>on.has(f.unit))}
function unitName(id){return state.units.find(u=>u.id===id)?.name||'직접 추가'}
function escapeHtml(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),2200)}
function pct(n,d){return d?Math.round(n/d*100):0}

function setView(view){
  currentView=view;$$('.view').forEach(v=>v.classList.toggle('active',v.id===`view-${view}`));$$('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  const titles={home:['오늘의 학습','중간고사, 공식부터 단단하게'],formulas:['공식 라이브러리','시험 범위 공식 전체 보기'],cards:['암기 카드','보고, 떠올리고, 확인하기'],concepts:['개념 실험실','움직이며 이해하는 수학'],quiz:['실전 확인','유형별 퀴즈'],wrong:['복습 집중','자동 오답노트'],settings:['나만의 범위','시험 범위 및 공식 편집']};
  $('#eyebrow').textContent=titles[view][0];$('#pageTitle').textContent=titles[view][1];$('#globalSearchWrap').classList.toggle('hidden',view!=='formulas');window.scrollTo({top:0,behavior:'smooth'});
  if(view==='formulas')renderFormulas();if(view==='cards')startCards();if(view==='concepts')drawActiveConcept();if(view==='wrong')renderWrong();if(view==='settings')renderSettings();
}

function renderStats(){
  const enabled=enabledFormulas(), learned=enabled.filter(f=>state.learned.includes(f.id)).length, progress=pct(learned,enabled.length), accuracy=state.attempts?pct(state.correct,state.attempts):null;
  $('#sideProgressText').textContent=progress+'%';$('#sideProgressBar').style.width=progress+'%';$('#progressStat').textContent=progress+'%';$('#progressSub').textContent=`${learned} / ${enabled.length} 공식`;
  $('#accuracyStat').textContent=accuracy===null?'—':accuracy+'%';$('#accuracySub').textContent=state.attempts?`${state.correct} / ${state.attempts}문제 정답`:'아직 푼 문제가 없어요';
  $('#wrongStat').textContent=Object.keys(state.wrong).length;$('#favoriteStat').textContent=state.favorites.length;$('#todayCount').textContent=Math.min(10,enabled.length);$('#examPool').textContent=enabled.length;
  const next=state.units.find(u=>u.enabled&&state.formulas.some(f=>f.unit===u.id&&!state.learned.includes(f.id)))||state.units.find(u=>u.enabled);$('#heroUnit').textContent=next?.name||'시험 범위';
  $('#unitProgressGrid').innerHTML=state.units.map(u=>{const fs=state.formulas.filter(f=>f.unit===u.id),done=fs.filter(f=>state.learned.includes(f.id)).length,p=pct(done,fs.length);return `<article class="unit-progress ${u.enabled?'':'off'}"><div class="unit-title"><b>${escapeHtml(u.name)}</b><span>${u.enabled?done+' / '+fs.length:'범위 제외'}</span></div><div class="progress-track"><i style="width:${u.enabled?p:0}%;background:${u.color}"></i></div></article>`}).join('');
}

function fillSelects(){
  const opts='<option value="all">전체 단원</option>'+state.units.filter(u=>u.enabled).map(u=>`<option value="${u.id}">${escapeHtml(u.name)}</option>`).join('');$('#cardUnit').innerHTML=opts;$('#quizUnit').innerHTML=opts;
  $('#editUnit').innerHTML=state.units.map(u=>`<option value="${u.id}">${escapeHtml(u.name)}</option>`).join('');
  $('#unitFilters').innerHTML=`<button class="filter-btn active" data-unit="all">전체</button>`+state.units.filter(u=>u.enabled).map(u=>`<button class="filter-btn" data-unit="${u.id}">${escapeHtml(u.name)}</button>`).join('');
  $$('#unitFilters .filter-btn').forEach(b=>b.onclick=()=>{formulaFilter=b.dataset.unit;$$('#unitFilters .filter-btn').forEach(x=>x.classList.toggle('active',x===b));renderFormulas()});
}

function formulaCard(f,editable=false){const fav=state.favorites.includes(f.id);return `<article class="formula-card"><div class="formula-top"><span class="chip">${escapeHtml(unitName(f.unit))}</span><button class="star-btn ${fav?'on':''}" data-fav="${f.id}" aria-label="즐겨찾기 ${fav?'해제':'추가'}">★</button></div><h3>${escapeHtml(f.name)}</h3><div class="formula-text">${escapeHtml(f.formula)}</div><dl><dt>적용 조건</dt><dd>${escapeHtml(f.condition)}</dd><dt>예시</dt><dd>${escapeHtml(f.example)}</dd></dl>${editable?`<div class="formula-actions"><button class="edit-btn" data-edit="${f.id}">수정</button></div>`:''}</article>`}
function bindFormulaButtons(root=document){root.querySelectorAll('[data-fav]').forEach(b=>b.onclick=()=>toggleFavorite(b.dataset.fav));root.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>openEdit(b.dataset.edit))}
function toggleFavorite(id){const i=state.favorites.indexOf(id);if(i>=0)state.favorites.splice(i,1);else state.favorites.push(id);save();if(currentView==='formulas')renderFormulas();if(currentView==='wrong')renderWrong();toast(i>=0?'즐겨찾기에서 뺐어요':'즐겨찾기에 추가했어요')}
function renderFormulas(){
  const q=$('#globalSearch').value.trim().toLowerCase(), favOnly=$('#favOnly').checked;let fs=enabledFormulas().filter(f=>formulaFilter==='all'||f.unit===formulaFilter).filter(f=>!favOnly||state.favorites.includes(f.id)).filter(f=>!q||[f.name,f.formula,f.condition,f.example,unitName(f.unit)].join(' ').toLowerCase().includes(q));
  $('#resultCount').textContent=`공식 ${fs.length}개`;$('#formulaGrid').innerHTML=fs.map(f=>formulaCard(f,true)).join('');$('#formulaEmpty').classList.toggle('hidden',fs.length>0);bindFormulaButtons($('#formulaGrid'));
}

function startCards(){const unit=$('#cardUnit').value||'all';cardDeck=enabledFormulas().filter(f=>unit==='all'||f.unit===unit);cardDeck.sort((a,b)=>(state.wrong[b.id]||0)-(state.wrong[a.id]||0)||Number(state.favorites.includes(b.id))-Number(state.favorites.includes(a.id)));cardIndex=0;renderCard()}
function renderCard(){
  if(!cardDeck.length){$('#cardTitle').textContent='선택한 범위에 공식이 없어요';$('#cardCondition').textContent='범위 설정에서 단원을 켜주세요';$('#cardTotal').textContent='0';return}
  const f=cardDeck[cardIndex];$('#flashcard').classList.remove('flipped');$('#cardIndex').textContent=cardIndex+1;$('#cardTotal').textContent=cardDeck.length;$('#cardUnitChip').textContent=unitName(f.unit);$('#cardTitle').textContent=f.name;$('#cardCondition').textContent=f.condition;$('#cardFormula').textContent=f.formula;$('#cardExample').textContent=f.example;
}
function moveCard(d){if(!cardDeck.length)return;cardIndex=(cardIndex+d+cardDeck.length)%cardDeck.length;renderCard()}
function markCard(known){if(!cardDeck.length)return;const id=cardDeck[cardIndex].id;if(known&&!state.learned.includes(id))state.learned.push(id);if(!known)state.wrong[id]=(state.wrong[id]||0)+1;save();toast(known?'외운 공식으로 표시했어요':'다시 볼 공식에 넣었어요');moveCard(1)}

function canvasBase(canvas,xMax=5,yMax=4){
  const ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,pad=40,sx=(w-pad*2)/(xMax*2),sy=(h-pad*2)/(yMax*2),toX=x=>w/2+x*sx,toY=y=>h/2-y*sy;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#172a3a';ctx.fillRect(0,0,w,h);ctx.lineWidth=1;ctx.strokeStyle='rgba(255,255,255,.08)';
  for(let x=-xMax;x<=xMax;x++){ctx.beginPath();ctx.moveTo(toX(x),pad);ctx.lineTo(toX(x),h-pad);ctx.stroke()}
  for(let y=-yMax;y<=yMax;y++){ctx.beginPath();ctx.moveTo(pad,toY(y));ctx.lineTo(w-pad,toY(y));ctx.stroke()}
  ctx.strokeStyle='rgba(255,255,255,.55)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(pad,toY(0));ctx.lineTo(w-pad,toY(0));ctx.moveTo(toX(0),pad);ctx.lineTo(toX(0),h-pad);ctx.stroke();ctx.fillStyle='rgba(255,255,255,.65)';ctx.font='13px system-ui';ctx.fillText('x',w-pad+8,toY(0)+4);ctx.fillText('y',toX(0)+8,pad-8);
  return {ctx,w,h,pad,toX,toY};
}
function drawPoint(ctx,x,y,label,color,toX,toY){ctx.beginPath();ctx.arc(toX(x),toY(y),8,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();ctx.strokeStyle='#fff';ctx.lineWidth=3;ctx.stroke();ctx.fillStyle='#fff';ctx.font='700 15px system-ui';ctx.fillText(`${label}(${x}, ${y})`,toX(x)+12,toY(y)-12)}
function drawDistance(){
  const ax=Number($('#axRange').value),ay=Number($('#ayRange').value),bx=Number($('#bxRange').value),by=Number($('#byRange').value),base=canvasBase($('#distanceCanvas')),{ctx,toX,toY}=base,dx=bx-ax,dy=by-ay,n=dx*dx+dy*dy,d=Math.sqrt(n);
  ctx.setLineDash([8,7]);ctx.strokeStyle='#ffd266';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(toX(ax),toY(ay));ctx.lineTo(toX(bx),toY(ay));ctx.lineTo(toX(bx),toY(by));ctx.stroke();ctx.setLineDash([]);ctx.strokeStyle='#60d9b8';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(toX(ax),toY(ay));ctx.lineTo(toX(bx),toY(by));ctx.stroke();drawPoint(ctx,ax,ay,'A','#568cf4',toX,toY);drawPoint(ctx,bx,by,'B','#ff806d',toX,toY);
  [['axOut',ax],['ayOut',ay],['bxOut',bx],['byOut',by]].forEach(([id,v])=>$('#'+id).textContent=v);$('#distanceResult').textContent=`√${n} ≈ ${d.toFixed(2)}`;$('#distanceExplain').textContent=`가로 ${Math.abs(dx)}, 세로 ${Math.abs(dy)} → √(${dx}²+${dy}²)`;
}
function tidy(n){return Number.isInteger(n)?String(n):String(n).replace('.5','½')}
function lineText(m,b){const mPart=m===0?'':m===1?'x':m===-1?'-x':`${tidy(m)}x`;if(m===0)return `y = ${b}`;return `y = ${mPart}${b>0?' + '+b:b<0?' - '+Math.abs(b):''}`}
function drawSlope(){
  const m=Number($('#slopeRange').value),b=Number($('#interceptRange').value),{ctx,w,pad,toX,toY}=canvasBase($('#slopeCanvas'));
  ctx.save();ctx.beginPath();ctx.rect(pad,pad,w-pad*2,$('#slopeCanvas').height-pad*2);ctx.clip();ctx.strokeStyle='#60d9b8';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(toX(-5),toY(m*-5+b));ctx.lineTo(toX(5),toY(m*5+b));ctx.stroke();ctx.setLineDash([6,5]);ctx.strokeStyle='#ffd266';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(toX(0),toY(b));ctx.lineTo(toX(1),toY(b));ctx.lineTo(toX(1),toY(m+b));ctx.stroke();ctx.restore();drawPoint(ctx,0,b,'P','#568cf4',toX,toY);drawPoint(ctx,1,m+b,'Q','#ff806d',toX,toY);
  $('#slopeOut').textContent=tidy(m);$('#interceptOut').textContent=b;$('#lineResult').textContent=lineText(m,b);$('#slopeExplain').textContent=m===0?'오른쪽으로 가도 높이가 변하지 않아요.':`오른쪽으로 1 가면 ${m>0?'위로':'아래로'} ${Math.abs(m)} ${m>0?'올라가요':'내려가요'}.`;
}
function setMembership(type){
  const data={none:{left:'50%',top:'91%',result:'x ∈ (A∪B)ᶜ',caption:'원소 x는 A와 B 모두에 속하지 않아요.',explain:'합집합의 바깥, 즉 두 집합 어디에도 속하지 않는 영역'},a:{left:'22%',top:'54%',result:'x ∈ A-B',caption:'원소 x는 A에만 속해요.',explain:'A에는 속하지만 B에는 속하지 않는 차집합 영역'},both:{left:'50%',top:'54%',result:'x ∈ A∩B',caption:'원소 x는 A와 B 모두에 속해요.',explain:'두 집합이 겹치는 교집합 영역'},b:{left:'78%',top:'54%',result:'x ∈ B-A',caption:'원소 x는 B에만 속해요.',explain:'B에는 속하지만 A에는 속하지 않는 차집합 영역'}}[type],dot=$('#vennDot');dot.style.left=data.left;dot.style.top=data.top;$('#setResult').textContent=data.result;$('#vennCaption').textContent=data.caption;$('#setExplain').textContent=data.explain;$$('[data-membership]').forEach(b=>b.classList.toggle('selected',b.dataset.membership===type));
}
let composeOrder='gf';
function updateCompose(){
  const x=Number($('#composeRange').value),f=n=>2*n+1,g=n=>n*n;let first,second,result,firstLabel,secondLabel,expression;
  if(composeOrder==='gf'){first=f(x);second=g(first);result=second;firstLabel=`f(${x})=${first}`;secondLabel=`g(${first})=${second}`;expression=`(g∘f)(${x}) = ${result}`}else{first=g(x);second=f(first);result=second;firstLabel=`g(${x})=${first}`;secondLabel=`f(${first})=${second}`;expression=`(f∘g)(${x}) = ${result}`}
  $('#composeOut').textContent=x;$('#machineX').textContent=x;$('#machineF').textContent=firstLabel;$('#machineG').textContent=secondLabel;$('#composeResult').textContent=expression;$('#composeExplain').textContent=`${x} → ${composeOrder==='gf'?'f':'g'} → ${first} → ${composeOrder==='gf'?'g':'f'} → ${result}`;$$('.machine-box b')[0].textContent=composeOrder==='gf'?'f(x)=2x+1':'g(x)=x²';$$('.machine-box b')[1].textContent=composeOrder==='gf'?'g(x)=x²':'f(x)=2x+1';$$('[data-order]').forEach(b=>b.classList.toggle('selected',b.dataset.order===composeOrder));
}
function drawActiveConcept(){const active=$('.concept-tab.active')?.dataset.concept;if(active==='distance')drawDistance();if(active==='slope')drawSlope();if(active==='compose')updateCompose()}

function startQuiz(opts={}){
  const pool=opts.wrong?enabledFormulas().filter(f=>state.wrong[f.id]):enabledFormulas().filter(f=>(opts.unit||$('#quizUnit').value)==='all'||f.unit===(opts.unit||$('#quizUnit').value));
  if(!pool.length){toast(opts.wrong?'오답 공식이 아직 없어요':'출제할 공식이 없어요');return}
  const count=Math.min(Number(opts.count||$('#quizCount').value||5),Math.max(pool.length,1));const types=opts.type==='exam'?['choice','blank','input']:quizType==='mixed'?['choice','blank','input']:[quizType];
  quizQuestions=shuffle(pool).slice(0,count).map((f,i)=>({formula:f,type:types[i%types.length]}));if(count>pool.length){while(quizQuestions.length<count){const f=pool[Math.floor(Math.random()*pool.length)];quizQuestions.push({formula:f,type:types[quizQuestions.length%types.length]})}}
  quizIndex=0;quizScore=0;quizAnswered=false;setView('quiz');$('#quizSetup').classList.add('hidden');$('#quizResult').classList.add('hidden');$('#quizPlay').classList.remove('hidden');renderQuestion();
}
function makeQuestion(q){
  const f=q.formula, pool=enabledFormulas().filter(x=>x.id!==f.id);
  if(q.type==='choice'){
    const askFormula=Math.random()>.45, correct=askFormula?f.formula:f.name, distract=shuffle(pool).slice(0,3).map(x=>askFormula?x.formula:x.name), choices=shuffle([correct,...distract]);
    return {text:askFormula?`‘${f.name}’에 해당하는 공식을 고르세요.`:`다음 공식의 이름을 고르세요.\n${f.formula}`,answer:correct,html:`<div class="choice-list">${choices.map(c=>`<button class="choice-option" data-answer="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div>`};
  }
  if(q.type==='blank'){
    const parts=f.formula.split(/(=|⇔|→)/), idx=parts.findIndex((p,i)=>i>0&&p.trim()&&!['=','⇔','→'].includes(p));let blankAnswer=idx>=0?parts[idx].trim():f.formula;let shown=idx>=0?parts.map((p,i)=>i===idx?'<span class="blank-slot">?</span>':escapeHtml(p)).join(''):`<span class="blank-slot">?</span>`;
    return {text:`‘${f.name}’의 빈칸을 채우세요.`,answer:blankAnswer,html:`<div class="blank-formula">${shown}</div><input class="answer-input" id="textAnswer" autocomplete="off" placeholder="빈칸에 들어갈 식 또는 말을 입력하세요">`};
  }
  return {text:`‘${f.name}’의 공식을 직접 입력하세요.`,answer:f.formula,html:`<input class="answer-input" id="textAnswer" autocomplete="off" placeholder="수식을 입력하세요 (띄어쓰기는 달라도 괜찮아요)"><p class="result-count">키보드로 입력하기 어려운 기호는 비슷한 형태로 적어도 됩니다.</p>`};
}
function normalize(s){return String(s).toLowerCase().replace(/[\s{}()·*]/g,'').replace(/[−–]/g,'-').replace(/²/g,'2').replace(/√/g,'sqrt').replace(/∪/g,'u').replace(/∩/g,'n').replace(/ᶜ/g,'c').replace(/≤/g,'<=').replace(/≥/g,'>=').replace(/⇔/g,'<=>').replace(/→/g,'->')}
function renderQuestion(){
  quizAnswered=false;const q=quizQuestions[quizIndex], built=makeQuestion(q);q.built=built;$('#quizNow').textContent=quizIndex+1;$('#quizTotal').textContent=quizQuestions.length;$('#quizProgressBar').style.width=(quizIndex/quizQuestions.length*100)+'%';$('#questionType').textContent={choice:'객관식',blank:'빈칸',input:'직접 입력'}[q.type];$('#questionUnit').textContent=unitName(q.formula.unit);$('#questionText').innerText=built.text;$('#answerArea').innerHTML=built.html;$('#feedback').className='feedback hidden';$('#submitAnswer').classList.remove('hidden');$('#nextQuestion').classList.add('hidden');
  $$('.choice-option').forEach(b=>b.onclick=()=>{$$('.choice-option').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')});$('#textAnswer')?.focus();
}
function submitAnswer(){
  if(quizAnswered)return;const q=quizQuestions[quizIndex],answer=q.type==='choice'?$('.choice-option.selected')?.dataset.answer:$('#textAnswer')?.value;if(!answer){toast('답을 먼저 선택하거나 입력해 주세요');return}
  const correct=normalize(answer)===normalize(q.built.answer);quizAnswered=true;state.attempts++;if(correct){state.correct++;quizScore++;if(!state.learned.includes(q.formula.id))state.learned.push(q.formula.id);delete state.wrong[q.formula.id]}else state.wrong[q.formula.id]=(state.wrong[q.formula.id]||0)+1;save();
  if(q.type==='choice')$$('.choice-option').forEach(b=>{if(normalize(b.dataset.answer)===normalize(q.built.answer))b.classList.add('correct');else if(b.classList.contains('selected'))b.classList.add('wrong')});
  const fb=$('#feedback');fb.className='feedback '+(correct?'good':'bad');fb.innerHTML=correct?'<b>정답이에요!</b> 정확히 기억했어요.':`<b>아쉬워요.</b> 정답은 <strong>${escapeHtml(q.built.answer)}</strong> 입니다.`;$('#submitAnswer').classList.add('hidden');$('#nextQuestion').classList.remove('hidden');$('#nextQuestion').textContent=quizIndex===quizQuestions.length-1?'결과 보기':'다음 문제';
}
function nextQuestion(){if(quizIndex<quizQuestions.length-1){quizIndex++;renderQuestion()}else showResult()}
function showResult(){
  $('#quizPlay').classList.add('hidden');const p=pct(quizScore,quizQuestions.length);$('#quizResult').classList.remove('hidden');$('#quizResult').innerHTML=`<span class="chip mint">학습 완료</span><div class="result-score">${p}점</div><h2>${p>=90?'공식이 탄탄해요!':p>=70?'조금만 더 다듬어봐요':'오답부터 차근차근 복습해요'}</h2><p>${quizQuestions.length}문제 중 ${quizScore}문제를 맞혔어요. 틀린 공식은 오답노트에 자동 저장됐습니다.</p><div class="result-actions"><button class="btn ghost" data-result="wrong">오답노트 보기</button><button class="btn primary" data-result="again">다시 풀기</button></div>`;
  $('#quizProgressBar').style.width='100%';$$('[data-result]').forEach(b=>b.onclick=()=>b.dataset.result==='wrong'?setView('wrong'):resetQuiz())
}
function resetQuiz(){quizQuestions=[];$('#quizResult').classList.add('hidden');$('#quizPlay').classList.add('hidden');$('#quizSetup').classList.remove('hidden')}

function renderWrong(){const fs=enabledFormulas().filter(f=>state.wrong[f.id]).sort((a,b)=>state.wrong[b.id]-state.wrong[a.id]);$('#wrongGrid').innerHTML=fs.map(f=>formulaCard(f)).join('');$('#wrongEmpty').classList.toggle('hidden',fs.length>0);bindFormulaButtons($('#wrongGrid'))}
function renderSettings(){
  $('#settingsList').innerHTML=state.units.map(u=>{const fs=state.formulas.filter(f=>f.unit===u.id);return `<section class="setting-unit"><div class="setting-unit-head"><div><label class="switch"><input type="checkbox" data-toggle-unit="${u.id}" ${u.enabled?'checked':''}><span></span></label><div><b>${escapeHtml(u.name)}</b><small>${fs.length}개 공식</small></div></div></div><div class="setting-formulas">${fs.map(f=>`<div class="setting-row"><div><b>${escapeHtml(f.name)}</b><span>${escapeHtml(f.formula)}</span></div><button class="edit-btn" data-edit="${f.id}">수정</button></div>`).join('')}</div></section>`}).join('');
  $$('[data-toggle-unit]').forEach(i=>i.onchange=()=>{state.units.find(u=>u.id===i.dataset.toggleUnit).enabled=i.checked;save();fillSelects();renderSettings();toast(i.checked?'시험 범위에 포함했어요':'시험 범위에서 제외했어요')});$$('#settingsList [data-edit]').forEach(b=>b.onclick=()=>openEdit(b.dataset.edit));
}
function openEdit(id){const f=state.formulas.find(x=>x.id===id);$('#dialogTitle').textContent=f?'공식 수정':'새 공식 추가';$('#editId').value=f?.id||'';$('#editUnit').value=f?.unit||state.units[0].id;$('#editName').value=f?.name||'';$('#editFormula').value=f?.formula||'';$('#editCondition').value=f?.condition||'';$('#editExample').value=f?.example||'';$('#editDialog').showModal()}
function saveFormula(e){e.preventDefault();const id=$('#editId').value;const data={unit:$('#editUnit').value,name:$('#editName').value.trim(),formula:$('#editFormula').value.trim(),condition:$('#editCondition').value.trim(),example:$('#editExample').value.trim()};if(!Object.values(data).every(Boolean)){toast('모든 내용을 입력해 주세요');return}if(id)Object.assign(state.formulas.find(f=>f.id===id),data);else state.formulas.push({id:'custom_'+Date.now(),...data});save();$('#editDialog').close();fillSelects();renderSettings();toast(id?'공식을 수정했어요':'새 공식을 추가했어요')}
function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='공식온-학습기록.json';a.click();URL.revokeObjectURL(a.href);toast('학습 기록을 내보냈어요')}
function importData(file){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!d.units||!d.formulas)throw 0;state=d;state.version=1;save();fillSelects();renderAll();toast('학습 기록을 불러왔어요')}catch(e){toast('올바른 공식온 기록 파일이 아니에요')}};r.readAsText(file)}
function resetAll(){if(!confirm('공식 편집 내용과 모든 학습 기록을 초기화할까요?'))return;state={version:1,units:clone(DEFAULT_UNITS),formulas:clone(DEFAULT_FORMULAS),favorites:[],learned:[],wrong:{},attempts:0,correct:0,theme:state.theme};save();fillSelects();renderAll();toast('처음 상태로 되돌렸어요')}
function renderAll(){renderStats();if(currentView==='formulas')renderFormulas();if(currentView==='wrong')renderWrong();if(currentView==='settings')renderSettings()}

document.addEventListener('click',e=>{const viewButton=e.target.closest('[data-view]');if(viewButton)setView(viewButton.dataset.view);const goButton=e.target.closest('[data-go]');if(goButton)setView(goButton.dataset.go)});
$('#globalSearch').oninput=renderFormulas;$('#favOnly').onchange=renderFormulas;$('#cardUnit').onchange=startCards;$('#flashcard').onclick=()=>$('#flashcard').classList.toggle('flipped');$('#prevCard').onclick=()=>moveCard(-1);$('#nextCard').onclick=()=>moveCard(1);$('#cardAgain').onclick=()=>markCard(false);$('#cardKnow').onclick=()=>markCard(true);
$$('.quiz-type').forEach(b=>b.onclick=()=>{quizType=b.dataset.type;$$('.quiz-type').forEach(x=>x.classList.toggle('selected',x===b))});$('#startQuizBtn').onclick=()=>startQuiz();$('#submitAnswer').onclick=submitAnswer;$('#nextQuestion').onclick=nextQuestion;$('#quitQuiz').onclick=()=>{if(confirm('퀴즈를 그만둘까요?'))resetQuiz()};$('#startCardBtn').addEventListener('click',()=>setView('cards'));$('#quickQuizBtn').onclick=()=>startQuiz({count:5,type:'mixed',unit:'all'});$('#examBtn').onclick=()=>startQuiz({count:20,type:'exam',unit:'all'});$('#wrongQuizBtn').onclick=()=>startQuiz({count:Math.min(10,Object.keys(state.wrong).length),wrong:true,type:'mixed',unit:'all'});
$('#addFormulaBtn').onclick=()=>openEdit();$('#editForm').onsubmit=saveFormula;$('#exportBtn').onclick=exportData;$('#importInput').onchange=e=>e.target.files[0]&&importData(e.target.files[0]);$('#resetBtn').onclick=resetAll;
$('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';document.body.classList.toggle('dark',state.theme==='dark');save()};document.body.classList.toggle('dark',state.theme==='dark');
$$('.concept-tab').forEach(b=>b.onclick=()=>{$$('.concept-tab').forEach(x=>x.classList.toggle('active',x===b));$$('.concept-panel').forEach(p=>p.classList.toggle('active',p.id===`concept-${b.dataset.concept}`));drawActiveConcept()});
['axRange','ayRange','bxRange','byRange'].forEach(id=>$('#'+id).oninput=drawDistance);['slopeRange','interceptRange'].forEach(id=>$('#'+id).oninput=drawSlope);$$('[data-membership]').forEach(b=>b.onclick=()=>setMembership(b.dataset.membership));$('#composeRange').oninput=updateCompose;$$('[data-order]').forEach(b=>b.onclick=()=>{composeOrder=b.dataset.order;updateCompose()});
document.addEventListener('keydown',e=>{
  const typing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||$('#editDialog').open;
  if(e.key==='Enter'&&currentView==='quiz'&&!$('#quizPlay').classList.contains('hidden')){e.preventDefault();quizAnswered?nextQuestion():submitAnswer();return}
  if(currentView==='cards'&&!typing&&!e.repeat){
    if(e.code==='Space'){e.preventDefault();$('#flashcard').click()}
    if(e.key==='Shift'){e.preventDefault();markCard(false)}
    if(e.key==='Enter'){e.preventDefault();markCard(true)}
  }
});
fillSelects();renderStats();document.documentElement.dataset.appVersion='2';
