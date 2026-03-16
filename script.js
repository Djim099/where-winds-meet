(function(){'use strict';
/* ── CONFIG ── */
var CFG={
  logo:'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614412/logo_yd72cv.webp',
  heroVideo:'https://res.cloudinary.com/dcc17awcl/video/upload/v1773596325/hero_sx3hiw.mp4',
  heroPoster:'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614646/hero_poster_e032kf.webp',
  ss1:'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614641/screenshot_1_kxhznd.webp',
  ss2:'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614643/screenshot_2_yhdzvc.webp',
  ss3:'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614645/screenshot_3_mxjw26.webp',
  trailerVideo:'https://res.cloudinary.com/dcc17awcl/video/upload/v1773636073/Trailer_offic_lq0prb.mp4',
  trailerPoster:'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614645/screenshot_3_mxjw26.webp',
  ctaUrl:'https://to.wendiro.com/u?k=9db47141846349488810b469b5a18a32&via=16314'
};
function isPH(v){return!v||v.startsWith('{{')||/^[A-Z][A-Z0-9_]+$/.test(v);}
/* ── TRANSLATIONS ── */
var T={
  en:{
    'meta.t':'Where Winds Meet — Enter Jianghu',
    'game.badge':'Open World Wuxia RPG','game.name':'WHERE WINDS MEET','game.tagline':'10th-Century China · Free to Play · PC',
    'hero.ey':'Every blade has a story. Write yours.','hero.h1':'NOT Every WORLD Pulls You In Like This.','hero.h2':'LET The Winds Carry Your LEGEND',
    'hero.sub':'An ancient world is watching. Every path leads somewhere no map can show you. Who you become — only the wind will remember.',
    'hero.cta':'Claim Your Legend — Free','hero.note':'Free to play. The Jianghu asks only one thing: that you enter.',
    'chip1':'Open World','chip2':'Martial Arts','chip3':'Co-op','chip4':'Ancient China','chip5':'Wuxia RPG',
    'world.tag':'The Living World','world.h':'Every Wind Carries a Name',
    'world.desc':'The Jianghu is not a game map. It is a world that breathes. Step into a living 10th-century China — unscripted, untamed, and waiting.',
    'world.p1':'Fluid Combat','world.p2':'Living World','world.p3':'Cinematic Traversal','world.p4':'Deep Lore','world.p5':'Co-op / Solo',
    'paths.tag':'Choose Your Path','paths.h':'Who Will You Be?',
    'paths.c1.n':'The Swordmaster','paths.c1.d':'Perfect every strike. Become untouchable.',
    'paths.c2.n':'The Wanderer','paths.c2.d':'Follow no map. Write your own legend.',
    'paths.c3.n':'The Strategist','paths.c3.d':'Win before the fight begins.',
    'paths.c4.n':'The Builder','paths.c4.d':'Shape towns. Leave your mark.',
    'paths.c5.n':'The Seeker','paths.c5.d':'Some truths are buried deep.',
    'wpn.tag':'Master Your Arsenal','wpn.h':'Choose Your Weapon',
    'wpn.w1.n':'Sword','wpn.w1.d':'Grace and lethality as one. The soul of the Jianghu.',
    'wpn.w2.n':'Dual Blades','wpn.w2.d':'Two become one. Speed and chaos unleashed.',
    'wpn.w3.n':'Spear','wpn.w3.d':'Strike before they reach you. Dominate the distance.',
    'wpn.w4.n':'Mo Blade','wpn.w4.d':'Brute force shaped into brutal art.',
    'wpn.w5.n':'Rope Dart','wpn.w5.d':'Unpredictable. Untraceable. Unstoppable.',
    'wpn.w6.n':'Fan','wpn.w6.d':'Beauty conceals the blade. Elegance is deadly.',
    'wpn.w7.n':'Umbrella','wpn.w7.d':'A shelter and a slaughter — in the same hand.',
    'gal.tag':'The World Awaits','gal.h':'See the Jianghu',
    'gal.l1':'The Martial World','gal.l2':'Where the Rain Falls','gal.l3':'Where Legends Are Born','gal.l4':'Ancient Paths','gal.l5':'The Wandering Seeker',
    'tra.tag':'Official Trailer','tra.h':'Witness the Legend','tra.sub':'Watch the world come alive.','tra.cta':'Enter Jianghu',
    'rev.tag':'What Players Say','rev.h':'The Jianghu Speaks',
    'rev.s1.lbl':'Steam Reviews','rev.s1.sub':'All languages combined',
    'rev.s2.lbl':'Very Positive','rev.s2.sub':'English reviews rating',
    'rev.s3.lbl':'Players in 2 Weeks','rev.s3.sub':'PC & PS5 combined',
    'rev.s4.lbl':'Steam Most Played','rev.s4.sub':'At launch globally',
    'rev.hours':'hrs on record',
    'rev.q1':'"How can a free game be this expansive? I expected a cash-grab and got one of the best open worlds I have ever explored."',
    'rev.q2':'"The open world detail rivals Red Dead Redemption 2. The Jianghu feels genuinely alive."',
    'rev.q3':'"When I got tired of fighting, I became an architect and healed villagers as a doctor. I ran into a bear practicing Tai Chi. This game is something else."',
    'rev.q4':'"This is literally the best free-to-play game I have ever seen. The combat, the world, the story — premium quality at zero cost."',
    'rev.q5':'"A live service game done right. Gameplay and player satisfaction come first. I found the game that is right for me. See you in the Jianghu."',
    'rev.q6':'"Give it 2 hours. Do not rush. Immerse yourself. Better enjoyed with friends."',
    'rev.link':'Read All 104K+ Reviews on Steam',
    'sys.tag':'System Requirements','sys.h':'Is Your Blade Ready?','sys.min':'Minimum','sys.rec':'Recommended',
    'sys.os.lbl':'Operating System','sys.cpu.lbl':'Processor','sys.ram.lbl':'Memory','sys.gpu.lbl':'Graphics',
    'sys.dx.lbl':'DirectX','sys.net.lbl':'Network','sys.net.val':'Broadband Internet',
    'sys.sto.lbl':'Storage','sys.sto.avail':'available space','sys.sto.note':'SSD installation recommended for best performance',
    'sys.footnote':'Requires 64-bit processor and operating system','sys.cta':'Play Free on PC',
    'faq.tag':'Quick Answers','faq.h':'Before You Step In',
    'faq.q1':'Is it free to play?','faq.a1':'Yes. Where Winds Meet is free to play on PC.',
    'faq.q2':'What platform?','faq.a2':'Available on PC via Steam.',
    'faq.q3':'Is co-op supported?','faq.a3':'Yes — explore solo or with friends.',
    'faq.q4':'Can I start now?','faq.a4':'Right now. Click below.',
    'social.rev_label':'Reviews','social.on_steam':'on Steam','social.very_pos':'Very Positive',
    'social.reviews':'87% Positive Reviews','social.free_num':'Free','social.to_play':'to Play',
    'social.no_card':'No credit card','social.available':'Available on Steam','social.now':'Play Now — PC',
    'social.steam_hero':'Available Free on Steam',
    'sty.lbl':'Where Winds Meet','sty.cta':'Play Free on PC',
    'fcta.pre':'The Jianghu has been waiting.','fcta.h':'Your Story<br>Starts Now.','fcta.sub':'Thousands have already entered. The wind remembers each of them. It is time to add your name.','fcta.cta':'Enter the Jianghu — Free','fcta.note':'Free to play · No credit card · Available on PC via Steam','footer.note':'Unofficial promotional page. Not affiliated with the official developer. Steam is a trademark of Valve Corporation.',
    'footer.priv':'Privacy Policy','footer.terms':'Terms of Use'
  },
  ko:{
    'meta.t':'Where Winds Meet — 강호 입문',
    'game.badge':'오픈 월드 무협 RPG','game.name':'바람이 만나는 곳','game.tagline':'10세기 중국 · 무료 플레이 · PC',
    'hero.ey':'모든 검에는 이야기가 있다. 당신의 것을 써라.','hero.h1':'규칙 없는 세계.','hero.h2':'오직 당신이 쓰는 것만이 규칙이다.',
    'hero.sub':'고대의 세계가 당신을 지켜보고 있다. 모든 길은 어떤 지도도 보여줄 수 없는 곳으로 이어진다.',
    'hero.cta':'전설을 차지하라 — 무료','hero.note':'무료 플레이. 강호는 단 하나만 요구한다: 들어올 것.',
    'chip1':'오픈 월드','chip2':'무술','chip3':'협동 플레이','chip4':'고대 중국','chip5':'무협 RPG',
    'world.tag':'살아 숨쉬는 세계','world.h':'모든 바람에는 이름이 있다',
    'world.desc':'강호는 게임 지도가 아닙니다. 숨 쉬는 세계입니다. 10세기 중국으로 발을 들이세요.',
    'world.p1':'유동적인 전투','world.p2':'살아있는 세계','world.p3':'시네마틱 이동','world.p4':'심층 세계관','world.p5':'협동 / 솔로',
    'paths.tag':'당신의 길을 선택하세요','paths.h':'당신은 누가 될 것인가?',
    'paths.c1.n':'검의 대가','paths.c1.d':'모든 자세를 완성하라. 무적이 되어라.',
    'paths.c2.n':'방랑자','paths.c2.d':'지도를 따르지 마라. 전설을 써라.',
    'paths.c3.n':'전략가','paths.c3.d':'싸움이 시작되기 전에 이겨라.',
    'paths.c4.n':'건설자','paths.c4.d':'마을을 만들어라. 흔적을 남겨라.',
    'paths.c5.n':'탐구자','paths.c5.d':'어떤 진실은 깊이 묻혀 있다.',
    'wpn.tag':'무기를 마스터하라','wpn.h':'무기를 선택하라',
    'wpn.w1.n':'검','wpn.w1.d':'강호의 혼.','wpn.w2.n':'쌍검','wpn.w2.d':'속도와 혼돈.',
    'wpn.w3.n':'창','wpn.w3.d':'거리를 지배하라.','wpn.w4.n':'모검','wpn.w4.d':'힘을 예술로.',
    'wpn.w5.n':'유성추','wpn.w5.d':'예측불가.','wpn.w6.n':'부채','wpn.w6.d':'우아함은 치명적이다.',
    'wpn.w7.n':'우산','wpn.w7.d':'피난처이자 학살.',
    'gal.tag':'세계가 기다린다','gal.h':'강호를 보라',
    'gal.l1':'무협의 세계','gal.l2':'비가 내리는 곳','gal.l3':'전설이 태어나는 곳','gal.l4':'고대의 길','gal.l5':'방랑하는 탐구자',
    'tra.tag':'공식 트레일러','tra.h':'전설을 목격하라','tra.sub':'세계가 살아 숨쉬는 모습을 보라.','tra.cta':'강호 입문',
    'rev.tag':'플레이어들의 이야기','rev.h':'강호가 말하다',
    'rev.s1.lbl':'Steam 리뷰','rev.s1.sub':'전체 언어 합산',
    'rev.s2.lbl':'매우 긍정적','rev.s2.sub':'영어 리뷰 평가',
    'rev.s3.lbl':'2주 만에 플레이어','rev.s3.sub':'PC & PS5 합산',
    'rev.s4.lbl':'Steam 최다 플레이','rev.s4.sub':'글로벌 출시 당시',
    'rev.hours':'시간 플레이',
    'rev.q1':'"무료 게임이 이렇게 방대할 수 있나? 역대 최고의 오픈 월드였다."',
    'rev.q2':'"강호의 디테일은 레드 데드 리뎀션 2에 필적한다. 강호는 정말 살아있다."',
    'rev.q3':'"전투에 지쳤을 때 건축가가 됐다. 태극권 하는 곰도 만났다. 이 게임은 독특하다."',
    'rev.q4':'"내가 본 최고의 무료 게임이다. 유료 게임 수준의 퀄리티다."',
    'rev.q5':'"제대로 된 라이브 서비스 게임. 내게 맞는 게임을 찾았다. 강호에서 만나자."',
    'rev.q6':'"2시간을 줘라. 서두르지 마라. 친구들과 더욱 즐겁다."',
    'rev.link':'Steam에서 104K+ 리뷰 전체 읽기',
    'sys.tag':'시스템 사양','sys.h':'당신의 검은 준비되었나?','sys.min':'최소 사양','sys.rec':'권장 사양',
    'sys.os.lbl':'운영 체제','sys.cpu.lbl':'프로세서','sys.ram.lbl':'메모리','sys.gpu.lbl':'그래픽',
    'sys.dx.lbl':'DirectX','sys.net.lbl':'네트워크','sys.net.val':'광대역 인터넷',
    'sys.sto.lbl':'저장 공간','sys.sto.avail':'여유 공간','sys.sto.note':'SSD 설치를 권장합니다',
    'sys.footnote':'64비트 프로세서 및 운영 체제 필요','sys.cta':'PC에서 무료 플레이',
    'faq.tag':'빠른 답변','faq.h':'발을 들이기 전에',
    'faq.q1':'무료 플레이인가요?','faq.a1':'네. PC에서 무료로 플레이할 수 있습니다.',
    'faq.q2':'어떤 플랫폼인가요?','faq.a2':'Steam을 통해 PC에서 이용 가능합니다.',
    'faq.q3':'협동 플레이가 가능한가요?','faq.a3':'네 — 혼자 또는 친구들과 탐험할 수 있습니다.',
    'faq.q4':'지금 시작할 수 있나요?','faq.a4':'지금 바로. 아래를 클릭하세요.',
    'social.rev_label':'리뷰','social.on_steam':'Steam 기준','social.very_pos':'매우 긍정적',
    'social.reviews':'87% 긍정적 리뷰','social.free_num':'무료','social.to_play':'플레이',
    'social.no_card':'신용카드 불필요','social.available':'Steam에서 이용 가능','social.now':'지금 플레이 — PC',
    'social.steam_hero':'Steam에서 무료 이용 가능',
    'sty.lbl':'바람이 만나는 곳','sty.cta':'PC에서 무료 플레이',
    'fcta.pre':'강호는 기다려 왔다.','fcta.h':'당신의 이야기가<br>지금 시작된다.','fcta.sub':'수천 명이 이미 강호에 들어섰다. 바람은 그들 모두를 기억한다. 이제 당신의 이름을 새길 차례다.','fcta.cta':'강호에 들어서라 — 무료','fcta.note':'무료 플레이 · 신용카드 불필요 · Steam PC','footer.note':'비공식 홍보 페이지입니다. Steam은 Valve Corporation의 상표입니다.',
    'footer.priv':'개인정보 처리방침','footer.terms':'이용약관'
  },
  ja:{
    'meta.t':'Where Winds Meet — 江湖へ踏み込め',
    'game.badge':'オープンワールド武侠RPG','game.name':'Where Winds Meet','game.tagline':'10世紀の中国 · 無料プレイ · PC',
    'hero.ey':'すべての剣には物語がある。お前の物語を刻め。','hero.h1':'ルールのない世界。','hero.h2':'ルールはお前が書く。',
    'hero.sub':'古の世界がお前を見ている。すべての道は地図にない場所へ続く。',
    'hero.cta':'伝説を掴め — 無料','hero.note':'無料プレイ。江湖はただ一つだけを求める：踏み込むこと。',
    'chip1':'オープンワールド','chip2':'武術','chip3':'協力プレイ','chip4':'古代中国','chip5':'武侠RPG',
    'world.tag':'生きた世界','world.h':'すべての風に名がある',
    'world.desc':'江湖はゲームマップではない。息吹く世界だ。10世紀の中国へ踏み込め。',
    'world.p1':'流体戦闘','world.p2':'生きた世界','world.p3':'映像的移動','world.p4':'深い伝承','world.p5':'協力 / ソロ',
    'paths.tag':'道を選べ','paths.h':'あなたは何者になる？',
    'paths.c1.n':'剣の達人','paths.c1.d':'あらゆる一刀を極め、無敵となれ。',
    'paths.c2.n':'放浪者','paths.c2.d':'地図に従うな。伝説を刻め。',
    'paths.c3.n':'策士','paths.c3.d':'戦う前に勝て。',
    'paths.c4.n':'建設者','paths.c4.d':'街を築き、爪痕を残せ。',
    'paths.c5.n':'探求者','paths.c5.d':'深く埋もれた真実がある。',
    'wpn.tag':'武器を極めよ','wpn.h':'武器を選べ',
    'wpn.w1.n':'剣','wpn.w1.d':'江湖の魂。','wpn.w2.n':'双剣','wpn.w2.d':'速度と混沌。',
    'wpn.w3.n':'槍','wpn.w3.d':'距離を制圧せよ。','wpn.w4.n':'莫刀','wpn.w4.d':'力を芸術へ。',
    'wpn.w5.n':'流星錘','wpn.w5.d':'予測不能。','wpn.w6.n':'扇','wpn.w6.d':'優雅さは致命的だ。',
    'wpn.w7.n':'傘','wpn.w7.d':'避難所と殺戮が宿る。',
    'gal.tag':'世界が待つ','gal.h':'江湖を見よ',
    'gal.l1':'武侠の世界','gal.l2':'雨が降る場所','gal.l3':'伝説が生まれる場所','gal.l4':'古の道','gal.l5':'さすらいの探求者',
    'tra.tag':'公式トレーラー','tra.h':'伝説を目撃せよ','tra.sub':'世界が息吹く瞬間を見よ。','tra.cta':'江湖へ進む',
    'rev.tag':'プレイヤーの声','rev.h':'江湖が語る',
    'rev.s1.lbl':'Steamレビュー','rev.s1.sub':'全言語合計',
    'rev.s2.lbl':'非常に好評','rev.s2.sub':'英語レビュー評価',
    'rev.s3.lbl':'2週間でのプレイヤー数','rev.s3.sub':'PC & PS5合算',
    'rev.s4.lbl':'Steam最多プレイ','rev.s4.sub':'グローバル発売時',
    'rev.hours':'時間プレイ済み',
    'rev.q1':'"無料ゲームがこれほど広大なはずがない。史上最高のオープンワールドだった。"',
    'rev.q2':'"江湖の細部はRDR2に匹敵する。江湖は本当に生きている。"',
    'rev.q3':'"戦闘に飽きたとき建築家になり村人を治療した。太極拳の熊にも会った。このゲームは別格だ。"',
    'rev.q4':'"今まで見た最高の無料ゲームだ。有料タイトルのような品質だ。"',
    'rev.q5':'"正しいライブサービスゲーム。自分にぴったりのゲームを見つけた。江湖で会おう。"',
    'rev.q6':'"2時間与えろ。急ぐな。没入せよ。友達と一緒がさらに良い。"',
    'rev.link':'Steamで104K+レビューを全て読む',
    'sys.tag':'動作環境','sys.h':'あなたの刃は準備できているか？','sys.min':'最低要件','sys.rec':'推奨要件',
    'sys.os.lbl':'OS','sys.cpu.lbl':'プロセッサ','sys.ram.lbl':'メモリ','sys.gpu.lbl':'グラフィック',
    'sys.dx.lbl':'DirectX','sys.net.lbl':'ネットワーク','sys.net.val':'ブロードバンド接続',
    'sys.sto.lbl':'ストレージ','sys.sto.avail':'空き容量','sys.sto.note':'SSDへのインストールを推奨',
    'sys.footnote':'64ビットプロセッサとOSが必要','sys.cta':'PCで無料プレイ',
    'faq.tag':'よくある質問','faq.h':'踏み込む前に',
    'faq.q1':'無料でプレイできますか？','faq.a1':'はい。PCで無料プレイできます。',
    'faq.q2':'どのプラットフォームですか？','faq.a2':'Steam経由でPCにて利用可能です。',
    'faq.q3':'協力プレイはできますか？','faq.a3':'はい — 一人でも友達とでも探索できます。',
    'faq.q4':'今すぐ始められますか？','faq.a4':'今すぐ。以下をクリックして始めましょう。',
    'social.rev_label':'レビュー','social.on_steam':'Steam基準','social.very_pos':'非常に好評',
    'social.reviews':'87%のポジティブレビュー','social.free_num':'無料','social.to_play':'プレイ',
    'social.no_card':'クレジットカード不要','social.available':'Steamで利用可能','social.now':'今すぐプレイ — PC',
    'social.steam_hero':'Steamで無料プレイ',
    'sty.lbl':'Where Winds Meet','sty.cta':'PCで無料プレイ',
    'fcta.pre':'江湖はずっと待っていた。','fcta.h':'あなたの物語が<br>今始まる。','fcta.sub':'すでに何千人もが江湖に踏み込んだ。風は彼らすべてを覚えている。今こそあなたの名を刻む時だ。','fcta.cta':'江湖へ踏み込め — 無料','fcta.note':'無料プレイ · クレジットカード不要 · Steam PC','footer.note':'非公式プロモーションページです。Steam はValve Corporationの商標です。',
    'footer.priv':'プライバシーポリシー','footer.terms':'利用規約'
  }
};

Object.assign(T,{
  ru:{
    'meta.t':'Where Winds Meet — Войти в Цзянху',
    'game.badge':'Wuxia RPG с открытым миром','game.name':'WHERE WINDS MEET','game.tagline':'Китай X века · Бесплатно · PC',
    'hero.ey':'У каждого клинка есть история. Напиши свою.','hero.h1':'Мир без правил.','hero.h2':'Кроме тех, что ты создашь сам.',
    'hero.sub':'Древний мир наблюдает за тобой. Каждая тропа ведёт туда, куда не укажет ни одна карта. Кем ты станешь — запомнит только ветер.',
    'hero.cta':'Начать легенду — бесплатно','hero.note':'Играть можно бесплатно. Цзянху просит только одного: сделай первый шаг.',
    'chip1':'Открытый мир','chip2':'Боевые искусства','chip3':'Кооператив','chip4':'Древний Китай','chip5':'Wuxia RPG',
    'world.tag':'Живой мир','world.h':'У каждого ветра есть имя',
    'world.desc':'Цзянху — это не просто карта. Это мир, который дышит. Войди в Китай X века: дикий, живой и полный историй, которые ещё не написаны.',
    'world.p1':'Плавный бой','world.p2':'Живой мир','world.p3':'Кинематографичное передвижение','world.p4':'Глубокий лор','world.p5':'Соло / кооп',
    'paths.tag':'Выбери свой путь','paths.h':'Кем ты станешь?',
    'paths.c1.n':'Мастер меча','paths.c1.d':'Идеальный тайминг. Безупречный удар.',
    'paths.c2.n':'Странник','paths.c2.d':'Иди не по карте, а по зову мира.',
    'paths.c3.n':'Стратег','paths.c3.d':'Побеждай ещё до начала боя.',
    'paths.c4.n':'Созидатель','paths.c4.d':'Меняй города. Оставляй след.',
    'paths.c5.n':'Искатель','paths.c5.d':'Самые важные тайны лежат глубже всего.',
    'wpn.tag':'Овладей арсеналом','wpn.h':'Выбери своё оружие',
    'wpn.w1.n':'Меч','wpn.w1.d':'Изящество и смертельная точность — сердце Цзянху.',
    'wpn.w2.n':'Парные клинки','wpn.w2.d':'Скорость, ритм и чистый хаос в двух руках.',
    'wpn.w3.n':'Копьё','wpn.w3.d':'Держи дистанцию под своим контролем.',
    'wpn.w4.n':'Мо-дао','wpn.w4.d':'Грубая сила, превращённая в искусство.',
    'wpn.w5.n':'Верёвочный дротик','wpn.w5.d':'Непредсказуемо. Неуловимо. Неостановимо.',
    'wpn.w6.n':'Веер','wpn.w6.d':'Красота скрывает клинок. Элегантность тоже убивает.',
    'wpn.w7.n':'Зонт','wpn.w7.d':'Защита и расправа — в одной ладони.',
    'gal.tag':'Мир уже зовёт','gal.h':'Увидь Цзянху',
    'gal.l1':'Мир боевых искусств','gal.l2':'Там, где приходит дождь','gal.l3':'Там, где рождаются легенды','gal.l4':'Древние тропы','gal.l5':'Странник в поиске',
    'tra.tag':'Официальный трейлер','tra.h':'Увидь легенду','tra.sub':'Посмотри, как этот мир оживает.','tra.cta':'Войти в Цзянху',
    'rev.tag':'Что говорят игроки','rev.h':'Цзянху говорит само за себя',
    'rev.s1.lbl':'Отзывы в Steam','rev.s1.sub':'Все языки вместе',
    'rev.s2.lbl':'Очень положительные','rev.s2.sub':'Оценка англоязычных отзывов',
    'rev.s3.lbl':'Игроков за 2 недели','rev.s3.sub':'PC и PS5 вместе',
    'rev.s4.lbl':'Топ Steam по онлайну','rev.s4.sub':'На глобальном старте',
    'rev.hours':'часов в игре',
    'rev.q1':'"Сначала ожидал обычную бесплатную игру, а получил один из самых впечатляющих открытых миров за долгое время."',
    'rev.q2':'"По деталям мира игра легко держится на уровне больших премиум-релизов. Цзянху ощущается живым."',
    'rev.q3':'"Когда устал от боёв, занялся архитектурой и лечением людей. А потом встретил медведя, тренирующего тайцзи. Это нечто особенное."',
    'rev.q4':'"Одна из самых качественных free-to-play игр, которые я видел. Бой, мир и история ощущаются по-настоящему дорогими."',
    'rev.q5':'"Редкий пример live service, где на первом месте сама игра. В Цзянху хочется возвращаться."',
    'rev.q6':'"Дай ей пару часов, не спеши и просто растворись в мире. С друзьями впечатление ещё сильнее."',
    'rev.link':'Читать все 104K+ отзывов в Steam',
    'sys.tag':'Системные требования','sys.h':'Твой клинок готов?','sys.min':'Минимум','sys.rec':'Рекомендовано',
    'sys.os.lbl':'ОС','sys.cpu.lbl':'Процессор','sys.ram.lbl':'Память','sys.gpu.lbl':'Видеокарта',
    'sys.dx.lbl':'DirectX','sys.net.lbl':'Сеть','sys.net.val':'Широкополосный интернет',
    'sys.sto.lbl':'Место на диске','sys.sto.avail':'свободного места','sys.sto.note':'Для лучшей производительности рекомендуется SSD',
    'sys.footnote':'Требуются 64-битный процессор и ОС','sys.cta':'Играть бесплатно на PC',
    'faq.tag':'Быстрые ответы','faq.h':'Перед первым шагом',
    'faq.q1':'Игра бесплатная?','faq.a1':'Да. Where Winds Meet доступна бесплатно на PC.',
    'faq.q2':'На какой платформе?','faq.a2':'Игра доступна на PC через Steam.',
    'faq.q3':'Есть кооператив?','faq.a3':'Да — можно идти в путь одному или вместе с друзьями.',
    'faq.q4':'Можно начать прямо сейчас?','faq.a4':'Да. Нажми ниже и входи.',
    'social.rev_label':'Отзывы','social.on_steam':'в Steam','social.very_pos':'Очень положительные',
    'social.reviews':'87% положительных отзывов','social.free_num':'Бесплатно','social.to_play':'играть',
    'social.no_card':'Без банковской карты','social.available':'Доступно в Steam','social.now':'Играть сейчас — PC',
    'social.steam_hero':'Бесплатно в Steam',
    'sty.lbl':'Where Winds Meet','sty.cta':'Играть бесплатно на PC',
    'fcta.pre':'Цзянху уже ждёт.','fcta.h':'Твоя история<br>начинается сейчас.','fcta.sub':'Тысячи игроков уже вошли в этот мир. Ветер запомнит и твоё имя.','fcta.cta':'Войти в Цзянху — бесплатно','fcta.note':'Бесплатно · Без банковской карты · Доступно на PC через Steam','footer.note':'Неофициальная промостраница. Steam является товарным знаком Valve Corporation.',
    'footer.priv':'Политика конфиденциальности','footer.terms':'Условия использования'
  },
  vi:{
    'meta.t':'Where Winds Meet — Bước vào giang hồ',
    'game.badge':'Wuxia RPG thế giới mở','game.name':'WHERE WINDS MEET','game.tagline':'Trung Hoa thế kỷ 10 · Miễn phí · PC',
    'hero.ey':'Mỗi lưỡi kiếm đều có một câu chuyện. Hãy viết nên câu chuyện của bạn.','hero.h1':'Một thế giới không luật lệ.','hero.h2':'Ngoại trừ luật do chính bạn tạo ra.',
    'hero.sub':'Một thế giới cổ xưa đang dõi theo bạn. Mỗi con đường đều dẫn đến nơi không tấm bản đồ nào chỉ ra được. Người bạn trở thành — chỉ gió mới còn nhớ.',
    'hero.cta':'Mở ra huyền thoại — miễn phí','hero.note':'Chơi miễn phí. Giang hồ chỉ hỏi bạn một điều: dám bước vào.',
    'chip1':'Thế giới mở','chip2':'Võ hiệp','chip3':'Co-op','chip4':'Trung Hoa cổ đại','chip5':'Wuxia RPG',
    'world.tag':'Một thế giới đang sống','world.h':'Mỗi cơn gió đều mang một cái tên',
    'world.desc':'Giang hồ không phải một bản đồ nhiệm vụ. Đó là một thế giới biết thở. Hãy bước vào Trung Hoa thế kỷ 10 — sống động, dữ dội và đầy những ngã rẽ chưa ai viết sẵn.',
    'world.p1':'Chiến đấu mượt mà','world.p2':'Thế giới sống động','world.p3':'Di chuyển điện ảnh','world.p4':'Lore chiều sâu','world.p5':'Co-op / Solo',
    'paths.tag':'Chọn con đường của bạn','paths.h':'Bạn sẽ trở thành ai?',
    'paths.c1.n':'Kiếm khách','paths.c1.d':'Từng nhát chém phải thật hoàn hảo.',
    'paths.c2.n':'Lãng khách','paths.c2.d':'Không đi theo bản đồ. Tự viết nên hành trình.',
    'paths.c3.n':'Mưu sĩ','paths.c3.d':'Thắng trước khi giao chiến bắt đầu.',
    'paths.c4.n':'Kiến tạo giả','paths.c4.d':'Định hình thị trấn. Để lại dấu ấn.',
    'paths.c5.n':'Kẻ truy tầm','paths.c5.d':'Có những chân tướng chỉ lộ ra với người dám đi sâu.',
    'wpn.tag':'Luyện khí thành danh','wpn.h':'Chọn vũ khí của bạn',
    'wpn.w1.n':'Kiếm','wpn.w1.d':'Thanh thoát và chí mạng — linh hồn của giang hồ.',
    'wpn.w2.n':'Song đao','wpn.w2.d':'Tốc độ, nhịp điệu và hỗn loạn trong một thể thống nhất.',
    'wpn.w3.n':'Thương','wpn.w3.d':'Làm chủ khoảng cách trước khi đối thủ kịp chạm tới.',
    'wpn.w4.n':'Mạch đao','wpn.w4.d':'Sức mạnh thô được rèn thành nghệ thuật chiến đấu.',
    'wpn.w5.n':'Phi tiêu dây','wpn.w5.d':'Khó đoán. Khó lần. Khó ngăn.',
    'wpn.w6.n':'Phiến','wpn.w6.d':'Vẻ đẹp che giấu lưỡi dao. Sự tao nhã vẫn có thể chí mạng.',
    'wpn.w7.n':'Ô','wpn.w7.d':'Vừa che chở, vừa kết liễu — trong cùng một bàn tay.',
    'gal.tag':'Thế giới đang chờ','gal.h':'Ngắm nhìn giang hồ',
    'gal.l1':'Thế giới võ lâm','gal.l2':'Nơi mưa rơi','gal.l3':'Nơi huyền thoại ra đời','gal.l4':'Lối xưa cổ kính','gal.l5':'Người lữ khách đơn hành',
    'tra.tag':'Trailer chính thức','tra.h':'Chứng kiến huyền thoại','tra.sub':'Xem thế giới ấy chuyển động và sống dậy.','tra.cta':'Bước vào giang hồ',
    'rev.tag':'Người chơi nói gì','rev.h':'Giang hồ đã lên tiếng',
    'rev.s1.lbl':'Đánh giá trên Steam','rev.s1.sub':'Tổng hợp mọi ngôn ngữ',
    'rev.s2.lbl':'Rất tích cực','rev.s2.sub':'Tỷ lệ đánh giá tiếng Anh',
    'rev.s3.lbl':'Người chơi trong 2 tuần','rev.s3.sub':'PC & PS5 cộng gộp',
    'rev.s4.lbl':'Top Steam Most Played','rev.s4.sub':'Trong giai đoạn ra mắt toàn cầu',
    'rev.hours':'giờ đã chơi',
    'rev.q1':'"Tôi từng nghĩ đây chỉ là một game miễn phí nữa thôi, nhưng thứ tôi nhận được lại là một thế giới mở đáng nhớ đến bất ngờ."',
    'rev.q2':'"Mức độ chi tiết của thế giới có thể đứng cạnh nhiều bom tấn lớn. Giang hồ thực sự có linh hồn."',
    'rev.q3':'"Lúc mệt vì chiến đấu, tôi chuyển sang làm kiến trúc sư rồi chữa bệnh cho dân làng. Sau đó gặp cả gấu tập Thái Cực Quyền. Quá khác biệt."',
    'rev.q4':'"Đây là một trong những game free-to-play chất lượng nhất tôi từng chơi. Combat, thế giới và cốt truyện đều rất premium."',
    'rev.q5':'"Một live service hiếm hoi đặt trải nghiệm người chơi lên trước. Tôi đã tìm được game dành cho mình."',
    'rev.q6':'"Hãy cho game này vài tiếng, đừng vội. Cứ để mình chìm vào thế giới đó. Chơi cùng bạn bè còn đã hơn nữa."',
    'rev.link':'Đọc toàn bộ 104K+ đánh giá trên Steam',
    'sys.tag':'Cấu hình yêu cầu','sys.h':'Thanh kiếm của bạn đã sẵn sàng chưa?','sys.min':'Tối thiểu','sys.rec':'Khuyên dùng',
    'sys.os.lbl':'Hệ điều hành','sys.cpu.lbl':'Bộ xử lý','sys.ram.lbl':'Bộ nhớ','sys.gpu.lbl':'Card đồ hoạ',
    'sys.dx.lbl':'DirectX','sys.net.lbl':'Mạng','sys.net.val':'Internet băng thông rộng',
    'sys.sto.lbl':'Dung lượng lưu trữ','sys.sto.avail':'dung lượng trống','sys.sto.note':'Khuyến nghị cài trên SSD để có hiệu năng tốt hơn',
    'sys.footnote':'Yêu cầu CPU và hệ điều hành 64-bit','sys.cta':'Chơi miễn phí trên PC',
    'faq.tag':'Giải đáp nhanh','faq.h':'Trước khi bước vào',
    'faq.q1':'Game có miễn phí không?','faq.a1':'Có. Where Winds Meet miễn phí trên PC.',
    'faq.q2':'Có trên nền tảng nào?','faq.a2':'Hiện có trên PC qua Steam.',
    'faq.q3':'Có hỗ trợ co-op không?','faq.a3':'Có — bạn có thể đi một mình hoặc cùng bạn bè.',
    'faq.q4':'Có thể chơi ngay bây giờ không?','faq.a4':'Có. Chỉ cần bấm bên dưới.',
    'social.rev_label':'Đánh giá','social.on_steam':'trên Steam','social.very_pos':'Rất tích cực',
    'social.reviews':'87% đánh giá tích cực','social.free_num':'Miễn phí','social.to_play':'để chơi',
    'social.no_card':'Không cần thẻ tín dụng','social.available':'Có trên Steam','social.now':'Chơi ngay — PC',
    'social.steam_hero':'Miễn phí trên Steam',
    'sty.lbl':'Where Winds Meet','sty.cta':'Chơi miễn phí trên PC',
    'fcta.pre':'Giang hồ đã chờ rất lâu.','fcta.h':'Câu chuyện của bạn<br>bắt đầu từ đây.','fcta.sub':'Hàng nghìn người đã bước vào thế giới ấy. Đã đến lúc để gió nhớ đến tên bạn.','fcta.cta':'Bước vào giang hồ — miễn phí','fcta.note':'Miễn phí · Không cần thẻ tín dụng · Có trên PC qua Steam','footer.note':'Trang quảng bá không chính thức. Steam là thương hiệu của Valve Corporation.',
    'footer.priv':'Chính sách quyền riêng tư','footer.terms':'Điều khoản sử dụng'
  },
  th:{
    'meta.t':'Where Winds Meet — ก้าวเข้าสู่ยุทธภพ',
    'game.badge':'Wuxia RPG โลกเปิด','game.name':'WHERE WINDS MEET','game.tagline':'จีนศตวรรษที่ 10 · เล่นฟรี · PC',
    'hero.ey':'ทุกคมดาบมีเรื่องราวของตัวเอง ถึงเวลาที่คุณจะเขียนของคุณ.','hero.h1':'โลกที่ไร้กฎเกณฑ์.','hero.h2':'ยกเว้นกฎที่คุณสร้างขึ้นเอง.',
    'hero.sub':'โลกโบราณกำลังเฝ้ามองอยู่ ทุกเส้นทางพาคุณไปยังสถานที่ที่ไม่มีแผนที่ใดบอกได้ว่าคือที่ไหน สุดท้ายแล้วสายลมเท่านั้นที่จะจดจำว่าคุณกลายเป็นใคร.',
    'hero.cta':'เริ่มตำนานของคุณ — เล่นฟรี','hero.note':'เล่นฟรี ยุทธภพขอเพียงอย่างเดียว: กล้าก้าวเข้ามา.',
    'chip1':'โลกเปิด','chip2':'ยุทธศิลป์','chip3':'Co-op','chip4':'จีนโบราณ','chip5':'Wuxia RPG',
    'world.tag':'โลกที่มีลมหายใจ','world.h':'ทุกสายลมล้วนมีชื่อ',
    'world.desc':'ยุทธภพไม่ใช่แค่แผนที่ของเกม แต่มันคือโลกที่มีชีวิตจริง ก้าวเข้าสู่จีนศตวรรษที่ 10 ที่ดิบ ลึก และเต็มไปด้วยเรื่องราวที่ยังไม่มีใครเขียนแทนคุณ.',
    'world.p1':'การต่อสู้ลื่นไหล','world.p2':'โลกที่มีชีวิต','world.p3':'การเคลื่อนไหวแบบภาพยนตร์','world.p4':'เนื้อเรื่องลึกซึ้ง','world.p5':'เล่นเดี่ยว / Co-op',
    'paths.tag':'เลือกเส้นทางของคุณ','paths.h':'คุณจะเป็นใครในยุทธภพ?',
    'paths.c1.n':'จอมดาบ','paths.c1.d':'ทุกจังหวะ ทุกคมดาบ ต้องสมบูรณ์แบบ.',
    'paths.c2.n':'ผู้พเนจร','paths.c2.d':'ไม่ต้องเดินตามแผนที่ เขียนตำนานของตัวเอง.',
    'paths.c3.n':'นักวางกลยุทธ์','paths.c3.d':'ชนะตั้งแต่ก่อนการต่อสู้จะเริ่ม.',
    'paths.c4.n':'ผู้สร้าง','paths.c4.d':'เปลี่ยนเมืองให้จำชื่อของคุณ.',
    'paths.c5.n':'ผู้แสวงหา','paths.c5.d':'ความจริงบางอย่างมีไว้สำหรับคนที่กล้าลงลึก.',
    'wpn.tag':'ฝึกอาวุธให้เป็นตำนาน','wpn.h':'เลือกอาวุธของคุณ',
    'wpn.w1.n':'ดาบ','wpn.w1.d':'งามสง่าและเฉียบคม — หัวใจของยุทธภพ.',
    'wpn.w2.n':'ดาบคู่','wpn.w2.d':'ความเร็ว จังหวะ และความโกลาหลในมือเดียวกัน.',
    'wpn.w3.n':'หอก','wpn.w3.d':'คุมระยะก่อนศัตรูจะเข้าถึงตัว.',
    'wpn.w4.n':'มีดโม','wpn.w4.d':'พลังดิบที่ถูกตีขึ้นเป็นศิลปะแห่งการสังหาร.',
    'wpn.w5.n':'เชือกพุ่ง','wpn.w5.d':'คาดเดาไม่ได้ ไล่ไม่ทัน หยุดยาก.',
    'wpn.w6.n':'พัด','wpn.w6.d':'ความงามซ่อนคมมีด ความอ่อนช้อยก็อันตรายได้.',
    'wpn.w7.n':'ร่ม','wpn.w7.d':'ทั้งปกป้องและปลิดชีพในมือเดียว.',
    'gal.tag':'โลกกำลังรออยู่','gal.h':'มองเห็นยุทธภพด้วยตา',
    'gal.l1':'โลกแห่งยุทธจักร','gal.l2':'ที่ซึ่งฝนโปรยลงมา','gal.l3':'ที่ซึ่งตำนานถือกำเนิด','gal.l4':'เส้นทางโบราณ','gal.l5':'ผู้แสวงหาที่เดินเดียวดาย',
    'tra.tag':'ตัวอย่างอย่างเป็นทางการ','tra.h':'เห็นตำนานด้วยตาของคุณเอง','tra.sub':'ดูโลกใบนี้มีชีวิตขึ้นตรงหน้า.','tra.cta':'ก้าวสู่ยุทธภพ',
    'rev.tag':'เสียงจากผู้เล่น','rev.h':'ยุทธภพพูดแทนตัวเองแล้ว',
    'rev.s1.lbl':'รีวิวบน Steam','rev.s1.sub':'รวมทุกภาษา',
    'rev.s2.lbl':'แง่บวกมาก','rev.s2.sub':'คะแนนจากรีวิวภาษาอังกฤษ',
    'rev.s3.lbl':'จำนวนผู้เล่นใน 2 สัปดาห์','rev.s3.sub':'รวม PC และ PS5',
    'rev.s4.lbl':'Steam Most Played','rev.s4.sub':'ช่วงเปิดตัวทั่วโลก',
    'rev.hours':'ชั่วโมงที่เล่น',
    'rev.q1':'"ตอนแรกคิดว่าเป็นเกมฟรีทั่ว ๆ ไป แต่สิ่งที่ได้กลับเป็นโอเพนเวิลด์ที่น่าจดจำอย่างไม่น่าเชื่อ."',
    'rev.q2':'"รายละเอียดของโลกเกมทำได้ถึงระดับเกมฟอร์มใหญ่หลายเกม ยุทธภพรู้สึกมีชีวิตจริง ๆ."',
    'rev.q3':'"พอเบื่อการต่อสู้ ฉันไปเป็นสถาปนิกแล้วรักษาชาวบ้านต่อ ยังมีหมีฝึกไทเก็กอีก เกมนี้มันไม่ธรรมดา."',
    'rev.q4':'"นี่คือหนึ่งในเกม free-to-play ที่คุณภาพดีที่สุดที่ฉันเคยเล่น ทั้งโลก การต่อสู้ และเรื่องราวให้ความรู้สึกพรีเมียมมาก."',
    'rev.q5':'"เป็นเกม live service ที่เอาความพอใจของผู้เล่นมาก่อนจริง ๆ ฉันเจอเกมที่ใช่สำหรับตัวเองแล้ว."',
    'rev.q6':'"ให้เวลากับมันสักสองชั่วโมง อย่ารีบ ปล่อยให้ตัวเองจมไปกับบรรยากาศ แล้วจะเข้าใจทันที."',
    'rev.link':'อ่านรีวิวทั้งหมด 104K+ บน Steam',
    'sys.tag':'สเปกที่ต้องใช้','sys.h':'คมดาบของคุณพร้อมหรือยัง?','sys.min':'ขั้นต่ำ','sys.rec':'แนะนำ',
    'sys.os.lbl':'ระบบปฏิบัติการ','sys.cpu.lbl':'โปรเซสเซอร์','sys.ram.lbl':'หน่วยความจำ','sys.gpu.lbl':'กราฟิก',
    'sys.dx.lbl':'DirectX','sys.net.lbl':'เครือข่าย','sys.net.val':'อินเทอร์เน็ตบรอดแบนด์',
    'sys.sto.lbl':'พื้นที่เก็บข้อมูล','sys.sto.avail':'พื้นที่ว่าง','sys.sto.note':'แนะนำให้ติดตั้งบน SSD เพื่อประสิทธิภาพที่ดีกว่า',
    'sys.footnote':'ต้องใช้ระบบปฏิบัติการและโปรเซสเซอร์แบบ 64-bit','sys.cta':'เล่นฟรีบน PC',
    'faq.tag':'คำตอบแบบรวดเร็ว','faq.h':'ก่อนจะก้าวเข้าไป',
    'faq.q1':'เล่นฟรีไหม?','faq.a1':'ใช่ Where Winds Meet เล่นฟรีบน PC.',
    'faq.q2':'เล่นได้บนแพลตฟอร์มไหน?','faq.a2':'เล่นได้บน PC ผ่าน Steam.',
    'faq.q3':'มีโหมด co-op ไหม?','faq.a3':'มี — จะเล่นคนเดียวหรือไปกับเพื่อนก็ได้.',
    'faq.q4':'เริ่มได้ตอนนี้เลยไหม?','faq.a4':'ได้เลย กดด้านล่างแล้วเข้าไป.',
    'social.rev_label':'รีวิว','social.on_steam':'บน Steam','social.very_pos':'แง่บวกมาก',
    'social.reviews':'87% รีวิวเชิงบวก','social.free_num':'ฟรี','social.to_play':'ให้เล่น',
    'social.no_card':'ไม่ต้องใช้บัตรเครดิต','social.available':'พร้อมบน Steam','social.now':'เล่นตอนนี้ — PC',
    'social.steam_hero':'เล่นฟรีบน Steam',
    'sty.lbl':'Where Winds Meet','sty.cta':'เล่นฟรีบน PC',
    'fcta.pre':'ยุทธภพกำลังรอคุณอยู่.','fcta.h':'เรื่องราวของคุณ<br>เริ่มได้ตอนนี้.','fcta.sub':'มีผู้เล่นนับพันก้าวเข้าไปแล้ว ถึงเวลาที่สายลมจะจดจำชื่อของคุณบ้าง.','fcta.cta':'ก้าวสู่ยุทธภพ — เล่นฟรี','fcta.note':'เล่นฟรี · ไม่ต้องใช้บัตรเครดิต · เล่นบน PC ผ่าน Steam','footer.note':'หน้านี้เป็นหน้าประชาสัมพันธ์อย่างไม่เป็นทางการ Steam เป็นเครื่องหมายการค้าของ Valve Corporation.',
    'footer.priv':'นโยบายความเป็นส่วนตัว','footer.terms':'ข้อกำหนดการใช้งาน'
  },
  tw:{
    'meta.t':'Where Winds Meet — 踏入江湖',
    'game.badge':'開放世界武俠 RPG','game.name':'WHERE WINDS MEET','game.tagline':'十世紀中國 · 免費遊玩 · PC',
    'hero.ey':'每一把劍，都有自己的故事。現在輪到你來寫。','hero.h1':'一個沒有既定規則的世界。','hero.h2':'除了你親手寫下的那一套。',
    'hero.sub':'古老的世界正注視著你。每一條路都通往地圖之外的地方。你會成為誰，最後只有風會記得。',
    'hero.cta':'開啟你的傳奇 — 免費','hero.note':'免費遊玩。江湖只問你一件事：敢不敢踏進來。',
    'chip1':'開放世界','chip2':'武學','chip3':'合作遊玩','chip4':'古代中國','chip5':'武俠 RPG',
    'world.tag':'一個會呼吸的世界','world.h':'每一道風，都有名字',
    'world.desc':'江湖不是任務地圖，而是一個真正活著的世界。走進十世紀的中國——野性、鮮活，且沒有任何一條路是替你預先安排好的。',
    'world.p1':'流暢戰鬥','world.p2':'活著的世界','world.p3':'電影感移動','world.p4':'厚重世界觀','world.p5':'單人 / 合作',
    'paths.tag':'選擇你的道路','paths.h':'你想成為什麼樣的人？',
    'paths.c1.n':'劍客','paths.c1.d':'把每一次出手都磨到極致。',
    'paths.c2.n':'行者','paths.c2.d':'不跟著地圖走，跟著心走。',
    'paths.c3.n':'謀者','paths.c3.d':'在交手之前，就先贏下局勢。',
    'paths.c4.n':'築者','paths.c4.d':'改變城鎮，留下屬於你的痕跡。',
    'paths.c5.n':'尋者','paths.c5.d':'真正的答案，從來都藏得更深。',
    'wpn.tag':'練就你的兵器之道','wpn.h':'選擇你的武器',
    'wpn.w1.n':'劍','wpn.w1.d':'優雅與致命並存，這就是江湖的靈魂。',
    'wpn.w2.n':'雙刀','wpn.w2.d':'速度、節奏與混亂，在雙手之間合而為一。',
    'wpn.w3.n':'長槍','wpn.w3.d':'掌握距離，先於敵人出手。',
    'wpn.w4.n':'陌刀','wpn.w4.d':'把純粹的力量鍛造成暴烈的藝術。',
    'wpn.w5.n':'繩鏢','wpn.w5.d':'難以預測，也幾乎無法阻止。',
    'wpn.w6.n':'扇','wpn.w6.d':'美感遮住了鋒芒，優雅也可以很致命。',
    'wpn.w7.n':'傘','wpn.w7.d':'同一隻手裡，既能護你，也能奪命。',
    'gal.tag':'世界正在等你','gal.h':'看見這片江湖',
    'gal.l1':'武俠世界','gal.l2':'雨落之地','gal.l3':'傳奇誕生之所','gal.l4':'古道舊跡','gal.l5':'行於風中的尋路人',
    'tra.tag':'官方預告片','tra.h':'親眼見證傳奇','tra.sub':'看這個世界如何真正活起來。','tra.cta':'踏入江湖',
    'rev.tag':'玩家怎麼說','rev.h':'江湖自己會說話',
    'rev.s1.lbl':'Steam 評價','rev.s1.sub':'所有語言綜合',
    'rev.s2.lbl':'極度好評','rev.s2.sub':'英文評價表現',
    'rev.s3.lbl':'兩週玩家數','rev.s3.sub':'PC 與 PS5 合計',
    'rev.s4.lbl':'Steam 熱門排行','rev.s4.sub':'全球上市期間',
    'rev.hours':'遊玩時數',
    'rev.q1':'"原本以為只是又一款免費遊戲，結果卻得到了一個規模驚人、讓人停不下來的開放世界。"',
    'rev.q2':'"世界細節完全有大作水準，這片江湖不是背景板，而是真的有靈魂。"',
    'rev.q3':'"打累了之後我跑去當建築師、當大夫，甚至遇到正在打太極的熊。這遊戲真的很特別。"',
    'rev.q4':'"這是我看過最有誠意的免費遊戲之一。戰鬥、世界、故事都很有高品質感。"',
    'rev.q5':'"少數真正把玩家體驗放在前面的 live service 遊戲。我找到想長期待下去的江湖了。"',
    'rev.q6':'"先給它兩個小時，不要急著衝，讓自己沉進去。跟朋友一起玩會更有感。"',
    'rev.link':'在 Steam 閱讀全部 104K+ 則評價',
    'sys.tag':'系統需求','sys.h':'你的刀，準備好了嗎？','sys.min':'最低配備','sys.rec':'建議配備',
    'sys.os.lbl':'作業系統','sys.cpu.lbl':'處理器','sys.ram.lbl':'記憶體','sys.gpu.lbl':'顯示卡',
    'sys.dx.lbl':'DirectX','sys.net.lbl':'網路','sys.net.val':'寬頻網路連線',
    'sys.sto.lbl':'儲存空間','sys.sto.avail':'可用空間','sys.sto.note':'建議安裝於 SSD 以獲得更佳表現',
    'sys.footnote':'需要 64 位元處理器與作業系統','sys.cta':'在 PC 免費開玩',
    'faq.tag':'快速解答','faq.h':'踏進去之前',
    'faq.q1':'這款遊戲免費嗎？','faq.a1':'是的，Where Winds Meet 可在 PC 免費遊玩。',
    'faq.q2':'支援哪些平台？','faq.a2':'目前可透過 Steam 在 PC 上遊玩。',
    'faq.q3':'有合作模式嗎？','faq.a3':'有——你可以獨行，也可以與朋友同行。',
    'faq.q4':'現在就能開始嗎？','faq.a4':'當然，點下去就能進入江湖。',
    'social.rev_label':'評價','social.on_steam':'於 Steam','social.very_pos':'極度好評',
    'social.reviews':'87% 正面評價','social.free_num':'免費','social.to_play':'遊玩',
    'social.no_card':'不需信用卡','social.available':'Steam 現已上線','social.now':'立即遊玩 — PC',
    'social.steam_hero':'Steam 免費遊玩',
    'sty.lbl':'Where Winds Meet','sty.cta':'在 PC 免費遊玩',
    'fcta.pre':'江湖一直都在等你。','fcta.h':'你的故事<br>現在開始。','fcta.sub':'已有成千上萬的人踏進這片世界。現在，該輪到風記住你的名字了。','fcta.cta':'踏入江湖 — 免費','fcta.note':'免費遊玩 · 不需信用卡 · 透過 Steam 在 PC 上體驗','footer.note':'本頁為非官方宣傳頁面。Steam 為 Valve Corporation 之商標。',
    'footer.priv':'隱私政策','footer.terms':'使用條款'
  }
});

/* ── LANGUAGE ── */
var lang='en';
function detectLang(){
  try{
    var u=new URLSearchParams(location.search).get('lang');
    if(u&&T[u])return u;
    var s=localStorage.getItem('wwm_lang');
    if(s&&T[s])return s;
  }catch(e){}
  var b=(navigator.language||'').toLowerCase();
  if(b.startsWith('ko'))return'ko';
  if(b.startsWith('ja'))return'ja';
  if(b.startsWith('ru'))return'ru';
  if(b.startsWith('vi'))return'vi';
  if(b.startsWith('th'))return'th';
  if(b.startsWith('zh-tw')||b.startsWith('zh-hk')||b.indexOf('hant')>-1)return'tw';
  return'en';
}
function setLang(l,push){
  if(!T[l])l='en';
  lang=l;
  document.documentElement.lang=l;
  document.documentElement.className=document.documentElement.className.replace(/\blang-\S+/g,'').trim();
  document.documentElement.classList.add('lang-'+l);
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.dataset.i18n;
    var v=T[l][k];
    if(v===undefined)return;
    var htmlKeys=['fcta.h','fcta.sub'];
    var isHtml=htmlKeys.indexOf(k)>=0||k.indexOf('rev.q')===0||v.indexOf('<br')>=0||v.indexOf('<b>')>=0;
    if(isHtml){
      el.innerHTML=v;
    } else {
      el.textContent=v;
    }
  });
  document.title=T[l]['meta.t']||T.en['meta.t'];
  document.querySelectorAll('.lb').forEach(function(b){
    var on=b.dataset.lang===l;
    b.classList.toggle('on',on);
    b.setAttribute('aria-pressed',String(on));
  });
  if(push){
    try{
      var u=new URL(location.href);
      u.searchParams.set('lang',l);
      history.pushState({lang:l},'',u.toString());
      localStorage.setItem('wwm_lang',l);
    }catch(e){}
  }
}
document.querySelectorAll('.lb').forEach(function(b){
  b.addEventListener('click',function(){setLang(b.dataset.lang,true);});
});
window.addEventListener('popstate',function(){
  setLang(new URLSearchParams(location.search).get('lang')||'en',false);
});
/* ── ASSETS ── */
function loadAssets(){
  var url=isPH(CFG.ctaUrl)?'#':CFG.ctaUrl;
  ['hero-cta','tra-cta','sty-cta','sysreq-cta','final-cta-btn','steam-badge-btn','win-badge-btn'].forEach(function(id){
    var el=document.getElementById(id);if(el)el.href=url;
  });
  if(!isPH(CFG.logo)){
    var li=document.getElementById('nav-logo');
    if(li){
      li.src=CFG.logo;
      li.style.display='block';
      li.style.filter='brightness(0) invert(1)';
      li.style.opacity='.92';
    }
    var nw=document.getElementById('nav-word');
    if(nw)nw.style.display='none';
    var hl=document.getElementById('hero-logo');
    if(hl){hl.src=CFG.logo;hl.style.display='block';}
    var gt=document.getElementById('game-title-text');
    if(gt)gt.style.display='none';
    var fl=document.getElementById('footer-logo');if(fl){fl.src=CFG.logo;fl.style.display='block';fl.style.marginLeft='auto';fl.style.marginRight='auto';}
  }
  var galSrcs=[CFG.ss1,CFG.ss2,CFG.ss3,
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614647/screenshot_4_dvy1mp.webp',
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614643/screenshot_5_xgoi0z.webp'];
  document.querySelectorAll('.gallery-grid .g-img').forEach(function(img,i){
    if(galSrcs[i]&&!isPH(galSrcs[i]))img.src=galSrcs[i];
  });
  var wpnSrcs=[
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614639/sword_zygg19.webp','https://res.cloudinary.com/dcc17awcl/image/upload/v1773614639/dual_blades_qxpwv2.webp',
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614644/spear_dgn8lx.webp','https://res.cloudinary.com/dcc17awcl/image/upload/v1773614640/mo_blade_ibmm68.webp',
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614641/rope_dart_dx4lmg.webp','https://res.cloudinary.com/dcc17awcl/image/upload/v1773614640/fan_pzi1zs.webp','https://res.cloudinary.com/dcc17awcl/image/upload/v1773614640/fan_pzi1zs.webp'
  ];
  document.querySelectorAll('.w-img').forEach(function(img,i){
    if(wpnSrcs[i])img.src=wpnSrcs[i];
  });
  var scrollSrcs=[
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614645/screenshot_3_mxjw26.webp','https://res.cloudinary.com/dcc17awcl/image/upload/v1773614641/screenshot_1_kxhznd.webp',
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614643/screenshot_2_yhdzvc.webp','https://res.cloudinary.com/dcc17awcl/image/upload/v1773614647/screenshot_4_dvy1mp.webp',
    'https://res.cloudinary.com/dcc17awcl/image/upload/v1773614643/screenshot_5_xgoi0z.webp'
  ];
  document.querySelectorAll('.scroll-img').forEach(function(img,i){
    if(scrollSrcs[i])img.src=scrollSrcs[i];
  });
  var wb=document.querySelector('.world-art-bg');
  if(wb){
    wb.style.backgroundImage='url(https://res.cloudinary.com/dcc17awcl/image/upload/v1773614643/screenshot_5_xgoi0z.webp)';
    wb.style.backgroundSize='cover';
    wb.style.backgroundPosition='center 40%';
  }
  var tph=document.getElementById('t-ph');
  if(tph){
    var timg=tph.querySelector('img');
    if(timg)timg.src='https://res.cloudinary.com/dcc17awcl/image/upload/v1773614645/screenshot_3_mxjw26.webp';
  }
}
/* ── HERO VIDEO ── */
function initHeroVideo(){
  var hv=document.getElementById('hero-video');
  var poster=document.getElementById('hero-poster');
  var replay=document.getElementById('hero-replay');
  var muteBtn=document.getElementById('hero-mute-btn');
  var iconOn=document.getElementById('icon-sound-on');
  var iconOff=document.getElementById('icon-sound-off');
  if(!hv)return;
  function hideMountains(){
    ['hw-sky','hw-sun','hw-m1','hw-m2','hw-m3','hw-m4','hw-m5','hw-mist','hw-mist2'].forEach(function(c){
      var el=document.querySelector('.'+c);
      if(el){el.style.transition='opacity 1.2s ease';el.style.opacity='0';}
    });
  }
  function showVideo(){
    hv.style.opacity='1';
    hideMountains();
  }
  if(poster){
    poster.src='https://res.cloudinary.com/dcc17awcl/image/upload/v1773614646/hero_poster_e032kf.webp';
  }
  hv.poster='https://res.cloudinary.com/dcc17awcl/image/upload/v1773614646/hero_poster_e032kf.webp';
  hv.muted=false;
  hv.volume=0.8;
  var p=hv.play();
  if(p){
    p.then(showVideo).catch(function(){
      hv.muted=true;
      if(iconOn)iconOn.style.display='none';
      if(iconOff)iconOff.style.display='';
      if(muteBtn)muteBtn.setAttribute('aria-label','Unmute video');
      hv.play().then(showVideo).catch(function(){
        hv.style.opacity='1';
        hideMountains();
      });
    });
  }
  if(hv.readyState>=2)showVideo();
  else{
    hv.addEventListener('canplay',showVideo,{once:true});
    hv.addEventListener('loadeddata',showVideo,{once:true});
  }
  hv.addEventListener('ended',function(){
    hv.style.transition='opacity .6s ease';
    hv.style.opacity='0';
    setTimeout(function(){
      hv.style.display='none';
      if(poster){
        poster.style.display='block';
        poster.style.opacity='0';
        poster.style.transition='opacity .8s ease';
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){poster.style.opacity='1';});
        });
      }
      if(replay){
        replay.classList.add('show');
        var hc=document.querySelector('.hero-content');
        if(hc)hc.style.pointerEvents='none';
      }
    },600);
  });
  if(replay){
    replay.addEventListener('click',function(){
      replay.classList.remove('show');
      var hc=document.querySelector('.hero-content');
      if(hc)hc.style.pointerEvents='';
      if(poster){
        poster.style.transition='opacity .3s ease';
        poster.style.opacity='0';
        setTimeout(function(){poster.style.display='none';},300);
      }
      hv.style.display='';
      hv.style.opacity='0';
      hv.style.transition='opacity .8s ease';
      hv.currentTime=0;
      setTimeout(function(){
        hv.style.opacity='1';
        hv.play().catch(function(){});
      },50);
    });
    replay.addEventListener('keydown',function(e){
      if(e.key==='Enter'||e.key===' '){e.preventDefault();replay.click();}
    });
  }
  if(muteBtn){
    muteBtn.addEventListener('click',function(){
      hv.muted=!hv.muted;
      if(iconOn)iconOn.style.display=hv.muted?'none':'';
      if(iconOff)iconOff.style.display=hv.muted?'':'none';
      muteBtn.setAttribute('aria-label',hv.muted?'Unmute video':'Mute video');
    });
  }
}
/* ── EMBERS ── */
function spawnEmbers(){
  var c=document.getElementById('embers');if(!c)return;
  for(var i=0;i<20;i++){
    var e=document.createElement('div');e.className='em';
    var sz=.8+Math.random()*1.8;
    e.style.cssText=['left:'+(Math.random()*100)+'%','bottom:'+(Math.random()*20)+'%',
      'width:'+sz+'px','height:'+sz+'px',
      '--d:'+(7+Math.random()*10)+'s','--dl:'+(-Math.random()*14)+'s',
      '--dx:'+((Math.random()-.5)*60)+'px','--op:'+(0.1+Math.random()*.2)].join(';');
    c.appendChild(e);
  }
}
/* ── CURSOR ── */
function initCursor(){
  if(window.matchMedia('(pointer:coarse)').matches){
    var cur=document.getElementById('cursor');
    var ring=document.getElementById('cursor-ring');
    if(cur)cur.style.display='none';
    if(ring)ring.style.display='none';
    document.body.style.cursor='auto';
    document.querySelectorAll('a,button').forEach(function(el){el.style.cursor='auto';});
    return;
  }
  var cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
  var mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',function(e){
    mx=e.clientX;my=e.clientY;
    cur.style.left=mx+'px';cur.style.top=my+'px';
  });
  (function anim(){
    rx+=(mx-rx)*.16;ry+=(my-ry)*.16;
    ring.style.left=rx+'px';ring.style.top=ry+'px';
    requestAnimationFrame(anim);
  })();
}
/* ── REVEAL ── */
function initReveal(){
  if(!window.IntersectionObserver)return;
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target);}
    });
  },{threshold:.07,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.rv').forEach(function(el){obs.observe(el);});
}
/* ── NAV ── */
function initNav(){
  var nav=document.getElementById('nav');
  function up(){nav.classList.toggle('solid',scrollY>55);}
  addEventListener('scroll',up,{passive:true});up();
}
/* ── STICKY ── */
function initSticky(){
  var s=document.getElementById('sticky'),h=document.getElementById('hero');
  if(!window.IntersectionObserver||!h)return;
  new IntersectionObserver(function(entries){
    s.classList.toggle('on',!entries[0].isIntersecting);
  },{threshold:0}).observe(h);
}
/* ── FAQ ── */
function initFaq(){
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var open=this.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.faq-q').forEach(function(b){
        b.setAttribute('aria-expanded','false');
        document.getElementById(b.getAttribute('aria-controls')).classList.remove('open');
      });
      if(!open){
        this.setAttribute('aria-expanded','true');
        document.getElementById(this.getAttribute('aria-controls')).classList.add('open');
      }
    });
  });
}
/* ── TRAILER ── */
function initTrailer(){
  var btn=document.getElementById('play-btn');
  var tv=document.getElementById('t-video');
  var ph=document.getElementById('t-ph');
  var iconPlay=document.getElementById('icon-play');
  var iconPause=document.getElementById('icon-pause');
  if(!btn||!tv)return;
  var player=tv.closest('.t-player')||tv.parentElement;
  function setPlaying(playing){
    if(iconPlay)iconPlay.style.display=playing?'none':'';
    if(iconPause)iconPause.style.display=playing?'':'none';
    btn.setAttribute('aria-label',playing?'Pause trailer':'Play official trailer');
    btn.dataset.state=playing?'playing':'paused';
    btn.style.opacity='';
    btn.style.pointerEvents='';
    btn.style.animationPlayState=playing?'paused':'running';
    if(player)player.classList.toggle('is-playing',playing);
  }
  btn.addEventListener('click',function(){
    var isPlaying=btn.dataset.state==='playing';
    if(isPlaying){
      tv.pause();setPlaying(false);
    } else {
      tv.style.display='block';
      tv.style.opacity='0';
      tv.style.transition='opacity .8s ease';
      if(ph){ph.style.transition='opacity .6s ease';ph.style.opacity='0';}
      var p=tv.play();
      if(p){
        p.then(function(){
          tv.style.opacity='1';
          setPlaying(true);
          setTimeout(function(){if(ph)ph.style.display='none';},600);
        }).catch(function(){setPlaying(false);});
      } else {
        tv.style.opacity='1';
        setPlaying(true);
        if(ph)ph.style.display='none';
      }
    }
  });
  tv.addEventListener('click',function(){btn.click();});
  tv.addEventListener('ended',function(){
    setPlaying(false);
    tv.style.transition='opacity .5s ease';
    tv.style.opacity='0';
    setTimeout(function(){
      tv.style.display='none';
      if(ph){ph.style.display='';ph.style.opacity='0';
        requestAnimationFrame(function(){ph.style.transition='opacity .5s ease';ph.style.opacity='1';});
      }
    },500);
  });
}
/* ── PARALLAX ── */
function initParallax(){
  if(window.matchMedia('(prefers-reduced-motion:reduce)').matches)return;
  var items=[{s:'.hw-m1',r:.06},{s:'.hw-m2',r:.1},{s:'.hw-m3',r:.14},{s:'.hw-sun',r:.04},{s:'.hw-mist',r:.08}];
  var els=items.map(function(it){return{el:document.querySelector(it.s),r:it.r};});
  var tick=false;
  addEventListener('scroll',function(){
    if(!tick){requestAnimationFrame(function(){
      var y=scrollY;
      els.forEach(function(it){if(it.el)it.el.style.transform='translateY('+(y*it.r)+'px)';});
      tick=false;
    });tick=true;}
  },{passive:true});
}
/* ── MODALS ── */
function initModals(){
  function open(id){document.getElementById(id).classList.add('open');}
  function close(id){document.getElementById(id).classList.remove('open');}
  var pb=document.getElementById('priv-btn');
  var tb=document.getElementById('terms-btn');
  var cp=document.getElementById('close-priv');
  var ct=document.getElementById('close-terms');
  if(pb)pb.addEventListener('click',function(){open('priv-modal');});
  if(tb)tb.addEventListener('click',function(){open('terms-modal');});
  if(cp)cp.addEventListener('click',function(){close('priv-modal');});
  if(ct)ct.addEventListener('click',function(){close('terms-modal');});
  document.querySelectorAll('.mbg').forEach(function(m){
    m.addEventListener('click',function(e){if(e.target===m)m.classList.remove('open');});
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape')document.querySelectorAll('.mbg.open').forEach(function(m){m.classList.remove('open');});
  });
}

