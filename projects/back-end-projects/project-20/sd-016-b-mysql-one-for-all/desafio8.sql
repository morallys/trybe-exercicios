SELECT
  art.artista_nome AS artista,
  alb.album_nome AS album
FROM SpotifyClone.Artistas AS art
INNER JOIN SpotifyClone.Albuns AS alb
  ON alb.Artistas_artista_id = art.artista_id
WHERE art.artista_nome = 'Walter Phoenix';
