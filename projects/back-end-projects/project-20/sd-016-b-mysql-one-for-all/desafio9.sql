SELECT
  COUNT(*) AS quantidade_musicas_no_historico
FROM SpotifyClone.Historico_reproducao AS hist
INNER JOIN SpotifyClone.Usuarios AS u ON u.usuario_id = hist.Usuarios_usuario_id
WHERE u.usuario_nome = 'Bill';
