import { Image, StyleSheet, Text, View } from "react-native";

export default function Alumno({ nombre, matricula, foto, materias }) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: foto,
        }}
      />
      <Text style={styles.name}>{nombre}</Text>
      <Text>Matrícula: {matricula}</Text>
      <Text style={styles.sectionTitle}>Materias:</Text>
      {materias.map((materia) => (
        <Text key={`${materia.nombre}-${materia.semestre}`}>
          {materia.nombre} - Semestre {materia.semestre}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  name: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    marginTop: 12,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
