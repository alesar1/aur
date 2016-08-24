#Maintainer: Xyne <ac xunilhcra enyx, backwards>
pkgname=pm2ml
pkgver=2016.8
pkgrel=1
pkgdesc='Generate metalinks for downloading Pacman packages and databases.'
arch=(any)
license=(GPL)
url="http://xyne.archlinux.ca/projects/pm2ml"
depends=(pyalpm python3 python3-xcgf python3-xcpf)
optdepends=('aria2: ppl script support.' 'python3-aur: AUR support' 'reflector: Reflector support')
backup=(etc/ppl.conf)
source=(
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.8.tar.xz
  http://xyne.archlinux.ca/projects/pm2ml/src/pm2ml-2016.8.tar.xz.sig
)
sha512sums=(
  aebde481ab3b05b9cdc6746051f7075b56339e926104727f2b7ae94732fb845f0457749f48fd256ad6d8862ad8443d7d55d5d70e48f31c862f91e0d17fae603e
  29414cf3e9068342f12acb9e6ea9ef8cf87fea3d831c6fa44fce2a68cc3196cf29e74d698920b8d62a8874f8ad49e748ffa3fe6429a5ce1688a2ce73da2f3e8d
)
md5sums=(
  a8f118a749fcba8edbb79fba3cae6dd7
  7c903ccf28e49d4c9e9b5301f0c0581e
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
