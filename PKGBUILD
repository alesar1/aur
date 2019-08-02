# Maintainer: lightning1141 <lightning1141@gmail.com>

pkgname=qtalk
pkgver=1.9.963
pkgrel=1
pkgdesc="QTalk (Window/Linux) 2.0 by Qunar"
arch=("x86_64")
url="https://qt.qunar.com/win_2_0/index.html"
license=('custom')
depends=('qt5-base' 'qt5-webengine' 'qt5-multimedia' 'qt5-x11extras' 'qt5-quickcontrols' 'qt5-svg')
source=("https://qt.qunar.com/win_2_0/downloads/qtalk_linux_laster.run"
  "com.qunar.QTalk.desktop"
)
sha256sums=("SKIP"
  "b4133649c38644006a00880f4e77bb67928151474c7c609590bc9694024ebe2d"
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
