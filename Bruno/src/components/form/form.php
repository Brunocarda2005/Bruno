<?php
   
   //vars
   $nombre =  $_POST['nombre'];
   $email = $_POST['email'];
   $project = $_POST['project'];
   $mensaje = $_POST['mensaje'];
   
   //data del correo
   $destinatario = 'brunocardamone49@gmail.com';
   $asunto = 'Trabajo';
   $carta = "Mi nombre es :  $nombre .\n Mi mail es : $apellido .\n El proyecto es : $project \n Mensaje : $mensaje \n";    
   @mail( $destinatario , $asunto , $carta );
   
?>