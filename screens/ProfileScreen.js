import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import songsData from "../data-json/songs.json";

const ProfileScreen = () => {
  const [songs, setSongs] = useState(songsData);

  return (
    <>
      <LinearGradient colors={["#00cc00", "#000000"]} style={styles.header}>
        <View style={{ flexDirection: "row", width: "50%" }}>
          <Image
            style={styles.imgAvatar}
            source={{
              uri: "https://lh3.googleusercontent.com/pw/AIL4fc-4-8q0Xr00RbnPmbWoXmxT5e9RITrznM3-w0ZZ4Kfzx7RXsJxa9PxcZF5qU6RRT4-WA_ltzm5aQgkcUq59OHuqAPTBtLTdlGUBTtUka6bUMq45cyaR0TMX0jOoy5DqMimzyNaeHL0q4pwfBwfhjDH2QAV8s5fYjR1dT3PrZsfeu4_TQWkn5ywSI8hxMMO3pBJBU6N6BUD4wk-GX7Q4E8EER9o9Y9GxPHpYoLajdvqeWpVbWrTEnQC6N7M_BxC5n5Lm95H_OBkBJ7O4MQKT5QWRo4SDaXhMJsQRl0J9h6RAFPYpB_UmMzHCiHf0qOalJf7FbRgMLM41X4gIRTrhD7h2relq0Ld8x01qzukwiw-Ot7dM8-_TUw08iFZfJ4L5dAkEw-8ZJf9SvL7V5NWpF_Iu_dhCHxJQyzPaNtDJciYielQFmeiCI-eES3GLvt_-V1Uf1AKUG1FDD5KcbvxNqF-RgMMFugI-3D0RYBoiIz2zZDwDy96cgV_9JCqthbDxuf42zjcWe3ZJtg37oaUN2Av4zBFYNoF_p7zka8XxJ3eomgmdPd0_15RoBLgD7crjtBM2GP5iir5YdTAb_qzisKOxO1BxnZ3wUaJMzwY0zJ9w7kOUHlJ5Dt78uL4GGCqnUZKGTX-jlUXMb4N_SU0mCt8SPFys8lpsNBr1uGymCKQWGdKhQ8dVxGd9CgtQZTpyLfy-B6B8mnemcabDyWrlD8b62v-bAy5E_x__EkCMZ0kmPcWQ33sSUkPfyWrMMF5y_OX2J3IM0gmsr7zfLO6V6APVWcTI0BsGDcM720RucJQmhvEzGZh0tz25XIaEPThUUacN8zcJw7h2Abhk0oV--8goqxbdM9xZZhJ8m0rVIU4TLYlVZYS2dbyzUwzD54G7l7g1OahW9a1cIF6x=w65-h73-s-no?authuser=0",
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                color: "white",
                marginLeft: 20,
              }}
            >
              Nguyễn Việt Trường
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginLeft: 20,
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>0</Text>
              <Text style={{ color: "#E0E0E0" }}>follower</Text>
              <Text style={{ fontWeight: "bold", color: "white" }}>0</Text>
              <Text style={{ color: "#E0E0E0" }}>following</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              width: 60, // Điều chỉnh độ rộng cho phù hợp
              marginTop: 15,
              marginLeft: 55, // Điều chỉnh khoảng cách bên trái
              borderRadius: 40, // Để làm cho nút có hình dạng tròn
              borderColor: "white",
              borderWidth: 1,
              color: "white",
              paddingHorizontal: 17, // Điều chỉnh padding ngang
              paddingVertical: 6, // Điều chỉnh padding dọc
              fontWeight: "bold",
            }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.bottom}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Your playlist
        </Text>
        <FlatList
          data={songs}
          Vertical
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                style={{ width: 60, height: 60, borderRadius: 5 }}
                source={{ uri: item.image }}
              />
              <View style={{ alignItems: "flex-start" }}>
                <Text style={styles.nameSong}>{item.name}</Text>
                <Text style={styles.nameArtists}>{item.artist}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    flex: 0.4,
    paddingTop: 60,
  },
  bottom: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },
  imgAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "white",
    borderWidth: 2,
    resizeMode: "cover",
    marginLeft: 25,
  },
  nameSong: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    marginTop: 7,
  },
  nameArtists: {
    fontSize: 12,
    fontWeight: "500",
    color: "#E0E0E0",
    marginTop: 7,
  },
});
