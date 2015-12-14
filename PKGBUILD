#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2015.12.14
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2015.12.14.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2015.12.14.tar.xz.sig
)
sha512sums=(
  33a0217b7d32e6451f905f6507ce9f1009edccd17a04538bad7e5508a43d116a963c8c1079a792365349cef402518434f4e0a9a9d777961c938b92ca0a902465
  a3ea54f92e6c38d69b651d6b1f9833654b226dd7769d8961741f6573f76c87bedbd9237607b9290e907b098c228eb2be9ed062729e0468fd138125c203197f0d
)
md5sums=(
  dfaa52b8f9881447b3d0f2babccad6c1
  a15c04aaa301f0194493e08b2cf14637
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
