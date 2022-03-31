SELECT
  cancoes_nome AS nome_musica,
  CASE
    WHEN cancoes_nome LIKE '%Streets%' THEN REPLACE(cancoes_nome, 'Streets', 'Code Review')
    WHEN cancoes_nome LIKE '%Her Own%' THEN REPLACE(cancoes_nome, 'Her Own', 'Trybe')
    WHEN cancoes_nome LIKE '%Inner Fire%' THEN REPLACE(cancoes_nome, 'Inner Fire', 'Project')
    WHEN cancoes_nome LIKE '%Silly%' THEN REPLACE(cancoes_nome, 'Silly', 'Nice')
    WHEN cancoes_nome LIKE '%Circus%' THEN REPLACE(cancoes_nome, 'Circus', 'Pull Request')
  END AS novo_nome
FROM SpotifyClone.Cancoes
HAVING novo_nome IS NOT NULL
ORDER BY nome_musica;
