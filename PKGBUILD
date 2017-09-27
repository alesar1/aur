# Maintainer: Jon Gjengset <jon@tsp.io>

pkgname=hasmail
pkgver=20150928
pkgrel=4
pkgdesc="System tray application that checks for and notifies about new mail"
arch=('x86_64' 'i686')
url="http://github.com/Jonhoo/hasmail"
license=('BSD')
depends=('gtk2' 'libnotify')
optdepends=('notification-daemon: for new mail notifications')
makedepends=('go>=1.5' 'git' 'mercurial')
options=('!strip' '!emptydirs')
_gourl=github.com/jonhoo/hasmail

build() {
  GOPATH="$srcdir" go get -fix -u -v -x ${_gourl}
}

check() {
  GOPATH="$srcdir" go test -v -x ${_gourl}
}

package() {
  mkdir -p "$pkgdir/usr/bin"
  install -p -m755 "$srcdir/bin/"* "$pkgdir/usr/bin"

  mkdir -p "${pkgdir}/etc/skel"
  install -p -m755 ${srcdir}/src/${_gourl}/hasmailrc "$pkgdir/etc/skel/.hasmailrc"
}

# vim:set ts=2 sw=2 et:
