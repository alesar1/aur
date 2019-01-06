# 在Archlinux及其衍生发行版上运行迅雷极速版

把deepin打包的迅雷极速版移植到Archlinux

构建状态: ![https://github.com/countstarlight/deepin-wine-thunderspeed-arch](https://travis-ci.org/countstarlight/deepin-wine-thunderspeed-arch.svg?branch=master)

感谢:

* [Wuhan Deepin Technology Co.,Ltd.](http://www.deepin.org/)

## 安装

* 1.已添加到AUR [deepin-wine-thunderspeed](https://aur.archlinux.org/packages/deepin-wine-thunderspeed/)，可直接安装:
```shell
yaourt deepin-wine-thunderspeed
```

* 2.手动安装

```shell
 git clone https://github.com/countstarlight/deepin-wine-thunderspeed-arch.git

 cd deepin-wine-thunderspeed-arch
  
 makepkg -si
```

* 运行应用菜单中创建的Thunder Speed启动
* 默认使用文泉驿微米黑(`wqy-microhei`)字体，要使用其他字体，如 微软雅黑或者微软宋体放进`～/.deepinwine/Deepin-ThunderSpeed/drive_c/windows/Fonts`中。

## 常见问题

* 1.解决在 2k/4k 屏幕下字体和图标都非常小, 参见[issue1](https://github.com/countstarlight/deepin-wine-tim-arch/issues/1)

## 更新日志

* 2018-01-04 deepin.com.thunderspeed_7.10.35.366deepin17
* 2019-01-06 deepin.com.thunderspeed_7.10.35.366deepin18
