#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2016.5
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.5.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.5.tar.xz.sig
)
sha512sums=(
  ba0044d994a87c7c233990f5076f894b195ab870feaa42efb0225870ea3c888a264c31662bcd47b38ccc42aa4c217757595981bd7dcd675c843317af6c3378ff
  8de9bfc1f7c42098f9305c196bac77db95849e7202808d9d2ec4b64811a74e3eabad13117590f1a2313046746f889e30a1f09bcbaa85cfc587871f32f93dd67e
)
md5sums=(
  a2f5394d97d025b018643f494b8ca1b2
  864f9a197a58fc0b3ef03e789401a260
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
