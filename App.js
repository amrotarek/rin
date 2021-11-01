import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const App = () => {
  const [layoutDimensions, setLayoutDimensions] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateLayout = () => {
      setLayoutDimensions(Dimensions.get("window").width);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#828282"
              style={styles.searchInput}
            />
            <Feather
              name="search"
              size={24}
              color="white"
              style={{ color: "white", position: "absolute", left: 6, top: 8 }}
            />
          </View>
        </View>
        <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
          <ImageBackground
            style={{ height: 100, width: layoutDimensions * 0.87 }}
            source={require("./assets/ovc.jpg")}
            imageStyle={{ borderRadius: 15, opacity: 0.6 }}
            blurRadius={1.5}
          >
            <View style={{ padding: 10 }}>
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 15 }}
              >
                Orphan Children Association
              </Text>
              <Text style={{ color: "white", fontSize: 10, marginTop: 7 }}>
                For Every Donation To Us They Get{" "}
                <Text style={{ color: "yellow" }}>80%</Text>
              </Text>
              <Text style={{ color: "white", fontSize: 10, marginTop: 7 }}>
                Donate To Ringob
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#434343",
            marginVertical: 10,
            opacity: 1,
          }}
        ></View>
        <View
          style={{ marginLeft: layoutDimensions * 0.065, flexDirection: "row" }}
        >
          <TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5
                name="fire-alt"
                size={20}
                color="white"
                style={{ color: "yellow", marginRight: 5 }}
              />
              <Text style={{ color: "yellow" }}>Trending</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5
                name="fire-alt"
                size={20}
                color="white"
                style={{ color: "white", marginRight: 5 }}
              />
              <Text style={{ color: "white" }}>Tournaments</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#434343",
            marginVertical: 10,
            opacity: 1,
          }}
        ></View>
        <View style={{ marginLeft: layoutDimensions * 0.065 }}>
          <Text style={{ color: "white", marginBottom: 10 }}>
            #Famous stories
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/unnamed.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>
                    349K views
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/fd.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>47K views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/nn.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>23M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/ff.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>349 views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/oo.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>3K views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/rr.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>

                  <Text style={{ color: "white", fontSize: 9 }}>
                    377K views
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 80,
                      width: 80,
                      padding: 3,
                      borderRadius: 999,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 999,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ marginLeft: layoutDimensions * 0.065 }}>
          <Text style={{ color: "white", marginBottom: 10, marginTop: 25 }}>
            #Famous Gamers
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>
                    349K views
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/rr.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>47K views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/oo.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>23M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/nn.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>349 views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/fd.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>3K views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/ff.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>

                  <Text style={{ color: "white", fontSize: 9 }}>
                    377K views
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={{ marginLeft: layoutDimensions * 0.065 }}>
          <Text style={{ color: "white", marginBottom: 10, marginTop: 25 }}>
            #Richest Gamers
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>
                    349K views
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/rr.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>47K views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/oo.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>23M views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/nn.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>349 views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/fd.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>3K views</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 6 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/ff.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>

                  <Text style={{ color: "white", fontSize: 9 }}>
                    377K views
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 12 }}>
                <View style={{ alignItems: "center" }}>
                  <LinearGradient
                    style={{
                      height: 150,
                      width: 120,
                      padding: 1,
                      borderRadius: 20,
                    }}
                    colors={["#710193", "#710199", "#1167b1"]}
                  >
                    <Image
                      source={require("./assets/tr.jpg")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20,
                      }}
                    />
                  </LinearGradient>
                  <Text style={{ color: "white", fontSize: 9 }}>1M views</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "black",
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  searchContainer: {
    width: "85%",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    paddingVertical: 6,
    paddingLeft: 33,
    color: "white",
  },
});

export default App;
