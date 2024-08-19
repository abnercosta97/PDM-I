import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Seis() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedAge, setSubmittedAge] = useState("");

  const handleSave = () => {
    setSubmittedName(name);
    setSubmittedAge(age);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Idade"
        placeholderTextColor="#ccc"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      {submittedName !== "" && submittedAge !== "" && (
        <View>
          <Text
            style={styles.resultText}
          >{`${submittedName} - ${submittedAge}`}</Text>
        </View>
      )}
    </View>
  );
}
