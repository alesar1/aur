# Maintainer: Bjoern Franke <bjo@nord-west.org>
pkgname=vorta
pkgver=0.6.10
pkgrel=1
pkgdesc="A GUI for BorgBackup"
arch=('any')
url="https://github.com/borgbase/vorta"
license=('GPL')
depends=('borg' 'python-appdirs' 'python-apscheduler' 'python-pyqt5' 'python-peewee' 'python-paramiko' 'python-dateutil' 'python-keyring' 'python-psutil' 'python-llfuse' 'python-qdarkstyle')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("$pkgname-$pkgver.tar.gz::https://github.com/borgbase/$pkgname/archive/v$pkgver.zip"
        "vorta32.png"
        "vorta.desktop")
sha256sums=('c622bbf88041dcab2540b52e6793508f0c470d098f7aae80e3b1a0f9e73b4693'
            'ff944c741a291f4d38cac97906376e4afa851f54f46d6de00f6fd92c4ad273f9'
            '6bd09fed495b0173c2fc0bdb42dde417c3ed3f2d4025927afa3826cf1205372d')
package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="$pkgdir/" --optimize=1
  install -Dm644 "${srcdir}/${pkgname}32.png" "$pkgdir/usr/share/pixmaps/${pkgname}32.png"
  install -Dm644 "${srcdir}/${pkgname}.desktop" "$pkgdir/usr/share/applications/${pkgname}.desktop"

}

# vim:set ts=2 sw=2 et:
