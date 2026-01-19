import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";


import { router } from "expo-router";

export default function Home() {
  return (

    <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>

      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, color: "#64748b" }}>
            Hey, Alex 👋
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Find your specialist
          </Text>
        </View>

        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={{ width: 45, height: 45, borderRadius: 25 }}
        />
      </View>

      {/* SEARCH */}
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: "#fff",
          borderRadius: 12,
          paddingHorizontal: 15,
          paddingVertical: 12,
          borderWidth: 1,
          borderColor: "#E5E7EB",
          elevation: 4,

        }}
      >
        <TextInput placeholder="Search doctor, speciality..." />
      </View>

      {/* UPCOMING APPOINTMENT */}
      <View
        style={{
          backgroundColor: "#87b1c2",
          margin: 20,
          padding: 20,
          borderRadius: 16,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          Book Your Appointment
        </Text>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Image
            source={{ uri: "https://i.pravatar.cc/101" }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          /> 

          <View style={{ marginLeft: 12 }}>
            <Text style={{ color: "white", fontSize: 16, fontWeight:'bold' }}>
              Dr. Samantha
            </Text>
            <Text style={{ color: "#e0f2fe" }}>
                Dental Specialist
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            marginTop: 15,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#0284c7", fontWeight: "600" }}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>

      {/* SPECIALITY */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Doctor Speciality
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {["❤️", "🧠", "🦷", "👁️"].map((icon, i) => (
            <View
              key={i}
              style={{
                backgroundColor: "#fff",
                width: 70,
                height: 70,
                borderRadius: 14,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24 }}>{icon}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* TOP DOCTORS */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Top Doctors
        </Text>

        <View
          style={{
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 14,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: "https://i.pravatar.cc/102" }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />

          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>
              Dr. Taylor Sam
            </Text>
            <Text style={{ color: "#64748b" }}>
              Cardiology • 4.9 ⭐
            </Text>
          </View>

          <Text style={{ fontWeight: "bold" }}>$34</Text>
        </View>
      </View>

    </ScrollView>
  );
}

