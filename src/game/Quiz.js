// AI Quiz Data & Logic
import iconAiBasic from '../assets/icon_ai_basic.png';
import iconGenAi from '../assets/icon_gen_ai.png';
import iconPrompt from '../assets/icon_prompt.png';
import iconAiUse from '../assets/icon_ai_use.png';

export const CATEGORIES = [
  { id: 'basics', name: 'AI基礎', icon: '🤖', iconImg: iconAiBasic, color: '#7c6ef0' },
  { id: 'genai', name: '生成AI', icon: '✨', iconImg: iconGenAi, color: '#e06090' },
  { id: 'prompt', name: 'プロンプト術', icon: '💬', iconImg: iconPrompt, color: '#50b0a0' },
  { id: 'usage', name: 'AI活用術', icon: '🚀', iconImg: iconAiUse, color: '#e0a030' },
];

export const QUESTIONS = {
  basics: [
    {
      q: '「AI」は何の略でしょう？',
      choices: ['Artificial Intelligence', 'Auto Information', 'Advanced Internet', 'Applied Idea'],
      answer: 0,
      explanation: 'AIは「Artificial Intelligence（人工知能）」の略です。人間のように考えたり学んだりするコンピュータの技術のことです🧠',
    },
    {
      q: '「機械学習」とはどんな技術？',
      choices: [
        'コンピュータがデータから学ぶ技術',
        '機械を自動で修理する技術',
        'ロボットを歩かせる技術',
        'パソコンを速くする技術',
      ],
      answer: 0,
      explanation: '機械学習は、コンピュータがたくさんのデータを見てパターンを見つけ、自分で判断できるようになる技術です📊',
    },
    {
      q: 'ディープラーニングの「ディープ」とは？',
      choices: [
        '層が深いニューラルネットワーク',
        '深海で動くAI',
        '深い考えをするAI',
        '深夜に学習するAI',
      ],
      answer: 0,
      explanation: '「deep（深い）」は、人間の脳を模したネットワーク（ニューラルネットワーク）の層が何層も深く重なっていることを表します🧬',
    },
    {
      q: 'チャットボットとは何でしょう？',
      choices: [
        '自動で会話するプログラム',
        'チャットが好きなロボット',
        'AIが製造した機械',
        '通話アプリの一種',
      ],
      answer: 0,
      explanation: 'チャットボットは、人間の代わりにテキストや音声で自動応答するプログラムです。カスタマーサポートなどでよく使われています💬',
    },
    {
      q: '画像認識AIの身近な活用例は？',
      choices: [
        'スマホの顔認証',
        '電卓アプリ',
        'メモ帳',
        '目覚まし時計',
      ],
      answer: 0,
      explanation: 'スマホの顔認証（Face ID等）は画像認識AIの代表例です！他にも自動運転やレジの商品認識などに使われています📱',
    },
  ],
  genai: [
    {
      q: 'ChatGPTを開発した会社は？',
      choices: ['OpenAI', 'Google', 'Apple', 'Amazon'],
      answer: 0,
      explanation: 'ChatGPTはOpenAI社が2022年に公開した対話型AIです。世界中で話題になり、AI時代の幕開けとも言われています🌟',
    },
    {
      q: '「プロンプト」とは何のこと？',
      choices: [
        'AIへの指示・質問文',
        'AIのプログラム言語',
        'AIの電源ボタン',
        'AIの記憶容量',
      ],
      answer: 0,
      explanation: 'プロンプトは、AIに何をしてほしいか伝える「お願い文」のことです。上手な指示を出すとAIからより良い回答が返ってきます✍️',
    },
    {
      q: '画像を自動生成できるAIは？',
      choices: ['Midjourney', 'Excel', 'WordPress', 'LINE'],
      answer: 0,
      explanation: 'MidjourneyやDALL-E、Stable Diffusionなどが画像生成AIとして有名です。テキストから絵を描いてくれます🎨',
    },
    {
      q: '「ハルシネーション」とは？',
      choices: [
        'AIが事実でない情報を作ること',
        'AIが幻覚を見ること',
        'AIが眠ること',
        'AIが怒ること',
      ],
      answer: 0,
      explanation: 'ハルシネーション（幻覚）とは、AIがもっともらしいけど実は間違った情報を自信満々に答えてしまう現象です⚠️ 必ずファクトチェックしましょう！',
    },
    {
      q: 'LLMの正式名称は？',
      choices: [
        'Large Language Model',
        'Long Learning Machine',
        'Light Logic Memory',
        'Link Library Manager',
      ],
      answer: 0,
      explanation: 'LLM = Large Language Model（大規模言語モデル）。膨大なテキストデータで学習し、自然な文章を生成できるAIのことです📚',
    },
  ],
  prompt: [
    {
      q: '良いプロンプトに一番大切なのは？',
      choices: [
        '具体的で明確な指示',
        'できるだけ短い文',
        '敬語を使うこと',
        '英語で書くこと',
      ],
      answer: 0,
      explanation: 'AIは具体的な指示ほど正確に答えられます。「何を・どんな形式で・誰向けに」を明確にするのがコツです🎯',
    },
    {
      q: '「ロール設定」とはどんなテクニック？',
      choices: [
        'AIに役割を与えること',
        'AIにパスワードを設定すること',
        'AIの声を変えること',
        'AIの画面を回転させること',
      ],
      answer: 0,
      explanation: '「あなたは料理研究家です」のようにAIに役割（ロール）を与えると、その専門家らしい回答が得やすくなります👩‍🍳',
    },
    {
      q: 'Few-shotプロンプトとは？',
      choices: [
        '例を示して指示する方法',
        '少ない文字で指示する方法',
        '写真で指示する方法',
        '何回も繰り返す方法',
      ],
      answer: 0,
      explanation: '「例：入力→出力」のように具体例を数個（few）見せてから指示すると、AIが意図を理解しやすくなります📝',
    },
    {
      q: '出力形式を指定するメリットは？',
      choices: [
        '欲しい形で回答が得られる',
        'AIが速くなる',
        'AIが賢くなる',
        '料金が安くなる',
      ],
      answer: 0,
      explanation: '「箇条書きで」「表形式で」「〇文字以内で」と指定すると、すぐ使える形で回答がもらえて効率的です📋',
    },
    {
      q: 'プロンプトを改善する方法は？',
      choices: [
        '結果を見て指示を修正する',
        'AIを再インストールする',
        'パソコンを買い替える',
        '何もせず待つ',
      ],
      answer: 0,
      explanation: 'プロンプトは一発で完璧にならなくてOK！結果を見て「もっと詳しく」「別の切り口で」と修正を重ねるのが上達のコツです🔄',
    },
  ],
  usage: [
    {
      q: 'ママのAI活用で人気なのは？',
      choices: [
        '献立作成・レシピ提案',
        'ゲーム開発',
        'ロケット設計',
        '株のデイトレード',
      ],
      answer: 0,
      explanation: '「冷蔵庫の残り物で作れるレシピ教えて」など、毎日の食事づくりをAIにサポートしてもらうママが増えています🍳',
    },
    {
      q: 'AIで時短できることは？',
      choices: [
        'メール作成・文章要約',
        '洗濯物を畳む',
        'お風呂を沸かす',
        '布団を干す',
      ],
      answer: 0,
      explanation: 'メールの下書き、長い文章の要約、翻訳など、テキスト作業はAIの得意分野！空いた時間を家族との時間に使えます⏰',
    },
    {
      q: 'AIを安全に使うコツは？',
      choices: [
        '個人情報を入力しない',
        'Wi-Fiを切って使う',
        '夜だけ使う',
        '毎日パスワードを変える',
      ],
      answer: 0,
      explanation: 'AIチャットに本名・住所・クレジットカード番号などの個人情報を入れないようにしましょう。データが学習に使われる可能性があります🔒',
    },
    {
      q: 'AI活用で特に注意すべきことは？',
      choices: [
        '情報の正確性を確認する',
        'AIの言うことを100%信じる',
        'なるべく多く質問する',
        '英語だけで使う',
      ],
      answer: 0,
      explanation: 'AIは間違えることもあります（ハルシネーション）。大事なことは必ず自分でも調べて確認するクセをつけましょう✅',
    },
    {
      q: 'AIにできないことは？',
      choices: [
        '人間のように感情を持つこと',
        '文章を書くこと',
        '翻訳すること',
        '画像を認識すること',
      ],
      answer: 0,
      explanation: 'AIは膨大なデータ処理が得意ですが、本当の意味での感情や共感は持ちません。人間だからこそできる温かさがあります💕',
    },
  ],
};

