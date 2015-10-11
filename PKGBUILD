#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2015.10.11
pkgrel=1
pkgdesc='AUR-related modules and helper utilities (aurploader, aurquery, aurtomatic).'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/python3-aur"
depends=(pyalpm python3 python-xdg python3-xcpf)
optdepends=('curl: Aurploader support')
replaces=(aurploader)
conflicts=(aurploader)
provides=(aurploader)
source=(
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.10.11.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.10.11.tar.xz.sig
)
sha512sums=(
  f2cafd14d417879100e7ee39909e1e0819db671a92bb2fa738d9b79cc10dccb04024ba7ab0ab5fdf291a90b7074f621c0fae7a9c90c530f71315354c9ee2c55c
  1c14b09d623f9c77e0baa65f6c6fa0f535d8d23df85414288882713534b1608d9a0de5a8c26f006b63dff8b31b11be9e8e93939a521b7af6760d0f45c9839d28
)
md5sums=(
  8c1a7af7b22d348caa756afb6c1111cd
  5f9ca158d0c28c33648c0ea99fc339dc
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  for aurfoo in aur*
  do
    if [[ -x "$aurfoo" ]]
    then
      install -Dm755 "$aurfoo" "$pkgdir/usr/bin/$aurfoo"
    fi
  done
}


# vim: set ts=2 sw=2 et:
