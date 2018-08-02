# Maintainer: Plague-doctor <plague at privacyrequired dot com >

pkgname=moneydance
pkgver=2017.1691
pkgrel=1
epoch=
pkgdesc="A personal finance manager for Mac, Windows and Linux"
arch=('i686' 'x86_64')
url="https://www.moneydance.com/"
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
source=('moneydance.sh' 'moneydance.patch')
source_i686=(${pkgname}_x86-${pkgver}-${pkgrel}.tar.gz::https://infinitekind.com/stabledl/current/Moneydance_linux_x86.tar.gz)
source_x86_64=(${pkgname}_amd64-${pkgver}-${pkgrel}.tar.gz::https://infinitekind.com/stabledl/current/Moneydance_linux_amd64.tar.gz)

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
sha256sums=('2afec424853974a22690657376edfdbe7924a2adae7ea57c0e3aa98d8cd62947'
            '4e48af0efb968910304767fe0bbab733aaa7b15f4d05b6a82c9fdac78351776f')
sha256sums_i686=('073d2c08a72e6f7419855a77b9ae80adcae13343df80aabc4924878e6f54702a')
sha256sums_x86_64=('d8b41c99f550f59e4580a60cc2f3df109d56949869b704f087f670a2d873f5d9')
