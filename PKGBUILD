#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=mimeo
pkgver=2016.11
pkgrel=1
pkgdesc='Open files by MIME-type or file name using regular expressions.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/mimeo"
depends=(file python-xdg python3)
optdepends=('MIME-types: for recognizing more MIME-types')
source=(
  http://xyne.archlinux.ca/projects/mimeo/src/mimeo-2016.11.tar.xz
  http://xyne.archlinux.ca/projects/mimeo/src/mimeo-2016.11.tar.xz.sig
)
sha512sums=(
  e6475c17594e7aaa4dec4815e1c3247f95e475d4920e351490377daf86a6c12c96a89646e4f298641c8dea1f3e687c5b585ea14cb5f8bbebec1b8b49dfbd1714
  3ffa4efd1611aff8fd0944dcfb4de76f0520e0a8749656b856dddca9eaa00c75ec571a5c4a65f0efe71cc0db97b031e18f5eb702c46f59ea43ba8208f5949720
)
md5sums=(
  2f0f18f598f4c638f99fc11a37d7caaa
  fb6941348398e3e3e3011aac1c6c7959
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
}


# vim: set ts=2 sw=2 et:
