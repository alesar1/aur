# Maintainer: Francisco Soto <ebobby(at)ebobby(dot)org>

_pkgname=system76
_pkgbase=system76-power
pkgname=system76-power
pkgver=75
pkgrel=1
pkgdesc="System76 Power Management"
arch=('any')
url="https://github.com/pop-os/system76-power"
license=('GPL')
install="${pkgname}.install"
depends=(
  'dbus'
  'systemd'
  'system76-dkms'
)
makedepends=('rust')
source=(
  'system76::git+https://github.com/pop-os/system76-power.git#commit=eb86327bd825c632cea35324d463852a4bf9e763'
  'graphics.patch'
  'nvidia-fallback.service'
  )
sha1sums=(
  'SKIP'
  '81feb9123571447e5cd66fc0265798ed14137cee'
  '5a81fb98c76cab0cd6e958d6776fca852c5ee4e2'
)

pkgver() {
  cd ${srcdir}/${_pkgname}
  git rev-list --count HEAD
}

build() {
  cd ${startdir}
  patch -p0 < ${startdir}/graphics.patch

  cd ${srcdir}/${_pkgname}

  # Build and install base package
  cargo build --release
}

package() {
  install -Dm644 ${srcdir}/nvidia-fallback.service ${pkgdir}/usr/lib/systemd/system/nvidia-fallback.service

  # Install daemons
  install -Dm755 ${srcdir}/${_pkgname}/target/release/system76-power ${pkgdir}/usr/bin/system76-power

  # Install systemd unit files
  install -Dm644 ${srcdir}/${_pkgname}/debian/system76-power.service ${pkgdir}/usr/lib/systemd/system/system76-power.service

  # Install scripts and configuration
  install -Dm755 ${srcdir}/${_pkgname}/data/system76-power.conf ${pkgdir}/usr/share/dbus-1/system.d/system76-power.conf
}
