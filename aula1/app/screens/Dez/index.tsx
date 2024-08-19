import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  Switch,
} from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import styles from "./styles";

export default function Dez() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("manager"); // Valor padrão "manager"
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");
  const [submittedRole, setSubmittedRole] = useState("");
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setSubmittedEmail(email);
    setSubmittedPassword(password);
    setSubmittedRole(selectedRole);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#555"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text style={styles.text}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#555"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            maxLength={8}
          />
          <Text style={styles.text}>Confirme a Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirme sua senha"
            placeholderTextColor="#555"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            maxLength={8}
          />
          <Text style={styles.text}>Escolha o Perfil</Text>
          {Platform.OS === "ios" ? (
            <PickerIOS
              selectedValue={selectedRole}
              onValueChange={(itemValue: string | number) =>
                setSelectedRole(itemValue as string)
              }
              style={styles.picker}
            >
              <PickerIOS.Item label="Administrador" value="admin" />
              <PickerIOS.Item label="Gestor" value="manager" />
              <PickerIOS.Item label="Usuário" value="user" />
            </PickerIOS>
          ) : (
            <Picker
              selectedValue={selectedRole}
              onValueChange={(itemValue) => setSelectedRole(itemValue)}
              style={styles.picker}
              mode="dropdown"
            >
              <Picker.Item label="Administrador" value="admin" />
              <Picker.Item label="Gestor" value="manager" />
              <Picker.Item label="Usuário" value="user" />
            </Picker>
          )}
          <View style={styles.switchContainer}>
            <Text style={styles.text}>Manter-se conectado</Text>
            <Switch
              value={logado}
              onValueChange={setLogado}
              trackColor={{ false: "#e77878", true: "#94df83" }}
              thumbColor={logado ? "#47eb22" : "#ed1111"}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Logar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          {submittedEmail !== "" && submittedPassword !== "" && (
            <View style={styles.result}>
              <Text style={styles.resultText}>
                {`${submittedEmail} - ${submittedPassword} - ${confirmPassword} - ${submittedRole} `}{" "}
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
