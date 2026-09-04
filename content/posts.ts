export type PostLang = "EN" | "PT";

export interface Post {
  slug?: string;
  date: string;
  lang: PostLang;
  title: string;
  dek: string;
  body?: string[];
}

export const posts: Post[] = [
  {
    slug: "walk-forward-validation",
    date: "2026 · Jun",
    lang: "EN",
    title: "Walk-forward validation, or why your backtest is lying to you",
    dek: "Why standard cross-validation leaks time, and what the NeuraTrade methodology does about it.",
    body: [
      "Most backtests fail for a boring reason: the validation split doesn't respect time. A random k-fold shuffle lets a model trained on next week peek at last week's price move — and it will happily learn to \"predict\" it.",
      "For NeuraTrade, that meant rebuilding the split around a strict walk-forward scheme: train on a rolling window, test on the period immediately after it, then slide forward. No fold ever sees data from its own future.",
      "The harder part wasn't the split logic — it was proving the leakage was actually gone. That took 32 tests and 18 logged decision records, each one tying a modeling choice back to why it doesn't reintroduce foresight.",
      "The result holds up under scrutiny, which is the only bar that matters when the thing being validated touches real capital.",
    ],
  },
  {
    slug: "observers-olha-o-pesado",
    date: "2026 · Feb",
    lang: "PT",
    title: "Observers em vez de if/else: o núcleo do Olha o Pesado",
    dek: "Como sinais tipados (Frame/Control/Result) deixam o robô extensível sem reescrever o núcleo.",
    body: [
      "Robôs autônomos têm um problema estrutural: visão, controle e atuação mudam em ritmos diferentes, mas costumam ser escritos como se fossem uma única cadeia de decisão. O resultado de sempre é um bloco de if/else que cresce a cada novo comportamento, até que ninguém confia em mexer nele sem quebrar algo que já funcionava.",
      "No Olha o Pesado, resolvemos isso separando o núcleo em três sinais tipados — Frame, Control e Result — que circulam por um único backbone de eventos. O módulo de visão publica um Frame quando processa uma imagem; ele não sabe, e não precisa saber, quem está ouvindo. O controle assina os Frames que importam e publica Control quando decide uma ação. O resultado da execução vira um Result, consumido por quem estiver interessado — um logger, um monitor de segurança, o que for.",
      "Na prática, isso significa que adicionar um comportamento novo — por exemplo, um freio de emergência que reage a um Frame específico — é escrever um observer novo, não editar o laço principal. O núcleo nunca precisa saber que esse observer existe. Testamos isso adicionando três comportamentos ao longo do projeto sem tocar no código de visão ou controle já validado.",
      "É o mesmo instinto por trás do trabalho com finanças: isolar as partes difíceis para que possam ser testadas e trocadas sem arrastar o resto do sistema junto. Arquitetura como parte do resultado, não só código para fazer o robô andar — trabalho com João Victor e Umberto.",
    ],
  },
  {
    slug: "decision-records",
    date: "2025 · Oct",
    lang: "EN",
    title: 'Decision records: writing down the "why," not just the "what"',
    dek: "A lightweight format for logging non-obvious calls, and why it paid off on NeuraTrade.",
    body: [
      "Six months after shipping something, nobody remembers why a threshold was set to 0.35 instead of 0.5, or why a model architecture that looked reasonable got dropped. Git history shows what changed; it rarely shows what was tried and rejected, or the reasoning that made one option win over another.",
      "The fix doesn't need to be heavyweight. On NeuraTrade, every non-obvious call gets a short decision record: the context that forced the decision, the options actually considered, which one was picked, and why. Rejections are logged with the same care as the thing that shipped — when a Transformer architecture and Optuna-based hyperparameter search were tried and dropped, both got a record explaining exactly what went wrong and what evidence supported walking away.",
      "That discipline paid off directly. Eighteen decision records accumulated over the project, and more than once a question that would normally trigger a re-investigation — \"why not just use a Transformer here?\" — was answered by pointing at the record instead of re-running the experiment. One record even caught an inconsistency between two earlier decisions before it became a bug.",
      "The format scales down fine to solo work. Writing four sentences when a decision is fresh is cheaper than reconstructing the reasoning from memory later — and the record outlives whoever wrote it.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
