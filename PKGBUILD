#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=python3-aur
pkgver=2015.12.4.1
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
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.12.4.1.tar.xz
  http://xyne.archlinux.ca/projects/python3-aur/src/python3-aur-2015.12.4.1.tar.xz.sig
)
sha512sums=(
  042b71dbb5416cd8f2f1e9f061110742d7d66f4f9948a35dd07e0bc77dec432a18db3eea6adeb4f411fae7bfdabbae76ca62f251467bc54ca9fc380ed33c3108
  7505bd12637bcf0674310bd084fb89136013c046d23046bab6df25756fc04331c75b88ed2dd808780d58e8cb8cbe3837da18e1a5408fa5c8ff2967ea23d0db03
)
md5sums=(
  e9317a7a0bda76ee8b9535c871fcb30a
  92ceb83b289161ec98c27fd693f04ff8
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
