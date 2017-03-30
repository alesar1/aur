#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2017
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2017.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2017.tar.xz.sig
)
sha512sums=(
  140d015a3e057b63ea987df76e8c85064ee0d5c73c1c345d7ad778e4ee1a5c3a86c20a676c45313463ee7e1c7de6b67cae874d8a60917b73d22bb1d24ed014fd
  548549950901a76fc22adf24d8d5a5ea8d18e5b083b5afea4a647d2c982f44a4e3ae5d8f45325d0585a74de83a9b0cb902297e90762589d058546f9e72645bb8
)
md5sums=(
  63fc2dd76d0e5824d79d01ec90cf2730
  d4e5ed334d439d14a7db4673f3329e63
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
