#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2016.3
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.3.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.3.tar.xz.sig
)
sha512sums=(
  a94528704517e761506a8aa646a0e5007412fbcb8975215d06bd3403b0808e8983ef6d678d286591214e5068031811f06c4785f34a17ab466f2b7205738c35a3
  fd9dd462e79ca730d92655f985bae77264af6d942ddb1976d8ab6299582e1d00fa2a4d7bb8c86b9d7f1585825e352d4b90b04d769ee26e1070ce0736c7fad946
)
md5sums=(
  5ab9f29fea4d8f87d35e566800dac29a
  5108a0b541d87480899fb64dace27c92
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
