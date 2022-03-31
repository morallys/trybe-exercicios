SELECT
  COUNT(c.cancoes_id) AS 'cancoes',
  COUNT(DISTINCT art.artista_id) AS 'artistas',
  COUNT(DISTINCT alb.album_id) AS 'albuns'
FROM SpotifyClone.`Artistas` AS art
INNER JOIN SpotifyClone.`Albuns` AS alb ON alb.Artistas_artista_id = art.artista_id
INNER JOIN SpotifyClone.`Cancoes` AS c ON c.Albuns_album_id = alb.album_id;
