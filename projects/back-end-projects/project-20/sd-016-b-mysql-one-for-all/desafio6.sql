SELECT
  MIN(p.plano_valor) AS faturamento_minimo,
  MAX(p.plano_valor) AS faturamento_maximo,
  ROUND(AVG(p.plano_valor), 2) AS faturamento_medio,
  ROUND(SUM(p.plano_valor), 2) AS faturamento_total
FROM SpotifyClone.Planos AS p
INNER JOIN SpotifyClone.Usuarios AS u ON u.Planos_plano_id = p.plano_id;
