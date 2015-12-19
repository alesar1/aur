#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2015.12.19
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2015.12.19.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2015.12.19.tar.xz.sig
)
sha512sums=(
  0792644a5ce614547a84d971e8ff740628f6130c739ddf3a683aa999303d2d6d2e5e4d8a68c5f94d03f1c54bc60804bb27248997e89e7fc18f5b2a6e65d03327
  c3c38474bca330cd309f791029fd634e600387e363277962af7e49d9bc2cafc60b5e3df4e5f8ccdd23bc7ac44c4a192fb14d238ecdc1005dedef3a99ee0d42bc
)
md5sums=(
  7f9e0d74277432ed72adb754b880bbd3
  55c7761f9bc0246b65a9697a293ecd3f
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
