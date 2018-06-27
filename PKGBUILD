# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

PKGEXT=.pkg.tar

pkgname=kotlin-native-bin
pkgver=0.7.1
pkgrel=1
pkgdesc="A LLVM backend for the Kotlin compiler"
arch=('x86_64')
url="https://github.com/JetBrains/kotlin-native"
license=('Apache')
options=('staticlibs' 'libtool' '!strip')
depends=('java-environment' 'ncurses5-compat-libs')
provides=('kotlin-native')
conflicts=('kotlin-native' 'kotlin-native-git')
source=("https://github.com/JetBrains/kotlin-native/releases/download/v${pkgver}/kotlin-native-linux-${pkgver}.tar.gz")
sha256sums=('a0ba4d2bb6d9035c6576383cc8d96e25eb33bc8876c299715fb7e1ca401cbe3b')

package() {
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/lib"

  cp -r kotlin-native-linux-${pkgver} ${pkgdir}/usr/lib/kotlin-native
  chmod 755 ${pkgdir}/usr/lib/kotlin-native

  ln -s /usr/lib/kotlin-native/bin/kotlinc-native ${pkgdir}/usr/bin/kotlinc-native
  ln -s /usr/lib/kotlin-native/bin/konanc ${pkgdir}/usr/bin/konanc
  ln -s /usr/lib/kotlin-native/bin/klib ${pkgdir}/usr/bin/klib
  ln -s /usr/lib/kotlin-native/bin/cinterop ${pkgdir}/usr/bin/cinterop
  ln -s /usr/lib/kotlin-native/bin/jsinterop ${pkgdir}/usr/bin/jsinterop
  ln -s /usr/lib/kotlin-native/bin/run_konan ${pkgdir}/usr/bin/run_konan
}
