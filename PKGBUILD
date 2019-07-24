# Maintainer: Dmitri Goutnik <dg@syrec.org>

pkgname=pgcenter
pkgver=0.6.2
pkgrel=1
pkgdesc='Command-line admin tool for observing and troubleshooting Postgres'
arch=('x86_64')
url='https://github.com/lesovsky/pgcenter'
license=('custom:BSD3')
makedepends=('go' 'git')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('627047753a186d4608a146e910eba82993bbca3f8946e80be990f2521edb525c')

prepare() {
  cd ${pkgname}-${pkgver}
  go mod download
}

build() {
  cd ${pkgname}-${pkgver}
  go build -o ${pkgname} \
    -asmflags all="-trimpath=${PWD}" \
    -gcflags all="-trimpath=${PWD}" \
    -ldflags all="-extldflags=${LDFLAGS}"
}

package() {
  cd ${pkgname}-${pkgver}
  install -Dm755 ${pkgname} "${pkgdir}/usr/bin/${pkgname}"
  install -Dm644 COPYRIGHT "${pkgdir}/usr/share/licenses/${pkgname}/COPYRIGHT"
}

# vim:set ts=2 sw=2 et:
