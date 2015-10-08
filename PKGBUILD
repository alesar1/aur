#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2015.10.8
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.10.8.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.10.8.tar.xz.sig
)
sha512sums=(
  5672a7b83b391154e6057cff527ba7dfcd2b552788b2ed09a5c9939076a17da28fd9caaa15cfc0cecd06aef8acc499fe1fa1a6804f2722cdef60f41300f50cce
  9b08cf2c95bcffbb06ef09ef7c53ee69e00be0346eadf8e4c36a4c03812a43d52fb03e7be6e63a304ead90fa63c63296144249826ddbee85d2357f2552e7f4f6
)
md5sums=(
  1dca2cab87f9cf54ed13b1d20d0b138b
  f0b1506495733d08582a14625d5e9a0b
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