export class Quiz {
  constructor() {
    this.currentCategory = null;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.results = [];
  }

  startQuest(categoryId) {
    this.currentCategory = categoryId;
    const allQ = [...QUESTIONS[categoryId]];
    // Shuffle and pick 3
    for (let i = allQ.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQ[i], allQ[j]] = [allQ[j], allQ[i]];
    }
    this.currentQuestions = allQ.slice(0, 3);
    // Shuffle choices for each question
    this.currentQuestions = this.currentQuestions.map(q => {
      const indices = q.choices.map((_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      return {
        ...q,
        choices: indices.map(i => q.choices[i]),
        answer: indices.indexOf(q.answer),
      };
    });
    this.currentIndex = 0;
    this.results = [];
  }

  getCurrentQuestion() {
    return this.currentQuestions[this.currentIndex];
  }

  answerQuestion(choiceIndex) {
    const q = this.currentQuestions[this.currentIndex];
    const correct = choiceIndex === q.answer;
    this.results.push({ correct, question: q });
    this.currentIndex++;
    return { correct, explanation: q.explanation };
  }

  isFinished() {
    return this.currentIndex >= this.currentQuestions.length;
  }

  getResults() {
    const correctCount = this.results.filter(r => r.correct).length;
    return {
      total: this.results.length,
      correct: correctCount,
      results: this.results,
      category: this.currentCategory,
    };
  }
}
