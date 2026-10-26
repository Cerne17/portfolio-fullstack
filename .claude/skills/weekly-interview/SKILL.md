---
name: weekly-interview
description: Entrevista semanal com o Miguel sobre o que ele fez na semana, para decidir se vira post, entrada no /now, atualização de projeto, ideia no backlog ou nada. Use quando o usuário pedir "entrevista semanal", "o que posto essa semana" ou quando a tarefa agendada de sexta disparar.
---

# Entrevista semanal de conteúdo — cerne.pro

Objetivo: em ~10 minutos, descobrir se a semana rendeu algo publicável e deixar o próximo passo pronto (rascunho, linha do /now, card de projeto), sem publicar nada sem um "sim" explícito.

Ferramentas: MCP `cerne-blog` (registrado em `.mcp.json` deste repo). Conduza tudo em português.

## 1. Juntar contexto (antes de perguntar qualquer coisa)

1. `weekly_context` — semana ISO, commits do portfolio, últimas entradas do journal, ideias abertas no backlog.
2. `content_status` — último post publicado, rascunhos parados, última entrada do /now, se a `main` local está atrás da origin (se estiver, rode `sync`).
3. Atividade no GitHub dos últimos 7 dias:
   ```bash
   gh api 'users/Cerne17/events?per_page=100' --jq '[.[] | select(.created_at > (now - 7*86400 | todate)) | {type, repo: .repo.name, created_at, msgs: [.payload.commits[]?.message]}]'
   ```
   Agrupe por repositório. Repos privados podem não aparecer — pergunte.

Abra com um resumo de 3–5 linhas do que você viu (repos mexidos, commits relevantes, ideias pendentes no backlog, há quantos dias saiu o último post). Nada de despejar JSON.

## 2. Entrevistar

Uma pergunta por vez, no máximo ~8. Siga o fio das respostas; não leia um questionário. Cubra:

- **O que você fez?** Trabalho (JGP Crédito, sem expor nada confidencial), projetos pessoais, estudo, faculdade.
- **O que foi difícil ou surpreendente?** Bug que custou horas, hipótese que caiu, número que mudou.
- **Que decisão você tomou e por quê?** Trade-offs, alternativas rejeitadas com evidência (o estilo dos ADRs do NeuraTrade).
- **O que você sabe agora que não sabia segunda-feira?** Isso é o que vira post.
- **O foco do mês mudou?** (para o /now)
- **Algum marco de projeto?** Deploy, release, métrica nova, demo no ar.
- Retome ideias do backlog com status `open`: amadureceram?

Quando uma resposta for vaga ("mexi no pipeline"), peça o concreto: qual número, qual decisão, qual erro.

## 3. Decidir

Classifique cada coisa da semana e proponha UMA recomendação principal:

| Destino | Quando |
|---|---|
| **Post** | Aprendizado não óbvio + algo concreto para mostrar (resultado, código, equação, decisão com trade-off), dentro dos pilares do site: data · finance, system design, full-stack, algorithms. |
| **/now** | O foco do mês mudou, ou o mês atual ainda não tem entrada. Uma linha, EN + PT dizendo a mesma coisa. |
| **Projeto** | Marco num projeto que já tem card (ou um projeto novo pronto para ter um). |
| **Backlog** | Boa ideia, mas ainda imatura ou sem resultado. Registre com notas suficientes para retomar daqui a semanas. |
| **Nada** | Semana sem material é normal. Diga isso sem forçar. |

Mostre a recomendação e espere a resposta do Miguel antes de escrever qualquer arquivo.

## 4. Executar (só o que ele aprovou)

- **Post**: leia um post publicado (`get_content`) para pegar o tom. Escreva com `create_post` — sempre rascunho. Use só fatos e números que o Miguel disse; onde faltar, deixe `TODO:` explícito no corpo em vez de inventar. Escolha `lang` com ele. Depois, `backlog_upsert` com `status: "drafted"` e o `slug`.
- **/now**: `upsert_now_entry` com EN e PT.
- **Projeto**: `upsert_project` com só os campos que mudaram.
- **Backlog**: `backlog_upsert`.
- **Publicar**: só se ele pedir. `set_post_draft` (se for post) → `ship` com `confirm: false` → mostre arquivos e diff → `ship` com `confirm: true` somente após um "sim" explícito.

## 5. Registrar

Sempre termine com `journal_write` (mesmo em semana "nada"):

```markdown
# <semana ISO> — <data>

## O que rolou
- …

## Destaques / aprendizados
- …

## Decisão
<post | now | projeto | backlog | nada> — <por quê>

## Ações
- <arquivo criado / ideia registrada / nada>

## Para a próxima semana
- <pendências, rascunhos para terminar>
```

Feche com 2–3 linhas: o que ficou pronto e o que depende dele.
