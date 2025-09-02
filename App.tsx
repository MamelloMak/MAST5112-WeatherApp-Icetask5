import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Forecast {
  day: string;
  temp: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function App() {
  const city: string = "Johannesburg";
  const date: string = new Date().toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const time: string = new Date().toLocaleTimeString("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Current weather (dummy data)
  const currentWeather = {
    temp: "23°C",
    condition: "Sunny",
    description: "Clear skies with a light breeze",
    icon: "sunny-outline" as keyof typeof Ionicons.glyphMap,
    mood: "sunny",
  };

  // 5-day forecast (dummy data)
  const forecast: Forecast[] = [
    { day: "Tue", temp: "25°C", icon: "sunny-outline" },
    { day: "Wed", temp: "20°C", icon: "cloud-outline" },
    { day: "Thu", temp: "18°C", icon: "rainy-outline" },
    { day: "Fri", temp: "22°C", icon: "sunny-outline" },
    { day: "Sat", temp: "19°C", icon: "thunderstorm-outline" },
  ];

  // Background styles based on mood
  const backgroundColors: Record<string, string> = {
    sunny: "#ccb806ff",
    cloudy: "#8f989fff",
    rainy: "#157cf2ff",
    stormy: "#172c42ff",
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColors[currentWeather.mood] },
      ]}
    >
      {/* City + Date */}
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.date}>
        {date} • {time}
      </Text>

      {/* Current Weather */}
      <View style={styles.currentWeather}>
        <Ionicons name={currentWeather.icon} size={60} color="white" />
        <Text style={styles.temperature}>{currentWeather.temp}</Text>
      </View>
      <Text style={styles.condition}>{currentWeather.condition}</Text>
      <Text style={styles.description}>{currentWeather.description}</Text>

      {/* Forecast */}
      <View style={styles.forecast}>
        {forecast.map((day, i) => (
          <View key={i} style={styles.forecastCard}>
            <Text style={styles.forecastDay}>{day.day}</Text>
            <Ionicons name={day.icon} size={28} color="white" />
            <Text style={styles.forecastTemp}>{day.temp}</Text>
          </View>
        ))}
      </View>

      {/* Celsius/Fahrenheit Toggle */}
      <TouchableOpacity style={styles.toggleButton}>
        <Text style={styles.toggleText}>°C | °F</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  city: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  date: {
    fontSize: 14,
    marginBottom: 15,
    color: "white",
  },
  currentWeather: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginTop: 20,
  },
  temperature: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  condition: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: "white",
  },
  forecast: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: "100%",
  },
  forecastCard: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 15,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  forecastDay: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  forecastTemp: {
    marginTop: 5,
    color: "white",
  },
  toggleButton: {
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  toggleText: {
    color: "white",
    fontSize: 16,
  },
});