# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_binver=1.5.0

pkgname=kotlin-native-bin
pkgver=1.5.0
pkgrel=1
pkgdesc="Kotlin/Native infrastructure"
arch=('x86_64')
url="https://github.com/JetBrains/kotlin-native"
license=('Apache')
options=('staticlibs' 'libtool' '!strip')
depends=('java-environment' 'ncurses5-compat-libs')
optdepends=(
  'lldb: for konan-lldb'
)
provides=('kotlin-native')
conflicts=('kotlin-native' 'kotlin-native-git')
source=(
  "https://github.com/JetBrains/kotlin/releases/download/v${pkgver}/kotlin-native-linux-${_binver}.tar.gz"
)
sha256sums=(
  '33241c460fab8c496a6b01ca08670ae7f667df23acc56081f8b37c50b021b50f'
)

package() {
  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/lib"

  cp -r "kotlin-native-linux-${_binver}" "${pkgdir}/usr/lib/kotlin-native"
  # Fix permissions for some files, e.g. /usr/lib/kotlin-native/klib/common/stdlib/ir/ir_tables/*.knt
  chmod -R +r "${pkgdir}/usr/lib/kotlin-native"

  ln -s /usr/lib/kotlin-native/bin/kotlinc-native "${pkgdir}/usr/bin/kotlinc-native"
  ln -s /usr/lib/kotlin-native/bin/konanc "${pkgdir}/usr/bin/konanc"
  ln -s /usr/lib/kotlin-native/bin/konan-lldb "${pkgdir}/usr/bin/konan-lldb"
  ln -s /usr/lib/kotlin-native/bin/klib "${pkgdir}/usr/bin/klib"
  ln -s /usr/lib/kotlin-native/bin/cinterop "${pkgdir}/usr/bin/cinterop"
  ln -s /usr/lib/kotlin-native/bin/jsinterop "${pkgdir}/usr/bin/jsinterop"
  ln -s /usr/lib/kotlin-native/bin/run_konan "${pkgdir}/usr/bin/run_konan"
  ln -s /usr/lib/kotlin-native/bin/generate-platform "${pkgdir}/usr/bin/generate-platform"
}
