import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

// 这是一个获取系统状态栏并显示的demo
// 在设置预渲染前，编译正常
// 设置预渲染后，运行小程序出现了报错
// TypeError: a.a.getSystemInfo is not a function

export default () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    Taro.getSystemInfo({
      success: function (res) {
        setHeight(res.statusBarHeight)
      }
    })
  }, [])

  return (
    <View className='index'>
      <Text>系统状态栏高度：{height}</Text>
    </View>
  )
}
