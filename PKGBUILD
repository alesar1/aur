#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2016.12
pkgrel=1
pkgdesc='AUR-related modules and helper utilities (aurploader, aurquery, aurtomatic).'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/python3-aur"
depends=(pyalpm python-xdg python3 python3-xcgf python3-xcpf)
optdepends=('curl: Aurploader support' 'git: Clone AUR Git repositories.')
replaces=(aurploader)
conflicts=(aurploader)
provides=(aurploader)
source=(
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.12.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.12.tar.xz.sig
)
sha512sums=(
  fe805dd4a6597e5f1f9550bfe50bc9b5e61ec04ae4cb3150240dba9b2c3c7b77adba65c5913ba32d995cda12930a98955c09f5f263b07787ade0dda737087470
  06284743dff5d1833a5d42076d04073ac594c9d0dd5dfe0aa58fee8f2900bec14b4591ac76e04a56a27cf233f69de767b535019abd3321f889570e298e5e6d5f
)
md5sums=(
  11dae2e8d63819708ef64a8ac80ed785
  8c3ff1a036cd2f24d33c833833836d3b
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
