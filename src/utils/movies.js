import axios from "axios"

const {
	doubanBase
} = global

export default class Movie {
	/**
	 * 根据分数返回星星对应的数组
	 * @param  {[type]} stars [description]
	 * @return {[type]}       [description]
	 */
	static renderStars(stars) {
		const total = 5
		const starsArr = []
		const full = ~~stars[0]
		const half = ~~stars[1]
		for (let i = 0; i < full; i++) {
			starsArr.push(1)
		}
		if (half) {
			starsArr.push(5)
		}
		for (let i = starsArr.length; i < 5; i++) {
			starsArr.push(0)
		}
		return starsArr
	}
	/**
	 * @param  {[object]}   电影对象
	 * @return {[type]}  		格式化的电影对象
	 */
	static formatterMovieItemData(movie) {
		return {
			id: movie.id,
			title: movie.title.length > 5 ? movie.title.substring(0, 5) + "..." : movie.title,
			uri: movie.images.large,
			average: movie.rating.average,
			stars: this.renderStars(movie.rating.stars)
		}
	}

	/**
	 * 根据电影 id 获取电影详情
	 * @param  {[type]} movie [description]
	 * @return {[type]}       [description]
	 */
	static formatterMovieDetailData(data) {
		return {
			//电影海报图
			movieImg: data.images.large,
			//中文名
			title: data.title,
			//原名
			originalTitle: data.original_title,
			//得分
			average: data.rating.average || 0,
			//星星
			stars: this.renderStars(data.rating.stars),
			//评分人数
			ratingsCount: data.ratings_count,
			//片长
			durations: data.durations || "100",
			//影片类型
			genres: data.genres.join(", "),
			//年代
			year: data.year,
			//制片国家/地区
			countries: data.countries[0],
			//主演
			casts: data.casts.map((item) => item.name).join(" / "),
			//演员列表
			castsInfo: data.casts || [],
			//简介
			summary: data.summary
		};
	}

	static async getMovieDetailById(id) {
		const { data } = await axios.get(`${doubanBase}/v2/movie/subject/${id}`)
		return this.formatterMovieDetailData(data)
	}
}