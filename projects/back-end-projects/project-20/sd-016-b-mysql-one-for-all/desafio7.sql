SELECT
  art.artista_nome AS artista,
  alb.album_nome AS album,
  COUNT(rel.Usuarios_usuario_id) AS seguidores
FROM SpotifyClone.Artistas AS art
INNER JOIN SpotifyClone.Albuns AS alb
  ON alb.Artistas_artista_id = art.artista_id
INNER JOIN SpotifyClone.Relacao_artistas_seguidos AS rel
  ON rel.Artistas_artista_id = art.artista_id
GROUP BY art.artista_nome, alb.album_nome
ORDER BY seguidores DESC, artista, album;
