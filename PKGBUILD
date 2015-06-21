#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2014.12.31
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(python3 pyalpm)
optdepends=('reflector: Reflector support' 'python3-aur: AUR support' 'aria2: ppl script support.')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2014.12.31.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2014.12.31.tar.xz.sig
)
sha512sums=(
  9d616fff56f2bd49cab6ed446d64cc9d80b486c1735a61a14e475c514fd3097e70689ab4588b3825b1a31164ede76d734914b5bfd13bf1c84646355f927e877d
  d4e9194557054cbefcd37c63cbbec778d4d3235a1254edfb182445e872282f49d5286988d5b3c2f9d5697c1a98f22fab405c398cf50873f6377ca56ac49120cb
)
md5sums=(
  fcf033c160dce8d5454c2c057e42efb5
  e8ba62fdf580ba59e91f930c174655e4
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 "$pkgname" "$pkgdir/usr/bin/$pkgname"
  for foo_ in ppl pplsyu ppls; do
    install -Dm755 "$foo_" "$pkgdir/usr/bin/$foo_"
  done
  install -Dm644 "ppl.conf" "$pkgdir/etc/ppl.conf"
}

# vim: set ts=2 sw=2 et:
