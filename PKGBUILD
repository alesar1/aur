# Maintainer: Moacir R.F <moacirrf@gmail.com>
_basename="SceneBuilder"
pkgname="javafx-scenebuilder"
_debpkg=scenebuilder
pkgver="8.4.1"
pkgrel=1
pkgdesc="Gluon Scene Builder for Java 8, based on debian package, this version is recognized by Netbeans,it was released on Oct 17, 2017."
arch=('x86_64' 'i686')
url="http://gluonhq.com/labs/scene-builder/"
license=('BSD License')
depends=()
makedepends=()
optdepends=()
install=
source_x86_64=($_debpkg-$pkgver-x86_64.deb::http://download.gluonhq.com/scenebuilder/$pkgver/install/linux/$_debpkg-$pkgver.deb)
source_i686=($_debpkg-$pkgver-i686.deb::http://download.gluonhq.com/scenebuilder/$pkgver/install/linux-x86/$_debpkg-$pkgver.deb)
sha1sums_x86_64=('366ad019e175e35bfaea5bd67efe6e954672cb34')
sha1sums_i686=('391e4690fc88cf62059e0abf603c97c28c5ce44d')


build() {
  cd "$srcdir/"
  tar -xf data.tar.xz
echo "[Desktop Entry]
Name=Scene Builder
Comment=Gluon Scene Builder for Java 8.
Exec=/opt/${_basename}/${_basename}
Icon=/opt/${_basename}/${_basename}.png
Terminal=false
Type=Application
Categories=Development;GTK;">"${srcdir}/opt/${_basename}/${_basename}.desktop"
}

package() {
  cp -rf "$srcdir/opt" "$pkgdir"
  install -d "${pkgdir}/usr/share/applications/"
  install -d "${pkgdir}/usr/share/pixmaps/"
  install -d "${pkgdir}/usr/bin/"
  ln -s "/opt/${_basename}/${_basename}" "${pkgdir}/usr/bin/${pkgname}"
  install -m644 "${srcdir}/opt/${_basename}/${_basename}.desktop" "${pkgdir}/usr/share/applications/"
  install -m644 "${srcdir}/opt/${_basename}/${_basename}.png" "${pkgdir}/usr/share/pixmaps/"
}
