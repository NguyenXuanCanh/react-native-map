import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { Button } from "react-native-rapi-ui";
import { Col, Row } from "./Flex";

export default function ModalCustom(props) {
  const { isVisible, onClose, modalContent } = props;
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={() => onClose()}
      coverScreen
      deviceHeight={50000}
    >
      <View
        style={{
          flex: 1,
          marginTop: 10,
          backgroundColor: "#fff",
          borderColor: "#f3f3f3",
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 5,
          padding: 20,
          maxHeight: 400,
        }}
      >
        {modalContent}

        <Row style={{ marginTop: "auto" }}>
          <Col numRows={10}>
            <Button
              text="Cancel"
              status="danger"
              onPress={onClose}
              size="md"
              style={{ height: 40 }}
              outline
            />
          </Col>
          <Col numRows={1} />
          <Col numRows={10}>
            <Button
              text="Confirm"
              onPress={onClose}
              //   outline
              size="md"
              style={{ height: 40 }}
            />
          </Col>
        </Row>
      </View>
    </Modal>
  );
}
