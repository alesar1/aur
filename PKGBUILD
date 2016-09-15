# Maintainer: Matthew Hague <matthewhague@zoho.com>

pkgname=nodejs-imapnotify-git
pkgver=0.2.0
pkgrel=2
pkgdesc='Execute scripts on new messages using IDLE imap command'
arch=(any)
url='http://github.com/a-sk/node-imapnotify'
license=('MIT')
depends=('nodejs')
optdepends=()
makedepends=('npm')
install=$pkgname.install
conflicts=('nodejs-imapnotify')
source=($pkgname::git://github.com/a-sk/node-imapnotify.git
        imapnotify@.service)
sha256sums=('SKIP'
            'ef5d751f86fcff398ddaf3114c3bc90ce685b85739f76e8c6f1f80cea5c1cb27')

package() {
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $srcdir/$pkgname
  PYTHON=/usr/bin/python2 npm install -g --prefix "$pkgdir/usr" #$_npmname@$pkgver
  install -Dm644 "${srcdir}/imapnotify@.service" "${pkgdir}/usr/lib/systemd/user/imapnotify@.service"
}
