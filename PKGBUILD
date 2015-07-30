# Maintainer: Matthew Hague <matthewhague@zoho.com>

_npmname=imapnotify
pkgname=nodejs-imapnotify-git
pkgver=0.1.0
pkgrel=1
pkgdesc='Execute scripts on new messages using IDLE imap command'
arch=(any)
url='http://github.com/a-sk/node-imapnotify'
license=('MIT')
depends=('nodejs')
optdepends=()
install=$pkgname.install
conflicts=('nodejs-imapnotify')
source=($pkgname::git://github.com/a-sk/node-imapnotify.git
        imapnotify@.service)
sha256sums=('SKIP'
            'ef5d751f86fcff398ddaf3114c3bc90ce685b85739f76e8c6f1f80cea5c1cb27')

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  PYTHON=/usr/bin/python2 npm install -g --prefix "$pkgdir/usr" $_npmname@$pkgver
  install -Dm644 "${srcdir}/imapnotify@.service" "${pkgdir}/usr/lib/systemd/system/imapnotify@.service"
}
