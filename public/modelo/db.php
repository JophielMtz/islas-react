<?php
function db() {
    $host = "72.167.44.61";
    $dbname = "durangofinal_iepcdurango";
    $username = "durangofinal_pagina";
    $password = "Unipolidg0100"; 
    $port = 3306;

    try {
        $conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        error_log('Error de conexión: ' . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            "ok" => false,
            "error" => $e->getMessage() // Si no quieres mostrar el error exacto, cámbialo por un texto genérico
        ]);
        exit;
    }
}

