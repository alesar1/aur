#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2015.12.7
pkgrel=1
pkgdesc='AUR-related modules and helper utilities (aurploader, aurquery, aurtomatic).'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/python3-aur"
depends=(pyalpm python-xdg python3 python3-xcgf python3-xcpf)
optdepends=('curl: Aurploader support')
replaces=(aurploader)
conflicts=(aurploader)
provides=(aurploader)
source=(
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.12.7.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.12.7.tar.xz.sig
)
sha512sums=(
  c2cd79c9f917e110d34e3cc037f1698baf57238f73cd0d41f80ceb149904710048ba28be6618c34e707912463014785b48b6fec9d53f8dcfed255586d09ff8b6
  979dc94feb9978bd71c06eb4c1af7e793e68b255903d284d6443bf1a593c422c35ec24071da9f32d9deb3c1fe4e145ddd22e6cff4c2c02b698b33ef88753bd22
)
md5sums=(
  94496c9f8ec809558e006175033c09a8
  0b2e563d6e50636c41fd6692830e5d50
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  for aurfoo in aur*
  do
    if [[ -x $aurfoo ]]
    then
      install -Dm755 "$aurfoo" "$pkgdir/usr/bin/$aurfoo"
    fi
  done
}


# vim: set ts=2 sw=2 et:
