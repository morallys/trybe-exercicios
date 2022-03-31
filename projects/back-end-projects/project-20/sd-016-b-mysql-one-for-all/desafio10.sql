SELECT
  c.cancoes_nome AS nome,
  COUNT(hist.Usuarios_usuario_id) AS reproducoes
FROM SpotifyClone.Cancoes AS c
INNER JOIN SpotifyClone.Historico_reproducao AS hist ON hist.Cancoes_cancoes_id = c.cancoes_id
INNER JOIN SpotifyClone.Usuarios AS u ON u.usuario_id = hist.Usuarios_usuario_id
INNER JOIN SpotifyClone.Planos AS plan ON plan.plano_id = u.Planos_plano_id
WHERE plan.plano_nome IN ('gratuito', 'pessoal')
GROUP BY c.cancoes_nome
ORDER BY c.cancoes_nome;