/* ── GALLERY CAROUSEL ── */
function initGallery(){
  var track=document.getElementById('gallery-track');
  var prev=document.getElementById('gal-prev');
  var next=document.getElementById('gal-next');
  var dotsWrap=document.getElementById('gallery-dots');
  if(!track||!dotsWrap)return;

  var slides=[].slice.call(track.querySelectorAll('.gallery-slide'));
  if(!slides.length)return;

  dotsWrap.innerHTML=slides.map(function(_,i){
    return '<button class="gallery-dot'+(i===0?' active':'')+'" data-idx="'+i+'" role="tab" aria-selected="'+(i===0?'true':'false')+'" aria-label="Go to image '+(i+1)+'"></button>';
  }).join('');

  var dots=[].slice.call(dotsWrap.querySelectorAll('.gallery-dot'));

  function slideWidth(){
    return slides[0].getBoundingClientRect().width + 8;
  }

  function activeIndex(){
    var w=slideWidth();
    return Math.max(0, Math.min(slides.length-1, Math.round(track.scrollLeft / w)));
  }

  function updateDots(){
    var idx=activeIndex();
    dots.forEach(function(dot,i){
      var on=i===idx;
      dot.classList.toggle('active',on);
      dot.setAttribute('aria-selected', String(on));
    });
  }

  function goTo(idx){
    idx=Math.max(0, Math.min(slides.length-1, idx));
    slides[idx].scrollIntoView({behavior:'smooth', inline:'start', block:'nearest'});
  }

  if(prev)prev.addEventListener('click',function(){goTo(activeIndex()-1);});
  if(next)next.addEventListener('click',function(){goTo(activeIndex()+1);});
  dots.forEach(function(dot){
    dot.addEventListener('click',function(){goTo(parseInt(dot.dataset.idx,10)||0);});
  });

  var raf;
  track.addEventListener('scroll',function(){
    cancelAnimationFrame(raf);
    raf=requestAnimationFrame(updateDots);
  },{passive:true});

  track.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'){e.preventDefault();goTo(activeIndex()+1);}
    if(e.key==='ArrowLeft'){e.preventDefault();goTo(activeIndex()-1);}
  });

  updateDots();
}

