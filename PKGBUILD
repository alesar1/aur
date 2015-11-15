#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2015.11.15
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.11.15.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.11.15.tar.xz.sig
)
sha512sums=(
  8870de244e2fede42416c159303e9e00e8600f6cc2f15caf0978efdb4b99ddaf4a70841c8a23c82bf7f19f361b8440cb26ee1aa9db763aca4cd585f05ce6fde5
  be03dac77facf162987e02ee437c81f672eb701e4fb25fe3aee3236a915ba73aa59fe2a13ce03536043e1b0071773656ed08a5624d90fc7e754653548d1104fb
)
md5sums=(
  1f53ac256526fd7b7a0146fc7c64e472
  77b9fcc15714ce0fc758b7aeb9140e5d
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
