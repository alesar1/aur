# Maintainer: Marcs <aur (at) odd.red>

pkgname=nightcode
_name=Nightcode
pkgver=2.8.1
pkgrel=2
pkgdesc="An IDE that bundles a smart editor, the Leiningen and Boot build tools, and a home screen with quick access to the Clojure cheatsheet and REPL."
arch=('any')
url="https://sekao.net/nightcode/"
license=('custom')
makedepends=('clojure')
depends=('jdk-openjdk')
conflicts=('nightcode-git')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/oakes/${_name}/archive/${pkgver}.tar.gz"
        "nightcode.desktop")
sha256sums=('da6ad55cfd5b2ebd98719f57c2ac54a128f40590c91679ce52ddab3223e47f1f'
            'aa94a3cf9028756b4bd6dbb6f9b27dc23f8aa4d29ca18507736561ef66fbd267')
noextract=('nightcode.desktop')

build() {
	cd "${_name}-${pkgver}"
	msg2 "Building nightcode..."
	clj -A:prod uberjar linux
}

package() {
  JARNAME="nightcode-${pkgver}-standalone.jar"

  #artifact
  install -Dm644 ${srcdir}/$_name-${pkgver}/target/$JARNAME ${pkgdir}/usr/share/java/${pkgname}/$JARNAME

  #license
  install -Dm644 ${srcdir}/$_name-${pkgver}/UNLICENSE ${pkgdir}/usr/share/licenses/${pkgname}/UNLICENSE

  #launcher
  mkdir -p "${pkgdir}/usr/bin/"
  echo '#!/bin/sh' > "${pkgdir}/usr/bin/nightcode"
  echo 'java -Xmx512m -jar /usr/share/java/nightcode/'$JARNAME' $@' >> "${pkgdir}/usr/bin/nightcode"
  chmod 755 ${pkgdir}/usr/bin/nightcode

  #icon
  install -Dm644 ${srcdir}/nightcode.desktop ${pkgdir}/usr/share/applications/nightcode.desktop
  install -Dm644 ${srcdir}/${_name}-${pkgver}/package/linux/Nightcode.png ${pkgdir}/usr/share/nightcode/Nightcode.png
}
