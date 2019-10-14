import React, { Component } from "react"
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { setSpText, scaleSize, deviceWidth } from "../utils/scale.js"
import Stars from "../components/stars"

const styles = StyleSheet.create({
	wrapper: {
		height: scaleSize(400)
	},
	slide: {
		backgroundColor: '#9DD6EB',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	movieImg: {
		width: deviceWidth,
		height: scaleSize(360),
		position: 'absolute',
		top: 0
	},
	movieDetailContainer: {
		paddingTop: scaleSize(116),
		paddingBottom: scaleSize(116),
		paddingHorizontal: scaleSize(30),
		flexDirection: 'column'
	},
	movieDetailTitle: {
		flexDirection: 'row'
	},
	movieDetailTitleBase: {
		color: "white"
	},
	movieDetails: {
		color: '#3F3F3F',
		fontSize: setSpText(28)
	},
	movieBtnsContainer: {
		borderWidth: 1,
		borderColor: '#E5AA70',
		borderRadius: scaleSize(5),
		width: scaleSize(324),
		height: scaleSize(66),
		justifyContent: 'center',
		alignItems: "center",
		marginTop: scaleSize(60),
		marginBottom: scaleSize(60)
	},
	movieBtnsTxt: {
		color: "#E5AA70",
		fontSize: setSpText(28)
	}
})


export default class extends Component {

	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;
		return {
			title: params.movie.title,
		}
	};

	render() {
		const {
			title,
			average,
			stars,
			ratingsCount,
			movieImg, durations,
			casts,
			genres,
			year,
			summary
		} = this.props.navigation.getParam("movie")
		return (
			<ScrollView>
				<Image
					blurRadius={2}
					style={styles.movieImg}
					source={{ uri: movieImg }}
				/>
				<View style={styles.movieDetailContainer}>
					<View style={styles.movieDetailTitle}>
						<Image
							style={{
								width: scaleSize(200),
								height: scaleSize(270),
								marginRight: scaleSize(32)
							}}
							source={{ uri: movieImg }}
						/>
						<View>
							<Text style={[styles.movieDetailTitleBase, {
								fontSize: setSpText(40),
								marginTop: scaleSize(50),
								marginBottom: scaleSize(40)
							}]}>{title.length > 8 ? title.substring(0, 8) + "..." : title}</Text>
							<View style={{
								flexDirection: "row"
							}}>
								<Text style={[styles.movieDetailTitleBase, {
									fontSize: setSpText(40),
									marginRight: scaleSize(32)
								}]}>{average}</Text>
								<View>
									<Stars stars={stars} />
									<Text style={[styles.movieDetailTitleBase, {
										marginTop: scaleSize(16)
									}]}>{ratingsCount}人评价</Text>
								</View>
							</View>
						</View>
					</View>
					<View style={{
						marginTop: scaleSize(30)
					}}>
						<View style={{
							flexDirection: 'row'
						}}>
							<Text style={[styles.movieDetails, {
								marginRight: scaleSize(30)
							}]}>{durations}分钟</Text>
							<Text style={[styles.movieDetails]}>{genres}</Text>
						</View>
						<View style={{
							flexDirection: 'row',
							marginTop: scaleSize(38),
							marginBottom: scaleSize(38)
						}}>
							<Text style={[styles.movieDetails, {
								marginRight: scaleSize(30)
							}]}>{year}</Text>
							<Text style={[styles.movieDetails]}>美国</Text>
						</View>
						<View>
							<Text style={[styles.movieDetails]}> {casts.split(" ").splice(0, 3).join(" / ")}</Text>
						</View>
					</View>
					<View style={{
						flexDirection: "row",
						justifyContent: 'space-between'
					}}>
						<View style={styles.movieBtnsContainer}>
							<Text style={styles.movieBtnsTxt}>想看</Text>
						</View>
						<View style={styles.movieBtnsContainer}>
							<Text style={styles.movieBtnsTxt}>看过</Text>
						</View>
					</View>
					<View>
						<Text style={[styles.movieDetails, {
							marginBottom: scaleSize(60)
						}]}>{title}的简介</Text>
						<Text style={[styles.movieDetails, {
							lineHeight: scaleSize(50)
						}]}>{summary.replace(/<\/?p>/g, "")}</Text>
					</View>
				</View>
			</ScrollView>
		)
	}
}