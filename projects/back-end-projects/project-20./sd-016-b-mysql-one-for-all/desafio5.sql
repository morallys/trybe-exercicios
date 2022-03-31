SELECT
  c.cancoes_nome AS cancao,
  COUNT(h.Cancoes_cancoes_id) AS reproducoes
FROM SpotifyClone.Cancoes AS c
INNER JOIN SpotifyClone.Historico_reproducao AS h ON h.Cancoes_cancoes_id = c.cancoes_id
GROUP BY c.cancoes_nome
ORDER BY reproducoes DESC, cancao
LIMIT 2;
