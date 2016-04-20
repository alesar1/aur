#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2016.4.6
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.4.6.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.4.6.tar.xz.sig
)
sha512sums=(
  f902c6fdb87fb0b0649aa276df3d78360d3ebea02b46794146a92dd54acc9e308d4d16d4c1d5d872e8ca08e1aaae9146da4d6257e6dd3cc35836a3d66397e1f7
  3d967ee96c781c5a480de050d8f27f63914ff05dd900958ddeb6066075561b00e1d557c856695c098ca728b4819c374a635aa24839ae769436930ad85592cf52
)
md5sums=(
  f24cba9557a0b5636b6291675434b816
  a2b7628e67ab7dba41545b421da52098
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