/* ── WEAPONS CAROUSEL ── */
function initWeapons(){
  var track=document.getElementById('weapons-track');
  var dots=document.querySelectorAll('.w-dot');
  var cards=document.querySelectorAll('.w-card');
  if(!track)return;
  var page=0;
  function getPerPage(){
    if(window.innerWidth<=400)return 1;
    if(window.innerWidth<=768)return 2;
    return 3;
  }
  function goTo(p){
    var perPage=getPerPage();
    var total=cards.length;
    var pages=Math.ceil(total/perPage);
    p=Math.max(0,Math.min(p,pages-1));
    page=p;
    track.style.transform='translateX(-'+(p*(100/perPage)*perPage)+'%)';
    dots.forEach(function(d,i){
      d.classList.toggle('on',i===p);
      d.setAttribute('aria-selected',String(i===p));
    });
    cards.forEach(function(c,i){
      c.classList.toggle('active',i>=p*perPage&&i<(p+1)*perPage);
    });
  }
  var wp=document.getElementById('w-prev');
  var wn=document.getElementById('w-next');
  if(wp)wp.addEventListener('click',function(){goTo(page-1);});
  if(wn)wn.addEventListener('click',function(){goTo(page+1);});
  dots.forEach(function(d){
    d.addEventListener('click',function(){goTo(parseInt(d.dataset.page));});
  });
  cards.forEach(function(c){
    c.addEventListener('click',function(){
      cards.forEach(function(x){x.classList.remove('active');});
      c.classList.add('active');
    });
  });
  var sx=0;
  track.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',function(e){
    var dx=e.changedTouches[0].clientX-sx;
    if(Math.abs(dx)>40)goTo(dx<0?page+1:page-1);
  },{passive:true});
  window.addEventListener('resize',function(){goTo(page);});
  goTo(0);
}

