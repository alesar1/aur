#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-xcpf
pkgver=2015.12.19.2
pkgrel=1
pkgdesc='Xyne'"'"'s common Pacman functions, for internal use.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/python3-xcpf"
depends=(pyalpm python3 python3-memoizedb python3-xcgf)
optdepends=('rsync: Retrieve ABS files via rsync.')
source=(
  http://xyne.archlinux.ca/projects/python3-xcpf/src/python3-xcpf-2015.12.19.2.tar.xz
  http://xyne.archlinux.ca/projects/python3-xcpf/src/python3-xcpf-2015.12.19.2.tar.xz.sig
)
sha512sums=(
  83d7226fa72b9cbebb52efc6b9a75db800ad8b0c9db70840af728737b6b3da3f29fdf1e1cb94bd3c0c534a008d1c5301d292f8b44a8172b2b1b8603bef397bf0
  fb9a8080aa9f22f5f8bd9286f048a45a4871b1b772dc5277daf31aab48a503c09f4d342561ee252199e7a6ad78332fff0e27b14f0ebd302787a021916d9b1ace
)
md5sums=(
  98cb09969b9a7f704ec56168708a4b04
  ab13b5c53e3c0d8a91724a09dc0c3fb8
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
}

# vim: set ts=2 sw=2 et:
