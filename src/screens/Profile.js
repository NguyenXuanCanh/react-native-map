import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Layout, Section, SectionContent, Text } from 'react-native-rapi-ui';
import { LinearGradient } from "expo-linear-gradient";
import InfoRow from '../components/profile/InfoRow';

export default function ({ navigation }) {
    const accountInfo={
        name: "Nguyen Xuan Canh", 
        phone: "0817979112",
        email: "",
        address: "",
        history: "",
    }
	return (
		<Layout>
			<ScrollView
				contentContainerStyle={{}}
			>
				{/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}
                {/* </LinearGradient> */}
                <View style={{
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            padding: 15
                        }}
                        >
                            <Avatar source={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} size="xl"/>
                            <Text size='h3'>{accountInfo.name}</Text>
                            <Text size='h4'>@1234</Text>
                </View>
                <Section>
                <SectionContent>
                <View style={{
                            flex: 3,
                            alignItems: "flex-start"
                        }}>
                        <View style={{
                                paddingTop: 7,
                                paddingLeft: 20,
                                paddingRight: 20,
                            }}>
                            {/* <Text size='h3'>Account Infomation</Text> */}
                                <View style={{
                                    // paddingTop: 15,
                                    width: "100%"
                                }}>
                                    <View style={{
                                        width: "100%"
                                    }}>
                                        <InfoRow 
                                            title="Name"
                                            value={accountInfo.name}
                                            startIcon="person"
                                            endIcon="create"
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>

                </SectionContent>
                </Section>
			</ScrollView>
		</Layout>
	);
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      width: "100%",
    },
});