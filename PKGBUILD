# Maintainer: fenuks

_pkgname=lombok
pkgname=java-${_pkgname}
pkgver=1.18.6
pkgrel=1
pkgdesc="Project Lombok is a java library that automatically plugs into your editor and build tools, spicing up your java."
arch=("any")
url="https://github.com/rzwitserloot/lombok"
license=("MIT")
depends=("java-runtime")
optdepends=()
makedepends=("java-runtime")
provides=("${pkgname}")
conflicts=("${pkgname}")
# install=$pkgname.install
_filename=${_pkgname}-${pkgver}.jar
source=("${_filename}::https://projectlombok.org/downloads/lombok.jar")

sha256sums=('6373d9ade79efdc028cd48d40a9af9ac6a090dbcfaec55b438ec49556a4e92fb')

build() {
    cd "${srcdir}"
    java -jar ${_filename} publicApi
    java -jar ${_filename} createRuntime -c
}

package() {
    cd "${srcdir}"
    install -Dm644 ${_filename} "${pkgdir}/usr/share/java/${_pkgname}/${_pkgname}.jar"
    install -Dm644 lombok-api.jar "${pkgdir}/usr/share/java/${_pkgname}/"
    install -Dm644 lombok-runtime.jar "${pkgdir}/usr/share/java/${_pkgname}/"
}
