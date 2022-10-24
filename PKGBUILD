# Maintainer: jmcb <joelsgp@protonmail.com>
# Contributor: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: Michele Schäuble <mschaeuble@swissonline.ch>

pkgname=josm-tested
pkgver=18570
pkgrel=1
pkgdesc="An editor for OpenStreetMap written in Java"
arch=('any')
url="https://josm.openstreetmap.de/"
license=('GPL')
depends=('desktop-file-utils' 'hicolor-icon-theme' 'java-runtime>=11' 'libxtst' 'ttf-font')
makedepends=('subversion')
provides=('josm')
conflicts=('josm')
backup=('etc/conf.d/josm')
source=(https://josm.openstreetmap.de/download/${pkgname%-tested}-snapshot-$pkgver.jar
        ${pkgname%-tested}.sh
        ${pkgname%-tested}.conf.d
        ${pkgname%-tested}::svn+https://josm.openstreetmap.de/svn/trunk#revision=$pkgver)
noextract=(${pkgname%-tested}-snapshot-$pkgver.jar)
sha256sums=('100121fe7ecce7aaf38ed908b3c66d783bce2ee1f136c3324fb5461723eb7bab'
            'a96ba2cf3e42b20634e2b09f25546cdf1ac47a7a43dd79d24033aa2cfb638f2a'
            '29377ce55c50951b1bd0e39003a977d8ea558c0657d613cea5f0056ce255e60e'
            'SKIP')

package() {
  cd "${srcdir}"

  install -Dm644 ${pkgname%-tested}-snapshot-$pkgver.jar "${pkgdir}"/usr/share/java/${pkgname%-tested}/${pkgname%-tested}.jar

  #.desktop and icon file
  install -Dm644 ${pkgname%-tested}/native/linux/tested/usr/share/applications/org.openstreetmap.josm.desktop \
        "${pkgdir}"/usr/share/applications/org.openstreetmap.josm.desktop
  install -Dm644 ${pkgname%-tested}/native/linux/tested/usr/share/man/man1/josm.1 \
        "${pkgdir}"/usr/share/man/man1/josm.1
  install -Dm644 ${pkgname%-tested}/native/linux/tested/usr/share/metainfo/org.openstreetmap.josm.appdata.xml \
        "${pkgdir}"/usr/share/metainfo/org.openstreetmap.josm.appdata.xml
  install -Dm644 ${pkgname%-tested}/native/linux/tested/usr/share/icons/hicolor/scalable/apps/org.openstreetmap.josm.svg \
        "${pkgdir}"/usr/share/icons/hicolor/scalable/apps/org.openstreetmap.josm.svg

  for _icon in 8 16 22 24 32 36 40 42 48 64 72 80 96 128 192 256 512; do
      install -Dm644 ${pkgname%-tested}/native/linux/tested/usr/share/icons/hicolor/${_icon}x${_icon}/apps/org.openstreetmap.josm.png \
        "${pkgdir}"/usr/share/icons/hicolor/${_icon}x${_icon}/apps/org.openstreetmap.josm.png
  done

  #executable file
  install -Dm755 ${pkgname%-tested}.sh "${pkgdir}"/usr/bin/${pkgname%-tested}
  install -Dm644 "${srcdir}"/${pkgname%-tested}.conf.d "${pkgdir}"/etc/conf.d/${pkgname%-tested}
}
