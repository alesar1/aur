#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2017.11
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="https://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  https://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2017.11.tar.xz
  https://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2017.11.tar.xz.sig
)
sha512sums=(
  bbbb1b690bf53dbb11fb03bfd5dbb5f5b0381abafb0447654cc714398a740155b1df2de130c2c8c98c220cb7289b638a626b2cad66377c93a244932a4b4564cd
  860ceccb532aa12044c2548fb3fe24ddfec6174607b1edc6011b60fbd48f04dedd1dcb3649a9ce77d6c398d71566222eb55792333b1c7ae8ce0c54bf6fd2c257
)
md5sums=(
  f5ba8319e0d78ef3e3096cfb1571694a
  53bba4a3e9691b204f50724fb860a4c9
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
