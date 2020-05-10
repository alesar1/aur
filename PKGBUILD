# Maintainer: Pavel Dvorak <dvorapa~seznam~cz>

pkgname=python2-pywikibot
pkgbase=python2-pywikibot
pkgver=3.0.20200508
pkgrel=1
pkgdesc="Python library that interfaces with the MediaWiki API"
arch=(any)
url=https://www.mediawiki.org/wiki/Manual:Pywikibot
license=(MIT)
makedepends=(python2 python2-enum34 python2-ipaddr python2-pathlib2 python2-requests python2-setuptools)
source=(https://files.pythonhosted.org/packages/source/p/pywikibot/pywikibot-$pkgver.tar.gz
        LICENSE)
sha256sums=(c61095a8d56c02ebc73f5c23f7e75248f11e0272d88cbe6b5d258b0438cbb0b6
            4a7ee113b7e0a0b6a7fb7a2bd1d10de5be48849f881cb8190481a52fe32c2345)

prepare() {
  cd "$srcdir"
  cp -a pywikibot-$pkgver{,-py2}
}

build() {
  cd "$srcdir/pywikibot-$pkgver-py2"
  python2 setup.py build
}

package() {
  depends=(python2 python2-requests python2-ipaddr python2-pathlib2 python2-enum34)
  optdepends=("python2-mwparserfromhell: improved parser")
  conflicts=(python2-pywikibot-git)

  cd "$srcdir/pywikibot-$pkgver-py2"
  python2 setup.py install --optimize=1 --root="$pkgdir/" --skip-build
  cd "$srcdir"
  install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname" LICENSE
}
