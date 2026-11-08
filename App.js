import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Alumno from "./Alumno";

const alumnos = [
  {
    nombre: "Carlos Adrian Barragan Soriano",
    matricula: "1920904",
    foto: "https://www.shutterstock.com/image-photo/close-face-portrait-serious-calm-260nw-2603087229.jpg",
    materias: [
      { nombre: "Matemáticas", semestre: 1 },
      { nombre: "Programación", semestre: 1 },
      { nombre: "Física", semestre: 2 },
    ],
  },
  {
    nombre: "Chuchito Mangano Atilano",
    matricula: "2012520",
    foto: "https://i.ytimg.com/vi/5AEcBqR_ufs/hq720.jpg?sqp=-oaymwExCK4FEIIDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYSSBRKHIwDw==&rs=AOn4CLBb4HRw2MqG9FC8x2N2VqkKS9sUWA",
    materias: [
      { nombre: "Bases de datos", semestre: 3 },
      { nombre: "Redes", semestre: 3 },
      { nombre: "Desarrollo web", semestre: 4 },
    ],
  },
  {
    nombre: "Brayan Daniel Yatusabe",
    matricula: "4658799",
    foto: "https://img.magnific.com/foto-gratis/retrato-estudiante-masculino-libros_23-2148882426.jpg?semt=ais_hybrid&w=740&q=80",
    materias: [
      { nombre: "Estructuras de datos", semestre: 2 },
      { nombre: "Sistemas operativos", semestre: 3 },
      { nombre: "Ingeniería de software", semestre: 4 },
    ],
  },
];

const pestañas = ["Inicio", "Alumnos", "Materias"];

export default function App() {
  return (
    <SafeAreaProvider>
      <Aplicacion />
    </SafeAreaProvider>
  );
}

function Aplicacion() {
  const [pestañaActiva, setPestañaActiva] = useState("Inicio");
  const materias = alumnos.flatMap((alumno) =>
    alumno.materias.map((materia) => ({
      ...materia,
      alumno: alumno.nombre,
    })),
  );

  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {pestañaActiva === "Inicio" && (
            <View>
              <Text style={styles.title}>Gestión escolar</Text>
              <Text style={styles.subtitle}>Bienvenido</Text>
              <Text style={styles.description}>
                Consulta la información de alumnos y las materias que cursan.
              </Text>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryNumber}>{alumnos.length}</Text>
                <Text style={styles.summaryLabel}>Alumnos registrados</Text>
              </View>
              <View style={styles.summaryCard}>
                <Text style={styles.summaryNumber}>{materias.length}</Text>
                <Text style={styles.summaryLabel}>Inscripciones a materias</Text>
              </View>
            </View>
          )}

          {pestañaActiva === "Alumnos" && (
            <View>
              <Text style={styles.title}>Alumnos</Text>
              {alumnos.map((alumno) => (
                <Alumno key={alumno.matricula} {...alumno} />
              ))}
            </View>
          )}

          {pestañaActiva === "Materias" && (
            <View>
              <Text style={styles.title}>Materias</Text>
              {materias.map((materia, index) => (
                <View
                  key={`${materia.nombre}-${materia.semestre}-${materia.alumno}-${index}`}
                  style={styles.subjectCard}
                >
                  <Text style={styles.subjectName}>{materia.nombre}</Text>
                  <Text>Semestre {materia.semestre}</Text>
                  <Text style={styles.enrolledStudent}>{materia.alumno}</Text>
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        <View style={styles.tabBar}>
          {pestañas.map((pestaña) => {
            const activa = pestañaActiva === pestaña;
            return (
              <Pressable
                key={pestaña}
                accessibilityRole="tab"
                accessibilityState={{ selected: activa }}
                onPress={() => setPestañaActiva(pestaña)}
                style={[styles.tab, activa && styles.activeTab]}
              >
                <Text style={[styles.tabText, activa && styles.activeTabText]}>
                  {pestaña}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#DCCDE8",
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
    backgroundColor: "#DCCDE8",
  },
  title: {
    marginBottom: 16,
    color: "#24152F",
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 8,
    color: "#24152F",
    fontSize: 20,
    fontWeight: "600",
  },
  description: {
    marginBottom: 20,
    color: "#4D4057",
    fontSize: 16,
  },
  summaryCard: {
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  summaryNumber: {
    color: "#6F3C8D",
    fontSize: 28,
    fontWeight: "bold",
  },
  summaryLabel: {
    marginTop: 4,
    color: "#4D4057",
    fontSize: 16,
  },
  subjectCard: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  subjectName: {
    marginBottom: 4,
    color: "#24152F",
    fontSize: 18,
    fontWeight: "bold",
  },
  enrolledStudent: {
    marginTop: 8,
    color: "#4D4057",
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#B7A7C2",
    backgroundColor: "#fff",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
  },
  activeTab: {
    borderTopWidth: 3,
    borderTopColor: "#6F3C8D",
    paddingTop: 11,
  },
  tabText: {
    color: "#6B6170",
    fontSize: 14,
    fontWeight: "600",
  },
  activeTabText: {
    color: "#6F3C8D",
  },
});
