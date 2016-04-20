#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2016.4.5.4
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.4.5.4.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.4.5.4.tar.xz.sig
)
sha512sums=(
  1b90b613071fb84e193ee422eaa137a2e6bbe507f533caa69a6e1c051b8fa3fd55505ec57f10a874834028618b950f0fe8aa629ca0136f4f1831e754cace6cb6
  008ed2f18ac3acc5566b005ce1ef7eb8f5fa6a26dda85e7236eb84005c3c428397e961de316f5b6cfb628505be77de0a27380edf5c50af676883038f5125dcc9
)
md5sums=(
  cabefe48a46eb1e7a688d1d09bd24f97
  9caaf32e533b09df66db4f05bee7bdb8
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
