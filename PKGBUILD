# This PKGBUILD is part of the VDR4Arch project [https://github.com/vdr4arch]

# Maintainer: Christopher Reimer <mail+vdr4arch[at]c-reimer[dot]de>
pkgname=vdr-vnsiserver
pkgver=1.5.2.r5.g615a077
_gitver=615a077be1ef669feae3b6b85291b12278577793
_vdrapi=2.2.0
epoch=2
pkgrel=1
url="https://github.com/FernetMenta/vdr-plugin-vnsiserver"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h')
license=('GPL2')
pkgdesc="VDR plugin to handle XBMC clients"
depends=('gcc-libs' "vdr-api=${_vdrapi}")
makedepends=('git')
_plugname=${pkgname//vdr-/}
source=("git+https://github.com/FernetMenta/vdr-plugin-$_plugname.git#commit=$_gitver"
        "50-$_plugname.conf")
backup=("etc/vdr/conf.avail/50-$_plugname.conf"
        'var/lib/vdr/plugins/vnsiserver/allowed_hosts.conf')
md5sums=('SKIP'
         '833dd896fd81db4a39d2138416b3004d')

pkgver() {
  cd "${srcdir}/vdr-plugin-$_plugname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
  cd "${srcdir}/vdr-plugin-$_plugname"
  make
}

package() {
  cd "${srcdir}/vdr-plugin-$_plugname"
  make DESTDIR="${pkgdir}" install

  mkdir -p "$pkgdir/var/lib/vdr/plugins"
  cp -r vnsiserver "$pkgdir/var/lib/vdr/plugins"

  mkdir -p "$pkgdir/etc/vdr/conf.avail"
  install -Dm644 "$srcdir/50-$_plugname.conf" "$pkgdir/etc/vdr/conf.avail/50-$_plugname.conf"

  chown -R 666:666 "$pkgdir/var/lib/vdr"
}
