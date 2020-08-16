# Maintainer: 4censord <mail@business-insulting.de>
# Contributer: Martchus <martchus@gmx.net>

pkgname=genesis-starter
pkgver=6.2.1
pkgrel=1
arch=('any')
pkgdesc="Character creation tool for Splittermond"
url="http://blog.rpgframework.de"
license=('unknown')
depends=('java-runtime' 'freetype2' 'libxtst' 'alsa-lib' 'libnet' 'libxrender' 'xdg-utils')
source=("http://www.rpgframework.de/downloads/linux/genesis-$pkgver-1.x86_64.rpm"
        "${pkgname}.sh"
        "${pkgname}.desktop")

sha256sums=('67a7b3bc0276faebca955f2b2f428231c5edadc3b5ebd2282095f281051a4501'
            'df047584bc29b584d0b2e311478b98ed216d9a7a63d6ad96d9bd6c3aa2239a0c'
            '38f5092e84411445e085bdd9e2bca579029406379042337fd0a72fccbf4f363d')
package() {
  # stuff
  cp -r "$srcdir"/opt $pkgdir
  cp -r "$srcdir"/usr $pkgdir
  
  # start script
  install -m755 -D "./${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
  # menu entry
  install -m644 -D "./${pkgname}.desktop" "$pkgdir/usr/share/applications/${pkgname}.desktop"
}
