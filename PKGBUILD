# Maintainer: Dick Choi <fluke8259@gmail.com>
# Contributor: Romain Bazile <gromain.baz@gmail.com>
pkgname=boostnote
pkgver=0.6.0
pkgrel=1
pkgdesc="Opensource note app for developer"
arch=('x86_64')
url="https://b00st.io/"
license=('GPL')

source=(
  "https://github.com/BoostIO/boost-releases/releases/download/v$pkgver/boostnote_${pkgver}_amd64.deb"
  )

noextract=()

md5sums=('78ad3fa01f3c5b2488e276e258c51c6e')

validpgpkeys=()

package() {
      tar -xa -f ${srcdir}/data.tar.xz
        cp -r "${srcdir}/usr" "${pkgdir}/usr"
}

