# Maintainer: Yuval Adam <yuval at y3xz dot com> PGP-Key: 271386AA2EB7672F
# Contributor: Kenny Rasschaert <kenny dot rasschaert at gmail dot com> PGP-Key: 1F70454121E41419
# Contributor: Adrián Pérez de Castro <adrian at perezdecastro dor org> PGP-Key: 91C559DBE4C9123B

pkgname=rkt
pkgver=0.8.1
pkgrel=2
pkgdesc="App container runtime"
arch=('x86_64')
url="https://github.com/coreos/rkt"
license=(apache)
depends=('glibc')
makedepends=('cpio' 'go' 'wget' 'squashfs-tools' 'perl-capture-tiny' \
  'intltool' 'gperf' 'git' 'libseccomp')
provides=('rkt')
replaces=('rocket')
conflicts=('rocket')
source=("https://github.com/coreos/rkt/archive/v${pkgver}.tar.gz")
sha256sums=('5e15618424eaff9e943186f17ae535b8e39cb6375f52070baa318c417b1c9bb5')
install="${pkgname}.install"

prepare() {
  cd "${pkgname}-${pkgver}"
  ./autogen.sh
}

build() {
  cd "${pkgname}-${pkgver}"
  ./configure --prefix=/usr \
    --with-stage1=src \
    --with-stage1-image-path=/usr/share/rkt/stage1.aci \
    --enable-functional-tests
  make -s
}

package() {
  cd "${pkgname}-${pkgver}"
  local unit
  for unit in rkt-gc.{timer,service} rkt-metadata.{socket,service}
  do
    install -Dm644 "dist/init/systemd/${unit}" \
      "${pkgdir}/usr/lib/systemd/system/${unit}"
  done

  cd "build-${pkgname}-${pkgver}"
  install -Dm755 bin/rkt "$pkgdir/usr/bin/rkt"
  install -Dm755 bin/actool "$pkgdir/usr/bin/actool"
  install -Dm644 bin/stage1.aci "$pkgdir/usr/share/rkt/stage1.aci"
}

# vim:set ts=2 sw=2 et:
