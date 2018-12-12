import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const phrases = [
  "You'll probably do something else.",
  "I think you're busy",
  "Whats the point",
  "The suns gonna explode",
  "It doesn't matter",
  "David Bowie's still dead.",
  "Your heroes dont care."
];
export default class App extends React.Component {
  state = { items: [] };

  getItem = () => {
    return phrases[this.randomBetween(0, phrases.length)];
  };

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Nihilist - an honest todo list app. </Text>
        <Button
          onPress={() => {
            this.setState({ items: [...this.state.items, this.getItem()] });
          }}
          title="Add Item"
        />
        <Text>
          {this.state.items.length
            ? this.state.items.join("\n")
            : "No To-Do Items"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
