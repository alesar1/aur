# Maintainer: Sander Zuidema <archlinux at grunny dot demon dot nl>
# Contributor: Lukas Grossar <lukas dot grossar at gmail dot com>

pkgname=moneydance
pkgver=2017.1584
pkgrel=3
epoch=
pkgdesc="A personal finance manager for Mac, Windows and Linux"
arch=('i686' 'x86_64')
url="http://www.moneydance.com/"
license=('custom')
groups=()
depends=('java-runtime' 'bash')
checkdepends=()
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=('moneydance.sh'
        'moneydance.patch')
source_i686=(http://infinitekind.com/stabledl/current/Moneydance_linux_x86.tar.gz)
source_x86_64=(http://infinitekind.com/stabledl/current/Moneydance_linux_amd64.tar.gz)

package() {
  # generate directories in $pkgdir
  install -m755 -d "$pkgdir/usr/bin" \
    "$pkgdir/usr/share/java/$pkgname" \
    "$pkgdir/usr/share/licenses/$pkgname" \
    "$pkgdir/usr/share/applications" \
    "$pkgdir/usr/share/pixmaps"

  # copy files
  cd "$srcdir"
  install -m755 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname" || return 1

  # copy Mac icon since they're higher res
  
  cd "$srcdir/Moneydance/jars"
  bsdcpio --extract --make-directories "com/moneydance/apps/md/view/gui/glyphs/appicon_128.png" < $pkgname.jar || return 1

  cd "$srcdir/${pkgname^}"
  patch -uN "resources/moneydance.desktop" "../moneydance.patch"
  install -m644 "resources/moneydance.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop" || return 1
  install -m644 "resources/license.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE" || return 1
  install -m644 jars/com/moneydance/apps/md/view/gui/glyphs/appicon_128.png "$pkgdir/usr/share/pixmaps/$pkgname.png" || return 1
  install -m644 jars/*.jar "$pkgdir/usr/share/java/$pkgname" || return 1
}
md5sums=('5f95567e5a015721c6a80292d173a9e7'
         'a2c3a2f8a672ca93d52cd8d207aef3a5')
md5sums_i686=('c0083f3cbe5bf935c724b9f2be1d7dcf')
md5sums_x86_64=('abc061e6676aa502dd31ba8094b69c1b')
