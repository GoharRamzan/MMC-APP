import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Gohar Ramzan</Text>
        <Text style={styles.email}>gohar@example.com</Text>
      </View>

      {/* Content */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <Text style={styles.rowText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.row, styles.logout]}>
          <Text style={[styles.rowText, { color: "#ef4444" }]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },

  header: {
    height: 260,
    backgroundColor: "#4a90e2",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  email: {
    fontSize: 14,
    color: "#e5e7eb",
    marginTop: 4,
  },

  card: {
    marginTop: -20,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 10,
    elevation: 5,
  },

  row: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },

  rowText: {
    fontSize: 16,
    color: "#0f172a",
  },

  logout: {
    borderBottomWidth: 0,
  },
});
