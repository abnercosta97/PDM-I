import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import * as Contacts from "expo-contacts";
import styles from "./styles";

export default function ContactsComponent() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      setHasPermission(status === "granted");
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to contacts</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) =>
          item.id ?? item.name ?? Math.random().toString()
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            {item.phoneNumbers &&
              item.phoneNumbers.map((phone, index) => (
                <Text key={index} style={styles.number}>
                  {phone.number}
                </Text>
              ))}
          </View>
        )}
      />
    </View>
  );
}
