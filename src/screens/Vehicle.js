import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import {
  Avatar,
  Button,
  Layout,
  Section,
  SectionContent,
  Text,
  TextInput,
} from "react-native-rapi-ui";
import ModalCustom from "../components/common/ModalCustom";
import InfoRow from "../components/profile/InfoRow";

export default function ({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Layout>
      <ScrollView contentContainerStyle={{}}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 15,
          }}
        >
          <Avatar
            source={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
            size="xl"
          />
          <Text size="h3">a</Text>
          <Text size="h4">@ bảng số xe</Text>
        </View>
        <Section>
          <SectionContent>
            <View
              style={{
                flex: 3,
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  paddingTop: 7,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <InfoRow
                      title="Id"
                      value="1234"
                      startIcon="card"
                      endIcon="create"
                      onChange={() => {
                        toggleModal();
                      }}
                    />
                    <InfoRow
                      title="Bảng số xe"
                      value="62G1-35281"
                      startIcon="document"
                      endIcon="create"
                      style={{ marginTop: 20 }}
                    />
                    <InfoRow
                      title="Tên chủ xe"
                      value="Chủ A"
                      startIcon="person"
                      endIcon="create"
                      style={{ marginTop: 20 }}
                    />
                    <InfoRow
                      title="Kích thước thùng xe"
                      value="1111 (Kg)"
                      startIcon="cube"
                      endIcon="create"
                      style={{ marginTop: 20 }}
                    />
                    <InfoRow
                      title="Khối lượng thùng xe"
                      value="1111 (Kg)"
                      startIcon="stopwatch"
                      endIcon="create"
                      style={{ marginTop: 20 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
      <ModalCustom
        isVisible={isModalVisible}
        onClose={toggleModal}
        modalContent={
          <>
            <Text style={{ marginBottom: 10 }}>TextInput</Text>
            <TextInput
              placeholder="Enter your text"
              value={text}
              onChangeText={(val) => setText(val)}
            />
          </>
        }
      />
    </Layout>
  );
}

const styles = StyleSheet.create({});
