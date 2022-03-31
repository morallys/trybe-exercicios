SELECT
  u.usuario_nome AS usuario,
  COUNT(Usuarios_usuario_id) AS qtde_musicas_ouvidas,
  ROUND(SUM(c.duracao_musica)/60, 2) AS total_minutos
FROM SpotifyClone.Usuarios AS u
INNER JOIN SpotifyClone.Historico_reproducao AS hist ON hist.Usuarios_usuario_id = u.usuario_id
INNER JOIN SpotifyClone.Cancoes AS c ON c.cancoes_id = hist.Cancoes_cancoes_id
GROUP BY u.usuario_id
ORDER BY u.usuario_nome;