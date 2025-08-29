<?php
require __DIR__ . '/../modelo/db.php'; // Subir un nivel y entrar a modelo

header('Content-Type: application/json; charset=utf-8');

try {
    $pdo = db();
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    // Orden
$orden = $pdo->query("
    SELECT
        id,
        TRIM(
            REPLACE(
                REPLACE(
                    nombre,
                    '<br>', ' '
                ),
                '<BR>', ' '
            )
        ) AS nombre,
        documento, 
        fecha, 
        orden, 
        activo, 
        ano, 
        documento_word
    FROM orden
    WHERE ano >= 2017
    ORDER BY id ASC
")->fetchAll();


    // Acuerdos
    $acuerdos = $pdo->query("
        SELECT id, nombre, documento, fecha, orden, activo, carpeta, sentencia, documento_word, sesion, sentenciado
        FROM acuerdos
       WHERE carpeta NOT IN (0, 2000, 2031)
        ORDER BY id ASC
    ")->fetchAll();

    // Actas
  $actas = $pdo->query("
    SELECT 
        id, 
        nombre, 
        documento, 
        fecha, 
        orden, 
        activo, 
        carpeta
    FROM actas
    WHERE carpeta >= 2017 
      AND carpeta NOT IN (22222, 222222)
    ORDER BY id ASC
")->fetchAll();


    // Respuesta
    echo json_encode([
        'ok' => true,
        'orden' => $orden,
        'acuerdos' => $acuerdos,
        'actas' => $actas
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
