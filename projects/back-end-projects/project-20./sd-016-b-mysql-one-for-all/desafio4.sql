SELECT
  u.usuario_nome AS usuario,
  IF(MAX(YEAR(h.data_reproducao)) >= 2021, 'Usuário ativo', 'Usuário inativo') AS condicao_usuario
FROM SpotifyClone.Usuarios AS u
INNER JOIN SpotifyClone.Historico_reproducao AS h ON h.Usuarios_usuario_id = u.usuario_id
GROUP BY u.usuario_nome
ORDER BY u.usuario_nome;
