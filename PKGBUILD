# Maintainer: Connor McFarlane <cm at semtex dot net>

pkgname=foobar2000-component-uie-albumlist-bin
pkgver=0.4.1
pkgrel=2
_buildhash='81c3b100e662a761ed8e502ae221866f'
_fooname='foo_uie_albumlist'
pkgdesc='A Columns UI album list panel for foobar2000'
arch=('any')
url="https://www.foobar2000.org/components/view/${_fooname}"
license=('unknown')
depends=('foobar2000>=1.0.0' 'foobar2000-component-ui-columns-bin>=1.0.0')
source=("https://yuo.be/static/${_buildhash}/${_fooname}-${pkgver}.fb2k-component")
md5sums=("${_buildhash}")

package() {
  install -Dm644 -t "$pkgdir/usr/share/foobar2000/user-components" "$srcdir/${_fooname}.dll"
}

