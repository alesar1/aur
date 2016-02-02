#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2016.2.2
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.2.2.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.2.2.tar.xz.sig
)
sha512sums=(
  8d74d4b09d48e9d119ddc9a0e11d6a05a29ee9935276e0a3a6e2729a1e20ed4dcde0c0dd9bd39ba4024989001b76e41d88649df49cd3f0c465d94eabb0c017ef
  29ea8d685f2adb65fadb0f856facfc083ad1fa4aec252baa8340f275188f0140a55bfc5011810f6e8a963c4bf755b5c85e83b935462fd0e7805232bc3148772b
)
md5sums=(
  83867b2dca9f282cf25027df7ea36c44
  1f59962952af84526f40722236967950
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
