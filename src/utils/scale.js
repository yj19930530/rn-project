/**
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */

/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6
*/

import {
	Dimensions,
	PixelRatio,
} from 'react-native';

//设备的宽度
export const deviceWidth = Dimensions.get('window').width;
//设备的高度
export const deviceHeight = Dimensions.get('window').height;
//返回字体大小缩放比例
let fontScale = PixelRatio.getFontScale();
//当前设备的像素密度
let pixelRatio = PixelRatio.get();
/*
	iphone6 的像素密度
	因为一般的设计稿都是以 iphone6 为基础来设计的，所以这里以 iPhone6 为基础写这个工具类，当然如果你的不是，可以在上面更改，defaultPixel 改成你用的设备像素就好了。
*/
const defaultPixel = 2;
//px转换成dp
const w2 = 750 / defaultPixel;
const h2 = 1334 / defaultPixel;
//获取缩放比例
const scale = Math.min(deviceHeight / h2, deviceWidth / w2);
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export function setSpText(size: number) {
	return scaleSize(size * fontScale)
}

export function scaleSize(size: number) {
	size = Math.round(size * scale + 0.5);
	return size / defaultPixel;
}