#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2016.4.20
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.4.20.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2016.4.20.tar.xz.sig
)
sha512sums=(
  897418d5009de61b9f6b66d01dfde4bab19952c5ba1d5a0c286f9b29419a596a24356f2c94c7381360916be4a736491455c544cf1b3cd847ec6ef919cad6253d
  6de025acae18ae3e0da643e453d87fcca166eb57406d98010b5822a339beab1074e3720c74da18f061474a6f30722f33a9a622d35d586d5af7cca726a0bdb1b8
)
md5sums=(
  925f2d69199f852d536ae1274deb8968
  10a6e411e2f196bf2f0d0a1537b52c9f
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
