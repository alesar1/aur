# Maintainer: lightning1141 <lightning1141@gmail.com>

pkgname=qtalk
pkgver=1.999
pkgrel=1
pkgdesc="QTalk (Window/Linux) 2.0 by Qunar"
arch=("x86_64")
url="https://qt.qunar.com/win_2_0/index.html"
license=('custom')
depends=('qt5-base' 'qt5-webengine' 'qt5-multimedia' 'qt5-x11extras' 'qt5-quickcontrols' 'qt5-svg')
source=("https://qt.qunar.com/win_2_0/downloads/qtalk_linux_laster.run"
  "com.qunar.QTalk.desktop"
)
sha256sums=('c255774b09a555bf9cbf273faf42efb28ebe05342cfa4c35ceb302eec2402530'
  "45985693f51e58c95ea723b18eaa0ea83c40dde4ff4e661ee0916bd52bedfccb"
)

build() {
  msg "Extracting QTalk archive ..."
  tail +10 qtalk_linux_laster.run > QTalk.tar.bz2
  tar -jxvf QTalk.tar.bz2 -C "${srcdir}/"
  cp "com.qunar.QTalk.desktop" "${srcdir}/QTalk/com.qunar.QTalk.desktop"
}

package() {
  msg "Preparing icons ..."
  install -d "${pkgdir}/usr/share/applications"
  install -m644 "${srcdir}/QTalk/com.qunar.QTalk.desktop" "${pkgdir}/usr/share/applications/"
  msg "Copying QTalk to /opt/qtalk..."
  install -d "${pkgdir}/opt/qtalk"
  cp -a ${srcdir}/QTalk/bin "${pkgdir}/opt/qtalk/bin"
  cp -a ${srcdir}/QTalk/res "${pkgdir}/opt/qtalk/res"
  install -m755 "${srcdir}/QTalk/res/run.sh" "${pkgdir}/opt/qtalk/"
}
