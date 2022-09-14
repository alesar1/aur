# Maintainer: Fabian Bornschein <fabiscafe-cat-mailbox-dog-com>
# Contributor: Static_Rocket

pkgbase=asusctl
pkgname=(asusctl rog-control-center)
pkgver=4.4.0
pkgrel=1
pkgdesc="A control daemon, tools, and a collection of crates for interacting with ASUS ROG laptops"
arch=('x86_64')
url="https://gitlab.com/asus-linux/asusctl"
license=('MPL2')
makedepends=('cmake' 'git' 'rust'
             'hicolor-icon-theme' 'libusb' 'fontconfig' 'systemd' 'power-profiles-daemon')
conflicts=('asusctl-git')
_commit=d76cb3b95aac844ed97117b05aaa4abc8ab2696c # tags/4.4.0^0
source=("git+${url}.git#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgbase}"
  git describe --tags | sed -r 's/\.([a-z])/\1/;s/[^-]*-g/r&/;s/-/+/g'
}

build() {
  cd "${pkgbase}"
  make build
}

_pick() {
  local p="$1" f d; shift
  for f; do
    d="$srcdir/$p/${f#$pkgdir/}"
    mkdir -p "$(dirname "$d")"
    mv "$f" "$d"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
  done
}

package_asusctl() {
  pkgdesc="${pkgdesc/tools/CLI tools}"
  depends=('libusb' 'systemd' 'power-profiles-daemon' 'hicolor-icon-theme')
  optdepends=('acpi_call: fan control'
            'supergfxctl: hybrid GPU control'
            'asusctltray: tray profile switcher'
            'rog-control-center: app to control asusctl')

  cd "${pkgbase}"
  make DESTDIR="${pkgdir}" install

  _pick rogcc "${pkgdir}/usr/bin/rog-control-center" \
     "${pkgdir}/usr/share/applications/rog-control-center.desktop" \
     "${pkgdir}/usr/share/icons/hicolor/512x512/apps/rog-control-center.png" \
     "${pkgdir}/usr/share/rog-gui"
}

package_rog-control-center() {
  depends=('asusctl' 'fontconfig')
  pkgdesc="App to control asusctl"
  mv rogcc/* "$pkgdir"
}
