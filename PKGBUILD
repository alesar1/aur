#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2015.12.14
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.12.14.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.12.14.tar.xz.sig
)
sha512sums=(
  b45a0f374270baa3c629d549c0edfabe6e6de94a6243759ba5038f9d14d558dfb689151ca827406554cdae7ed2de3d1ae72f25891c3361c5f63a2e7d1429b6fc
  2452caf957085fe9dd2d10f40536d8452d58a49de26415a6cad56d935d2e6e47f7854c86706ae4f6787885170aa69844d05df198bb16d2261774f1cba04550bb
)
md5sums=(
  0d95e8ebe94cecab1a89176003003ed4
  cf89f8fdbac3f23f04b90c54ed430c06
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