/* ── WEAPON VIDEO MODAL ── */
function initWeaponVideoModal(){
  var modal=document.getElementById('wpn-modal');
  var modalVideo=document.getElementById('wpn-modal-video');
  var modalName=document.getElementById('wpn-modal-name');
  var modalDesc=document.getElementById('wpn-modal-desc');
  var modalClose=document.getElementById('wpn-modal-close');
  if(!modal||!modalVideo||!modalName||!modalDesc)return;

  function openWeapon(card,btn){
    if(!card)return;
    var src=card.getAttribute('data-video');
    if(!src)return;
    var nameKey=btn&&btn.getAttribute('data-wpn-key');
    var descKey=btn&&btn.getAttribute('data-wpn-desc-key');
    var fallbackName=btn&&btn.getAttribute('data-wpn-name')||'';
    var fallbackDesc=btn&&btn.getAttribute('data-wpn-desc')||'';
    modalName.textContent=(nameKey&&T[lang]&&T[lang][nameKey])||fallbackName;
    modalDesc.textContent=(descKey&&T[lang]&&T[lang][descKey])||fallbackDesc;
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
    modalVideo.src=src;
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    try{ modalVideo.currentTime=0; }catch(e){}
    modalVideo.play().catch(function(){});
  }

  function closeWeapon(){
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    modalVideo.pause();
    modalVideo.removeAttribute('src');
    modalVideo.load();
  }

  document.querySelectorAll('.w-watch-btn').forEach(function(btn){
    btn.addEventListener('click',function(e){
      e.preventDefault();
      e.stopPropagation();
      openWeapon(btn.closest('.w-card'),btn);
    });
  });

  modalClose.addEventListener('click',closeWeapon);
  modal.addEventListener('click',function(e){
    if(e.target===modal)closeWeapon();
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&modal.classList.contains('open'))closeWeapon();
  });
}

