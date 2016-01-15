#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2016.1
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.1.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.1.tar.xz.sig
)
sha512sums=(
  34847f7c703abf6a8fb095a7558c1c0da35df18905cf6d104d7d3bfda61a2747b5ce4f0b1ca07a4e8118a86d06a231c781d3f643e7ad5d58e2fd312d6b4a9e5d
  747e702f7cc138830a2414cf6138673229ad7c9d3810b8b5c3da81f30419236e584a573d8e5d853bba28e7140033c3378b69c66af3d0284eb0b0a71b973ef63d
)
md5sums=(
  2c4700e2854cb5f257f35b306722b006
  b3a2e780dd30428a36a6db1e54517150
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
