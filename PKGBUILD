# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=goxygen
pkgver=0.3.1
pkgrel=1
pkgdesc="Generate a modern Web project with Go, Angular/React/Vue, and MongoDB in seconds"
arch=('x86_64')
url='https://github.com/Shpota/goxygen'
license=('Apache')
depends=('docker'
         'docker-compose'
         'nodejs'
         'npm')
makedepends=('go')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('f9ceab92aaa3b55aa9874f45f16b6add24b1d8b50a26999fe173c142fdc6837d')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir -p build/
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -mod=readonly -modcacherw"
  go build -o build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 build/goxygen "${pkgdir}/usr/bin/goxygen"
  install -d "${pkgdir}/usr/share/doc/${pkgname}"
  cp -aR templates "${pkgdir}/usr/share/doc/${pkgname}"
}