/* ── SYSREQ TOGGLE ── */
function initSysreq(){
  var btnMin=document.getElementById('btn-min');
  var btnRec=document.getElementById('btn-rec');
  var pMin=document.getElementById('panel-min');
  var pRec=document.getElementById('panel-rec');
  if(!btnMin)return;
  function activate(panel,btn,other,otherBtn){
    panel.classList.add('active');other.classList.remove('active');
    btn.classList.add('active');btn.setAttribute('aria-pressed','true');
    otherBtn.classList.remove('active');otherBtn.setAttribute('aria-pressed','false');
    panel.querySelectorAll('.rv:not(.show)').forEach(function(el){
      setTimeout(function(){el.classList.add('show');},30);
    });
  }
  btnMin.addEventListener('click',function(){activate(pMin,btnMin,pRec,btnRec);});
  btnRec.addEventListener('click',function(){activate(pRec,btnRec,pMin,btnMin);});
}
/* ── INIT ── */
function init(){
  setLang(detectLang());
  loadAssets();
  initHeroVideo();
  spawnEmbers();
  initCursor();
  initReveal();
  initNav();
  initSticky();
  initFaq();
  initTrailer();
  initParallax();
  initModals();
  initGallery();
  initWeapons();
  initWeaponVideoModal();
  initSysreq();
  requestAnimationFrame(function(){
    document.querySelectorAll('.hero .rv').forEach(function(el){el.classList.add('show');});
  });
}
document.readyState==='loading'
  ?document.addEventListener('DOMContentLoaded',init)
  :init();
})();
