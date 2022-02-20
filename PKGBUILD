# Maintainer: <asamk@gmx.de>

pkgname=libsignal-client
_libname=libsignal_jni
pkgver=0.12.3
pkgrel=1
pkgdesc='Library for the Signal Protocol.'
url="https://github.com/signalapp/${pkgname}"
makedepends=('cargo' 'gradle' 'git' 'zip' 'protobuf')
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
license=('GPL3')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/signalapp/${pkgname}/archive/refs/tags/v$pkgver.tar.gz"
        "fix_gradle_7.patch"
)

sha512sums=('40dbdf4b15ade480b9fdb50b7ff32f950ff2b6bd5248993a8324ea44a06a2cb142cc86f8be7f6c52391935391840b44b689b77a29d97d89dabba0fe9ec0e420c'
            '888960120041304ba01eb1cd9b600062e5b23276784a5e174433f76bc667c3ca43ae844c355721e14b7a93e0ecc39053f108c803acef79f105e715609365b802')

prepare() {
  tar xf "${pkgname}-$pkgver.tar.gz"
  cd "${pkgname}-${pkgver}"

  # Use the default system rust toolchain
  # rm -f rust-toolchain

  # Do not build the android library
  sed -i "s/, ':android'//" java/settings.gradle
  # Fix build with gradle 7
  sed -i "s/compile/implementation/" java/tests/build.gradle
  sed -i "s/Compile/Implementation/" java/tests/build.gradle
  patch -p1 < ../fix_gradle_7.patch
}

build() {
  cd "${pkgname}-${pkgver}/java"

  ./build_jni.sh desktop
  gradle --no-daemon assemble

  zip -d "java/build/libs/signal-client-java-${pkgver}.jar" "${_libname}.so"
}

package() {
  cd "${pkgname}-${pkgver}"

  install -m755 -d "${pkgdir}/usr/share/java/${pkgname}" "${pkgdir}/usr/lib"

  install -Dm644 "java/java/build/libs/signal-client-java-${pkgver}.jar" "$pkgdir/usr/share/java/$pkgname/$pkgname.jar"
  install -Dm644 "target/release/${_libname}.so" "$pkgdir/usr/lib/"
}
