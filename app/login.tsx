import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router, useNavigation } from "expo-router";
import { useLayoutEffect } from "react";

export default function Login() {
    const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
  }, []);

  return (
    <LinearGradient
      colors={["#771010ff", "#ffffffff"]}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: 20,
        }}
      >
        {/* Logo / Title */}
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <Text style={{ fontSize: 32, color: "white", fontWeight: "bold" }}>
            MMC Hospital
          </Text>
          <Text style={{ color: "#94a3b8", marginTop: 5 }}>
            Secure Patient & Staff Login 
          </Text>
        </View>

        {/* Card */}
        <View
          style={{
            backgroundColor: "#b4b4b4ff",
            borderRadius: 20,
            padding: 25,
            shadowColor: "#000",
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 10,
            borderWidth: 1,
            borderColor: "#1e293b",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 22,
              fontWeight: "600",
              marginBottom: 20,
            }}
          >
            Login to Dashboard
          </Text>

          {/* Email */}
          <Text style={{ color: "#464747ff", marginBottom: 6 }}>
            Email Address
          </Text>
          <TextInput
            placeholder="doctor@mmc.com"
            placeholderTextColor="#64748b"
            style={{
              backgroundColor: "#020617",
              borderWidth: 1,
              borderColor: "#334155",
              borderRadius: 12,
              padding: 14,
              color: "white",
              marginBottom: 15,
            }}
          />

          {/* Password */}
          <Text style={{ color: "#464747ff", marginBottom: 6 }}>
            Password
          </Text>
          <TextInput
            placeholder="••••••••"
            placeholderTextColor="#64748b"
            secureTextEntry
            style={{
              backgroundColor: "#020617",
              borderWidth: 1,
              borderColor: "#334155",
              borderRadius: 12,
              padding: 14,
              color: "white",
              marginBottom: 25,
            }}
          />

          {/* Button */}
          <TouchableOpacity
            onPress={() => router.replace("/home")}
            style={{
              backgroundColor: "#2563eb",
              paddingVertical: 16,
              borderRadius: 14,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Secure Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text
          style={{
            color: "#64748b",
            textAlign: "center",
            marginTop: 30,
            fontSize: 12,
          }}
        >
          © 2026 MMC Hospital Management System
        </Text>
      </View>
    </LinearGradient>
  );
}
