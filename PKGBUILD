#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2017
pkgrel=3
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2017.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2017.tar.xz.sig
)
sha512sums=(
  57817de73d75a624738732c4590c42778bacfd260780a85a554268fc6568bf0f48251af72e8562210e1b4ff1cc615aea0144f3b8f091fd14f79dc646c143e618
  4de230118f8b7d89f0eee22f3ddbf25c9d218facca356207356367258cc879515d1bc6d54040dd091b354d891a7858c1b0f1e635c3dd6c74f7d5b915580473fc
)
md5sums=(
  226e1b4a6d6afdfcf572ddf6a76535bd
  d16082f5fcc10d864b07c9c8876d65d6
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
