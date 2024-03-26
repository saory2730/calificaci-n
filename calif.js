calificacion=0, totalAsistencias=0, asistenciasRequeridas=0.8, calculoasistencias=0

calificacion= prompt("Ingrese su calificación")
totalAsistencias= prompt("Ingrese cuantas asistencias tiene")

calculoasistencias=(totalAsistencias*asistenciasRequeridas)

if ((calificacion>= 3.0) && (calculoasistencias>= asistenciasRequeridas)) {
    alert("Aprobo")
} else {
    alert("Reprobo")

}
